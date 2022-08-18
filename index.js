// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
    const blocks = feet;
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = Math.abs(destination - start);
    return distanceTravelled * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet < 400) {
        return 0;
    } else if(distanceInFeet > 400 && distanceInFeet < 2000) {
        const costedDistance = distanceInFeet - 400;
        return costedDistance * 0.02;
    } else if( distanceInFeet < 2500) {
        return 25;
    }else {
        return "cannot travel that far";
    }
}




