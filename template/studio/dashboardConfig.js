export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '<#<deployments.studio.providerInfo.buildHookId>#>',
                  name: 'Sanity Studio',
                  siteId: '<#<deployments.studio.providerInfo.siteId>#>'
                },
                {
                  buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
                  name: 'Blog Website',
                  siteId: '<#<deployments.web.providerInfo.siteId>#>'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/<#<repository.owner>#>/<#<repository.name>#>',
            category: 'Code'
          },
          {title: 'Frontend', value: '<#<deployments.web.url>#>', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
