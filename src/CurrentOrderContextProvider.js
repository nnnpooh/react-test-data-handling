import React, { useState } from 'react';

const currentOrderContext = React.createContext();

function CurrentOrderContextProvider({ children }) {
  const [currentOrder, setCurrentOrder] = useState('');

  return (
    <currentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
      {children}
    </currentOrderContext.Provider>
  );
}

export { CurrentOrderContextProvider, currentOrderContext };
