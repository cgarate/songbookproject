import React from 'react';
import { Container, List, ListItem, Text, Heading } from 'native-base';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const QRY_PLAYLISTS = gql`
  {
    playlists {
      id
      name
    }
  }
`;

const Playlists = props => {
  const { loading, error, data } = useQuery(QRY_PLAYLISTS);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  return (
    <Container>
      <Heading>Playlists</Heading>
      <List>
        {data.playlists.map(pl => {
          return (
            <ListItem key={pl.id}>
              <Text>{pl.name}</Text>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Playlists;
