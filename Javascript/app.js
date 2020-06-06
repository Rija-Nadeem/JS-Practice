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


                                // ****************chapter 6-8*****************


//task1
// var num=+prompt("Enter a number");
// document.write("<h1>RESULT</h1><br>");
// document.write("The value of a is: "+num+"<br>");
// document.write("***********************************<br>");
// document.write("The value of ++a is: "+ ++num +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of a++ is: "+ num++ +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of --a is: "+ --num +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of a-- is: "+ num-- +"<br>");
// document.write("The value of a is: "+num+"<br>");

//task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//             // 1   -  0  +  1  + 1 = 3
//              //a will be decrement and value will go in a so a=1, 
//              //b will be decrement and value will go in b so b=0,
//              //b will be increment and value will go in b so b=1,
//              // value of b will remain same but then it will be decresed by 1. so b=1 at this stage but after execution of this statement it will be 0
//             // a=1 b=0 
// console.log(a,b,result);

//task 3
// var name=prompt("Enter your name");
// document.write("Welcome, "+name);

//task 4 question is not written

//task 5                (confusion)
// var table= +prompt("Table of?");
// if(table){
//     document.write("Table of "+table+"<br>");
//     for(var i=1; i<=10; i++){
//         document.write(table+" x "+i+" = "+table*i+"<br>");
//     }
// }
// else{
//     table=5;
//     document.write("Table of "+table+" (default)<br>");
//     for(var i=1; i<=10; i++){
//         document.write(table+" x "+i+" = "+table*i+"<br>");
//     }
// }

//task 6
// var sub1= prompt("Enter first subject ");
// var sub2= prompt("Enter second subject ");
// var sub3= prompt("Enter third subject ");
// var total_marks=100;
// var marks1= +prompt("Enter marks for first subject ");
// var marks2= +prompt("Enter marks for second subject ");
// var marks3= +prompt("Enter marks for third subject ");
// var final_total_marks = total_marks + total_marks + total_marks;
// var final_marks = marks1 + marks2 + marks3;
// function percentage(obtained,total){
//     return (obtained/total)*total_marks;
// }
// var percentage1=percentage(marks1,total_marks);
// var percentage2=percentage(marks2,total_marks);
// var percentage3=percentage(marks3,total_marks);
// var total_percentage=percentage(final_marks,final_total_marks);
// document.write(
//     "<table>"+
//         "<tr>"+
//             "<th>Subject</th>"+
//             "<th>Total marks</th>"+
//             "<th>Obtained marks</th>"+
//             "<th>Percentage</th>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub1+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks1+"</td>"+
//             "<td>"+percentage1+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub2+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks2+"</td>"+
//             "<td>"+percentage2+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub3+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks3+"</td>"+
//             "<td>"+percentage3+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td></td>"+
//             "<td>"+final_total_marks+"</td>"+
//             "<td>"+final_marks+"</td>"+
//             "<td>"+total_percentage+"&#37;</td>"+
//         "</tr>"+
//     "</table>"
// );

                    // ******************************chapter 17-20************************

//task 1
//var arr = [[],[]];

//task 2
//  var arr=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// console.table(arr);

//task 3
// for(var i=1; i<=10;i++){
//     document.write(i+"<br>");
// }

//task 4
// var table= +prompt("Table of: ");
// var count= +prompt("Length of table: ");
// document.write("Table of "+table+"<br>");
// document.write("Length "+count+"<br><br>");
// for(var i=1; i<=count; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br>");
// }

//task 5
// var fruits=["apple", "banana", "mango", "orange", "strawberry" ];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>");
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

//task 6
// document.write("<h1>Counting</h1><br>");
// for(var i=1; i<=15; i++){
//     document.write(i+",");
// }
// document.write("<h1>Reverse Counting</h1><br>");
// for(var i=10; i>=1; i--){
//     document.write(i+",");
// }
// document.write("<h1>Even</h1><br>");
// for(var i=0; i<=20; i++){
//     if(i%2===0){
//         document.write(i+",");
//     }
// }
// document.write("<h1>Odd</h1><br>");
// for(var i=0; i<=20; i++){
//     if(i%2!==0){
//         document.write(i+",");
//     }
// }
// document.write("<h1>Series</h1><br>");
// for(var i=1; i<=20; i++){
//     if(i%2===0){
//         document.write(i+"k,");
//     }
// }

//task 7
// var items=["cake", "apple pie", "cookie", "chips","patties"];
// var found=false;
// var index;
// var userItem=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0; i<items.length; i++){
//     if(userItem===items[i]){
//         found=true;
//         index=i;
//     }
// }
// if(found){
//     document.write(userItem+" is available at index "+index+" in our bakery");
// }
// else{
//     document.write("We are sorry. "+userItem+" is not available in our bakery");
// }

//task 8
// var arr=[24,53,78,91,12];
// var num=arr[0];
// for(var i=1; i<arr.length; i++){
//     if(arr[i]>num){
//         num=arr[i];
//     }
   
// }
// document.write("Array Items: ");
// for(var j=0; j<arr.length;j++){
//         document.write(arr[j]+", ");
// }
// document.write("<br>The Largest number is "+num);

//task 9
// var arr=[24,53,78,91,12];
// var num=arr[0];
// for(var i=1; i<arr.length; i++){
//     if(arr[i]<num){
//         num=arr[i];
//     }
   
// }
// document.write("Array Items: ");
// for(var j=0; j<arr.length;j++){
//         document.write(arr[j]+", ");
// }
// document.write("<br>The smallest number is "+num);

//task 10
// for(var i=1; i<=100; i++){
//     if(i%5===0){
//         document.write(i+", ");
//     }
// }


