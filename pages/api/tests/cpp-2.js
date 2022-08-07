export default function handler(req, res) {
    res.status(200).json({ questions: [
        {
            question: "What is the equal form of a+=b (It's the same question if it asks about a*=b, a-=b or a/=b) ?",
            code: ``,
            answers: ["a=a+b", "a++", "b++", "none of them"],
            correctAnswer: 0
        },
        {
            question: "What is the equal form of a++ ?",
            code: ``,
            answers: ["a+=1", "a=a+1", "both of them", "none of them"],
            correctAnswer: 2
        },
        {
            question: "Which of the following belongs to the set of character types ?",
            code: ``,
            answers: ["int", "char", "string", "float"],
            correctAnswer: 1
        },
        {
            question: "What does '\\a' escape code represent ?",
            code: ``,
            answers: ["backslash", "new line", "tab", "alert"],
            correctAnswer: 3
        },
        {
            question: "What does '\\t' escape code represent ?",
            code: ``,
            answers: ["backslash", "new line", "tab", "alert"],
            correctAnswer: 2
        },
        {
            question: "What does '\\n' escape code represent ?",
            code: ``,
            answers: ["backslash", "new line", "tab", "alert"],
            correctAnswer: 1
        },
        {
            question: "What does '\\\\' escape code represent ?",
            code: ``,
            answers: ["backslash", "new line", "tab", "alert"],
            correctAnswer: 0
        },
        {
            question: "The value 132.54 can be represented using which data type ?",
            code: ``,
            answers: ["void", "string", "double", "int"],
            correctAnswer: 2
        },
        {
            question: "Which of the following correctly declares an array ?",
            code: ``,
            answers: ["int array[10];", "array array[10];", "int array{10};", "int array;"],
            correctAnswer: 0
        },
        {
            question: "What is the index of the last element in array of 9 elements ?",
            code: ``,
            answers: ["0", "10", "9", "8"],
            correctAnswer: 3
        },
        {
            question: "Which of the following accesses the seventh element in array ?",
            code: ``,
            answers: ["array(6)", "array[6]", "array(7)", "array[7]"],
            correctAnswer: 1
        },
        {
            question: "Which of the following keywords is used to declare a header file ?",
            code: ``,
            answers: ["include", "exclude", "string", "namespace"],
            correctAnswer: 0
        },
        {
            question: "What are the essential operators in C++ ?",
            code: ``,
            answers: ["+", "|", "<=", "all of them"],
            correctAnswer: 3
        },
        {
            question: "Which data type is the best to represent logical values ?",
            code: ``,
            answers: ["float", "integer", "boolean", "character"],
            correctAnswer: 2
        },
        {
            question: "What is the output of the following code ?",
            code: `#include <iostream>
using namespace std;
void fun(int x, int y){
    x = 20;
    y = 10;
}
int main(){
    int x = 10;
    fun(x,x);
    cout << x;
    return 0;
}`,
            answers: ["20", "10", "error", "none of them"],
            correctAnswer: 1
        },
        {
            question: "What is the meaning of '&&' ?",
            code: ``,
            answers: ["and", "or", "xor", "none of them"],
            correctAnswer: 0
        },
        {
            question: "What is the meaning of '||' ?",
            code: ``,
            answers: ["and", "or", "xor", "none of them"],
            correctAnswer: 1
        },
        {
            question: "What is the meaning of '!=' ?",
            code: ``,
            answers: ["and", "or", "equal", "not equal"],
            correctAnswer: 3
        },
        {
            question: "What is the meaning of '<=' ?",
            code: ``,
            answers: ["not equal", "greater than or equal", "less than or equal", "none of them"],
            correctAnswer: 2
        },
        {
            question: "Just choose 'I Love C++' before the time is out to get 5 points",
            code: `string myPronoun = "I", myVerb = "Love", myFavLanguage = "C++";`,
            answers: ["cout<<myPronoun+\" \"+myVerb+\" \"+myFavLanguage;", "cout<<myPronoun<<\" \"<<myVerb<<\" \"<<myFavLanguage;", "both of them", "none of them"],
            correctAnswer: 2
        }
    ],
    testname: "C++ Test 2"
})
}