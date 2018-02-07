function theTime(){
    var hour = document.getElementById("hour").value;
    var minutes = document.getElementById("minutes").value;
    var ampm = document.getElementById("am/pm").value;    
    console.log(hour, minutes, ampm);

    if(minutes < 30){
        var res = `The current time is just passed ${hour}`;
        document.getElementById("response").innerHTML = res;
    }
    else{
        hour++;
        var res = `The current time is almost ${hour} ${ampm}`;
        document.getElementById("response").innerHTML = res;
    }
}