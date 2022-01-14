export default {
   name: 'location',
   title: 'Locations',
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
         name: 'metaDescription',
         title: 'Meta Description',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'address',
         title: 'Address',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'location',
         title: 'Location',
         type: 'geopoint',
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
         name: 'services',
         title: 'Available Services',
         type: 'array',
         of: [{ type: 'availableService' }],
         validation: (Rule) => Rule.required()
      }
   ]
};
