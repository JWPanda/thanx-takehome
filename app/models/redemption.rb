class Redemption < ApplicationRecord
  belongs_to :user
  belongs_to :reward

  validates :user_id, presence: true
  validates :reward_id, presence: true

  def reward
    Reward.where(id: self[:reward_id]).first
  end

  def user
    User.where(id: self[:user_id]).first
  end
end
