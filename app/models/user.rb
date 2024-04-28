class User < ApplicationRecord
  has_many :redemptions

  validates :name, presence: true
  validates :balance, presence: true, comparison: {greater_than_or_equal_to: 0}

  def redemption_total
    redemptions.map(&:amount).sum
  end

  def add_points(points)
    self[:balance] += points
    self.save
  end

  def minus_points(points)
    self[:balance] -= points

    if self[:balance] >= 0
      self.save
    else
      raise StandardError.new("cannot have negative balance")
    end
  end
end
