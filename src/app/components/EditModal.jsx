import { editIncome, editMonth, editSpent } from '../../features/DataSlice';
import { MONTHS } from '../constants';

import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function ModalEdit({ show, title, handleClose, id, name }) {
  const [editTitle, setEditTitle] = useState(title);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (name) {
    case 'spent':
      dispatch(editSpent({ editTitle, id }));
      handleClose();
      return;
    case 'income':
      dispatch(editIncome({ editTitle, id }));
      handleClose();
      return;
    case 'selectedMonth':
      dispatch(editMonth({ editTitle, id }));
      handleClose();
      return;

    default:
      handleClose();
      return;
    }
  };

  useEffect(() => {
    setEditTitle(title);
  }, [title]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit value</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {name === 'selectedMonth' ? (
              <Form.Group className="mb-3 w-50 m-auto">
                <Form.Label className="mb-2">Month</Form.Label>

                <Form.Select
                  aria-label="Month"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                >
                  <option defaultValue={'Month'} disabled>Month</option>

                  {MONTHS.map((month) => (
                    <option key={month.value} value={month.label}>
                      {month.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : (
              <Form.Group
                className="mb-3 w-50 m-auto"
                controlId="formBasicEmail"
              >
                <Form.Control
                  value={editTitle}
                  onChange={(e) => setEditTitle(+e.target.value)}
                  type="number"
                  placeholder="0"
                  min={0}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
