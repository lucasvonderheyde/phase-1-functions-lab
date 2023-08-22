// Code your solution in this file!
function distanceFromHqInBlocks(blockLocation1) {
    const headquarters = 42
    return Math.abs(headquarters - blockLocation1)
}

function distanceFromHqInFeet(blocksTraveled) {
    const blockLength = 264
    return distanceFromHqInBlocks(blocksTraveled) * blockLength
}

function distanceTravelledInFeet(start, end) {
    const blockLength = 264
    return Math.abs(start * blockLength - end * blockLength)
}

function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
    
    if (feetTraveled < 400) {
        return 0
    }
    
    else if (400 < feetTraveled && feetTraveled < 2000) {
        return .02 * (feetTraveled - 400)
    }

    else if (2000 < feetTraveled && feetTraveled < 2500) {
        return 25
    }

    else if (2500 < feetTraveled) {
        return "cannot travel that far"
    }
}