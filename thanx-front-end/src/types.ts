export interface iUser {
  id: number
  name: string
  balance: number
  created_at: Date
  updated_at: Date
}

export interface iReward {
  id: number
  name: string 
  slug: string
  cost: number
  created_at: Date
  updated_at: Date
}

export interface iRedemption {
  id: number
  reward: iReward
  amount: number
  created_at: Date
  updated_at: Date
}

export type iUserContext = { 
  user: iUser | null
  addUser: (user: iUser) => void
}