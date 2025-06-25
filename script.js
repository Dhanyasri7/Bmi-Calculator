function calculateBmi(){
    let weightInput=prompt("Enter your weight in kg:");
    let heightInput=prompt("Enter your height in cm:");

    let weight=parseFloat(weightInput);
    let heightcm=parseFloat(heightInput);
    let height=heightcm/100;
    let bmi=weight/(height*height);

    let category="";
    let color="";
    if(bmi < 18.5){
        category="UnderWeight";
        color="#f4a261";
    }
    else if(bmi>=18.5 && bmi <24.9){
        category="NormalWeight";
        color="#2a9d8f";
    }
    else if(bmi>=25 && bmi<29.9){
        category="OverWeight"
        color="#e9c46a";
    }
    else{
        category="Obesity"
        color="#e76f51";
    }
    document.getElementById("result").innerHTML="<span style=\"color:#cec21b\">Your BMI is: "+bmi.toFixed(2)+"</span><br>"+"<span style=\"color:" + color + "\">You are in: "+ category + "</span>";
}