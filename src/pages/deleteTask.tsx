import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
 
    const deleteTaskHandler = () => {
        console.log(id)
    axios.delete("http://localhost:4000/tasks/" + id).then(() => {
      navigate("/");
    });
  };
  
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Confirm delete?</legend>
            <Button
              type="button"
              variant="danger"
              onClick={deleteTaskHandler}
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
export default DeleteTask;