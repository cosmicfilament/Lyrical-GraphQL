import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SongCreate = props => {
	const [ title, setTitle ] = useState('');

	const handleOnChange = event => {
		setTitle(event.target.value);
	};

	const handleFormSubmit = event => {
		event.preventDefault();
		console.log(`submit SongCreate form: ${props}`);
		props.mutate({
			variables: {
				title: title
			}
		});
	};

	return (
		<div>
			<h3>Create a New Song</h3>
			<form onSubmit={handleFormSubmit}>
				<label>Enter the Song Title:</label>
				<input className='input-field' onChange={handleOnChange} value={title} />
			</form>
		</div>
	);
};

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;
export default graphql(mutation)(SongCreate);
