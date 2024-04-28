class Reward < ApplicationRecord
  before_create :slugify

  validates :name, presence: true
  validates :cost, presence: true

  def slugify
    self.slug = name.parameterize
  end
end
