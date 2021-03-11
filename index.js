// Code your solution in this file!
let hQ = 42;

function  distanceFromHqInBlocks(blocks) {
    if (blocks >= 42)  {
    return `${blocks}` - `${hQ}`;
    } else {
    return `${hQ}`-`${blocks}`;
    }
};

function  distanceFromHqInFeet(blocks) {
    return `${distanceFromHqInBlocks(blocks)}`* 264;
}

function  distanceTravelledInFeet(start, end) {
    if (start >= end)  {
        return (`${start}` - `${end}`) * 264;
    } else {
        return (`${end}` - `${start}`) * 264;
    }
}

function  calculatesFarePrice(start, end) {
    if  (distanceTravelledInFeet(start, end) > 2500) {
        return "cannot travel that far";
    } else if (distanceTravelledInFeet(start, end) <= 400) {
        return `${distanceTravelledInFeet(start, end)}` * 0;
    } else if ((distanceTravelledInFeet(start, end) >= 400) && (distanceTravelledInFeet(start, end) <=2000)) {
        return (`${distanceTravelledInFeet(start, end)}` - 400)*0.02;
    } else if ((distanceTravelledInFeet(start, end) >= 2000) && (distanceTravelledInFeet(start, end) <=2500)) {
        return 25;
    }
}
