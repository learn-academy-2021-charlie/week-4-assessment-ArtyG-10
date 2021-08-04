# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is an instance variable in Ruby? How is it different from other variables?

Your answer:
  Unlike other variables an instance variable is created only to serve a function and is not permanent/or not stored to be used later.
Researched answer:
  An instance variable starts with @ in Ruby and belongs to an object which was created as an "instance" of a Class. Since these variables are localized- each instanced object has it's own version of these variables.

2. What is a block in Ruby?
Your answer:
  A block is a group of code in a function which is self-contained and the syntax requires you to write 'end' so Ruby knows when it stops.
Researched answer:
  Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}.

3. Ruby has an implicit return. What does that mean?
Your answer:
  This means that you do not need to write 'return' in a Ruby function because the language specifies that the last line of the block is implicitly the return.
Researched answer:
  Implicit return means the value of the last line of a method is automatically returned without using the keyword return.

4. What is object-oriented programming? How is it different than functional programming?
Your answer:
Object oriented programming is the language philosophy behind the Ruby language where everything is treated as classes and objects. This simplifies the program and makes it easier for humans to understand.
Researched answer:
OOP is object oriented programming language design which was created to deal with the complexity of large software systems. Code is sectioned off into objects so that the program would be an interaction of many small parts rather than one blob as a whole.

5. What is the difference between a class and an object?
Your answer:
  A class is the blueprint from which you can create instances of objects. An object is then saved to a variable and can be manipulated.
Researched answer:
  In ruby all values are treated as objects and all objects belong to a class.
6. STRETCH: What is `attr_accessor`?

Your answer:
  attr_accessor is used to enable 'setting' and 'getting' elements inside a Ruby class.
Researched answer:

## Looking Ahead: Terms for Next Week

1. PostgreSQL:
     PostgreSQL is an object-relational database management system emphasizing
     extensibility and SQL compliance.
2. Ruby on Rails:
     Ruby on Rails is a server-side web application framework written in Ruby which
     encourages and facilitates the use of web standards such as JSON or XML for data
     transfer and HTML, CSS and JavaScript for user interfacing.
3. CRUD:
     CRUD stands for Create, Read, Update, and Delete. They are the four basic types
     of functionality.
4. ORM:
     Object-relational mapping is used to converting data between incompatible systems
     using object-oriented programming languages and allows developers to write SQL
     queries using Rails.
5. Active Record:
     Active Record is a rails ORM that acts as the interface between a Rails application
     and the database. It lets you interact with data which is stored in a database
     table like you would a Ruby Object.
