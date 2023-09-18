import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CompleteTask = () => {
    const { id } = useParams();
    const { content } = useParams();
    const { done } = useParams();
    const navigate = useNavigate();
    // console.log("task: ", JSON.stringify(task))
    console.log("id: ", id)
    console.log("content: ", content)
    console.log("done: ", done)
    // console.log("task: ", JSON.stringify(task))
    // console.log("task: ", JSON.stringify(task))
    const completeTaskHandler = () => {
    // var payload = {
    //     id: task.id?.value,
    //     content: content.current?.value,
    //     done: task,
    //     };



    axios.patch("http://localhost:4000/tasks/" + id + "/" + content + "/" + done).then(() => {
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