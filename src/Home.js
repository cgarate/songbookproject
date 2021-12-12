import React from 'react';
import { Container, Heading } from 'native-base';
import { StyleSheet } from 'react-native';

import NavBar from './NavBar';

const Home = ({ navigation }) => {
  return (
    <Container contentContainerStyle={styles.mainContent}>
      <Heading>Songbook</Heading>
      <NavBar navigation={navigation} />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
