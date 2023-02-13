export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'is_spot',
      title: 'Spotlight ?',
      type: 'number',
      options: {
        list: [{ value: 1, title: 'Yes' }, {value: 0, title: 'No'}],
      }
    },
    {
      name: 'is_pick',
      title: 'UNB Pick ?',
      type: 'number',
      options: {
        list: [{ value: 1, title: 'Yes' }, {value: 0, title: 'No'}],
      }
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      console.log(selection)
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
