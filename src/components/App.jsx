import Container from './Container';
import Section from './Section';
import Form from './Form';
import Contact from './Contact';
import Filter from './Filter';

const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contact></Contact>
      </Section>
    </Container>
  );
};

export default App;
