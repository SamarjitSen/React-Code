import React from 'react';
import Card from './components/card.component';

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      {isVisible ? <Card /> : null}
    </>
  );
}

export default App;
