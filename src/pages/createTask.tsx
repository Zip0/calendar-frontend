import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const content = useRef<HTMLInputElement | null>(null);
  const done = useRef<HTMLSelectElement | null>(null);
  const navigate = useNavigate();

  const addTaskHandler = () => {
    var doneString = done.current?.value;
    var doneBoolean = false;

    if (doneString?.toString() == "true") {
      doneBoolean = true;
    }

    var payload = {
      content: content.current?.value,
      done: doneBoolean,
    };

    axios.post("http://localhost:4000/tasks", payload).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create New Task</legend>
            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control autoFocus type="text" ref={content} />
            </Form.Group>
            <Form.Group controlId="formDone">
              <Form.Label>Done</Form.Label>
              <Form.Control as="select" className="rounded-0 shadow" ref={done}>
                <option value="false">Incomplete</option>
                <option value="true">Complete</option>
              </Form.Control>
            </Form.Group>
            <Button
              type="button"
              variant="primary"
              onClick={addTaskHandler}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateTask;