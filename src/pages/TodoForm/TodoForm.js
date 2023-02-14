import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import './index.css';
const TodoForm = () => {
  return (
    <section className="todo-form">
      <h3>Enter your task</h3>
      <Input id="input" label="Todo name" /> <br />
      <Button>Add todo</Button>
    </section>
  );
};

export { TodoForm };
