import { Card, CardHeader, Container } from 'reactstrap';

import CardBody from './components/CardBody';
import { styles } from './AppStyles';

const App = () => {
  return (
    <Container style={styles.container}>
      <Card>
        <CardHeader style={styles.header}>
          <h1>Ask Question</h1>
        </CardHeader>
        <Container style={styles.body}>
          <CardBody />
        </Container>
      </Card>
    </Container>
  );
}

export default App;
