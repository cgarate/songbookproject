import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import {
  Container,
  Content,
  H1,
  List,
  ListItem,
  Header,
  Text,
} from 'native-base';

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
      <Header>
        <H1>Songs</H1>
      </Header>
      <Content>
        <List>
          {data.songs.map(song => {
            return (
              <ListItem key={song.id}>
                <Text>{song.name}</Text>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default Songs;
