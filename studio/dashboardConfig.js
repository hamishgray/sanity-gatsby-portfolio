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
                  buildHookId: '60e57207e4830529b059b48d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xiw1jqkw',
                  apiId: 'cd4210c4-cea0-4a51-a757-58ea01810219'
                },
                {
                  buildHookId: '60e57207242eb529643fc201',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tzmafnze',
                  apiId: 'b1acf810-2ce9-439a-ada8-94ee40649a36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hamishgray/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tzmafnze.netlify.app',
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
