export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title of article',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug of article',
        options: {
            source: 'title'
        }
    },
    {
        name: 'titleImg',
        type: 'image',
        title: 'Title img',
    },
    {
        name: 'smallDesc',
        type: 'text',
        title: 'small description',
    },
    {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
            {
                type: 'block',
            }
        ]
    },
  ]
}
