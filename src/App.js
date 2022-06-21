import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Budget from "./components/BudgetElement";
import Remaining from "./components/RemainingElement";
import SpentSoFar from "./components/ExpenseTotalElement";
import ExpenseList from "./components/ExpenseListElement";
import ExpenseForm from "./components/AddExpenseFormElement";

import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <AppProvider>
      <Container>
        <h1 className="mt-3">Budget Tracker</h1>

        <Row className="mt-3">
          <Col sm>
            <Budget />
          </Col>
          <Col sm>
            <Remaining />
          </Col>
          <Col sm>
            <SpentSoFar />
          </Col>
        </Row>

        <h1 className="mt-3"> Expenses </h1>

        <Row className="mt-3">
          <Col sm>
            <ExpenseList />
          </Col>
        </Row>

        <h1 className="mt-3"> Add Expense </h1>

        <Row className="mt-3">
          <Col sm>
            <ExpenseForm />
          </Col>
        </Row>
      </Container>
    </AppProvider>
  );
}
export default App;
