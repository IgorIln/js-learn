"use strict"

let now = new Date();

alert(now);

let jan01_1970 = new Date(0);

alert(jan01_1970);

//31 dec 1969

let dec31 = new Date(-24*3600*1000);

alert(dec31);

/*
Create the date with the given components in the local time zone. 
Only the first two arguments are obligatory.

    The year should have 4 digits. For compatibility,
    2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, 
    but always using 4 digits is strongly encouraged.
    
    The month count starts with 0 (Jan), up to 11 (Dec).
    
    The date parameter is actually the day of month, if absent then 1 is assumed.
    
    If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
*/

let future = new Date(2030,11,14);

alert(future);

let testDate = new Date();

testDate.setFullYear(2021,11,31);

alert(testDate);

testDate.setHours(11);

alert(testDate);