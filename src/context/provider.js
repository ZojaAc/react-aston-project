import React from 'react';

const DataContext = React.createContext({
  itemID: 0,
  setItemID: () => {}
});

export default DataContext;