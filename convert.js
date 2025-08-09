// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;  //12 কে ভাগ ভাগ করছি ৭৫ ইঞ্চিকে.
    return feet;
}
const shovoHeight = inchToFeet(75);
console.log(shovoHeight);

//উত্তর==6.25


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch.'
    return result;
}

const shuvoHeight = inchToFeet(75);
const shovoHeight2 = inchToFeet2(75);