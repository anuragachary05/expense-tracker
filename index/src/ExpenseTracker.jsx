import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (title && amount && !isNaN(amount)) {
      const newExpense = {
        id: Date.now(),
        title,
        amount: parseFloat(amount),
        date: new Date().toLocaleDateString(),
      };
      setExpenses([newExpense, ...expenses]);
      setTitle('');
      setAmount('');
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const getTotal = () => {
    return expenses.reduce((total, exp) => total + exp.amount, 0).toFixed(2);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>💰 Expense Tracker</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='Expense title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px' }}
        />
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '120px', padding: '10px', borderRadius: '5px' }}
        />
        <button onClick={addExpense} style={{ padding: '10px 20px', background: '#4a90e2', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map((exp) => (
          <li
            key={exp.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#f9f9f9',
              padding: '10px 15px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <div>
              <strong>{exp.title}</strong> <br />
              <small>{exp.date}</small>
            </div>
            <div>
              ₹{exp.amount.toFixed(2)}
              <button
                onClick={() => deleteExpense(exp.id)}
                style={{ marginLeft: '15px', color: 'red', background: 'none', border: 'none' }}
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3 style={{ textAlign: 'right', color: '#333' }}>Total: ₹{getTotal()}</h3>
    </div>
  );
};

export default ExpenseTracker;
