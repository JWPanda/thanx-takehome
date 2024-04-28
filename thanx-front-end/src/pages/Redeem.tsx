import { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router';

import { UserContext } from '../context/UserContext';
import { iUserContext } from '../types';

import User from '../components/User';
import Reward from "../components/Reward";
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import { iReward } from '../types';
import { useFetchReward } from '../hooks/useFetchRewards';

import './Redeem.scss'

function Redeem(): JSX.Element {
  const url = "http://127.0.0.1:3000/api/v1/rewards";
  const nav = useNavigate()

  const { data, loading } = useFetchReward(url);
  const { user, addUser } = useContext(UserContext) as iUserContext

  const [rewards, setRewards] = useState<iReward[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if(!user) nav('/home')
  },[user, nav])

  useEffect(() => {
    if (data) setRewards(data)
  },[data])

  if(loading || !rewards) {
    return(
      <div className="RedeemPage"> 
        loading
      </div>
    )
  }

  const handleClaim = (rewardId: number):void => {
    if (!user) return

    const url = `http://127.0.0.1:3000/api/v1/users/${user.id}/redemptions`

    const body = {
      redemption: {
        reward_id: rewardId,
        user_id: user.id
      }
    } 
    
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => addUser(response))
      .catch((error) => setError(error.message));
  }

  return ( 
    <div className="RedeemPage"> 
      {user && <User user={user}/>}
      <div className='reward-area'> 
        <ul className='reward-list'>
          {
            rewards.map((reward) => {
              return          (
              <li key={`reward-${reward.id}`} id={`reward-${reward.id}`}>
                <Reward reward={reward} handleClaim={handleClaim}/>
              </li>)
            })
          }
        </ul>
      </div>
      {error ?? <div className='error-text'>{error}</div>}
      <Link to='/home'>
        <Button>back</Button>
      </Link>
    </div>
  )
}

export default Redeem;
