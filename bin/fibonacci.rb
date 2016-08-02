fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# def times_two(number)
#   number * 2
# end

# twice_fibs = fibs.map { |fib| times_two(fib) }
# twice_fibs = fibs.map { |fib| fib * 2}

# fibs.map do |fib|
#   fib * 2
# end

#####
# Code Along: reduce
#####
# sum
sum_fibs = fibs.reduce(0) { |accumulator, element| accumulator + element }

# other syntax
sum_fibs_other = fibs.reduce(:+)


#####
# Lab: Fibonacci Calculations
#####
# product
prod_fibs =
  fibs.slice(1,fibs.length).reduce(1) { |accumulator, element| accumulator * element }

# other syntax
prod_fibs_other =
  fibs.slice(1,fibs.length).reduce(:*)


# sum odd
sum_odd =
  fibs.select { |num| num.odd? }.reduce(0) { |accumulator, element| accumulator + element }

# other syntax
sum_odd_other =
  fibs.select { |num| num.odd? }.reduce(:+)


# prod even
prod_even =
  fibs.select { |num| num.even? && num > 0 }.reduce(1) { |accumulator, element| accumulator * element }

# other syntax
prod_even_other =
  fibs.select { |num| num.even? && num > 0 }.reduce(:*)
