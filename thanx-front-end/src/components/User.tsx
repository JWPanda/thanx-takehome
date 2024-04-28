
import { iUser } from "../types";

import './User.scss';

interface UserProps {
  user: iUser
}


function User({user}: UserProps): JSX.Element {
  return (
    <div className="User">
      <div className='name'>Hello! {user.name}</div>
      <div className='balance'>your current balance: {user.balance}</div>
    </div>
  );
}

export default User;
