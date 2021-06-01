import React, { useState } from 'react'
import Child from './Child'
import { currentOrderContext } from './context'

function App() {

  const [currentOrder, setCurrentOrder] = useState('');


  return (
    <currentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
      <Child></Child>

    </currentOrderContext.Provider>
  )
}

export default App
