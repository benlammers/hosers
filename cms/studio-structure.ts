import S from '@sanity/desk-tool/structure-builder';

export default () =>
   S.list()
      .title('Content')
      .items([
         S.listItem().title('Home Page').child(S.document().schemaType('home').documentId('home')),
         S.listItem().title('Info').child(S.document().schemaType('info').documentId('info')),

         S.divider(),
         ...S.documentTypeListItems().filter((item) => !['home', 'info'].includes(item.getId()))
      ]);
