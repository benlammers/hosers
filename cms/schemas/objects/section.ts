export default {
   name: 'section',
   title: 'Section',
   type: 'object',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'description',
         title: 'Description',
         type: 'text'
      },
      {
         name: 'isHidden',
         title: 'Is Hidden',
         type: 'boolean'
      }
   ]
};
