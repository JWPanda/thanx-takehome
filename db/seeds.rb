# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Ensure we start with a clean slate
Redemption.destroy_all
Reward.destroy_all
User.destroy_all

users = User.create!([{
  name: "Adolin Kholin",
  balance: 1000
}])

p "Created #{User.count} users"

rewards = Reward.create!([
  {
    name: "Basic Chouta",
    cost: 100
  },
  {
    name: "Alethi Chouta",
    cost: 200
  },
  {
    name: "Horneater Chouta",
    cost: 300
  },
  {
    name: "Herdazian Chouta",
    cost: 400
  },
  {
    name: "Stormblessed Chouta",
    cost: 500
  },
])

p "Created #{Reward.count} rewards"

Redemption.create!([
  {
    user: users.first,
    reward: Reward.where(slug: 'alethi-chouta').first
  },
  {
    user: users.first,
    reward: Reward.where(slug: 'basic-chouta').first
  },
  {
    user: users.first,
    reward: Reward.where(slug: 'horneater-chouta').first
  }
])

p "Created #{Redemption.count} redemptions"
