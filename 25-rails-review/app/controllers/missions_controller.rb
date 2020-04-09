class MissionsController < ApplicationController
  def new
    @mission = Mission.new
  end

  def create
    @mission = Mission.new(mission_params)
    if @mission.valid?
        @mission.save
        redirect_to scientist_path(@mission.scientist.id)
    else
        render :new
    end
  end

  private

  def mission_params
    params.require(:mission).permit(:name, :scientist_id, :planet_id)
  end
end
