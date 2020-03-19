class User
	attr_accessor :username, :id

	def initialize(username, id=nil)
		@username = username
		@id = id
	end

	def self.create(username)
		#create an instance in Ruby world
		user_instance = User.new(username)
		#save this instance to our DB 
		DB.execute("INSERT INTO users (username) VALUES ('#{username}');")
		#figure out the ID and put it in the instance
		nested_array = DB.execute("SELECT LAST_INSERT_ROWID()")
		id = nested_array[0][0]
		user_instance.id = id
		#return this instance
		return user_instance
	end 

	def self.find(id)
		#get a row from the DB 
		row = DB.execute("SELECT * FROM users WHERE id = #{id};")
		data = row[0]
		#return it as a User instance 
		User.db_to_instance(data)
	end 

	def self.db_to_instance(array)
		User.new(array[1], array[0])
	end 

	def self.all 
		#get all the user rows from the DB 
		array_of_rows = DB.execute("SELECT * FROM users;")
		array_of_instances = array_of_rows.map{|row|
			db_to_instance(row)
		}
		#return an array of user_instances 
		return array_of_instances
	end 
end
