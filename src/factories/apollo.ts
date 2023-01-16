import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.SANITY_GQL_ENDPOINT,
    cache: new InMemoryCache(),
});

export default client;
