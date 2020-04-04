let canvas = document.getElementById('tutorial'); //select canvas element
//control flow to check for browser support of canvas
if (canvas.getContext ){
    let ctx = canvas.getContext('2d'); //The Rendering Context takes one param, the type of context. For this tutorial I am using 2D.
    // drawing code
}else{
    //canvas unsupported code
}
