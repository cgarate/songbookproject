import React from 'react';
import { Container, Text, Heading, VStack, HStack, Divider } from 'native-base';
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
    console.log('🚀 ~ file: Playlists.js ~ line 21 ~ error', error);

    return <Text>Error :(</Text>;
  }
  return (
    <Container>
      <Heading>Playlists</Heading>
      <VStack space={3} divider={<Divider />} w="90%">
        {data.playlists.map(pl => {
          return (
            <HStack justifyContent="space-between" key={pl.id}>
              <Text>{pl.name}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Container>
  );
};

export default Playlists;
