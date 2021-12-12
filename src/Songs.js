import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { Container, Heading, List, ListItem, Text } from 'native-base';

const QRY_SONGS = gql`
  {
    songs {
      id
      name
    }
  }
`;

const Songs = props => {
  const { loading, error, data } = useQuery(QRY_SONGS);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }

  return (
    <Container>
      <Heading>Songs</Heading>
      <List>
        {data.songs.map(song => {
          return (
            <ListItem key={song.id}>
              <Text>{song.name}</Text>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Songs;
