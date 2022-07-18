import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleAccept = () => {setMyText('Accepted'); setShow(false);}
  const handleDecline = () => {setMyText('Declined'); setShow(false);}
  const handleShow = () => setShow(true);
  const [disable, setDisable] = React.useState(true);
  const [myText, setMyText] = React.useState('');

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setDisable(false);
      }
    }
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <p>{myText}</p>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} scrollable={true} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body ref={listInnerRef} onScroll={onScroll}>
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
          a
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAccept} disabled={disable}>
            Accept
          </Button>
          <Button variant="secondary" onClick={handleDecline} disabled={disable}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
