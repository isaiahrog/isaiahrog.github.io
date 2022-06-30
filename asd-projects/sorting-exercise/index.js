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
async function bubbleSort(array) {

    var sorted = false

    while (sorted === false) {
        sorted = true

        for (i = 0; i <= array.length - 2; i++) {

            if (array[i].value > array[i + 1].value) {

                swap(i, i + 1, array);
                sorted = false

                updateCounter(bubbleCounter);
                await sleep();
            }
        }

    }

}




// // TODO 3: Implement quickSort

async function quickSort(array, left, right) {
   
   
    if (array.length > 1 ) {
        
        var index = await partition(array, left, right);
            
            if (left < index - 1) {
              
                quickSort(array, left, index - 1);
            }
          
            if(index < right){
                quickSort(array, index, right)
           
            }
           
        }
            else {
            
            return array;
        }
    }
  
    //     var index = await quickSort(array - 1, left, index - 1);
    //     var index = await quickSort()



    // TODOs 4 & 5: Implement partition

async function partition(array, left, right) {

    var pivot = array[Math.floor((right + left) / 2)].value;
    while (left < right) {


        while (array[left].value < pivot) {
            left = left + 1;
        }
        while (array[right].value > pivot) {
            right = right - 1;
    
        }
        if (left < right ){

            swap(left, right, array);
            updateCounter(quickCounter);
            await sleep();
        }
    }

    return left + 1;

}




// TODO 1: Implement swap


function swap(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;


    drawSwap(array, i, j)

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