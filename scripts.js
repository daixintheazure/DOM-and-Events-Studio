// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let status = this.document.getElementById("flightStatus");

    let upButton = this.document.getElementById("up");
    let downButton = this.document.getElementById("down");
    let rightButton = this.document.getElementById("right");
    let leftButton = this.document.getElementById("left");

    let takeoffButton = this.document.getElementById("takeoff");
    let landButton = this.document.getElementById("landing");
    let abortButton = thos.document.getElementById("missionAbort");

    upButton.addEventListener("click", function(){
        prompt("it's working");
    })

    takeoffButton.addEventListener("click", function(){
        window.confirm("Confirm that the shuttle is ready for takeoff.");
    });
})