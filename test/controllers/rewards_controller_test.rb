require "test_helper"

class RewardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reward = rewards(:one)
  end

  test "should get index" do
    get rewards_url, as: :json
    assert_response :success
  end

  test "should create reward" do
    assert_difference("Reward.count") do
      post rewards_url, params: { reward: { cost: @reward.cost, name: @reward.name } }, as: :json
    end

    assert_response :created
  end

  test "should show reward" do
    get reward_url(@reward), as: :json
    assert_response :success
  end

  test "should update reward" do
    patch reward_url(@reward), params: { reward: { cost: @reward.cost, name: @reward.name } }, as: :json
    assert_response :success
  end

  test "should destroy reward" do
    assert_difference("Reward.count", -1) do
      delete reward_url(@reward), as: :json
    end

    assert_response :no_content
  end
end
