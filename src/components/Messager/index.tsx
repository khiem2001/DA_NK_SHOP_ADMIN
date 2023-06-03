import React from 'react';
import UserList from './components/UserList';
import Conversation from './components/Conversation';

const Messager = () => {
  return (
    <div className="flex">
      <UserList />
      <Conversation />
    </div>
  );
};

export default Messager;
