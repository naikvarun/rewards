import {API, graphqlOperation} from "aws-amplify";
import * as mutations from '../graphql/mutations';


export const listNominations = /* GraphQL */ `
  query ListNominations(
    $filter: ModelNominationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNominations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        award {
        id
        title
      }
      categories
      nominatedBy
      id
      nominationFor
      nominee
      createdAt
      owner
      }
      nextToken
    }
  }
`;

export const nominate = async (nomination) => {
    try {
        await API.graphql(graphqlOperation(mutations.createNomination, {input: nomination}));
        console.log(nomination);
    } catch (e) {
        console.log(e);
    }
}

export const getNominations  =  () =>  {
    return API.graphql(graphqlOperation(listNominations));
}
