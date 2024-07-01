import Alert from 'react-bootstrap/Alert';

function Welcome(props) {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Choose one of the following {props.category} books!
      </p>
      
    </Alert>
  );
}

export default Welcome;