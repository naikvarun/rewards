import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTrophy, faMedal, faCrown} from '@fortawesome/free-solid-svg-icons'

import {API, graphqlOperation} from "aws-amplify";
import * as queries from '../graphql/queries';

library.add(fas, faTrophy, faMedal, faCrown)

const iconMap = {'v-award': faTrophy, 'differentiater': faCrown, 'exellence': faMedal}


export const getAwardIcon = (title) => {
    return iconMap[title.toLowerCase()];
}


export const getAwards = async () => {
    return API.graphql(graphqlOperation(queries.listAwards));
}
