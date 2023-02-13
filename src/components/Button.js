import React from 'react';
import '../App.css';

export function Button({ children }) {
  return <button className="btn btn-primary">{children}</button>;
}

export function Select({ children }) {
  return (
    <div className="selection">
      <select>{children}</select>
    </div>
  );
}
