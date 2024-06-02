export const schema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  types: [],

  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    }
  ]
}