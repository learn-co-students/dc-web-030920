class User < ActiveRecord::Base
  # attr_reader :username
  has_many :tweets
  has_many :favorite_drinks
  has_many :drinks, through: :favorite_drinks

  def introduce
    puts "Hello! I am #{self.username}"
  end

  def post_tweet(content)
    Tweet.create(content: content, user_id: self.id)
  end

  # def tweets
  #   Tweet.all.select{|tweet_instance|
  #     tweet_instance.user_id == self.id
  #   }
  # end
end
