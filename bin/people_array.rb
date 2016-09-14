require_relative '../lib/people.rb'

people = People.new.people

# p "Total people: #{people.count}" # different! prints the quotes!
puts "Total people: #{people.count}"

female = people.select { |person| person.gender == 'f' }

puts "Total females: #{female.count}"

male = people.select { |person| person.gender == 'm' }

puts "Total males: #{male.count}"

genderqueers = people.select { |person| person.gender == 'o' }

puts "Total genderqueers: #{genderqueers.count}"

older = people.select { |person| person.age > 25 }

puts "People older than 25: #{older.count}"

younger = people.select { |person| person.age <= 25 }

puts "People younger than 25: #{younger.count}"

same_letter = people.select do |person|
  person.given_name[0] == person.surname[0]
end

puts "First name/last name start with same letter: #{same_letter.count}"

average_age = (people.map(&:age).reduce(:+) / people.length).to_i

puts "Average age is #{average_age}"
