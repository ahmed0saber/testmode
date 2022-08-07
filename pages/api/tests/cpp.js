export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "Complete the following code to output 'Hello World!'",
            code: `int main(){
... << "Hello World!";
}`,
            answers: ["cin", "cout", "output", "write"],
            correctAnswer: 1
        },
        {
            question: "Insert a new line after 'Hello World'",
            code: `int main(){
cout << "Hello World! ...";
cout << "I am learning C++";
}`,
            answers: ["\\r", "\\t", "\\n", "\\b"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to create a single line comment",
            code: `... This is a comment`,
            answers: ["//", "/*", "--", "#"],
            correctAnswer: 0
        },
        {
            question: "Which one of the following is a possible name for a variable ?",
            code: ``,
            answers: ["my_var", "for", "3boys", "my-var"],
            correctAnswer: 0
        },
        {
            question: "Which one of the following is a possible variable declaration ?",
            code: ``,
            answers: ["myVar;", "integer myVar;", "int myVar", "int myVar;"],
            correctAnswer: 3
        },
        {
            question: "Which one of the following is a possible way to assign a value to the following variable ?",
            code: `string username;`,
            answers: ["username = 12;", "username = 'ahmed';", "username = \"ahmed\";", "string username = \"ahmed\";"],
            correctAnswer: 2
        },
        {
            question: "Which one of the following is not a correct way to declare 2 variables ?",
            code: ``,
            answers: ["int var1, var2;", "int var1; var2;", "int var1; int var2;", "int var1; bool var2;"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to accept user input and store it in the variable called x",
            code: `int x;
cout << "Enter a number: ";
... >> x;`,
            answers: ["cin", "cout", "read", "input"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to initialize a variable able to store data of boolean data type.",
            code: `... student = true;`,
            answers: ["int", "string", "boolean", "bool"],
            correctAnswer: 3
        },
        {
            question: "What is the output of the following code ?",
            code: `bool male = true;
cout << male;`,
            answers: ["male", "yes", "1", "true"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to output 50",
            code: `cout << 10 ... 5;`,
            answers: ["+", "*", "-", "/"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to output 2",
            code: `cout << 22 ... 4;`,
            answers: ["-", "%", "/", "+"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to increase x by 1",
            code: `x ... ;`,
            answers: ["++", "--", "**", "+="],
            correctAnswer: 0
        },
        {
            question: "What is the output of the following code ?",
            code: `int x = 1;
cout << x++ ;`,
            answers: ["1++", "0", "2", "1"],
            correctAnswer: 3
        },
        {
            question: "What is the output of the following code ?",
            code: `int x = 1;
cout << ++x ;`,
            answers: ["1++", "0", "2", "1"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to output true",
            code: `int x = 5, y = 4;
cout << ( ... ) ;`,
            answers: ["x < y", "x > y", "x == y", "x + y"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to output 'success'",
            code: `int degree = 50;
if ( ... ){
cout << "success";
}else{
cout << "failure";
}`,
            answers: ["degree >= 50", "degree > 50", "degree < 50", "false"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to create a program that checks if a number is even or not",
            code: `int num = 8;
if ( ... ){
cout << "Even";
}else{
cout << "Odd";
}`,
            answers: ["num % 2 = 0", "num % 2 == 0", "num / 2 == 0", "num / 2 = 0"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to create a program that checks if number is positive, negative or zero",
            code: `int num = -2;
if ( num > 0 ){
cout << "Positive";
}else if ( ... ){
cout << "Negative";
}else{
cout << "Zero";
}`,
            answers: ["num == 0", "num > 0", "num < 0", "num = 0"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to create a program that checks if username is 'ahmed0saber' and password is '123456', or not",
            code: `string username = "ahmed0saber", password = "123456";
if ( ... ){
cout << "Logged in successfully";
}else{
cout << "Error, username or password is incorrect";
}`,
            answers: ["username == \"ahmed0saber\" && password == 123456", "username == \"ahmed0saber\" AND password == \"123456\"", "username == \"ahmed0saber\" and password == \"123456\"", "username == \"ahmed0saber\" && password == \"123456\""],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to create a program that prints all integer numbers from 8 to 24",
            code: `int x = 8;
while ( ... ){
cout << x << " ";
x++ ;
}`,
            answers: ["x <= 24", "x < 24", "true", "false"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to create a program that prints all integer numbers from 8 to 24",
            code: `for (int x=8; x<=24; ... ){
cout << x << " ";
}`,
            answers: ["x++", "x--", "x+=2", "x=1"],
            correctAnswer: 0
        },
        {
            question: "What is the output of the following code ?",
            code: `int x=0;
for (; x<3; ){
cout << x << " ";
x++
}`,
            answers: ["012", "0 1 2", "0123", "0 1 2 3"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to create an array that stores the names of 3 students.",
            code: `... names[3] = {"Ahmed", "Saber", "Fathy"} ;`,
            answers: ["float", "bool", "int", "string"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to print 'Ahmed'.",
            code: `string names[3] = {"Ahmed", "Saber", "Fathy"} ;
cout << ... ;`,
            answers: ["names(0)", "names(1)", "names[0]", "names[1]"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to replace 15 with the value entered by user.",
            code: `int numbers[5] = {12, 10, 14, 15, 20} ;
cin >> ... ;`,
            answers: ["numbers[3]", "numbers[2]", "numbers[1]", "numbers[0]"],
            correctAnswer: 0
        },
        {
            question: "Complete the following code to print all elements in the array.",
            code: `int numbers[5] = {12, 10, 14, 15, 20} ;
for (int i=0; i<5; i++) {
cout << ... ;
}`,
            answers: ["numbers", "numbers[i]", "i", "numbers[0]"],
            correctAnswer: 1
        },
        {
            question: "Complete the following code to print 'Hello Functions'",
            code: `void sayHello(){
cout << "Hello Functions" ;
}
int main(){
...
}`,
            answers: ["sayHello[]", "sayHello{}", "sayHello()", "sayHello"],
            correctAnswer: 2
        },
        {
            question: "Complete the following code to print 'Hello Ahmed'",
            code: `void sayHello(string name){
cout << "Hello " << name ;
}
int main(){
string username = "Ahmed" ;
sayHello( ... ) ;
}`,
            answers: ["\"ahmed\"", "ahmed", "name", "username"],
            correctAnswer: 3
        },
        {
            question: "Complete the following code to create area calculator for rectangle.",
            code: `... calcArea(int height, int width){
return height * width ;
}
int main(){
cout << calcArea(10, 20) ;
}`,
            answers: ["void", "int", "bool", "string"],
            correctAnswer: 1
        },
        {
            question: "What is the output of the following code ?",
            code: `int num = 12;
if (num > 10){
cout << ">10 ";
}
if (num > 0){
cout << ">0 ";
}`,
            answers: [">10 >0 ", ">10 ", ">0 ", ">0 >10 "],
            correctAnswer: 0
        },
        {
            question: "What is the output of the following code ?",
            code: `int num = 12;
if (num > 10){
cout << ">10 ";
}else if (num > 0){
cout << ">0 ";
}`,
            answers: [">10 >0 ", ">10 ", ">0 ", ">0 >10 "],
            correctAnswer: 1
        },
        {
            question: "Is there any error with the following code ?",
            code: `int num-2 = 1;
if(num-2 > 0){
cout << "yes" ;
}`,
            answers: ["No, everything seems to be good", "yes, there must be a semicolon after if(num-2 > 0)", "yes, the variable name is not possible", "yes, the << operator must be replaced with >>"],
            correctAnswer: 2
        }
    ],
    testname: "C++ Test"
})
}