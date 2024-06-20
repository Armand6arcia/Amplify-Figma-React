/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getXamiCards = /* GraphQL */ `
  query GetXamiCards($id: ID!) {
    getXamiCards(id: $id) {
      id
      Img
      Title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listXamiCards = /* GraphQL */ `
  query ListXamiCards(
    $filter: ModelXamiCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listXamiCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Img
        Title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganizacion = /* GraphQL */ `
  query GetOrganizacion($id: ID!) {
    getOrganizacion(id: $id) {
      id
      Img
      Title
      createdAt
      updatedAt
      __typename
    }
  }
`;