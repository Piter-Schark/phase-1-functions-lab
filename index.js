// Code your solution in this file!
const feet = 264
const hq = 42
const pricePerFoot = 0.02

function distanceFromHqInBlocks (someBlocks){
    let blocks
    if (someBlocks <=hq){
    blocks = hq - someBlocks
}
else if (someBlocks >hq) {
blocks = someBlocks - hq
}    
return blocks
}

function distanceFromHqInFeet(someFeet){
    distanceFromHqInBlocks(someFeet);
    return distanceFromHqInBlocks(someFeet) * feet;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * feet
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet (start, destination) 
    if (distanceTravelledInFeet (start, destination) <= 400){
    return 0
    }
    else if ((distanceTravelledInFeet (start, destination) > 400) && (distanceTravelledInFeet (start, destination) <=2000)){
    return (distanceTravelledInFeet (start, destination) - 400 ) * pricePerFoot
    }
    else if ((distanceTravelledInFeet (start, destination) > 2000) && (distanceTravelledInFeet (start, destination) <=2500)){
        return 25
    }
    else (distanceTravelledInFeet (start, destination) >2500)
    return 'cannot travel that far'
}