export default {
   name: 'info',
   title: 'Info',
   type: 'document',
   fields: [
      {
         title: 'Logo (lg)',
         name: 'logo',
         type: 'imageWithAlt',
         validation: (Rule) => Rule.required()
      },
      {
         title: 'Logo (sm)',
         name: 'logoSmall',
         type: 'imageWithAlt',
         validation: (Rule) => Rule.required()
      },
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
         name: 'erecieptLink',
         title: 'E-Receipt Link',
         type: 'url'
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
