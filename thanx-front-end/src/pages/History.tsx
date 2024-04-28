import React, { useState, useContext, useEffect } from 'react'

import { useNavigate } from 'react-router';

import { UserContext } from '../context/UserContext';
import { iUserContext } from '../types';

import User from '../components/User';
import Redemption from '../components/Redemption';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import { iRedemption } from '../types';
import { useFetchRedemptions } from '../hooks/useFetchRedemption';

import './History.scss'

function History(): React.JSX.Element{
  const { user } = useContext(UserContext) as iUserContext
  const nav = useNavigate()

  const url = `http://127.0.0.1:3000/api/v1/users/${user && user.id}/redemptions`;
  const { data, loading } = useFetchRedemptions(url);

  const [redemptions, setRedemptions] = useState<iRedemption[]>([])

  useEffect(() => {
    if(!user) nav('/home')
  },[user])

  useEffect(() => {
    if (data) setRedemptions(data)
  },[data])

  if (loading || !redemptions) {
    return(
      <div className="HistoryPage"> 
        loading
      </div>
    )
  }

  return ( 
    <div className="HistoryPage"> 
     {user && <User user={user}/>}

     <div className='history-area'> 
        <p>Rewards Redeemed:</p>
        <ul className='redemption-list'>
          {
            redemptions.map((redemption) => {
              return          (
              <li key={`redemption-${redemption.id}`} id={`redemption-${redemption.id}`}>
                <Redemption redemption={redemption}/>
              </li>)
            })
          }
        </ul>
      </div>

      <Link to='/home'>
        <Button>back</Button>
      </Link>
    </div>
  )
}

export default History;
