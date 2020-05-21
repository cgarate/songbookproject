import React from 'react';
import {Container, H1, Content} from 'native-base';
import {StyleSheet} from 'react-native';

import NavBar from './NavBar';

const App = ({componentId}) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.mainContent}>
        <H1>Songbook</H1>
      </Content>
      <NavBar navComponentId={componentId} />
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
