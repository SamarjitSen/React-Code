import React from 'react';

const UsersLists = () => {
  // users data
  const [usersData, setUsersData] = React.useState<any[] | null>(null);
  // function to fetch users data
  const fetchUsersData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseData => setUsersData(responseData));
  };

  React.useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
      {usersData?.map((item: any) => {
        return (
          <p key={item.id}>
            {item.name}, <span>{item.email}</span>
          </p>
        );
      })}
    </div>
  );
};

export default UsersLists;
