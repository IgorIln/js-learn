let user = {
    name: "John",
    age: 30
};

alert(user.name + " " + user.age);

delete (user.age);

alert(user.name + " " + user.age);


let game = { name: "WOW", company: "Blizzard" }

let key = "name";
let key2 = "company";
alert(key in game);

alert(key2 in game);


let user2 = {
    name: "Sam",
    age: 33,
    isAdmin: true
}

//New loop: 

for (let key in user2) {
    alert(key);
    alert(user2[key])
}


let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}

let sum = 0;
for(let sal in salaries){
    
    if(sal == 0) continue;
    else sum+= salaries[sal];
}

alert(sum);