import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../shared/graphql/addlLyricToSong';

const LyricCreate = props => {
	const [ content, setContent ] = useState('');

	const handleOnChange = event => {
		setContent(event.target.value);
	};

	const handleOnSubmit = event => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<label>Add a Lyric</label>
			<input value={content} onChange={handleOnChange} />
		</form>
	);
};

export default graphql(addLyricToSong)(LyricCreate);
