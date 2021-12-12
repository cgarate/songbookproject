import React from 'react';
import { Container, Content, H1, Header, Text } from 'native-base';

const About = props => {
  return (
    <Container>
      <Header>
        <H1>About</H1>
      </Header>
      <Text>Author: Charlito</Text>
      <Content />
    </Container>
  );
};

export default About;
