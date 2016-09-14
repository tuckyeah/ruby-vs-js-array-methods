fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


#sum of all the elements in the fibs array
sum_fibs = fibs.reduce(0, :+)

puts "The sum of the first ten fibonacci numbers is #{sum_fibs}"

#product of all the elements in the fibs array
prod_fibs = fibs.reject(&:zero?).reduce(:*)

puts "The product of the first ten fibonacci numbers is #{prod_fibs}"

# sum of all the odd elements of the fibs array
sum_odd = fibs.select(&:odd?).reduce(:+)

puts "The sum of the odd elements of the first ten fib numbers is #{sum_odd}"

# product of even fibs excluding zero
prod_even = fibs.reject(&:zero?).select(&:even?).reduce(:*)

puts "The sum of the even elements of the first ten fib numbers is #{prod_even}"
