require "test_helper"

class RedemptionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @redemption = redemptions(:one)
  end

  test "should get index" do
    get redemptions_url, as: :json
    assert_response :success
  end

  test "should create redemption" do
    assert_difference("Redemption.count") do
      post redemptions_url, params: { redemption: { amount: @redemption.amount, user_id: @redemption.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show redemption" do
    get redemption_url(@redemption), as: :json
    assert_response :success
  end

  test "should update redemption" do
    patch redemption_url(@redemption), params: { redemption: { amount: @redemption.amount, user_id: @redemption.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy redemption" do
    assert_difference("Redemption.count", -1) do
      delete redemption_url(@redemption), as: :json
    end

    assert_response :no_content
  end
end
