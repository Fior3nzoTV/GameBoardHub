export default {
  name: 'mechanic',
  title: 'Meccanica di gioco',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome della meccanica',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Descrizione',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
