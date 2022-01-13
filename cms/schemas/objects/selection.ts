export default {
   name: 'selection',
   title: 'Selection',
   type: 'object',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'desciption',
         title: 'Description',
         type: 'text',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'price',
         title: 'Price',
         type: 'number',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'unit',
         title: 'Units (optional)',
         type: 'string'
      }
   ]
};
