class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:show, :edit, :update]
  
  def index
    @snacks = Snack.all 
  end

  def show
  end

  def about
  end

  def new
    @snack = Snack.new
  end

  def create
    snack = Snack.create(snack_params) # strong params
    redirect_to snack_path(snack) # /snacks/7
  end

  def edit
  end

  def update
    @snack.update(snack_params)
    redirect_to @snack
  end

  def destroy 
    Snack.destroy(params[:id])
    redirect_to snacks_path
  end

  private

  def find_snack
    @snack = Snack.find(params[:id])

  end

  def snack_params
    params.require(:snack).permit(:name, :calories, :deliciousness)
  end

end
