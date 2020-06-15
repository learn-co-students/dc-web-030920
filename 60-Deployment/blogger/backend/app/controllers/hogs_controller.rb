class HogsController < ApplicationController
  def index
    render json: Hog.all.sort_by{ |hog| -hog.id}
  end

  def create
    render json: Hog.create(hog_params)
  end

  def hog_params
    params.require(:hog).permit(:name)
  end
end
