//Inputs
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

/*const yearSmallTag =  document.querySelector('#year-small');
const monthSmallTag =  document.querySelector('#month-small');
const daySmallTag =  document.querySelector('#day-small'); */

const hTags = document.querySelectorAll('h5');

const inputs = document.querySelectorAll('input');

//Output
const yearOutput = document.getElementById('number-of-years');
const monthOutput = document.getElementById('number-of-months');
const dayOutput = document.getElementById('number-of-days');

// Current Date vars
const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const submitBtn = document.querySelector('#submit-btn').addEventListener('click', handleEvent);

function validate(){
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if(!i.value){                                                           
        parent.querySelector('small').innerText = "This field is required";
        i.style.borderColor = 'red';
        parent.querySelector('h5').setAttribute('class', 'h5-tags');
        validator = false;

        } else if(monthInput.value > 12){
            monthInput.style.borderColor = 'red';
            monthInput.parentElement.querySelector('small').innerText = "must be a valid month";
            monthInput.parentElement.querySelector('h5').setAttribute('class', 'h5-tags');
            validator  = false; 
        } else if(dayInput.value > 31 || dayInput.value > months[monthInput.value - 1] ){
            dayInput.style.borderColor = 'red';
            dayInput.parentElement.querySelector('small').innerText = "must be a valid day";
            dayInput.parentElement.querySelector('h5').setAttribute('class', 'h5-tags');
            validator  = false;   
        } else if(yearInput.value > currentYear){
            yearInput.style.borderColor = 'red';
            yearInput.parentElement.querySelector('small').innerText = "must be a valid year";
            yearInput.parentElement.querySelector('h5').setAttribute('class', 'h5-tags');
            validator = false;
        } else {
            parent.querySelector('small').innerText = "";
            i.classList.add('validated');
            parent.querySelector('h5').classList.remove('h5-tags');
            validator = true;      
        }
    });
    return validator;
}


function handleEvent(e){
e.preventDefault();
if(validate()){
    if(dayInput.value > currentDay){
        currentDay = currentDay + months[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(monthInput.value > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    
    const d = currentDay - dayInput.value;
    const m = currentMonth - monthInput.value;
    const y = currentYear - yearInput.value;
    
    yearOutput.innerText = y;
    monthOutput.innerText = m;
    dayOutput.innerText = d;
}

}