import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import fetchSongsQuery from '../shared/graphql/fetchSongs';
import deleteSongMutation from '../shared/graphql/deleteSong';

import '../shared/styles/styles.css';

const SongList = props => {
	const [ songs, loadSongs ] = useState([]);

	useEffect(
		() => {
			if (props.data.loading) {
				return loadSongs([]);
			}
			loadSongs(props.data.songs);
		},
		[ props.data ]
	);

	const onDeleteSong = id => {
		props.mutate({ variables: { id } }).then(() => props.data.refetch());
	};

	return (
		<div>
			<ul className='collection'>
				{songs.map(song => {
					return (
						<li key={song.id} className='collection-item'>
							<Link to={`/songs/${song.id}`}>{song.title}</Link>
							<i className='material-icons right' onClick={() => onDeleteSong(song.id)}>
								delete_forever
							</i>
						</li>
					);
				})}
			</ul>
			<Link to='/songs/new' className='btn-floating btn-large red right'>
				<i className='material-icons' style={{ fontSize: 40 }}>
					add
				</i>
			</Link>
		</div>
	);
};

export default graphql(deleteSongMutation)(graphql(fetchSongsQuery)(SongList));
