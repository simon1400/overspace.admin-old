export default {
  name: 'settings',
  title: 'Nastaveni',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Site name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'soc',
      title: 'Socialne site',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        }
      ]
    }
  ]
}
