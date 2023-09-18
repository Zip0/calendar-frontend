import { useState } from 'react';
import axios from "axios";
import { Button, Modal, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CompleteTask() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  function completeTaskHandler() {
    axios.patch("http://localhost:4000/tasks/" + id).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to complete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => navigate("/")}>
            No
          </Button>
          <Button variant="danger" onClick={completeTaskHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CompleteTask;