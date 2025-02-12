//1
function sayHello(){
    console.log("Hello World!")
}
sayHello();

//2
function displayWarning(){
    console.log("Warning! System Overload!")
}
displayWarning();

//3
function printStatus(){
    console.log("System Status: Active")
}
printStatus();

//4
function initialize(){
    console.log("Initialization Complete");
    shutdown();
}
function shutdown(){
    console.log("System Shutting Down");
}
initialize();

//5
function startProcess(){
    console.log("Process Started");
    endProcess();
}
function endProcess(){
    console.log("Process Ended");
}
startProcess();

//6
function greetUser(name){
    console.log("Hello, " + name + "!");
}
greetUser("Rupa");
greetUser("Suresh");

//7
function calculateSum(a,b){
    console.log(a+b)
}
calculateSum(5,8)
calculateSum(12,5)

//8
function countDown(i){
    if (i >= 1){
      console.log(i);
      countDown(i - 1); 
    }
}
countDown(5);

//9
function checkEvenOdd(a){
    if (a%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
checkEvenOdd(6);
checkEvenOdd(15);

//10
function beginSession(){
    console.log("Session Started")
    endSession();
}
function endSession(){
    console.log("Session Ended")
}
beginSession();