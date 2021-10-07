import React, { useEffect, useState } from 'react';
import {
  Card, Col, ListGroup, Row, Button, Spinner,
} from 'react-bootstrap';
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';
import MyNavbar from '../components/navbar';

const Index = () => {
  const todoDataFormat = {
    todos: [],
    selectedTodoId: null,
  };

  const [todoState, setTodoState] = useState(todoDataFormat);

  useEffect(async () => {
    const res = await axios.get('http://localhost:8000/api/v1/todos/');
    setTodoState({ todos: res.data, selectedTodoId: null });
  }, []);

  const addTodoButtonHandler = () => {

  };

  const selectTodoIdHandler = (id) => {
    if (id === todoState.selectedTodoId) {
      setTodoState({ todos: todoState.todos, selectedTodoId: null });
    } else {
      setTodoState({ todos: todoState.todos, selectedTodoId: id });
    }
  };

  return (
    <>
      <MyNavbar />
      {/* Add Todo */}
      <Row>
        <Col md={6} sm={12} className="mx-auto my-3">
          <Card>
            <Card.Header as="h3" className="text-center">
              <div className="d-flex justify-content-center">
                <div className="me-2">
                  Todos
                </div>
                <Button variant="success" size="sm">
                  <FaPlusCircle />
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {
                  todoState.todos.length === 0
                    ? (
                      <div className="spinner-wrapper">
                        <div className="spinner-div">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      </div>
                    )
                    : todoState.todos.map((todo) => (
                      <ListGroup.Item key={todo.id} className="todo" onClick={() => selectTodoIdHandler(todo.id)}>
                        <div className="d-flex justify-content-between">
                          <div>
                            {
                              todo.completed
                                ? (
                                  <span className="todo-text todo-text-danger" style={{ textDecoration: 'line-through' }}>{todo.title}</span>
                                )
                                : <span className="todo-text todo-text-success">{todo.title}</span>
                            }

                            {
                              todo.id === todoState.selectedTodoId
                                ? (
                                  <div>
                                    <hr />
                                    <p className="small mt-2">
                                      {' '}
                                      {todo.description}
                                    </p>
                                  </div>
                                ) : null
                            }
                          </div>
                          <div className="d-flex">
                            <Button variant="primary" size="sm" className="mx-1">
                              <FaEdit />
                            </Button>
                            <Button variant="danger" size="sm" className="mx-1">
                              <FaTrashAlt />
                            </Button>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))
              }
              </ListGroup>
            </Card.Body>
            <Card.Footer className="small text-center">Developed by Sandip Sadhukhan.</Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
