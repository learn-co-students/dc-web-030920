require_relative '../app/user.rb'
require 'bundler'

Bundler.require

DB = SQLite3::Database.new('db/twitter.db')
