const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// day number to string
const dayToString = function (weekDay){
    return days[weekDay-1]
}

// month number to string
const monthToString = function (currentMonth){
    return months[currentMonth]
}

// add trailing zero for time
const checkTrailingzero = function(number){
    if (parseInt(number).toString().length == 2){
        return parseInt(number);
    }
    else{
        return "0"+parseInt(number);
    }
}

// tick second
const tickSecond = function(){
    let today = new Date();
    let secondSpan = document.querySelector("#seconds");
    // check user format 
    if (toggleValue == "locale"){
        secondSpan.innerHTML = checkTrailingzero(today.getSeconds());
    }
    else{
        pmAm = today.toLocaleString('en-US').split(" ",)[2]
        secondSpan.innerHTML = checkTrailingzero(today.getSeconds())+" "+pmAm;
    }
}

// tick minute
const tickMinute = function(){
    let today = new Date();
    let minSpan = document.querySelector("#minutes");
    minSpan.innerHTML = checkTrailingzero(today.getMinutes());
}

// tick hour
const tickHour = function(toggleValue){
    let today = new Date();
    let hourSpan = document.querySelector("#hours");
    // check user format
    if (toggleValue == "locale"){
        hourSpan.innerHTML = checkTrailingzero(today.getHours());
    }
    else{
        today = today.toLocaleString('en-US')
        hourUS = (today.split(':')[0].split(",",)[1])
        hourSpan.innerHTML = checkTrailingzero(hourUS);
    }
}

// tick day
const tickDay = function(){
    let today = new Date();
    let daySpan = document.querySelector("#day");
    daySpan.innerHTML = dayToString(today.getDay());
}

// tick month
const tickMonth = function(){
    let today = new Date();
    let monthSpan = document.querySelector("#month");
    monthSpan.innerHTML = dayToString(today.getMonth());
}

const toggleFunction = function(toggleValue){
    if (toggleValue == "locale"){
        toggleValue = "US"
    }
    else{
        toggleValue = "locale"
    }
    return toggleValue;
}

// vars
let toggleValue = "locale";
const today = new Date();

// BODY DIV
const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");
document.body.appendChild(bodyDiv);

// TIME DIV

const createTimeDiv = function(){
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("timeDiv");

    let timeParagraph = document.createElement("p");
    timeParagraph.classList.add("timeP");
    timeDiv.appendChild(timeParagraph);
    
    // hours span
    let hoursSpan = document.createElement("span");
    hoursSpan.id = "hours";
    hoursSpan.textContent = checkTrailingzero(today.getHours());
    timeParagraph.appendChild(hoursSpan);
    
    let colOneSpan = document.createElement("span");
    colOneSpan.textContent = ":";
    timeParagraph.appendChild(colOneSpan);
    
    // minutes span
    let minutesSpan = document.createElement("span");
    minutesSpan.id = "minutes";
    minutesSpan.textContent = checkTrailingzero(today.getMinutes());
    timeParagraph.appendChild(minutesSpan);
    
    let colTwoSpan = document.createElement("span");
    colTwoSpan.textContent = ":";
    timeParagraph.appendChild(colTwoSpan);
    
    // seconds span
    let secondsSpan = document.createElement("span");
    secondsSpan.id = "seconds";
    secondsSpan.textContent = checkTrailingzero(today.getSeconds());
    timeParagraph.appendChild(secondsSpan);

    bodyDiv.insertAdjacentElement("beforeend",timeDiv)


}

createTimeDiv();

// DATE DIV
const createDateDiv = function(){
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("dateDiv");

    let dateParagraph = document.createElement("p");
    dateParagraph.id = "dateP";
    dateDiv.appendChild(dateParagraph);

    // day span
    let daySpan = document.createElement("span");
    daySpan.id = "day";
    daySpan.textContent = dayToString(today.getDay());
    dateParagraph.appendChild(daySpan);
    
    let dashOneSpan = document.createElement("span");
    dashOneSpan.textContent = "-";
    dateParagraph.appendChild(dashOneSpan);

    // month span
    let monthSpan = document.createElement("span");
    monthSpan.id = "month";
    monthSpan.textContent = monthToString(today.getMonth());
    dateParagraph.appendChild(monthSpan);

    // date/year span
    let yearSpan = document.createElement("span");
    yearSpan.id = "year";
    yearSpan.textContent = today.getDate();
    dateParagraph.appendChild(yearSpan);

    bodyDiv.insertAdjacentElement("beforeend",dateDiv);

}

createDateDiv();


setInterval(function(){
    tickSecond();
    tickMinute();
    tickHour(toggleValue);
}, 1000); 
butto = document.querySelector("#togButton");
console.log(butto);
butto.addEventListener('click', function(){
    toggleValue = toggleFunction(toggleValue)
});

