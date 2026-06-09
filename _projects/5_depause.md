---
layout: page
title: DePause
description: A campus mental health app that turns 5-second mood check-ins into a live, anonymous map of how the campus feels. Won 2nd place at TigerHacks 2026.
img: assets/img/depause_logo.png
importance: 1
category: software
selected: true
---

**DePause** ("Feel the campus pause") is a mobile app built for DePauw University that reframes mental health as something collective rather than individual. I built it with Leo Tang over the 14-day **TigerHacks 2026** hackathon, hosted by Women in Computer Science (WiCS) in collaboration with the Tenzer Technology Center, where it won **2nd place overall**.

<a href="https://github.com/nhintruong/DePause-TigerHacks" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">Code</a>

**The problem:** 57% of college students feel lonely, and 40% of those who need help don't get it, most often because they don't think they need it. The gap isn't a lack of resources. It's connection.

<div class="row justify-content-sm-center align-items-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depause_checkin.png" class="img-fluid rounded z-depth-1" zoomable=true alt="DePause mood check-in screen" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depause_home.png" class="img-fluid rounded z-depth-1" zoomable=true alt="DePause home screen" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depause_team.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Team HTNT presenting DePause at TigerHacks" %}
    </div>
</div>
<div class="caption">
    A 5-second mood check-in feeds a personalized home screen with streaks and daily campus activity. Right: Team HTNT presenting DePause at TigerHacks 2026.
</div>

**What DePause does:**

- **5-second check-in:** Tap one of four mood quadrants (Stressed, Good, Calm, Low). No journaling required, and cat memes are optional.
- **Campus mood heatmap:** Anonymous check-ins power a live map of how each of 21 DePauw buildings feels in real time.
- **Evidence-based suggestions:** A rules engine matches mood, context, and time to 2 to 3 personalized suggestions drawn from 80+ recommendations grounded in clinical meta-analyses, plus 100+ live campus events auto-refreshed from CampusLabs.
- **On-device crisis detection:** A 3-tier system reads local journaling patterns entirely on-device and gently surfaces help (988, Crisis Text Line, and DePauw Counseling) when patterns indicate need.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/depause_map.png" class="img-fluid rounded z-depth-1" zoomable=true alt="DePause campus mood map" %}
    </div>
</div>
<div class="caption">
    The campus mood map: anonymous check-ins aggregated to building level across DePauw.
</div>

**Privacy by design:** Check-ins are anonymous by architecture, not just policy. A mood cannot be linked to a person. Building-level data only appears once 10+ students have checked in, and crisis detection never leaves the device without explicit consent.

**Built with:** React Native (Expo), TypeScript, and Supabase (Postgres + Auth + Row-Level Security).
