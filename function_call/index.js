function takeShower(){
    return "Showering"
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal","Eggs","Protein Shake"]
    return items [Math.floor(Math.random()*items.length)]
}

function wakeUp(){
    takeShower();
    eatBreakfast();
    console.log("Ready to work");
}

wakeUp();
console.log(eatBreakfast()); //cookfood was called by the variable meal