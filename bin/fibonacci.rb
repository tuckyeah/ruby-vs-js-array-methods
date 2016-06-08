fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
puts "fibs is #{fibs}"

# twice_fibs = fibs.map { |fib| fib * 2 }
# puts "twice_fibs is #{twice_fibs}"

# less_10 = fibs.map { |fib| fib * 2 }.select { |fib| fib < 10 }
# puts "less_10 is #{less_10}"

sum_fibs = fibs.reduce(:+)
puts "sum_fibs is #{sum_fibs}"

# fibs_from_one = fibs[1..-1]
fibs_from_one = fibs.reject { |fib| fib == 0 }
puts "fibs_from_one is #{fibs_from_one}"

product_fibs = fibs_from_one.reduce(:*)
puts "product_fibs is #{product_fibs}"

sum_fibs_odd = fibs.select(&:odd?).reduce(:+)
puts "sum_fibs_odd is #{sum_fibs_odd}"

product_fibs_even = fibs_from_one.select(&:even?).reduce(:*)
puts "product_fibs_even is #{product_fibs_even}"
