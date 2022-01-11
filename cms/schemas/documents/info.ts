export default {
   name: 'info',
   title: 'Info',
   type: 'document',
   fields: [
      {
         name: 'address',
         title: 'Address',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'phoneNumber',
         title: 'Phone Number',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'email',
         title: 'Email',
         type: 'string',
         validation: (Rule) => Rule.required()
      },
      {
         name: 'facebookLink',
         title: 'Facebook Link',
         type: 'url'
      },
      {
         name: 'instagramLink',
         title: 'Instagram Link',
         type: 'url'
      }
   ]
};
