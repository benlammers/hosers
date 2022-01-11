export default {
   name: 'imageWithAlt',
   title: 'Image With Alt',
   type: 'object',
   fields: [
      {
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true
         },
         validation: (Rule) => Rule.required()
      },
      {
         name: 'alt',
         title: 'Alt',
         type: 'string',
         validation: (Rule) => Rule.required()
      }
   ]
};
