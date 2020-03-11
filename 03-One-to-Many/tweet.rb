class Tweet 
  attr_reader :message, :user

  @@all = []
  @@app_name = "Twitter"

  #message is a string, user is an instance of the User class
  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def username
    self.user.username
  end

  def self.all 
    return @@all
  end 

  def self.application
    return @@app_name
  end 
    
end