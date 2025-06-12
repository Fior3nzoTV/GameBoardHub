export default {
  name: 'mechanic',
  title: 'Meccanica di gioco',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
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
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      description: 'Breve spiegazione della meccanica di gioco',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
