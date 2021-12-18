import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { Container, Heading, VStack, HStack, Divider, Text } from 'native-base';

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
      <VStack space={3} divider={<Divider />} w="90%">
        {data.songs.map(song => {
          return (
            <HStack justifyContent="space-between" key={song.id}>
              <Text>{song.name}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Container>
  );
};

export default Songs;
