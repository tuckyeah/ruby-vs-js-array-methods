require_relative '../lib/people.rb'

people = People.new.people

female = people.select { |person| person.gender == 'f' }.length

puts "female: #{female} total: #{people.count}"
