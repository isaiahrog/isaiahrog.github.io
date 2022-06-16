// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // Multiple TODOs: Call your apply function(s) here
   
    applyFilterNoBackgroud(reddify);
    applyFilterNoBackgroud(decreaseBlue);
    applyFilterNoBackgroud(increaseGreenByBlue);

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
    for (var r = 0; r < image.length; r++) {
       
        var row = image[r];

        for (var c = 0; c < row.length; c++) {
            var rgbstring  = image[r][c]; 

            var rgbNumbers = rgbStringToArray(rgbstring);
            
            filterFunction(rgbNumbers);

            image[r][c] = rgbArrayToString(rgbNumbers);

            
        }
    }
}
    

     



// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction) {

    var backgroundColor = image[0][0];

    for (var r = 0; r < image.length; r++) {

        var row = image[r]

        for (var c = 0; c < row.length; c++) {
            
            if (image[r][c] !== backgroundColor) {
                
                var rgbdtring = image[r][c]

                var rgbNumbers = rgbStringToArray(rgbstring);

                image[r][c] = rgbArrayToString(rgbNubers);


            }

        }

    }

}


// TODO 5: Create the keepInBounds function

function keepInBounds(nun) {
    if (nun < 0) {
        return 0;

    }
    else if (num > 255) {
        return 255;
    }
    else {
        return num;

    }


}

// TODO 3: Create reddify function

function reddify(arr) {
    arr[RED] = 200
}

// TODO 6: Create more filter functions

function decreaseBlue(arr) {
    arr[BLUE] = keepInbounds(arr[blue] - 50);

}

function increaseGreenByBlue(arr) {
    arr[GREEN] + keepInBounds(arr[BLUE] + arr[GREEN]);
}

// CHALLENGE code goes below here
