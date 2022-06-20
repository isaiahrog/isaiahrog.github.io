/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort (array) {
   
    var sorted = false

    while (sorted === falso) {
        sorted = true 
        
        ITERTAE i = 0 
    }


}
// WHILE  (sorted === false) {
   
//     sorted = true
  
//     ITERATE  i = 0 to i = length-2:
	
//     IF (array[i] > array[i + 1]) {
        
//         swap array[i] + array[i + 1];

//     sorted = false
    
//     }

// }
	


    



// TODO 3: Implement quickSort

function quickSort(array, j, i) {
    if ((i - j) > 0) {
        index = partition(array, j, i)

        if j < (index - 1) {
            quicksort(array, j, index - 1)

            if (index < i) {
                quicksort(array, index, i)

            }


        }


    }
}



// TODOs 4 & 5: Implement partition


// TODO 1: Implement swap


function swap(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    drawSwap()

}






///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}