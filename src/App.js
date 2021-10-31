import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

//Redux
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <UserList></UserList>
    </Provider>
  );
}
