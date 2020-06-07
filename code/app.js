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

//task 6
//script is working fine

//task 7a
//content of page appears the script is working
//task7b
//content of page appears then script is working
//task 7c
//content of page appears then script is working
//task 7d
//script runs first then content of page appears




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

//task 5                      
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

//task 2                   
// var num=localStorage.getItem("counter");
// if(num===null){
//     num=1;
// }
// alert("No of visit: "+num+" time(s)");
// localStorage.setItem("counter",++num);

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

                                 //************* chapter 9-11 *******************

// task 1
// var city=prompt("enter city");
// if(city=='karachi'){
//     alert("welcome to the city of lights")
// }

// task 2
// var gender=prompt("enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir")
// }
// else if(gender=="female"){

//     alert("Good Morning Ma'am")
// }

// task 3
// var color=prompt("enter signal color");
// if(color=='red'){
// alert('Must stop')
// }
// else if (color=='yellow'){
//     alert('Ready to move')
// }
// else if (color=='green'){
//     alert('Move now')
// }

// task 4
// var liters=+prompt("enter remianing liters");
// if(liters<0.25){
//     alert("Please refill the fuel in your car")
// }

// task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }          //output: alert showing given condition for variable a is true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }               //output: no alert is shown

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }   //output: 2nd alert showing condition 2 is true and 4th alert is showing condition 4 is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }    //output: alert showing the cost equals

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }   //output: alert showing true

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }     //output: alert showinng car is smaller than cat

// task 6
// var sub1=+prompt("enter 1st marks");
// var sub2=+prompt("enter 2nd marks");
// var sub3=+prompt("enter 3rd marks");
// var totalMarks=+prompt("enter total marks");
// var obtainedMarks=sub1+sub2+sub3;
// var per=(obtainedMarks/totalMarks)*100;
// var grade, remarks;
// if(per>=80){
// grade="A-one";
// remarks="Excellent"
// }
// else if(per>=70){
//     grade="A";
//     remarks="Good";
// }
// else if(per>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else if(per<60){
//     grade="Fail";
//     remarks="Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br><br>");
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+obtainedMarks+"<br>");
// document.write("Percentage : "+per+"<br>");
// document.write("Grade : "+grade+"%<br>");
// document.write("Remarks : "+remarks+"<br>");

// task 7
// var num=+prompt("guess the number between 1- 10");
// var snum=9;
// if(num==snum){
//     alert("Bingo! Correct Answer")
// }
// if(num==++snum)
// {
//     alert("Close enough to the correct answer")
// }

// task 8
// var num=+prompt("enter num");
// if(num%3==0){
//     alert(num+" is divisible by 3");
// }
// else{
//     alert(num+" is not divisible by 3 ");
// }


// task 9
// var num=+prompt("enter num");
// if(num%2==0){
//     alert(num+" is even number")
// }
// else{
//     alert(num+" is odd number")
// }

// task 10
// var T=+prompt("enter temperature");
// if(T>40){
//     alert("It is too hot outside")
// }
// else if(T>30){
//     alert("The Weather today is Normal.")
// }
// else if(T>20){
//     alert("Today’s Weather is cool.")
// }else if(T>10){
//     alert("“OMG! Today’s weather is so Cool.")
// }

// task 11
// var n1=+prompt("enter 1st number");
// var n2=+prompt("enter 2nd number");
// var ope=prompt("enter operator");
// if(ope=='+'){
//     alert(n1+" + "+n2+" =  "+(n1+n2))
// }
// else if(ope=='-'){
//     alert(n1+" - "+n2+" =  "+(n1-n2))
// }
// else if(ope=='*'){
//     alert(n1+" * "+n2+" =  "+(n1*n2))
// }
// else if(ope=='/'){
//     alert(n1+" / "+n2+" =  "+(n1/n2))
// }




                                         //*********chapter 12-13 ******************

//task 1
// var a=prompt("Enter a character");
// var b=a.charCodeAt(0);
// if(b>=65&&b<=90)
// {
//     alert("Uppercase letter")
// }
// else if(b>=97&&b<=127){

//     alert("lowercase letter")
// }
// else if(b>=48&&b<=57){
//     alert("number")
// }
// else{
//     alert("other than a number and letter");
// }

//  task 2
// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");

// if(a>b){
//     alert(a + ' is greater')
// }
// else if(b>a){
//     alert(b+ ' is greater')
// }
// else if(a==b){
//     alert("both are equal")
// }

//  task 3
// var a=+prompt("Enter number");

// if(a>0){
//     alert("Positive Number")
// }
// else if(a<0){
//     alert("Negative Number")
// }
// else{
//     alert("Number is 0")
// }

//  task 4
// var letter=prompt("Enter letter");
// if(letter==='a'||letter==='e'||letter==='i'||letter==='o'||letter==='u'){
//     alert("true");
// }
// else{
//     alert('false');
// }

//  task 5
// var pass="mypassword";
// var userpass=prompt("Enter password");

// if(userpass==''){
//     alert('Please enter your password');
// }
// else if(pass===userpass){
//     alert('Correct! The password you entered matches the original password');
// }
// else{
//     alert('Incorrect password');
// }

// chpater 8 task 6
// var greeting;
// var hour = 13;
// if(hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//  task 7
// var time=+prompt("Enter a time in 24-hr formate");
// if(time==24){
//     time=0;
// }
// var AmOrPm = time >= 12 ? 'pm' : 'am';
// formatedTime= time%12;
// if(time==0||time==12||time==24){
//     formatedTime=formatedTime+12;
//     alert("time is "+formatedTime+AmOrPm+" in 12-hr formate");
// }
// else{
//     alert("time is "+formatedTime+AmOrPm+" in 12-hr formate");
// }
//  //for greeting
// if(time>=0&&time<12){
//     alert("Good morning");
// }
// else if(time>=12&&time<17){
//     alert("Good afternoon");
// }
// else if(time>=17&&time<21){
//     alert("Good evening");
// }
// else if(time>=21&&time<=24){
//     alert("Good night");
// }


                                //***********chapter 14-16********************

//task 1
// var arr=[];

//task 2
// var arr={};

//task 3
// var arr;
// arr=['ahmed','rauf','hamza'];

//task 4
// var arr;
// arr=[1,2,3];

//task 5
//var arr;
//arr=[true,false];

//task 6
// var arr;
// arr=["name",true,50];

//task 7
// var arr=["SSC", 'HSC', 'BCS',' BS',' BCOM',' MS', 'M. Phil.', 'PhD']
// for(i=0;i<=arr.length;i++){
//     document.write(i +' )'+ arr[i]+'<br>')
// }

//task 8
// var students=[];
// var marks=[];
// var s1=prompt('Enter 1st name');
// var marks1=prompt('Enter 1st marks');
// var s2=prompt('Enter 2nd name');
// var marks2=prompt('Enter 2nd marks');
// var s3=prompt('Enter 3rd name');
// var marks3=prompt('Enter 3rd marks');
// var total=500;
// students.push(s1,s2,s3);
// marks.push(marks1,marks2,marks3);
// var p1=(marks[0]/total)*100;
// var p2=(marks[1]/total)*100;
// var p3=(marks[2]/total)*100;
// document.write("Score of "+students[0]+ ' is '+marks[0]+' . Percentage: '+ p1 +'%<br>');
// document.write("Score of "+students[1]+ ' is '+marks[1]+' . Percentage: '+ p2 +'%<br>');
// document.write("Score of "+students[2]+ ' is '+marks[2]+' . Percentage: '+ p3 +'%<br>');

//task 9a
// var color=['red','blue','yellow','green'];
// var addColor=prompt("Enter color");
// color.unshift(addColor);
// document.write(color)
//task 9b
// var addColor=prompt("Enter color");
// color.push(addColor);
// document.write(color)
//task 9c
// var addColor1=prompt("Enter color1");
// var addColor2=prompt("Enter color2");
// color.unshift(addColor1,addColor2);
// document.write(color)
//task 9d
// color.shift();
// document.write(color)
//task 9e
// color.pop();
// document.write(color)
//task 9f
// var index=+prompt("Enter index");
// var addColor1=prompt("Enter color name");
// color.splice(index,0,addColor1)
// document.write(color)
//task 9g
// var index=prompt("Enter index you want to delete");
// var index1=prompt("Enter how many color you want to delete");
// color.splice(index,index1)
// document.write(color)

//task 10
// var arr=[320,230,480,120];
// document.write("Score of students "+arr+'<br>');
// document.write("Ordered Score of students "+arr.sort());

//task 11
// var cities=['karachi','lahore','quetta','islamabad','peshawar'];
// document.write("Cities List : "+cities+"<br>");
// var selectedcities=cities.slice(2,4);
// document.write("Selected Cities List : "+selectedcities);

//task 11
// var arr = ['This ', ' is ', ' my ', ' cat'];
// var arr1=arr.join("");
// document.write("Array: "+arr+'<br>');
// document.write("String: "+arr1+'<br>');

//task 11
// var arr=[];
// var Device1=prompt("Enter Device name");
// var Device2=prompt("Enter Device name");
// var Device3=prompt("Enter Device name");
// var Device4=prompt("Enter Device name");
// var Device5=prompt("Enter Device name");
// var length;
// arr.push(Device1,Device2,Device3,Device4,Device5);
// document.write("Devices: "+arr+"<br>");
// length=arr.length;
// for(i=0;i<length;i++){

//     document.write(arr.shift()+'<br>')
// }

//task 12
// var arr=[];
// var Device1=prompt("Enter Device name");
// var Device2=prompt("Enter Device name");
// var Device3=prompt("Enter Device name");
// var Device4=prompt("Enter Device name");
// var Device5=prompt("Enter Device name");
// var length;
// arr.push(Device1,Device2,Device3,Device4,Device5);
// document.write("Devices: "+arr+"<br>");
// length=arr.length;
// for(i=0;i<length;i++){

//     document.write(arr.pop()+'<br>')
// }

//task 13
// var mobiles=['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
// document.write("<select>"+
// "<option>"+  mobiles[0] +"</option>"+
// "<option>"+  mobiles[1] +"</option>"+
// "<option>"+  mobiles[2] +"</option>"+
// "<option>"+  mobiles[3] +"</option>"+
// "<option>"+  mobiles[4] +"</option>"+
// "<option>"+  mobiles[5] +"</option>"+
// "</select>"
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
