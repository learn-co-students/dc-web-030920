class ScientistsController < ApplicationController
  def index
    @scientists = Scientist.all 
    # render :index
  end

  def show
    @scientist = Scientist.find(params[:id])
  end

  def new
    @scientist = Scientist.new
    render :new
  end

  def create
    @scientist = Scientist.new(scientist_params)
    if @scientist.valid?
        @scientist.save
        redirect_to scientist_path(@scientist.id)
    else
        render :new
    end
  end


  def edit
    @scientist = Scientist.find(params[:id])
  end

  def update 
    @scientist = Scientist.find(params[:id])
    @scientist.update(scientist_params)
    if @scientist.valid?
        @scientist.save
        redirect_to scientist_path(@scientist.id)
    else 
        render :edit
    end

  end

  def destroy
    @scientist = Scientist.find(params[:id])
    @scientist.delete
    redirect_to scientists_path
  end

  private

  def scientist_params
    params.require(:scientist).permit(:name, :field_of_study)
  end
end
