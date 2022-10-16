import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function WithHeaderStyledExample() {
  return (
    <Card style={{ margin: "60px 40px 40px 40px " }}>
      <Card.Header as="h5">Order Confirmation</Card.Header>
      <Card.Body>
        <Card.Title>Thank you for your order.</Card.Title>
        <Card.Text>
          Your order number is #2001539. Order created succefully.We will notify
          your order , and will send you an update when your order is ready to
          be delivered.
        </Card.Text>
        <Link to="/home">
          {" "}
          <Button variant="primary">Go back to home</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;
