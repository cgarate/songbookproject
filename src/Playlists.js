import React from 'react';
import {
  Container,
  Content,
  H1,
  List,
  ListItem,
  Header,
  Text,
} from 'native-base';
import { useQuery } from 'apollo-client';
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
      <Header>
        <H1>Playlists</H1>
      </Header>
      <Content>
        <List>
          {data.playlists.map(pl => {
            return (
              <ListItem key={pl.id}>
                <Text>{pl.name}</Text>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default Playlists;
