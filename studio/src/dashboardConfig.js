export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe8f18702f86e5fc61ccc5c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-to2r1vq2',
                  apiId: '5b9fa231-0827-4c17-9213-b62d5d3bb344'
                },
                {
                  buildHookId: '5fe8f187605fe1df90a29ada',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p3dfzdd3',
                  apiId: '16d18681-705c-4377-acca-e172339c9a49'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aytaa/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p3dfzdd3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
