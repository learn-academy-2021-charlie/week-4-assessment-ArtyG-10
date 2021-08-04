# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#I need to create a function with an array and a letter as a parameter.
#I can use the Ruby built in method .select to iterate through each value in the array and .include? to check if the strings include the specific letter specified in the argument.

def words_with_letter arr, letter
  arr.select { |value| value.include? letter}
end

p words_with_letter beverages_array, letter_o
p words_with_letter beverages_array, letter_t


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#I need to create a function which takes in a string as a parameter and removes all vowels.
#the .delete will work to remove the vowels. I need to add ! to make it a mutator.

def no_vowels str
  str.delete! 'aeiouAEIOU'
end

p no_vowels album1
p no_vowels album2
p no_vowels album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


#I need to create a class which initializes and object with @model, @wheels, and @current_speed but only takes in model as a parameter since the other two start at 2 and 0 repectively.
#I need to make a method in this class which used the #{} syntax to show the current variables.

 class Bike
   def initialize model
     @model = model
     @wheels = 2
     @current_speed = 0
   end
   def get_info
     p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
   end
   def pedal_faster speed
     @current_speed = speed
   end
   def brake strength
     if @current_speed - strength < 0 then @current_speed = 0
     else @current_speed -= strength
     end
   end
 end

my_bike = Bike.new('Trek')
my_bike.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0


#I need to add a pedal_faster method which takes in a number for an argument and sets the current_speed to that.
#I also need to add a brake method which takes in a number for an argument and slows the current_speed by that amount. I should add a contitional that ensures the speed does not go below 0.

my_bike.pedal_faster 10
my_bike.get_info
my_bike.brake 15
my_bike.get_info
