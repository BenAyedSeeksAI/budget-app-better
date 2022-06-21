import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AppContext } from '../context/AppContext' ;
import {v4 as uuidv4 } from 'uuid';


function ExpenseForm() {
  
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {id: uuidv4(), name: name, cost: parseInt(cost)};
    dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
    })
    setName('');
    setCost('');
  }

  return (
    <form onSubmit={onSubmit}>
      <Row className="justify-content-between align-items-center">
        <Col sm>
          <label htmlFor="name"> Name </label>
          <input
            required=""
            type={"text"}
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </Col>
        <Col sm>
          <label htmlFor="cost"> Cost </label>
          <input
            required="required"
            type={"text"}
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </Col>
        <Col sm>
          <button type="submit" className="btn btn-primary mt-4">
            Save
          </button>
        </Col>
      </Row>
    </form>
  );
}

export default ExpenseForm;
