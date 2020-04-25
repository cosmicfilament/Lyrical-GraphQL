import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import fetchSongDetailQuery from '../shared/graphql/fetchSongDetail';
import LyricCreate from './LyricCreate';

const SongDetail = props => {
	const [ song, loadSong ] = useState({});

	useEffect(
		() => {
			if (props.data.loading) {
				return loadSong({ title: 'Loading...' });
			}
			loadSong(props.data.song);
		},
		[ props.data ]
	);

	return (
		<div>
			<Link to='/'>Back</Link>
			<h3>{song.title}</h3>
			<LyricCreate />
		</div>
	);
};

export default graphql(fetchSongDetailQuery, {
	options: props => {
		return {
			variables: {
				id: props.match.params.id
			}
		};
	}
})(SongDetail);
