const day = new Date();
console.log(day.toLocaleString('en-US',{day:'2-digit',month:'2-digit',year:'numeric'}));