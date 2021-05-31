import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

function App2() {
  const [orders, setOrders] = useState([]);
  const [channel, setChannel] = useState(false);
  const [currentOrder, setCurrentOrder] = useState('');

  useEffect(() => {
    setOrders(() => []);
    const multiplier = channel ? 100 : 100000000;
    const unSet = setInterval(() => {
      const data = { id: Math.round(Math.random() * multiplier) };
      setOrders((ordersPrev) => [...ordersPrev, data]);
    }, 1000);
    return () => {
      clearInterval(unSet);
      console.log('Clear');
    };
  }, [channel]);

  const currentOrderId = currentOrder.id ? currentOrder.id : -1;
  useEffect(() => {
    if (orders.length !== 0) {
      const idx = orders.map((el) => el.id).indexOf(currentOrderId);
      const idx2 = idx === -1 ? 0 : idx;
      setCurrentOrder(orders[idx2]);
    } else {
      setCurrentOrder('');
    }
  }, [orders, currentOrderId]);

  const isCurrent = (currentOrder, thisOrder) => {
    return currentOrder.id === thisOrder.id ? 'selected' : 'normal';
  };

  const sortArray = (array) => {
    const arraySorted = [...array];
    return arraySorted.sort((a, b) => a.id - b.id);
  };

  const ordersSorted = useMemo(() => sortArray(orders), [orders]);

  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md  items-center space-x-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => setChannel(() => !channel)}
      >
        Change Tab
      </button>

      <h3 className='m-2'>id: {currentOrder.id ? currentOrder.id : 'None'}</h3>

      <ul>
        {ordersSorted.map((el, idx) => (
          <li
            key={idx}
            className={isCurrent(currentOrder, el)}
            onClick={() => setCurrentOrder(el)}
          >
            {el.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
