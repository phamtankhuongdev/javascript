const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date();
firstDate.setHours(0,0,0,0);
const secondDate = new Date(2024, 11, 25);

const diffDays = Math.round((secondDate - firstDate) / oneDay);
console.log(diffDays);