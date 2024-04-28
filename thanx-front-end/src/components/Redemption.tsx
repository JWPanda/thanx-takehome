import "./Redemption.scss"

import { iRedemption } from "../types";
import { format } from 'date-fns'

import './Redemption.scss'
import Reward from "./Reward";

interface RedemptionProps {
  redemption: iRedemption
}

function Redemption({redemption}: RedemptionProps): JSX.Element {
  return (
    <div className='Redemption'>
      <div className='redemption-description'>
        <Reward reward={redemption.reward} claimable={false}/>
      </div>
      <div className="redemption-created">{format(redemption.created_at, "yyyy-MM-dd' 'HH:mm")}</div>
    </div>
  );
}

export default Redemption;
