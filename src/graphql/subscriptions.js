/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAward = /* GraphQL */ `
  subscription OnCreateAward {
    onCreateAward {
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
export const onUpdateAward = /* GraphQL */ `
  subscription OnUpdateAward {
    onUpdateAward {
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
export const onDeleteAward = /* GraphQL */ `
  subscription OnDeleteAward {
    onDeleteAward {
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
export const onCreateNomination = /* GraphQL */ `
  subscription OnCreateNomination($owner: String) {
    onCreateNomination(owner: $owner) {
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
export const onUpdateNomination = /* GraphQL */ `
  subscription OnUpdateNomination($owner: String) {
    onUpdateNomination(owner: $owner) {
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
export const onDeleteNomination = /* GraphQL */ `
  subscription OnDeleteNomination($owner: String) {
    onDeleteNomination(owner: $owner) {
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
