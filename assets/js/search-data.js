// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My academic publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Software projects and applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic and professional experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-hybrid-transformer-and-holt-winter-s-method-for-time-series-forecasting-was-accepted-at-the-time-series-for-health-workshop-at-iclr-2024",
          title: 'Our paper “Hybrid Transformer and Holt-Winter’s Method for Time Series Forecasting” was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-crossing-linguistic-horizons-finetuning-and-comprehensive-evaluation-of-vietnamese-large-language-models-was-accepted-at-naacl-2024-featured-in-the-new-york-times-and-stanford-hai",
          title: 'Our paper “Crossing Linguistic Horizons: Finetuning and Comprehensive Evaluation of Vietnamese Large Language...',
          description: "",
          section: "News",},{id: "news-selected-as-a-google-summer-of-code-2024-contributor-for-the-r-project-for-statistical-computing-working-on-the-animint2-package",
          title: 'Selected as a Google Summer of Code 2024 contributor for The R Project...',
          description: "",
          section: "News",},{id: "projects-animint2-gsoc",
          title: 'animint2 (GSoC)',
          description: "Migrating the animint2 R package from PhantomJS to Chrome for Google Summer of Code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_gsoc_animint2/";
            },},{id: "projects-educational-chatbot",
          title: 'Educational Chatbot',
          description: "NLP-powered conversational system for school information, integrated with Facebook Messenger.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_educational_chatbot/";
            },},{id: "projects-depause",
          title: 'DePause',
          description: "A campus mental health app that turns 5-second mood check-ins into a live, anonymous map of how the campus feels — 2nd place at TigerHacks 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_depause/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/nhintruong_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6E%74%72%75%6F%6E%67@%63%73.%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nhintruong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nhintruong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
