export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f39e9f5a068ce950128be03',
                  title: 'Sanity Studio',
                  name: 'webportfolio-studio',
                  apiId: '2db784d8-5525-4210-907d-4bb085260a54'
                },
                {
                  buildHookId: '5f39e9f546997922cf1352d0',
                  title: 'Portfolio Website',
                  name: 'webportfolio-web',
                  apiId: 'bc7e8106-c061-49ed-a7f9-787fe8896617'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GilangBudiP/webportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://webportfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
