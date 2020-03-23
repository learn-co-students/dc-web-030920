require 'pry'
require 'json'
require 'rest-client'
require 'awesome_print'


# What is the pseudocode of our appication?
#create an application where use can search for books

# welcome the user prompt them with instructions to enter a search term
def welcome_user
  puts "Welcome to our awesome book app! Please enter a search term to begin:"
end

# get the searchterm from the user (ex. "new+york")
def get_search_term
  # query = gets
  # no_end_line = query.strip
  # search_term = no_end_line.gsub(" ", "+")
  # return search_term
  gets.strip.gsub(" ", "+")
end

# make a GET request using our URL
def get_request_to_api(query)
  base_url = "https://www.googleapis.com/books/v1/volumes?q="
  response = RestClient.get(base_url + query)
  return response
end

# create a hash from the response
def hash_from_response(response)
  hash = JSON.parse(response)
  return hash
end

# display the title and author name for each book
def print_hash_as_text(api_hash)
  books_array = api_hash["items"]
  books_array = books_array[0..4]
  count = 1
  books_array.each{|book|
    #print out the book's information
    puts "****************************"
    puts "#{count}. #{book["volumeInfo"]["title"]}"
    binding.pry
    puts "written by: #{book["volumeInfo"]["authors"].join(" & ")}"
    # puts "author1 & author2 & author3"
    count += 1
  }
end

def run
  welcome_user
  search_term = get_search_term
  response = get_request_to_api(search_term)
  data = hash_from_response(response)
  print_hash_as_text(data)
end

run
