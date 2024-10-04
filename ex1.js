const a = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[a.getDate()];
console.log("Today is : "+day);
let hour = a.toLocaleString('en-US',{hour:'numeric',hour12:true});
let minute = a.getMinutes();
let second = a.getSeconds();
console.log(hour+" : "+minute+" : "+second);