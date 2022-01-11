export default {
   title: 'Home Page',
   name: 'home',
   type: 'document',
   fields: [
      {
         name: 'image',
         title: 'Banner Image',
         type: 'imageWithAlt',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'locations',
         title: 'Locations',
         type: 'section',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'debitCredit',
         title: 'Debit & Credit',
         type: 'section',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'giftCards',
         title: 'Gift Cards',
         type: 'section',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'services',
         title: 'Services',
         type: 'section',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'timeline',
         title: 'Timeline',
         type: 'section',
         validation: (Rule) => Rule.required()
      }
   ]
};
