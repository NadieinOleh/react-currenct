/* eslint-disable max-len */
import ModalEdit from '../components/EditModal';
import { removeData } from '../../features/DataSlice';
import Links from '../components/Links';

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import '../../App.scss';
import { Link } from 'react-router-dom';

const TablePage = () => {
  const { data } = useSelector((state) => state.data);
  const { error } = useSelector((state) => state.data);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const [savingUAH, setSavingUAH] = useState(0);
  const [savingUSD, setSavingUSD] = useState(0);
  const [savingEUR, setSavingEUR] = useState(0);

  const handleShow = (title, id, name) => {
    setShow(true);
    setTitle(title);
    setId(id);
    setName(name);
  };

  const handleClose = () => {
    setShow(false);
    setTitle(null);
  };

  const getSavingCurrency = useCallback(
    (selectedCurrency) => {
      const result = data.reduce((acc, cur) => acc + cur[selectedCurrency], 0);

      return parseFloat(+result.toFixed(2));
    },
    [data]
  );

  const remove = (id) => {
    dispatch(removeData(id));
  };

  useEffect(() => {
    setSavingUSD(getSavingCurrency('USD'));
    setSavingEUR(getSavingCurrency('EUR'));
    setSavingUAH(getSavingCurrency('remain'));
  }, [getSavingCurrency]);

  return (
    <div className="container mt-5">
      {data.length && !error ? (
        <>
          <Table striped bordered hover variant="light">
            <thead>
              <tr className="text-center">
                <th className="text-primary ">UAH</th>
                <th className="text-primary">USD</th>
                <th className="text-primary">EUR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center fw-bold">
                <td>{savingUAH}</td>
                <td>{savingUSD}</td>
                <td>{savingEUR}</td>
              </tr>
            </tbody>
          </Table>

          <Table striped bordered hover variant="light">
            <thead>
              <tr className="text-center fw-bold">
                <th className="text-primary">#</th>
                <th className="text-primary">Month</th>
                <th className="text-primary">Income</th>
                <th className="text-primary">Spent</th>
                <th className="text-primary">Remain</th>
                <th className="text-primary">UAH</th>
                <th className="text-primary">USD</th>
                <th className="text-primary">EUR</th>
                <th className="text-primary">Remove</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <>
                  <tr className="text-center fw-bold" key={item.id}>
                    <td>{item.id}</td>

                    <td
                      onClick={() =>
                        handleShow(item.selectedMonth, item.id, 'selectedMonth')
                      }
                    >
                      {item.selectedMonth}
                    </td>

                    <td
                      onClick={() => handleShow(item.income, item.id, 'income')}
                    >
                      {item.income}
                    </td>
                    <td
                      onClick={() => handleShow(item.spent, item.id, 'spent')}
                    >
                      {item.spent}
                    </td>
                    <td>{item.remain}</td>
                    <td>{item.remain}</td>
                    <td>{item.USD}</td>
                    <td>{item.EUR}</td>
                    <td onClick={() => remove(item.id)}>X</td>
                  </tr>

                  <ModalEdit
                    show={show}
                    handleClose={handleClose}
                    title={title}
                    id={id}
                    name={name}
                  />
                </>
              ))}
            </tbody>
          </Table>

          <Links />
        </>
      ) : (
        <div>
          <p className="text-danger text-center fs-1 fw-bolder">{error}</p>
          <Link
            className="text-decoration-none text-success fs-4 d-flex justify-content-center"
            to={'/main'}
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default TablePage;
