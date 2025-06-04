export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo della categoria',
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