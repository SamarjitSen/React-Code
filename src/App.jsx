import React from 'react';

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      {isVisible ? <h1>hidden heading</h1> : null}
    </>
  );
}

export default App;
