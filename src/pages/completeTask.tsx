import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CompleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const completeTaskHandler = () => {

    axios.patch("http://localhost:4000/tasks/" + id).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Complete task?</legend>
            <Button
              type="button"
              variant="danger"
              onClick={completeTaskHandler}
            >
              Yes
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={() => navigate("/")}
            >
              No
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CompleteTask;