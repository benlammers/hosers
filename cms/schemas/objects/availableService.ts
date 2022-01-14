export default {
   name: 'availableService',
   title: 'Available Service',
   type: 'object',
   fields: [
      {
         name: 'service',
         title: 'Service',
         type: 'reference',
         to: [{ type: 'service' }],
         validation: (Rule) => Rule.required()
      },
      {
         name: 'amount',
         title: 'Amount',
         type: 'number',
         validation: (Rule) => Rule.required()
      }
   ],
   preview: {
      select: {
         title: 'service.name',
         subtitle: 'amount'
      }
   }
};
