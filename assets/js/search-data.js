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
          description: "Research and software projects.",
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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-hybrid-transformer-and-holt-winter-s-method-for-time-series-forecasting-was-accepted-at-the-time-series-for-health-workshop-at-iclr-2024",
          title: 'Our paper “Hybrid Transformer and Holt-Winter’s Method for Time Series Forecasting” was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-crossing-linguistic-horizons-finetuning-and-comprehensive-evaluation-of-vietnamese-large-language-models-was-accepted-at-naacl-2024-featured-in-the-new-york-times-and-stanford-hai",
          title: 'Our paper “Crossing Linguistic Horizons: Finetuning and Comprehensive Evaluation of Vietnamese Large Language...',
          description: "",
          section: "News",},{id: "news-selected-as-a-google-summer-of-code-2024-contributor-for-the-r-project-for-statistical-computing-working-on-the-animint2-package",
          title: 'Selected as a Google Summer of Code 2024 contributor for The R Project...',
          description: "",
          section: "News",},{id: "projects-vietnamese-llm-evaluation",
          title: 'Vietnamese LLM Evaluation',
          description: "Finetuning and comprehensive evaluation of Vietnamese large language models at Stanford AI Lab.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_vietnamese_llm/";
            },},{id: "projects-estransformer",
          title: 'ESTransformer',
          description: "Hybrid Transformer and Holt-Winter&#39;s method for time series forecasting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_time_series/";
            },},{id: "projects-animint2-gsoc",
          title: 'animint2 (GSoC)',
          description: "Migrating the animint2 R package from PhantomJS to Chrome for Google Summer of Code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_gsoc_animint2/";
            },},{id: "projects-educational-chatbot",
          title: 'Educational Chatbot',
          description: "NLP-powered conversational system for school information, integrated with Facebook Messenger.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_educational_chatbot/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
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
          window.open("mailto:%6E%68%69%74%72%75%6F%6E%67_%32%30%32%39@%64%65%70%61%75%77.%65%64%75", "_blank");
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
