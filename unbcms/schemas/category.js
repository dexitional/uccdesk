export default {
  name: 'category',
  title: 'Category',
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
      name: 'order',
      title: 'Menu Type',
      type: 'number',
    },
    {
      name: 'section_order',
      title: 'Section Order',
      type: 'number',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'number',
    },
    {
      name: 'subcats',
      title: 'Sub Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'is_section',
      title: 'Show in SubMenu Section ?',
      type: 'number',
      options: {
        list: [{ value: 1, title: 'Yes' }, {value: 0, title: 'No'}],
      }
    },
    {
      name: 'is_topic',
      title: 'Show in Topics Section?',
      type: 'number',
      options: {
        list: [{ value: 1, title: 'Yes' }, {value: 0, title: 'No'}],
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'color',
      title: 'Theme Color',
      type: 'string',
    }
  ],
}
