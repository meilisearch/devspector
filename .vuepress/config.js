const fs = require('fs');
const path = require('path');

const projects = fs.readdirSync(path.join(__dirname, "../specifications/text"))

module.exports = {
  title: 'Welcome to the Meilisearch specifications!',
  theme: 'default-prefers-color-scheme',
  base: "turboctopus",
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
          'masterKey',
        indexUid: 'specs',
        debug: false,
        enableDarkMode: 'auto'
        // "maxSuggestions": 10,
        // placeholder: 'Search as you type...'
      }
    ]
  ]
}
