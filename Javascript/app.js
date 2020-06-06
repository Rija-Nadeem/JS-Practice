                                // ****************chapter 1*****************

// task 1
// alert('Welcome to XYZ website, We are happy to see you here !');

//task 2
// alert('Error! Please enter a valid password.');

//task 3
// alert('Welcome to JS Land... \r\nHappy coding');

//task 4
// alert('Welcome to JS Land...');
// alert('Happy coding');

//task 5
// var myalert=alert("hello i can run JS through my brower's console");
// console.log(myalert);


                            // ****************chapter 2*****************

//task 1
// var username;

//task 2
// var myName= 'Rija Nadeem';

//task 3a
// var message;
//task 3b
// message="hello world";
//task 3c
// alert(message);

//task 4
// var name= prompt('Enter your name: ');
// var age = prompt('Enter your age: ');
// var course= prompt('Enter course');
// var record=[name,age,course];
// for(var i=0; i<record.length; i++){
//     alert(record[i]);
// }

//task 5                      (confusion)
// var msg="PIZZA\r\nPIZZ\r\nPIZ\r\nPI\r\nP";
// alert(msg);

//task 6
// var email="rijanadeem42@gmail.com";
// alert("My email address is "+ email);

//task 7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+book);

// task 8
// document.write("Yah! I can write HTML content through JavaScript");

//task 9
// var content="\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u0B9C\u06E9\u06DE\u06E9\u0B9C\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC";
// alert(content);
// document.write(content);


                            // ****************chapter 3*****************

//task 1
// var age=22;
// alert("I am "+age+" years old");

//task 2                    (not done)
// var n = localStorage.getItem('on_load_counter');
// if (n === null) {
//   n = 0;
// }
// n++;
// localStorage.setItem("on_load_counter", n);
// nums = n.toString().split('').map(Number);
// document.getElementById('CounterVisitor').innerHTML = '';
// for (var i of nums) {
//   document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
// }

//task 3
//var birthYear=1997;
//document.write("My birth year is "+birthYear+"<br>");
//document.write("Data Type of my declared variable is "+ typeof(birthYear));

//task 4
// var name= prompt('Enter your name: ');
// var product = prompt('What you want to buy ');
// var quantity= prompt('Enter quantity');
// document.write(name+" ordered "+quantity+" "+product+"(s) on XYZ Clothing store");


                            // ****************chapter 4*****************

//task 1
// var variable1 = "Hello World!",
//     variable2 = "Testing",
//     variable3 = 23;
 
//task 2
//legal
// var $age, my_name, familyMembers, article1, Job;
//illegal
// var first-name, last name, fav#color, 3arrow, break;


//task 3a
// document.write("<h1>Rules for naming JS variables</h1><br>");
//task 3b
// document.write("<p>Variable names can only contain numbers, $ and _. For example: $my_1stVariable</p>");
//task 3c
// document.write("<p>Variable must begin with a letter, $ or _. For example: $name, _name or name</p>");
//task 3d
// document.write("<p>Variable names are case sensitive</p>");
//task 3e
// document.write("<p>Variable names should not be JS keywords</p>");


                        // ****************chapter 3*****************

//task 1
// var num1=+prompt("Enter your first number");
// var num2=+prompt("Enter your second number");
// var sum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);

//task 2
// var num1=+prompt("Enter your first number");
// var num2=+prompt("Enter your second number");
// var sum=num1+num2;
// var diff=num1-num2;
// var product=num1*num2;
// var division=num1/num2;
// var modulus=num1%num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum +"<br>");
// document.write("Difference of "+num1+" and "+num2+" is "+diff +"<br>");
// document.write("product of "+num1+" and "+num2+" is "+product +"<br>");
// document.write(num1+" divide by "+num2+" is "+division +"<br>");
// document.write(num1+" modulus "+num2+" is "+modulus +"<br>");

//task 3
// var num;
// document.write("Value after variable declaration is "+num+"<br>");
// num=5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment is: "+num+"<br>");
// num=num+7;
// document.write("Value after addition is: "+num+"<br>");
// num--;
// document.write("Value after decrement is: "+num+"<br>");
// var rem=num%3;
// document.write("The remainder is: "+rem+"<br>");

//task 4
// var ticket_price=600;
// var no_of_tickets=5;
// var total_amount=ticket_price*no_of_tickets;
// document.write("Total cost to buy "+no_of_tickets+" tickets to a movie is "+total_amount+"PKR");

//task 5
// var table= +prompt("Table of?");
// document.write("Table of "+table+"<br>");
// for(var i=1; i<=10; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br>");
// }

//task 6
// var celsius= +prompt("Enter a celsius temperatue");
// var fahren= +prompt("Enter a Fahrenheit temperature");
// var c_to_f=(celsius*9/5)+32;
// var f_to_c=(fahren-32)*5/9
// document.write(celsius+"&#8451; is"+c_to_f+"&#8457; <br>");
// document.write(fahren+"&#8457; is"+f_to_c+"&#8451; <br>");

//task 7
// var item1=+prompt("Enter price of item 1");
// var quan1=+prompt("Enter quantity of item 1");
// var item2=+prompt("Enter price of item 2");
// var quan2=+prompt("Enter quantity of item 2");
// var total = (item1*quan1)+(item2*quan2)+100;
// document.write("<h1>Shopping Cart</h1><br><br><br>");
// document.write("Price of item 1 is "+item1+"<br>");
// document.write("Quantity of item 1 is "+quan1+"<br>");
// document.write("Price of item 2 is "+item2+"<br>");
// document.write("Quantity of item 2 is "+quan2+"<br>");
// document.write("Shipping Charges 100<br><br>");
// document.write("Total cost of your order is "+total+"<br>");

//task 8
// var marks=+prompt("Enter total marks");
// var Omarks=+prompt("Enter obtained marks");
// var percentage=(Omarks/marks)*100;
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks: "+marks+"<br>" );
// document.write("Marks obtained: "+Omarks+"<br>" );
// document.write("Percentage: "+percentage+" &#37;<br>" );

//task 9
// var dollars=10;
// var riyals=25;
// var val=(dollars*104.80)+(riyals*28);
// document.write("<h1>Currency in PKR</h1><br><br>");
// document.write("Total Currency in PKR: "+val+"<br>" );

//task 10
// var num=+prompt("Enter a number");
// var result=(((num+5)*10)/2);
// document.write("result is "+result);

//task 11
// var year=+prompt("Enter current year");
// var birthYear=+prompt("Enter your birth year");
// var age1=year-birthYear;
// var age2=age1-1;
// document.write("Current year: "+year+"<br>");
// document.write("Birth year: "+birthYear+"<br>");
// document.write("Your Age: either "+age1+" or "+ age2+" years old");

//task 12
// var radius=+prompt("Enter radius of circle");
// var circumference=2*3.142*radius;
// var area=3.142*radius*radius;
// document.write("<h1>The Geometrizer</h1><br><br>");
// document.write("Radius of circle: "+radius+"<br>");
// document.write("The circumference is: "+circumference+"<br>");
// document.write("The area is: "+area+"<br>");

//task 13
// var snack=prompt("Enter your favourite snack");
// var C_age=+prompt("Enter your current age");
// var E_age=+prompt("Enter your estimated age");
// var amount=+prompt("Enter estimated amount of intake of a day ");
// var needed=(E_age-C_age)*amount;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current age: "+C_age+"<br>");
// document.write("Estimated Maximum Age: "+E_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+needed+" "+snack+" to last until the ripe old age of "+E_age+"<br>");


