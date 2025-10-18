import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Parent component that manages the application's state.
function App() {
  // `useState` hook to declare a state variable `count` and a function `setCount` to update it.
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count, which will be passed to the child.
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-sm w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">State Management</h1>
        <p className="text-gray-700 mb-6">
          This example shows a parent component (`App`) managing state and passing it down to a child component (`CounterDisplay`) as a **prop**. The child can't change the state directly but can use a function passed from the parent to request a change.
        </p>
        
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-2">This is the parent component's view:</p>
          <p className="text-6xl font-bold text-gray-900">{count}</p>
        </div>

        {/* This is the child component, receiving state and the updater function as props. */}
        <CounterDisplay count={count} onIncrement={handleIncrement} />
      </div>
    </div>
  );
}

// Child component that receives props from the parent.
function CounterDisplay({ count, onIncrement }) {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <p className="text-gray-500 text-sm mb-2">This is the child component's view:</p>
      <p className="text-4xl font-semibold text-gray-800 mb-4">Current Count: {count}</p>
      <button
        onClick={onIncrement}
        className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-full text-lg shadow-lg transform transition-all duration-200 hover:bg-green-600 hover:scale-105"
      >
        Increment from Child
      </button>
    </div>
  );
}

// Render the App component to the DOM.
const container = document.getElementById('root');
ReactDOM.render(<App />, container);

export default App;
