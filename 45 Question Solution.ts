// Question 2 Solution
let PersonName: string= "ERIC";
console.log(`Hello ${PersonName} would you like to learn some Python today?`);



// Question 3 Solution

// LOWERCASE //
let PersonName: string ="huzaifa bhai"
console.log("lowercase:", PersonName.toLocaleLowerCase());

//UPPERCASE//
console.log("Uppercase:", PersonName.toLocaleUpperCase());

//TITLECASE//
console.log("Titlecase:", PersonName.replace(/\bw/g,c => c.toLocaleUpperCase()))



// Qestion 4 Solution

let Qoute: string= "once said, "wash your faces! in every 2 hours"";
let Author: string= "MOM";
console.log(` ${Author} ${Qoute}`);



// Question 5 Solution

let Qoute: string= "once said, WASH! your faces in every 2 hours";
let Famous_Person: string= "Mother Terissa";
let messege= `${Famous_Person} ${Qoute}`;
console.log(messege);



// Question 6 Solution

let Person_Name: string= `\n\tARHAM BHAI\t\n`;
console.log (Person_Name);
let stripped: string= Person_Name.trim();
console.log (stripped);



// Question 7 Solution

console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);



//Question 8 Solution

console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);



// Question 9 Solution

let FavouriteNumber: Number=2;
console.log(`My Favourite number is "${FavouriteNumber}"`);



// Question 10 Solution
// Program 1


//My name is Arham  and I am a student at the University of Harward.
//Date: 3/2/2024
//In this we will rum a simple code like "Hello world"
console.log(`Hello world to Typescript`);

// Program 2


//My name is Arham  and I am a student at the University of Harward.
//Date: 3/2/2024
//In this we are going to multiply a number by coding
console.log(2*2);



//Question 11 Solution

let Names: string[] = ['John', 'Jane', 'Alice'];
    for(let i=0;i<Names.length;i++){
    console.log(Names[i]);
}



//Question 12 Solution

let Names: string[] = ['John', 'Jane', 'Alice'];
let messege = ['How are you? ']
    for(let i=0;i<Names.length;i++){
    console.log(messege + Names[i]);
}



//Question 13 Solution

let transportation: string [] =  ['Car', 'Ship', 'Air Jet', 'Hyper car'];
for(let i=0; i<transportation.length; i++){
    console.log('I would like to own ' + transportation[i]);
}



//Question 14 Solution

let Guest_list:string []=['John Doe','Jane Smith','Tom Brown'] ;
for (let i=0; i<Guest_list.length; i++) {
    console.log('Respested Sir/Madam' + Guest_list + '\nWe are inviting you on dinner tommorow.\n\nThank you')
}



// Question 15 Solution

let Guest_list:string []=[ 'John' , 'Smith' ,'Tom' ] ;
for (let i=0; i<Guest_list.length; i++) {
    console.log('Respested Sir ' + Guest_list[i] + ',\nWe are inviting you on dinner tommorow.\nThank you')
}
let not_coming_person:string[]=['Jane'];
let new_person:string[]=['Arham'];
Guest_list = new_person;
for (let i=0; i<Guest_list.length; i++)
 {console.log('Respested Sir ' + Guest_list[i] + ',\nWe are inviting you on dinner tommorow.\nThank you')};
{console.log(`Mr. ${not_coming_person} would not be present at the Dinner with us.`)};



// Question 16 Solution

let Guest_list:string []=[ 'John' , 'Smith' ,'Tom' ] ;
let not_coming_person:string[]=['Jane'];
let new_person:string[]=['Arham'];
{
    console.log(`Respected Sir ${new_person} ,\nWe are inviting you on dinner tommorow,\nThank you\n`)
}
{
    console.log(`\nMr. ${not_coming_person} would not be present at the Dinner with us.\n`)
};
Guest_list.unshift('neymar', 'Messi', 'Pepe');
for (let i=0; i<Guest_list.length; i++)
 {
    console.log('Respested Sir ' + Guest_list[i] + ',\nWe are inviting you on dinner tommorow,\nThank you\n');
}
{
    console.log('As we are having a bigger table for our Guests')
};



// Question 17 Solution

let Invitation_Array1__=["Touseef","Ahmed","Ali"];
console.log(Invitation_Array1__[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Invitation_Array1__[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Invitation_Array1__[2] + " You are Invited for dinner at my place at 11:00pm");

console.log("\TOuseef Can't make the dinner");

let Modify_Invitation_Array2__=["Fahad","Ahmed","Ali"];
console.log(Modify_Invitation_Array2__[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Modify_Invitation_Array2__[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Modify_Invitation_Array2__[2] + " You are Invited for dinner at my place at 11:00pm");

console.log("I wanna inform to all of you that I found a big dinner table.");

Modify_Invitation_Array2__.splice(0,0,"Owais");

console.log(Modify_Invitation_Array2__);

Modify_Invitation_Array2__.splice(2,0,"Zohaib")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.push("Usman");
console.log(Modify_Invitation_Array2__);

console.log("\nSorry,I can invite only two people for dinner.")

Modify_Invitation_Array2__.pop()
console.log( "Usman, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Ali, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Ahmed, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Zohaib, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

console.log("Owais, You are still in my dinner table for dinner");

console.log("Fahad, You are still in my dinner table for dinner");


Modify_Invitation_Array2__.splice(0,2)
console.log(Modify_Invitation_Array2__)



// Question 18 Solution

let favorite_places=["Finland","Japan","Australia","Canada","US"];

console.log(favorite_places);
let Sorted_favorite_places=[...favorite_places].sort();
console.log(Sorted_favorite_places);
console.log(favorite_places);
console.log()

let reverse_alphaorder_favorite_places=[...Sorted_favorite_places].reverse()
console.log(reverse_alphaorder_favorite_places)
console.log(favorite_places)
console.log()

console.log(favorite_places.reverse());
console.log(favorite_places.reverse())

console.log(Sorted_favorite_places)
console.log(reverse_alphaorder_favorite_places)



// Question 19 Solution


let Invitation_Array_1=["Touseef","Ahmed","Ali"];
console.log(Invitation_Array_1[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Invitation_Array_1[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Invitation_Array_1[2] + " You are Invited for dinner at my place at 11:00pm");

console.log("\TOuseef Can't make the dinner");
let Modify_Invitation_Array_2=["Fahad","Ahmed","Ali"];
console.log(Modify_Invitation_Array_2[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Modify_Invitation_Array_2[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Modify_Invitation_Array_2[2] + " You are Invited for dinner at my place at 11:00pm");
console.log(Modify_Invitation_Array_2);

console.log("I am Inviting 3 persons to the dinner");



// Question 20 Solution

let cities_List=[
    "Karachi",
    "New York",
    "London",
    "Dubai",
    "Istanbul",
    "Bangkok",
    "Tokyo",
]

console.log(cities_List)



// Question 21 Solution 


let objects={
    "city":"Pakistan",
    "language": "English",
    "River":"Indus"
}
console.log(objects);



// Question 22 Solution


const Intensionally_error_Array: number[] = [1, 2, 3];
const index = 5;

try{
    console.log(Intensionally_error_Array[index]);
}
catch{
    console.log("Error Occured");
}



// Question 23 Solution 


// TRUE Statements

let color="green"
console.log( " Is color=='greenx'? | I guess correct");
console.log(color=="green");

let _age=18
console.log( " Is age=='18'? | I guess correct");
console.log(_age==18);

let day="saturday"
console.log( " Is day=='saturday'? | I guess correct");
console.log(day=="saturday");

let city="karachi"
console.log( " Is city=='karachi'? | I guess correct");
console.log(city=="karachi");

let country="Pakistan"
console.log("Is country=='Pakistan'? | I guess correct");
console.log(country=="Pakistan");
console.log()

// False Statements
let pi="3.14"
console.log( " Is pi=='3.14'? | I guessed incorrect");
console.log(pi=="4");

let language="TypeScript"
console.log( " Is language=='C'? | I guessed incorrect");
console.log(language=="C");

let sport="cricket"
console.log( " Is sport=='football'? | I guessed incorrect");
console.log(sport=="football");

let company="Apple"
console.log( "Is company=='Lenovo'? | I guessed incorrect");
console.log(company=="Lenovo");

let Car="BMW"
console.log("Is Car=='Mercedes? | I guessed incorrect");
console.log(Car=="Mercedes");



// Question 24 Solution


//strings test

let programming_langauge="TypeScript";
console.log("Is Programming_Language==TypeScript? | Hurray, I have guess Correct")
console.log(programming_langauge=="TypeScript")

console.log("Is Programming_Language==Java? | Oops, I have guessed incorrect")
console.log(programming_langauge=="Java")


//lower case test

let terminal="Command Prompt";
console.log("Is terminal==command prompt ? | Hurray, I have guessed right");
console.log(terminal.toLowerCase()=="command prompt");

console.log("Is terminal==windows power shell ? | Oops, I have guessed incorrct");
console.log(terminal.toLowerCase()=="windows power shell");


//numerical test | True Conditions

let date=20;

console.log("Is today date 20? | Hurray I have guess right ")
console.log(date==20);

console.log("Is today date other 26? | Hurray I have guess right ")
console.log(date!=33);

console.log("Has today's date passed the 15th already? | Hurray I have guess right ")
console.log(date>15);

console.log("Has the 25th date yet to come? | Hurray I have guess right ")
console.log(date<25);

console.log("Is today date 20 or 25 yet to come? | Hurray I have guess right ")
console.log(date>=20);

console.log("Is today date 20 or 15th have passed? | Hurray I have guess right ")
console.log(date<=20);


//false Conditions

console.log()
let Number_to_be_guess=42;
console.log("Is Number 20? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess==20);

console.log("Is Number other than 42? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess!=42);

console.log("Is Number greater than 53? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess>53);

console.log("Is Number less than 19? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess<19);

console.log("Is Number equal to 70 or greater than 70 | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess>=70);

console.log("Is Number equal to 29 or less than 29 | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess<=29);

// Test using "and" and "or" operator

let __country="Japan"
let __city="Tokyo"

console.log(__country=="Japan" && __city=="Tokyo");
console.log(__country=="Japan" && __city=="Nagoya");

console.log(__country=="China" || __city=="Tokyo");
console.log(__country=="China" || __city=="Sapporo");

// // Test to check item in a array

let _checking_array=[1,2,3,4,5];
console.log(3 in _checking_array);
console.log(7 in _checking_array);

// Test to check item not in a array

let checking_array2=[1,2,3,4,5,8];
console.log(checking_array2.includes(10))
console.log(checking_array2.includes(12))



// Question 25

let alien_color_="green";
if (alien_color_=='green'){
    console.log("Player has just earned 5 points")
}

if (alien_color_=='yellow'){
    console.log("Player has just earned 5 points")
}



// Qiestion 26 Solution


let alien_color="green";
if (alien_color=="green"){
    console.log("Player has earned 5 points")
}
else{
    console.log("Player has earned 10 points")
}


let alien_color2="brown";
if (alien_color2=="green"){
    console.log("Player has earned 5 points")
}
else{
    console.log("Player has earned 10 points")
}



// Question 27 Solution

let alein_color3='green';
if (alein_color3=='green'){
    console.log('Player eran 5 points')
}

else if (alein_color3=='yellow'){
    console.log('Player eran 10 points')

}

else {
    console.log('Player eran 15 points')

}


let alein_color4='yellow';
if (alein_color4=='green'){
    console.log('Player eran 5 points')
}

else if (alein_color4=='yellow'){
    console.log('Player eran 10 points')

}

else {
    console.log('Player eran 15 points')

}


let alein_color5='gray';
if (alein_color5=='green'){
    console.log('Player eran 5 points')
}

else if (alein_color5=='yellow'){
    console.log('Player eran 10 points')

}

else {
    console.log('Player eran 15 points')

}



// Question 28 solution

let age =10;

if (age<2){
    console.log("person is baby");
}

else if (age>=2 && age<4){
    console.log("person is toddler");
}
else if (age>=4 && age<13){
    console.log("person is kid");
}
else if (age>=13 && age<20){
    console.log("person is teenager");
}
else if (age>=20 && age<65){
    console.log("person is adult");
}
else if (age>=65){
    console.log("person is elder");
}



// Question 29 solution


let favorite_fruit =["mango","apple","banana"];

if (favorite_fruit.includes("mango")){
    console.log("You really like mangoes");
}

if (favorite_fruit.includes("apple")){
    console.log("You really like apples");
}

if (favorite_fruit.includes("watermelon")){
    console.log("You really like watermelon");
}

if (favorite_fruit.includes("pomegranate")){
    console.log("You really like pomegranate");
}
if (favorite_fruit.includes("banana")){
    console.log("You really like bananas");
}



// Question 30 Solution

let username_array = ["Taha","Saim","Salman","admin","Talha"]
for (let i in username_array){
    if (username_array[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log("Hello",username_array[i],"thank you for logging in again.")
    }
}



// Question 31 Solution

let array_for_username: string[] = ["Taha","Saim","Salman","admin","Talha"];
array_for_username.splice(0,array_for_username.length)

if (array_for_username.length !==0){

    for (let i in array_for_username){
        if (array_for_username[i]=="admin"){
            console.log("Hello admin, would you like to see a status report?")
        }
        else{
            console.log("Hello",array_for_username[i],"thank you for logging in again.")
        }
    }
}
else{
    console.log(" We need to find some user");
}



// Question 32 Solution

let current_users: string[]=["Hamza","Bilal","Abid","Adeel","Emran"];

let new_users=["Ayaan","Burhan","Zunain","Adeel","Bilal"];

for (let i in new_users){
    if (current_users.includes(new_users[i])){
        console.log("You will need to enter a new username");
    }
    else{
        console.log("Username is available.");
    }
}



// Question 33 Solution

let number_array=[1,2,3,4,5,6,7,8,9];
for (let i in number_array){
    if (number_array[i]==1){
        console.log(number_array[i].toString()+"st");
    }

    else if (number_array[i]==2){
        console.log(number_array[i].toString()+"nd")
    }
    else if (number_array[i]==3){
        console.log(number_array[i].toString()+"rd")
    }
    else{
        console.log(number_array[i].toString()+"th")
    }
}



// Question 34 Solution


let pizza_name = ['Fajita',"Tikka","BBQ"];
for (let i in pizza_name){
    console.log(pizza_name[i])
}
console.log()

for (let i in pizza_name){
    console.log("I like "+pizza_name[i]+" pizza")
}
console.log("I really love pizza!")



// Question 35 Solution 

let animal_array=["cow","cat","goat"];
for (let i in animal_array){
        console.log(animal_array[i])
}

for (let i in animal_array){
        console.log("A "+animal_array[i]+" would make a great pet.")
}
console.log()
console.log("All these animals have 2 hands and 2 legs and. All these are pet animals");



// Question 36 Solution


function make_shirt(size: number , message: string): void{
    console.log("Shirt size is",size,"Message is: "+message)
}

make_shirt(30,"Sky is Limit");



// Question 37 Solution

function makeshirt(size="large" , message="I love"): void{
    console.log("Shirt size is",size,"Message is: "+message)
}

makeshirt();
makeshirt("Medium");
makeshirt("Small","I love programming");



// Question 38 Solution

function describe_city(city_name:string , country_name="Pakistan"){
    console.log(city_name+" is in "+country_name)
}

describe_city("Karachi","Pakistan")
describe_city("Hyderabad","Pakistan")
describe_city("Tokyo","Japan")



// Question 39 Solution

function city_country(city:string,country:string){
    console.log(city+", " +country)
}

city_country("karachi", "Pakistan")
city_country("Sawat","Pakistan")
city_country("Lucerne","Switzerland")



// Question 40 Solution

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    return {
        artist,
        title,
        tracks
    };
}

const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2");
const album3 = make_album("Artist3", "Album3", 12); // Example with tracks

console.log(album1);
console.log(album2);
console.log(album3);



// Question 41 Solution

let magician_array=["Doug Henning","Siegfried & Roy","Max Maven","Eugene Burger","David Copperfield"]

function show_magicians_(arrays){
    for (let i in arrays){
        console.log(arrays[i])
    }
}

show_magicians_(magician_array)



// Question 42 Solution

let magician_array_=["Doug Henning","Siegfried & Roy","Max Maven","Eugene Burger","David Copperfield"]

function show_magicians(arrays){
    for (let i in arrays){
        console.log(arrays[i])
    }
}


function make_great(arrays2){
    for (let j in arrays2){
        arrays2[j]="Great, "+arrays2[j]
    }
}

make_great(magician_array_)
show_magicians(magician_array_)



// Question 43 soution 

let __magician_array=["Doug Henning","Siegfried & Roy","Max Maven","Eugene Burger","David Copperfield"]

let __revise_magician_array=[...__magician_array]


function make_great_(arrays2){
    for (let j in arrays2){
        arrays2[j]="Great, "+arrays2[j]
    }
}

make_great_(__revise_magician_array)

function show_magicians_(arrays){
    for (let i in arrays){
        console.log(arrays[i])
    }
}

show_magicians_(__magician_array)
console.log("")
show_magicians_(__revise_magician_array)



// Question 44 Solution

function Sandwiches(recipes) {
    for (let i in recipes){
        console.log(recipes[i]);
    }


}

Sandwiches(["egg","ketchup","carrot","vegetables","slice"])
console.log()
Sandwiches(["Manchow Soup","Peenut butter","Cheese","vegetables","slice"])
console.log()
Sandwiches(["Meat","Chicken","Cheese","olives","Swiss"])



// Question 45 Solution

function storeCarInfo(manufacturer: string, modelName: string, ...extras: any): { manufacturer: string, modelName: string, [key: string]: any } {
    const carInfo = {
        manufacturer,
        modelName,
        ...extras
    };
    return carInfo;
}

// Call the function with required information and additional name-value pairs
const carInfo = storeCarInfo("Toyota", "Camry", "color: blue", "year: 2022");

// Print the object to verify that all information was stored correctly
console.log(carInfo);

