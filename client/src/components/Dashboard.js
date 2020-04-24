import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongList = props => {
	const [ songs, loadSongs ] = useState([]);

	useEffect(
		() => {
			if (props.data.loading) {
				return loadSongs([]);
			}

			const list = props.data.songs.map(song => {
				return (
					<li key={song.id} className='collection-item'>
						{song.title}
					</li>
				);
			});
			loadSongs(list);
		},
		[ props ]
	);

	return <ul className='collection'>{songs}</ul>;
};

const query = gql`
	{
		songs {
			id
			title
		}
	}
`;

export default graphql(query)(SongList);
