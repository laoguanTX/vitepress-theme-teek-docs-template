import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Teek Documentation',
  description: 'Documentation for Teek project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '例会周记', link: '/meetings/' },
      { text: '接锅实录', link: '/records/' }
    ],
    sidebar: {
      '/meetings/': [
        {
          text: '例会周记',
          items: [
            { text: 'Week 1', link: '/meetings/meetings/week1' },
            { text: 'Week 2', link: '/meetings/meetings/week2' },
            { text: 'Week 3', link: '/meetings/meetings/week3' }
          ]
        }
      ],
      '/records/': [
        {
          text: '接锅实录',
          items: [
            { text: 'Record 1', link: '/records/records/record1' },
            { text: 'Record 2', link: '/records/records/record2' },
            { text: 'Record 3', link: '/records/records/record3' }
          ]
        }
      ]
    }
  }
})