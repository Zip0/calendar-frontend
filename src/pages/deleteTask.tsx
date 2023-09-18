import { useState } from 'react';
import axios from "axios";
import { Button, Modal, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function DeleteTask() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const { id } = useParams();
  const navigate = useNavigate();

  function deleteTaskHandler() {
    axios.delete("http://localhost:4000/tasks/" + id).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => navigate("/")}>
            No
          </Button>
          <Button variant="danger" onClick={deleteTaskHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteTask;