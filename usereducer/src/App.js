// src/App.js
import React from "react";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import { Container, Navbar, Nav, Row, Col, Tab, Tabs } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow-lg custom-navbar" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">🎯 React useReducer Playground</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with Responsive Tabs */}
      <Container fluid>
        <Tabs defaultActiveKey="counter" id="exercise-tabs" className="mb-5 custom-tabs" justify>
          <Tab eventKey="counter" title="🔢 Counter">
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={8} className="text-center content-card">
                <h2 className="text-primary mb-4">🔢 Counter</h2>
                <Counter />
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="changeInfo" title="👤 Change Info">
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={8} className="text-center content-card">
                <h2 className="text-success mb-4">👤 Change Name & Age</h2>
                <ChangeNameAge />
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="itemList" title="📋 Item List">
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={8} className="text-center content-card">
                <h2 className="text-warning mb-4">📋 Item List</h2>
                <ItemList />
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="quiz" title="❓ Quiz Game">
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={8} className="text-center content-card">
                <h2 className="text-danger mb-4">❓ Quiz Game</h2>
                <QuestionBank />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>

      {/* Footer */}
      <footer className="text-center py-4 bg-primary text-white shadow-lg custom-footer">
        <h5>© 2024 React useReducer Playground | Designed with ❤️ by You</h5>
      </footer>
    </div>
  );
}

export default App;

