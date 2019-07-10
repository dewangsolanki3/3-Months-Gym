


  function closeTime(){
    var d = new Date();
    var n = d.getDay();
    var now = d.getHours() + "." + d.getMinutes();
    var weekdays = [
        ["Sunday", 6.00, 12.00],
        ["Monday", 6.00, 23.00],
        ["Tuesday",6.00, 23.00],
        ["Wednesday", 6.00, 23.00],
        ["Thursday", 6.00, 23.00],
        ["Friday", 6.00, 23.00],
        ["Saturday",6.00, 23.00] 
    ];
    var day = weekdays[n];




    if (now > day[1] && now < day[2]) {
        document.getElementById("openhr").innerText = "We are Open now";
    }
     else {
        document.getElementById("openhr").innerText = "Sorry we are Closed";
    }
 
    setTimeout(closeTime, 1000);
}

closeTime();
