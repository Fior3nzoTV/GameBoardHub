export default {
  name: 'boardGameArticle',
  title: 'Articolo gioco da tavolo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sottotitolo / Slogan',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Introduzione',
      type: 'text',
    },
    {
      name: 'coverImage',
      title: 'Immagine di copertina',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'details',
      title: 'Dettagli del gioco',
      type: 'object',
      fields: [
        {
          name: 'players',
          title: 'Numero di giocatori',
          type: 'string',
        },
        {
          name: 'playTime',
          title: 'Tempo di gioco',
          type: 'string',
        },
        {
          name: 'age',
          title: 'Età consigliata',
          type: 'string',
        },
        {
          name: 'typology',
          title: 'Tipologia del gioco',
          type: 'reference',
          to: [{type: 'typology'}],
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
          name: 'mechanics',
          title: 'Meccaniche di gioco',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'mechanic'}],
            },
          ],
        },
      ],
    },
    {
      name: 'authorAndDate',
      title: 'Autore e data di pubblicazione',
      type: 'object',
      fields: [
        {
          name: 'author',
          title: 'Autore',
          type: 'string',
        },
        {
          name: 'publishedAt',
          title: 'Data di pubblicazione',
          type: 'datetime',
        },
      ],
    },
    {
      name: 'body',
      title: 'Contenuto principale',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}