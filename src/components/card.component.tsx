import React from 'react';

const Card = () => {
  const [count, setCount] = React.useState(0);

  // component lifecycle
  React.useEffect(() => {
    // mounting
    console.log('mounting from useEffect');
    // unmounting
    return () => {
      console.log('unmounting from useEffect');
    };
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>card</p>
      <p>count: {count}</p>
      <button onClick={handleCount}>update count</button>
    </div>
  );
};

export default Card;
