/* eslint-disable max-len */
import { Arrow } from '../components/Arrow';
import { addData, setError } from '../../features/DataSlice';
import { MONTHS, URL } from '../constants';

import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import '../../App.scss';

const Main = () => {
  const [data, setData] = useState({
    selectedMonth: '',
    remain: 0,
    income: '',
    spent: '',
    EUR: 0,
    USD: 0,
    rateEUR: 0,
    rateUSD: 0,
  });
  const [currencies, setCurrencies] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMonthChange = (e) => {
    setData({
      ...data,
      selectedMonth: e.target.value,
    });
  };

  const handleIncomeChange = (e) => {
    setData({
      ...data,
      income: +e.target.value,
    });
  };

  const handleSpentChange = (e) => {
    setData({
      ...data,
      spent: +e.target.value,
    });
  };

  const calculateTotal = () => {
    setData((prevData) => {
      return {
        ...prevData,
        remain: prevData.income - prevData.spent,
      };
    });
  };

  const getCurrency = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCurrencies(data);
    } catch {
      dispatch(setError('Oops, we have a problem'));
    }
  };

  const GetCurrentCurrency = useCallback(
    (selectedCurrency, rate) => {
      const currencyItem = currencies.find(
        (item) => item.cc === selectedCurrency
      );

      if (currencyItem) {
        setData((prevData) => {
          return {
            ...prevData,
            [selectedCurrency]: +(prevData.remain * currencyItem.rate).toFixed(
              2
            ),
            [rate]: currencyItem.rate,
          };
        });
      }
    },
    [currencies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addData(data));

    navigate('/table');
  };

  useEffect(() => {
    calculateTotal();
    GetCurrentCurrency('EUR', 'rateEUR');
    GetCurrentCurrency('USD', 'rateUSD');
  }, [GetCurrentCurrency, data.income, data.spent]);

  useEffect(() => {
    getCurrency();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="container text-success bg-secondary p-5 rounded-5 fw-bold w-50 d-flex flex-column justify-content-between">
        <Form className="row" onSubmit={handleSubmit}>
          <Form.Group className="col-xl-3 col-md-6 col-sm-12 mb-2">
            <Form.Label className="mb-2">Month</Form.Label>
            <Form.Select
              aria-label="Month"
              value={data.selectedMonth}
              onChange={handleMonthChange}
            >
              <option defaultValue={'Mount'}>Month</option>
              {MONTHS.map((month) => (
                <option key={month.value} value={month.label}>
                  {month.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="row">
            <Form.Group
              className="mb-3 col-md-6 col-sm-12"
              controlId="formBasicEmail"
            >
              <Form.Label>Income</Form.Label>
              <Form.Control
                value={data.income}
                onChange={handleIncomeChange}
                type="number"
                min={0}
                placeholder="0"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 col-md-6 col-sm-12"
              controlId="formBasicEmail"
            >
              <Form.Label>Spent</Form.Label>
              <Form.Control
                value={data.spent}
                onChange={handleSpentChange}
                type="number"
                min={0}
                placeholder="0"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-12 w-50 m-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Remain</Form.Label>
              <Form.Control
                value={data.remain}
                onChange={calculateTotal}
                type="number"
                placeholder="0"
                disabled
              />
            </Form.Group>
          </div>

          <Button
            variant="primary"
            className="w-50 m-auto d-flex justify-content-center align-items-center gap-1 button"
            type="submit"
          >
            Create table <Arrow />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Main;
