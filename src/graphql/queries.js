/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAward = /* GraphQL */ `
  query GetAward($id: ID!) {
    getAward(id: $id) {
      id
      title
      description
      categories
      nominatedBy
      createdAt
      updatedAt
    }
  }
`;
export const listAwards = /* GraphQL */ `
  query ListAwards(
    $filter: ModelAwardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        categories
        nominatedBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNomination = /* GraphQL */ `
  query GetNomination($id: ID!) {
    getNomination(id: $id) {
      id
      award {
        id
        title
        description
        categories
        nominatedBy
        createdAt
        updatedAt
      }
      categories
      nominee
      nominationFor
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNominations = /* GraphQL */ `
  query ListNominations(
    $filter: ModelNominationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNominations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categories
        nominee
        nominationFor
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
