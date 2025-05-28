import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articolo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: Rule => Rule.required().min(5),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autore',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di pubblicazione',
      type: 'datetime',
    }),
    defineField({
      name: 'intro',
      title: 'Introduzione',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Contenuto',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Immagine di copertina',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Notizia', value: 'notizia' },
          { title: 'Guida', value: 'guida' },
          { title: 'Approfondimento', value: 'approfondimento' },
        ],
      },
    }),
  ],
})
