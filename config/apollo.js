import { ApolloClient,  InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink({
//     uri: 'https://pacific-bayou-12464.herokuapp.com/',
//     fetch   
// });

const authLink = setContext((_, { headers }) => {

    // Leer el storage almacenado
    const token = localStorage.getItem('token');
    // console.log(token);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});


const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    uri: 'https://pacific-bayou-12464.herokuapp.com/',
    headers: authLink
});

export default client;