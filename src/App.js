import React from 'react';
import { Header } from './pages/Header/Header';
import { Tasks } from './pages/TodoList';
import './style.css';

export default function App() {
  return (
    <main>
      <Header />
      <Tasks />
    </main>
  );
}
