// Creating a basic transactions recorder
// global variables
var metadata = false;
var user = localStorage[1];
var amount = localStorage[2];
var reload = false;


if (typeof(localStorage[1]) != undefined && localStorage[2] != undefined){
    metadata = true;
}

if (metadata == false){
    user = window.prompt("Enter your name");
    console.log(user);
}
console.log(user);
localStorage.setItem(1, user);
user = localStorage[1];
alert(`hello, welcome ${user}}`);

let header = document.querySelector('h1');
header.innerText = `Name: ${user}`;


let button = document.querySelector('button')
var heading = document.querySelector('h2')
var amount = null;
//*******************************************************************************************************************************************************************
/* amount adding is not working according the meta data conditions and is not added into the header even if its already there while the userName one is still working which is 
similar to this amount parameter*/
//*************************************************************solved****************************************************************************************/////
button.onclick = () => {
    if (metadata == false){
        amount = window.prompt("Enter the total money you have.");
        localStorage.setItem(2, amount);
        amount = localStorage[2];
        heading.innerText = `Amount : ${amount}`;
        console.log(localStorage);
    
    }
    else{
    amount = window.prompt("Enter the total money you have.");
    localStorage.setItem(2, amount);
    amount = localStorage[2];
    heading.innerText = `Amount : ${amount}`;
    console.log(localStorage);
    return;
    }
    return;
}
amount = localStorage[2];
if (localStorage[2] != "undefined"){
    heading.innerText = `Amount : ${amount}`;
    console.log(`Amount : ${amount}`);
}


//let entry = document.createElement('blockquote');
//entry.innerText("You can see your transactions below");

let transaction = document.querySelector('#transactions');
let view = document.querySelector('#display');
//func to check whether the expense is exceeding the amount
let checker = (param1, param2) =>{
    console.log(param1-param2);
    if ((param1 - param2) > 0){
        return true;
    }
    else{
        let body = document.querySelector('body');
        let text = document.createTextNode(`Insufficient money. You have only ${param1}`);
        body.appendChild(text);
        return false;
    }
    
    
}
let addspace = () =>{
    body = document.querySelector('body');
    spaceChar = '   ';
    body.appendChild(spaceChar);
    return;
}
let addline = () =>{
    body = document.querySelector('body');
    lineChar = document.createElement('br');
    body.appendChild(lineChar);
    return;
}
 
let newline = document.createElement('br')
let tab = document.createTextNode('\r\n\r\n  ')
let k = 1;
let display = () =>{
    let body = document.querySelector('body');
    if (localStorage.length <= 2){
        body.appendChild(document.createElement('p'));;
        window.alert("You don't have any transactions to view!");
        return;
    }
    
    body.appendChild(document.createElement('h3'));
    let title = document.querySelector('h3');
    title.innerText = "Transactions:-"
    body.appendChild(document.createElement('p'));
    let para = document.querySelector('p');
    para.innerText = "Name\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Amount\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Description\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
    body.appendChild(document.createElement('article'));
    let content = document.querySelector('article');
    content.className = "button5";
var num = 0;
    for(var j = 3; j <= localStorage.length; j++){
        let x = document.createTextNode(`${localStorage[j]}     `);
        content.appendChild(x);
        content.appendChild(document.createTextNode("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"));
        content.appendChild(tab);    
        num +=1;
        if ((num % 3) == 0 &&  num != 0){
            content.appendChild(document.createElement('br'));

        }
        
    }
    return;

}

let clear = () =>{
    let body = document.querySelector('body');
    body.removeChild(document.querySelector('article'));
    return;
}



//counter for the number of items in localStorage
//##################SOlved below issue##########################################################################################################################################
// the counter is always set to 0 everytime the script is run, due to the counter reinitiation the items are saved again from 1st postion in LS erasing the previous ones
//##############################################################################################################################################################################


transaction.onclick = () => {
    var i = localStorage.length;

    let body = document.querySelector('body')
    let name = window.prompt("Enter the name of the transaction");
    console.log(name);
    while(name == ""){
        name = window.prompt("Enter name correctly");
    }
    let expense = window.prompt("Enter the amount the for tranaction");
    while(Number.isInteger(parseInt(expense)) == false){
        expense = window.prompt("enter again");
    }
    while(expense == ""){
        expense = window.prompt("Enter the expense correctly");
    }

    let check = checker(amount, expense);
    if (check == true) {
        let about = window.prompt("Enter the description about the transactions");
        while( about == ""){
            about = window.prompt("Enter the description correctly");
        }
    
        let tr1 = document.createTextNode(`${name}`);
        let tr2 = document.createTextNode(`${expense}`);
        let tr3 = document.createTextNode(`${about} `);

        
        let newline = document.createElement('br');
        body.appendChild(newline);
        
        amount = amount-expense;
        heading.innerText = `Amount : ${amount}`;
        localStorage[2] = amount;
        localStorage.setItem(i+1, name);
        localStorage.setItem(i+2, expense);
        localStorage.setItem(i+3, about);
        
        console.log(localStorage);

        i += 3;
        clear();
        display();
        body.append(newline);
    return;}

}
view.onclick = () =>{
    if (localStorage.length <= 2){
        display();
        return;
    }
    clear();
    display();
}
// rename function
rename = document.querySelector('#rename');
rename.onclick = () =>{
    user = prompt("Hello, What's your name?");
    
    while (user == ""){
        user= prompt("rename correctly1");
    }
    localStorage[1] = user;
    header.innerText = `Name : ${user}`;
    console.log("rename success!");
    return;
}

// delete transactions func
//***************************************solved using 245 ln******************************************************************************************************************************* 
// Solution : - """saved the instance of the delete click and reload the page then delete it, using the cause of the porblem to solve the problem"""
// it is not working the first instance of opening after refreshing once it is working magically
// ****************************************************************************************************************************************************************************************
let remove = document.querySelector('#delete');
len = localStorage.length;
var n = 3;

remove.onclick =  () =>{
    // console.log(len);
    // document.location.reload()
    if(x = true){
    while(n <= len){
       console.log(localStorage[n]);
        localStorage.removeItem(n);
        n++;
    }}
    localStorage.setItem(localStorage.length+1, 'reloadTrue');
    console.log("removed tranactions!");
    document.location.reload();
    return;
}

if(localStorage[localStorage.length] == "reloadTrue"){
    while(n <= len){
       console.log(localStorage[n]);
        localStorage.removeItem(n);
        n++;
    }
}
