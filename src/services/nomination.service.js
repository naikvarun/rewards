import {API, graphqlOperation} from "aws-amplify";
import * as mutations from '../graphql/mutations';

const createListNominationMutation = (isVoter) => {
    return /* GraphQL */ `
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
      id
      nominationFor
      nominee
      createdAt
      nominationBy 
      ${isVoter ? 'votes' : ''} 
      }
      nextToken
    }
  }
`
}
export const listNominations = '';

export const nominate = async (nomination) => {
    try {
        await API.graphql(graphqlOperation(mutations.createNomination, {input: nomination}));
    } catch (e) {
        console.log(e);
    }
}

export const getNominations  =  () =>  {
    return API.graphql(graphqlOperation(createListNominationMutation(true)));
}

export const voteNomination = async  (nominationId, votes) => {
    await API.graphql(graphqlOperation(mutations.updateNomination, {input: {id: nominationId, votes: votes}}));
}
