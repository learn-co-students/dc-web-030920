class HobbiesController < ApplicationController
  def index
    #call other methods here  
    #want to respond with Hobby.all as JSON
    #have a way to get all hobbies data
    render json: Hobby.all
  end
end
