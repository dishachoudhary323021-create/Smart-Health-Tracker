document.getElementById("welcome").innerText =
"Welcome " + localStorage.getItem("loggedInUser");

function calculateBMI(){


    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;

    let bmi = w/(h*h);
    let category="";
    let exercise="";

    if(bmi<18.5){
        category="Underweight";
        exercise="Strength training recommended.";
    }
    else if(bmi<24.9){
        category="Normal";
        exercise="Maintain balanced lifestyle.";
    }
    else{
        category="Overweight";
        exercise="Cardio 30 mins daily recommended.";
    }

    document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2) + " ("+category+")";
    document.getElementById("exerciseTip").innerText = exercise;

    // 🔥 DIET LOGIC
    let dietText = "";

    if(bmi < 18.5){
        dietText = `
        <b>Breakfast:</b> Milk + Banana + Peanut Butter <br>
        <b>Lunch:</b> Rice + Dal + Paneer <br>
        <b>Dinner:</b> Roti + Vegetables + Curd
        `;
    }
    else if(bmi < 24.9){
        dietText = `
        <b>Breakfast:</b> Oats + Fruits <br>
        <b>Lunch:</b> Roti + Dal + Sabzi <br>
        <b>Dinner:</b> Salad + Soup
        `;
    }
    else{
        dietText = `
        <b>Breakfast:</b> Green Tea + Fruits <br>
        <b>Lunch:</b> Brown Rice + Vegetables <br>
        <b>Dinner:</b> Salad + Soup (Light Meal)
        `;
    }

    document.getElementById("dietPlan").innerHTML = dietText;
}


// -------- Water --------
function calculateWater(){
    let w=waterWeight.value;
    let water=w*0.033;
    waterResult.innerText="Drink "+water.toFixed(2)+" Liters daily";

    document.getElementById("waterProgress").value=water.toFixed(1);
}

function startReminder(){
    setInterval(function(){
        alert("Time to Drink Water 💧");
    },60000); // every 1 minute (demo)
}

// -------- Calories --------
function calculateCalories(){
    let a=age.value;
    let g=gender.value;
    let w=calWeight.value;
    let h=calHeight.value;

    let bmr;

    if(g==="male")
    bmr=10*w+6.25*h-5*a+5;
    else
    bmr=10*w+6.25*h-5*a-161;

    calorieResult.innerText=
    "Daily Calories: "+Math.round(bmr)+" kcal";
}

// -------- Dark Mode --------
function toggleMode(){
    document.body.classList.toggle("dark");
}

function logout(){
    window.location="login.html";
}

// -------- Auto Health Tips --------
let tips=[
"Drink 8 glasses of water daily.",
"Sleep 7-8 hours.",
"Exercise regularly.",
"Avoid junk food.",
"Take breaks from screen."
];

let i=0;
setInterval(function(){
    document.getElementById("tipBox").innerText=tips[i];
    i=(i+1)%tips.length;
},4000);


