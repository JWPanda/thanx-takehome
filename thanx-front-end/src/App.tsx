import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';

import './App.scss';

import { Outlet } from 'react-router-dom';

import StoreHeader from './components/StoreHeader';
import { UserProvider } from './context/UserContext';


function App(): React.JSX.Element {
  const nav = useNavigate()

  useEffect(() => {
   nav('/home')
  },[nav])

  return (
    <div className="App">
      <div className="container"> 
        <div className="content"> 
          <StoreHeader/>
          <main>
            <UserProvider>
              <Outlet/>
            </UserProvider>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
