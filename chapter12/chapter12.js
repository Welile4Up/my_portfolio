/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/
let trainSpeed = 250;
let trainPosition = 0;
let animation;

/*
todo: Listen for click events on the train element and
call a function named speedUp when they happen.
*/
let train = document.getElementById("train");
train.addEventListener("click", speedUp);

/*
todo: Listen for click events on the stop button element
and call a function called stopTrain when they
happen.
*/
let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    /*
    todo: Check whether the train is already going as fast
   as it can. If not, increase the speed.
    */
    /*
    If the train is already moving, stop it and then
   restart with the new speed by calling a
   function called frame.
    */
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);
    }

    function frame() {
        /*
        todo: Reposition the train and check whether the
       train is crashed.
        */
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    /*
    todo: Check the train's current position and crash it
   if it's at the end of the line.
    */
    if (currentPosition === 620) {
        alert("CRASH!");
        console.log("CRASH!");
        clearInterval(animation);
    }
}

function stopTrain() {
    /*
    todo: Test whether the train is already crashed. If
   not, stop the train.
    */
    if (trainPosition < 620) {
        clearInterval(animation);
    }
}

