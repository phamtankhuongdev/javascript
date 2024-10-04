/*[sunday,monday,tuesday,wednesday,thurday,friday,saturday]
2014 3
2015 4
2016 5
2017 0
2018 1
.....*/
let day = new Date(2013,0,1);
console.log("The year has the first of january on Sunday:");
for (let j = 2014; j < 2050; j++) {
    day.setFullYear(j);
    if (day.getDay() == 0) {
        console.log(j);
    }
}