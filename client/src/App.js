import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Dashboard from './components/Dashboard';
import SongCreate from './components/SongCreate';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
	cache,
	link
});

function App () {
	return (
		<ApolloProvider client={client}>
			<Router>
				<section className='container'>
					<Route exact path='/' component={Dashboard} />
					<Route path='/song/new' component={SongCreate} />
				</section>
			</Router>
		</ApolloProvider>
	);
}

export default App;
