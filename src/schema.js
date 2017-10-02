import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
// import d from 'debug';
import { lookupAddress, lookupProperty } from './core-logic';
import PropertyDetailsResponse from './property-details';

// const debug = d('pds:schema');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: () => ({
      propertyDetails: ({
        type: new GraphQLObjectType({
          name: 'PropertyLookupResult',
          fields: () => ({
            propertyDetails: {
              type: PropertyDetailsResponse,
              description: 'Response From the CoreLogic PropertyDetailsAPI',
            },
            propertyId: {
              type: GraphQLString,
              description: 'The property id found from the address match query',
            },
          }),
        }),
        args: {
          address: {
            type: GraphQLString,
            description: 'The address to lookup.  [unitNumber] / [streetNumber] [streetName] [streetType]' +
            ' [suburb] [stateCode] [postcode]',
          },
          propertyId: {
            type: GraphQLString,
            description: 'Allows querying for a property id directly.  If supplied, superceds any address supplied',
          },
        },
        resolve: async (src, { address, propertyId }) => {
          if (!(address || propertyId)) throw new Error('Must suply an address or a propertyId to query for');
          const {
            data: {
              matchDetails: {
                propertyId: fetchedPropertyId,
              } = {},
            } = {} } = address ? await lookupAddress(address) : {};
          debug({ fetchedPropertyId });
          const propertyToLookup = fetchedPropertyId || propertyId;
          if (!propertyToLookup) throw new Error('Failed to find a property for that address');
          const { data: propertyDetails } = await lookupProperty(propertyId);
          return { propertyDetails, propertyId: propertyToLookup };
        },
      }),
    }),
  }),
});


// export default new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'query',
//     fields: () => ({
//       propertyDetails: ({
//         type: new GraphQLObjectType({
//           name: 'PropertyLookupResult',
//           fields: () => ({
//             propertyDetails: {
//               type: PropertyDetailsResponse,
//               description: 'Response From the CoreLogic PropertyDetailsAPI',
//             },
//             propertyId: {
//               type: GraphQLString,
//               description: 'The property id found from the address match query',
//             },
//           }),
//         }),
//         args: {
//           address: {
//             type: GraphQLString,
//             description: 'The address to lookup.  [unitNumber] / [streetNumber] [streetName] [streetType]' +
//             ' [suburb] [stateCode] [postcode]',
//           },
//           propertyId: {
//             type: GraphQLString,
//             description: 'Allows querying for a property id directly.  If supplied, superceds any address supplied',
//           },
//         },
//         resolve: async (src, { address, propertyId }) => {
//           if (!(address || propertyId)) throw new Error('Must suply an address or a propertyId to query for');
//           const {
//             data: {
//               matchDetails: {
//                 propertyId: fetchedPropertyId,
//               } = {},
//             } = {} } = address ? await lookupAddress(address) : {};
//           debug({ fetchedPropertyId });
//           const propertyToLookup = fetchedPropertyId || propertyId;
//           if (!propertyToLookup) throw new Error('Failed to find a property for that address');
//           const { data: propertyDetails } = await lookupProperty(propertyId);
//           return { propertyDetails, propertyId: propertyToLookup };
//         },
//       }),
//     }),
//   }),
// });
//
