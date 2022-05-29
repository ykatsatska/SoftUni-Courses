function theSongOfTheWheels(input){
    let m = Number(input[0]);

    let combinationCounter = 0;
    let printLine = ""
    let password = "";
    let passwordFound = false;

    for (let a = 1; a < 10; a++){
        for (let b = 1; b < 10; b++){
            for (let c = 1; c < 10; c++){
                for (let d = 1; d < 10; d++){
                     if (a * b + c * d === m && a < b && c > d){
                        combinationCounter++;
                        printLine += "" + a + b + c + d + " ";

                        if (combinationCounter === 4){
                            passwordFound = true;
                            password = "" + a + b + c + d;
                        } 
                    }
                }
            }
        }
    } if (combinationCounter > 0){
        console.log(printLine); 

    }
    if (passwordFound){
        console.log(`Password: ${password}`);
    } else {
        console.log("No!");
    }
}
theSongOfTheWheels(["139"]);