// for(var num1 = 1; num1 <25; num1++){
//     message = ""
//     for(var num2=1; num2 <= num1; num2++){
//         message = message + num2 + " ";
//     }
//     console.log(message);
// }


function makeMessage(test, message){
    console.log(message);
    if(test){
    console.log("Evaluated as true");
    } else {
        console.log("Evalulated as false");
    }

}
makeMessage(NaN, "Evaluate this");

makeMessage(true);
makeMessage(false);
makeMessage(true);
makeMessage(false);
makeMessage(true);

