import {  useCallback } from 'react'
import "./Reward.scss"

import { iReward } from "../types";

import { Button } from "./Button";

interface RewardProps {
  reward: iReward
  claimable?: boolean
  handleClaim?: (rewardId: number) => void
}
function Reward({reward, claimable, handleClaim}: RewardProps): JSX.Element {

  const handleClaimButtonClick = useCallback((event: React.MouseEvent): void => {
    event.preventDefault()
    handleClaim && handleClaim(reward.id)
  },[handleClaim, reward.id])

  return (
    <div className="Reward">  
      <div className="reward-description">
        <div className="reward-cost">{reward.cost} points -</div>
        <div className="reward-name">{reward.name}</div>
      </div>
      {claimable ?? <Button onClick={handleClaimButtonClick}>claim!</Button>}
    </div>
  );
}

export default Reward;
