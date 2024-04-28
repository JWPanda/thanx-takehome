class Api::V1::RedemptionsController < ApplicationController
  before_action :set_redemption, only: %i[ show update destroy ]

  # GET /redemptions
  def index
    @redemptions = Redemption.all

    redemptions = @redemptions.map do |redemption|
      {
        "id": redemption.id,
        "user_id": redemption.user_id,
        "reward": redemption.reward,
        "created_at": redemption.created_at,
        "updated_at": redemption.updated_at
      }
    end

    render json: redemptions
  end

  # GET /redemptions/1
  def show
    redemption = {
      "id": @redemption.id,
      "user_id": @redemption.user_id,
      "reward": @redemption.reward,
      "created_at": @redemption.created_at,
      "updated_at": @redemption.updated_at
    }

    render json: redemption, status: :ok
  end

  # POST /redemptions
  def create
    user = User.where(id: redemption_params[:user_id]).first
    reward = Reward.where(id: redemption_params[:reward_id]).first

    user.minus_points(reward.cost)

    @redemption = Redemption.new(redemption_params)

    if @redemption.save
      render json: user, status: :created
    else
      render json: @redemption.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /redemptions/1
  def update
    if @redemption.update(redemption_params)
      render json: @redemption
    else
      render json: @redemption.errors, status: :unprocessable_entity
    end
  end

  # DELETE /redemptions/1
  def destroy
    @redemption.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_redemption
      @redemption = Redemption.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def redemption_params
      params.require(:redemption).permit(:user_id, :reward_id)
    end
end
