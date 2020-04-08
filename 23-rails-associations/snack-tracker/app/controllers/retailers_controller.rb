class RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
  end

  def show
    @retailer = Retailer.find(params[:id])
  end

  def new
    @retailer = Retailer.new
    3.times {@retailer.snacks.build}
    byebug
  end

  def create
    r = Retailer.create(retailer_params)
    redirect_to retailer_path(r)
  end


  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end
end
