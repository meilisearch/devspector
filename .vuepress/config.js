const fs = require('fs');
const path = require('path');

const projects = fs.readdirSync(path.join(__dirname, "../specifications/text"))

module.exports = {
  title: 'Welcome to the Meilisearch specifications!',
  theme: 'default-prefers-color-scheme',
  base: "/turboctopus/",
  themeConfig: {
    prefersTheme: 'dark',
    nav: [
      { text: 'Specification', link: 'specifications/text/0000-specification-template.md' },
    ],
    sidebar: projects.map(spec => [`specifications/text/${spec}`, spec.slice(5, -3).replace(/-/g, " ").replace(/^./, spec[5].toUpperCase())]),
  },
  plugins: [
    [
      "meilisearch",
      {
        hostUrl: 'http://localhost:7700',
        apiKey:
          'dqWEB2tce678ba2b88af48c599c51497ece5611024d8b4b6d78b3c6227217036e42771ef',
        indexUid: 'main',
        debug: false,
        enableDarkMode: 'auto'
        // "maxSuggestions": 10,
        // placeholder: 'Search as you type...'
      }
    ]
  ]
}
