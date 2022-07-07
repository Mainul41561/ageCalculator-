const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Declaring Calculate Age function

function calculateAge() {
    let todayDate = new Date();
    let inputDate = new Date(document.getElementById('inputDate').value);
    let totalMonths, totalDays, totalYears;

    // inputing data from user
    let birthDate = inputDate.getDate();
    let birthMonth = inputDate.getMonth() + 1;
    let birthYear = inputDate.getFullYear();

    // curreent data 
    let currentYear = todayDate.getFullYear();
    let currentMonth = todayDate.getMonth() + 1;
    let currentDate = todayDate.getDate();

    checkLeapYear(currentYear);

    //Apply validation on date
    if(birthYear > currentYear ||(birthMonth > currentMonth && birthYear == currentYear) || (birthDate > currentDate  && birthMonth == currentMonth && birthYear == currentYear)){
        alert("Please provide a valid data");
        return displayDOB("_", "_", "_");
    }

    // Calculating data from user

    totalYears = currentYear - birthYear;
    if(currentMonth >= birthMonth){
        totalMonths = currentMonth - birthMonth;
    } else{
        totalYears--;
        totalMonths = 12 + currentMonth - birthMonth;
    }

    if(currentDate >= birthDate){
        totalDays = currentDate = birthDate;
    }else{
        totalMonths--;
        let days = months[currentMonth -2];
        totalDays = days + currentDate - birthDate;

        if(totalMonths < 0) {
            totalMonths = 11;
            totalYears--;
        }
    }

    displayDOB(totalDays, totalMonths, totalYears);

}

// making leap year checking function

function checkLeapYear(year) {
    if(year % 4 == 0 || (year%100 == 0 && year%400 ==0 )){
        months[1] = 29;
    }else{
        months[1] = 28;
    }
}


function displayDOB(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}