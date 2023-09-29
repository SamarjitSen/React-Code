import React from 'react';
import Card from './components/card.component';
import UsersLists from './components/users-list/users-lists.component';

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
      {isVisible ? <Card /> : null}
      <UsersLists />
    </>
  );
}

export default App;
