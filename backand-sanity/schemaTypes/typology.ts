export default {
  name: 'typology',
  title: 'Tipologia del gioco',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome della tipologia',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
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