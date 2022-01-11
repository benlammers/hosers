export default {
   name: 'timelineItem',
   title: 'Timeline Item',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'date',
         title: 'Date',
         type: 'date',
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
      }
   ]
};
