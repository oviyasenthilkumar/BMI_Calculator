let buttonEle = document.getElementById("buttonEle");
let refreshBtn = document.getElementById("refreshBtn");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let age = document.getElementById("age");
let male = document.getElementById("male");
let female = document.getElementById("female");
let cnt = document.getElementById("cnt");
let level = document.getElementById("lvl");
let resultEle = document.getElementById("bmiLvl");


function calculate(){
    if(age.value ==="" || height.value === "" || weight.value === "" || (male.checked === false && female.checked === false)){
        alert("please enter all data");
    }else{
        var bmiCalculate = weight.value / (height.value/100 ) ** 2;
       
        var result = "";
        if(bmiCalculate < 18.5){
            result = "Underweight";
        }else if(bmiCalculate >= 18.5 && bmiCalculate < 24.9){
           result = "Healthy"; 
        }else if(bmiCalculate >= 24.9 && bmiCalculate < 29.9){
            result = "Overweight"; 
        }else if(bmiCalculate >= 30){
           result = "Obesity" ; 
        }
       
        cnt.innerHTML = "Your BMI is"
        resultEle.innerHTML = Math.round(bmiCalculate * 100)/100;
        level.innerHTML = result;
    }
}

buttonEle.addEventListener("click",calculate);
refreshBtn.addEventListener("click",function refresh(){
    age.value="";
    weight.value="";
    height.value="";
    male.checked = false;
    female.checked = false;
    cnt.innerHTML="";
    resultEle.innerHTML="";
    level.innerHTML="";
})
