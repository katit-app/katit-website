import React, { createContext, useState } from 'react';

const defaultState = [];

export const CartContext = createContext(defaultState);

export const CartontextProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const addItem = (item) => {
    let stateCopy = [...state];
    const idx = stateCopy.findIndex(x => x.name == item.name && x.size == item.size && x.color == item.color);
    if (idx >= 0) {
        stateCopy[idx].amount += item.amount || 1;
    } else {
        stateCopy.push({...item, amount : item.amount || 1});
    }
    setState(stateCopy);
  };

  const removeItem = (item) => {
    const stateCopy = state.filter(x => x.name != item.name || x.size != item.size || x.color.title != item.color);
    setState(stateCopy);
  };

  const editAmount = (index, amount) => {
    let stateCopy = [...state];
    stateCopy[index].amount = amount;
    setState(stateCopy);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        setState,
        addItem,
        removeItem,
        editAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
