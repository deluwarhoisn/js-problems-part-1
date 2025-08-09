/*
* year will be e leap year if the year is divisible by 4  যে বছরটি ৪ দ্বারা বিভাজ্য হবে তার একটি অধিবর্ষ হবে
*/

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLipi = isLeapYear(2025);
console.log(isLipi);


/*
* 1. those year that is not divisible by 100  and, if the year is divisible by 4: then it will be a leap year. ১. যে বছর ১০০ দ্বারা বিভাজ্য নয় এবং যদি বছরটি ৪ দ্বারা বিভাজ্য হয়: তাহলে এটি একটি অধিবর্ষ হবে।
*/


function isLearYear2(year){
    if(year % 100 !== 0 && year % 4 === 0 ){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
         return false;
    }
   
}

const isLeap = isLearYear2(2100);
const isLeap2 = isLearYear2(2400);
const isLeap3 = isLearYear2(1900);
const isLeap4 = isLearYear2(2052);
console.log(isLeap,isLeap2,isLeap3,isLeap4);