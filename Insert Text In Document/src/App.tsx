import * as React from 'react';
import { Document } from './Document/Document';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Insert Text</h1>
        <p>Read the description to start solving the problem. 💯</p>
        <Document />
      </div>
    </div>
  );
}
