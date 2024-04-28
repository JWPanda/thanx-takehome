import { useContext,useCallback } from 'react'

import { UserContext } from '../context/UserContext';
import { iUserContext } from '../types';
import { getUser } from '../apis/user';

import User from '../components/User';
import { Button } from '../components/Button';

import './Home.scss';
import { Link } from 'react-router-dom';

function Home(): JSX.Element {
  const { user, addUser } = useContext(UserContext) as iUserContext

  const handleLogin = useCallback(async ()=>{
    const _user = await getUser();
    addUser(_user);
  }, [])

  if(!user) {
    return (
      <div className="HomePage"> 
       <div className="login-area">
        <Button onClick={handleLogin}>
          login
        </Button>
       </div>
      </div>
    )
  }

  return ( 
    <div className="HomePage"> 
      <User user={user}/>
      <div className='button-area'> 
        <Link to='/redeem'>
          <Button>redeem</Button>
        </Link>
        <Link to='/history'>
          <Button>history</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
