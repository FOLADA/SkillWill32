import React, { useState } from 'react';

const GreetingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      setGreeting('');
      return; 
    }
    setGreeting(`Hello, ${name}`);
  };

  const noNameHandle = () => {
    if (name.trim() === '') {
      return <p style={{ color: 'red' }}>Please enter a name</p>;
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {noNameHandle()}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
