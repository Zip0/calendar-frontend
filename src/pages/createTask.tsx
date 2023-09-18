import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { SubmitFunction, useNavigate } from "react-router-dom";

function CreateTask(event: any) {
  const content = useRef<HTMLInputElement | null>(null);
  const done = useRef<HTMLSelectElement | null>(null);
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();

    if (content.current?.value.trim() === "") {
      alert("Input is empty");
    } else {
      let doneString = done.current?.value;
      let doneBoolean = false;

      if (doneString?.toString() == "true") {
        doneBoolean = true;
      }

      let payload = {
        content: content.current?.value,
        done: doneBoolean,
      };

      axios.post("http://localhost:4000/tasks", payload).then(() => {
        navigate("/");
      });
    }



  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create New Task</legend>
            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                autoFocus
                type="text"
                ref={content} />
            </Form.Group>
            <Form.Group controlId="formDone">
              <Form.Label>Done</Form.Label>
              <Form.Control as="select" className="rounded-0 shadow" ref={done}>
                <option value="false">Incomplete</option>
                <option value="true">Complete</option>
              </Form.Control>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
            >
              Add
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
export default CreateTask;