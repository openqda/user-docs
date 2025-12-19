import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenQDA User Docs",
  description: "How to use OpenQDA in your research",
  base: '/user-docs/',
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://avatars.githubusercontent.com/u/153517223?s=320&v=4',
    nav: [
      { text: 'Guide', link: '/about' },
      {
        text: 'Source', items: [
          {text: 'Release notes', link: 'https://github.com/openqda/openqda/releases'},
          {text: 'Roadmap', link: 'https://github.com/openqda/openqda/milestones'},
          {text: 'Contributing', link: 'https://github.com/openqda/openqda/blob/main/CONTRIBUTING.md'},
          {text: 'License', link: 'https://www.gnu.org/licenses/agpl-3.0.en.html'},
        ]
      }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is OpenQDA?', link: '/about' },
          { text: 'What is REFI?', link: '/refi' }
        ]
      },
      {
        text: 'Basics',
        items: [
          { text: 'Create a new Account', link: '/registration' },
          { text: 'The User Interface', link: '/ui' },
          { text: 'Your User Profile', link: '/profile' },
          { text: 'Create your first project', link: '/projects/create' },
        ]
      },
      {
        text: 'Project Management',
        items: [
          { text: 'Overview', link: '/projects/manage' },
          { text: 'Manage Teams', link: '/projects/teams' },
          { text: 'Manage Codebooks', link: '/projects/codebooks' },
          { text: 'History and audit', link: '/projects/history' },
        ]
      },
      {
        text: 'QDA Workflow',
        items: [
          { text: 'Preparation',
            items: [
              { text: 'Overview', link: '/workflow/preparation/overview'},
              { text: 'Adding sources', link: '/workflow/preparation/add_sources'},
              { text: 'Source states', link: '/workflow/preparation/states'},
              { text: 'Managing sources', link: '/workflow/preparation/manage_sources'},
              { text: 'Editing a source', link: '/workflow/preparation/editing'},
            ]
          },
          { text: 'Coding',
            items: [
              { text: 'Overview', link: '/workflow/coding/overview'},
              { text: 'Managing Codes', link: '/workflow/coding/codes'},
              { text: 'Sorting Codes', link: '/workflow/coding/sorting'},
              { text: 'Selections', link: '/workflow/coding/selections'},
            ]
          },
          { text: 'Analysis', link: '/workflow/analysis/overview'},
          { text: 'Publishing', link: '/workflow/publications'},
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Imprint', link: '/imprint' },
          { text: 'Privacy / GDPR', link: '/privacy' },
          { text: 'Research', link: '/research' },
          { text: 'Disclaimer', link: '/disclaimer' },
          { text: 'Code of Conduct', link: '/coc' },
          { text: 'Contact', link: '/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openqda/openqda' }
    ],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
