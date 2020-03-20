


class User < ActiveRecord::Base
	def introduction
		puts "Hello, I am #{self.username}!"
	end

	def self.longest_username
		User.all.max_by{|user| user.username.length}
	end

	def self.shortest_username
		User.all.min_by{|user| user.username.length}
	end

	#return all users that have an empty bio
	def self.find_no_bios
		User.all.select{|user|
			user.bio == nil
		}
	end

	##code out your method
	
end
