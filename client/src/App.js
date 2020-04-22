import React from 'react';
import styled from 'styled-components/macro';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

import GlobalStyles from './GlobalStyles';
import { setColor, setFont, centerText } from './styles';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

function App () {
	return (
		<React.Fragment>
			<ApolloProvider client={client}>
				<StyledApp>
					<GlobalStyles />
					<SongList />
				</StyledApp>
			</ApolloProvider>
		</React.Fragment>
	);
}

export default App;

const StyledApp = styled.div`
	${centerText};
	background-color: ${setColor.bkgndMain};
`;

const StyledP = styled.p`${setFont.primary};`;

const StyledH2 = styled.h2`${setFont.primary};`;
