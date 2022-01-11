export default {
   name: 'service',
   title: 'Services',
   type: 'document',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'name',
            maxLength: 96
         },
         validation: (Rule) => Rule.required()
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'icon',
         title: 'Icon',
         type: 'imageWithAlt',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'isHighlighted',
         title: 'Is Highlighted',
         type: 'boolean',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'images',
         title: 'Images',
         type: 'array',
         of: [{ type: 'imageWithAlt' }],
         validation: (Rule) => Rule.required()
      },
      {
         name: 'selections',
         title: 'Selections',
         type: 'array',
         of: [{ type: 'selection' }],
         validation: (Rule) => Rule.required()
      }
   ]
};
