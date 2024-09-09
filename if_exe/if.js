//1
const health = 12;
if(health > 10)
{
    console.log("player is strong");
}
else
{
    console.log("player is weak");
}


//2

const playerGold = 12;
if(playerGold > 1&&playerGold < 100)
{
    console.log("player is rich");
}
else
{
    console.log("player is poor");
}
//3
const weather = "nice";
const timeOfDay = "night"; 

if(weather == "nice")
{
    if(timeOfDay = "morning"){
                console.log("continue adventure");

    }
    else{
        console.log("seek shelter");
    }
}else{
    console.log("seek shelter");
}
//4
const playerWeapon = "strong"
const enemyrWeapon = "weak"

if(playerWeapon == "strong")
    {
        if(enemyrWeapon = "weak"){
                    console.log("advantage");
    
        }
        else{
            console.log("tie");
        }
    }else{
        console.log("weaker");
    }

    //5
    const age = 17
    if(age >=13 && age<=19)
    {
        console.log("age in range");
    }else{
        console.log("age not in range");
    }
    //6
    const score = 170
    if(score >=50)
    {
        console.log("high score");
    }else{
        console.log("low score range");
    }
    //7
    const numOfEnemies = 3
    numOfEnemies%2==0 ? console.log("even") :console.log("odd");
    //8
    const charecterAge = 8
    if(charecterAge<12)
    {
        console.log("youngling")
    }
    else if(charecterAge<20)
    {
        console.log("adolesent")
    }else{
        console.log("adult")
    }
//9

const battleSkill = 88;
battleSkill>70 ? console.log("skilled warrior") :console.log("trin harder");

//10
const sessionDuration = 88;
if(sessionDuration<90)
    {
        console.log("short")
    }
    else if(charecterAge<150)
    {
        console.log("moderte")
    }else{
        console.log("marathon")
    }

    //11
    const totalPotions = 9;
    const usedPotions = 8;

    if(usedPotions >= totalPotions)
    {
        console.log("out of potions")

    }
    else{
        console.log("potions available")

    }
    //12

    const playerAge = 17
    const minAge = 18

    if(playerAge < minAge)
    {
        console.log("too young, can not play")
    }
    else{
        console.log("old enough, can play")

    }

    //13 
    const dayOfTheWeek = "tuesday";

    if(dayOfTheWeek == 'sunday' ||dayOfTheWeek=="satursay")
    {
        console.log("special events happening")

    }else{
        console.log("regular weekday")

    }
    //14
    const gameYear = 1200
    if(gameYear >= 900 &&gameYear<=1500)
        {
            console.log("medieval times")
    
        }else{
            console.log("regular weekday")
    
        }
        //15
        const charecterClass = "warrior"
        const charechterLevel = 15

        if(charecterClass == "warrior" || charechterLevel>=10)
        {
            console.log("powerful warrior")
    
        }else{
            console.log("average charecter")
    
        }
        //16
        const playerHealth = 75
        const enemyCount = 2

        if(playerHealth>50 &&enemyCount<3)
        {
            console.log("ready for battle")
    
        }else{
            console.log("proceed with caution")
    
        }

        //17

        const questprogress = 100
        const questDifficulty = 3

        if(questprogress ==100 &&questDifficulty<=5)
        {
            console.log("completed")
    
        }else{
            console.log("in progress")
    
        }
        //18
        const inventorySize = 85
        if(inventorySize >=90)
        {
            console.log("almost full")
    
        }
        else{
            console.log("plenty of space left")
        }