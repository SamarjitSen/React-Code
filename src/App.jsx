import React from 'react';

function App() {
  /* return of useState is a array
    1. state variable
    2. state variable updater function
  */
  const [value, setValue] = React.useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h2>value : {value}</h2>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default App;
