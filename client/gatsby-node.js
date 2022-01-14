async function createServicePages(graphql, actions) {
   const { createPage } = actions;
   const result = await graphql(`
      query ServicePages {
         allSanityService {
            nodes {
               id
               slug {
                  current
               }
            }
         }
      }
   `);

   if (result.errors) {
      throw result.errors;
   }

   const serviceNodes = (result.data.allSanityService || {}).nodes || [];

   serviceNodes.forEach((service) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = service;
      // If there isn't a slug, we want to do nothing
      if (!slug) return;

      const path = `/service/${slug.current}`;

      createPage({
         path,
         component: require.resolve('./src/components/templates/Service.tsx'),
         context: { id }
      });
   });
}

exports.createPages = async ({ graphql, actions }) => {
   await createServicePages(graphql, actions);
};
