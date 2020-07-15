/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAward = /* GraphQL */ `
  mutation CreateAward(
    $input: CreateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    createAward(input: $input, condition: $condition) {
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
export const updateAward = /* GraphQL */ `
  mutation UpdateAward(
    $input: UpdateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    updateAward(input: $input, condition: $condition) {
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
export const deleteAward = /* GraphQL */ `
  mutation DeleteAward(
    $input: DeleteAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    deleteAward(input: $input, condition: $condition) {
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
export const createNomination = /* GraphQL */ `
  mutation CreateNomination(
    $input: CreateNominationInput!
    $condition: ModelNominationConditionInput
  ) {
    createNomination(input: $input, condition: $condition) {
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
      nominatedBy
      nominationFor
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNomination = /* GraphQL */ `
  mutation UpdateNomination(
    $input: UpdateNominationInput!
    $condition: ModelNominationConditionInput
  ) {
    updateNomination(input: $input, condition: $condition) {
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
      nominatedBy
      nominationFor
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNomination = /* GraphQL */ `
  mutation DeleteNomination(
    $input: DeleteNominationInput!
    $condition: ModelNominationConditionInput
  ) {
    deleteNomination(input: $input, condition: $condition) {
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
      nominatedBy
      nominationFor
      createdAt
      updatedAt
      owner
    }
  }
`;
