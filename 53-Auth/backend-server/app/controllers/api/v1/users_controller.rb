class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def profile
    token = request.headers["Authenticate"]
    user = User.find(decode(token)["user_id"])
    render json: user #send back an error
  end
end
