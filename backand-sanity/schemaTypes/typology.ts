export default {
  name: 'typology',
  title: 'Tipologia del gioco',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo della tipologia',
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
      name: 'description',
      title: 'Descrizione (facoltativa)',
      type: 'text',
    },
  ],
}