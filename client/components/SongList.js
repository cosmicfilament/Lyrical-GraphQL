import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongList = props => {
  return (
    <div>
      SongList
    </div>
  )
};

const query = gql`
	{
		songs {
			title
		}
	}
`;

export default graphql(query)(SongList);
