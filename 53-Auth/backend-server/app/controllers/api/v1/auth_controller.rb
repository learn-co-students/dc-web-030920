class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    #user = User.find_by(username: params[:username])
    #render json: user

    user = User.find_by(username: params[:username])
    if(user && user.authenticate(params[:password]))
      render json: user
    else
      #either the username wasn't found
      #or the passwordwas inccorect
      render json: {
        error_message: "Incorrect username or password"
      }
    end
  end

end
