import { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.interceptors.response.use(
  res => res,
  err => {
    throw new Error(err.response.data?.message);
  }
)

const AllTasks = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const navigate = useNavigate();
  let noTasks = false;

  useEffect(() => {
    axios.get("http://localhost:4000/tasks/all").then((response) => {
      if (response.data.length == 0) {
        noTasks = true;
      }
      setTasks(response.data);
    });

  }, []);

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-4">
            <Button variant="primary" type="button" onClick={() => navigate('/create-task')}>
              Add
            </Button>
          </Col>
        </Row>
        {tasks.length > 0 && <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Content</th>
              <th>Done</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr className={task.done ? "strikeout" : ""} key={task._id} >
                <td>{task.id}</td>
                <td>{task.content}</td>
                <td>{task.done ? "Complete" : "Incomplete"}</td>
                <td>
                  <Button
                    disabled={task.done}
                    variant="primary"
                    type="button"
                    onClick={() => {
                      navigate(`/complete-task/${task.id}`);
                    }}
                  >
                    Complete
                  </Button>
                </td><td>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => {
                      navigate(`/delete-task/${task.id}`);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>}
        <p>There are no tasks to display!</p>
      </Container>
    </>
  );
};
export default AllTasks;