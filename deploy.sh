#!/bin/bash
set -e

# Publish the website to Stanford AFS so it is served at:
#   https://ai.stanford.edu/~nntruong/
#
# Run this ON skampere1 AFTER the "Deploy site (Stanford)" GitHub Action has
# finished (it builds the baseurl=/~nntruong copy into the `stanford-pages`
# branch). This script only fetches that pre-built branch and copies it onto
# AFS — it does NOT build the site, so no Ruby/Jekyll is needed on skampere1.
#
# First-time setup on skampere1:
#   git clone git@github.com:nhintruong/nhintruong.github.io.git ~/mywebsite
#   chmod +x ~/mywebsite/deploy.sh
# Then run:  ~/mywebsite/deploy.sh

REPO_DIR="$HOME/mywebsite"              # local clone of nhintruong.github.io
WWW_DIR="$HOME/www"                     # AFS web dir, served at ~nntruong
SITE_DIR="$REPO_DIR/_site_deployed"     # scratch extraction dir
DEPLOY_BRANCH="stanford-pages"

echo "=== Deploying Stanford site ==="

cd "$REPO_DIR"

# Fetch the CI-built site (baseurl=/~nntruong)
echo "Fetching $DEPLOY_BRANCH branch..."
git fetch origin "$DEPLOY_BRANCH"

# Export the built site from the branch into a clean dir
echo "Extracting built site..."
rm -rf "$SITE_DIR"
mkdir -p "$SITE_DIR"
git archive "origin/$DEPLOY_BRANCH" | tar -x -C "$SITE_DIR"

# Sync to the AFS web directory.
# NOTE: --delete makes WWW_DIR an exact mirror of the site; any other files you
# keep in ~/www will be removed. Drop --delete if you store extra files there.
echo "Copying site to $WWW_DIR..."
rsync -av --delete "$SITE_DIR/" "$WWW_DIR/"

# Fix Unix permissions for web access
echo "Fixing permissions..."
find "$WWW_DIR" -type d -exec chmod 755 {} \;
find "$WWW_DIR" -type f -exec chmod 644 {} \;

# Grant the Stanford web server (www) read access via AFS ACLs
echo "Setting AFS ACLs..."
find "$WWW_DIR" -type d -exec fs setacl {} www rl \;

echo "=== Deploy complete ==="
echo "Website: https://ai.stanford.edu/~nntruong/"
