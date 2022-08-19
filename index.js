// Code your solution in this file!
function distanceFromHqInBlocks(blocks, hq = 42) {
    return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(feet, otherValue = 42) {
    return distanceFromHqInBlocks(feet, otherValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(start, destination);
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
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




