function catAndMouse(x, y, z) {
    let xdistancefrommouse=z-x;
    let ydistancefrommouse=y-z;
    if(xdistancefrommouse===ydistancefrommouse){
        return 'Mouse C'
    }else if(xdistancefrommouse<ydistancefrommouse){
        return 'Cat A';
    } else{
        return 'Cat B'
    }
    }
console.log(catAndMouse(85,66,80))