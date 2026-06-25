import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Display Step Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).integer(),
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb/Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'UI Icon Name',
      type: 'string',
      options: {
        list: [
          {title: 'Laptop', value: 'laptop'},
          {title: 'Motherboard/Board', value: 'board'},
          {title: 'CPU', value: 'cpu'},
          {title: 'RAM', value: 'ram'},
          {title: 'Storage', value: 'storage'},
          {title: 'Keyboard', value: 'keyboard'},
          {title: 'Screen', value: 'screen'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
