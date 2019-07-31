let mobilenet;

function predictImage(sum) {
  var pSum = sum;
  console.log(sum);
}

function calculation() {
  var num1 = 3;
  var num2 = 4;
  var sum = num1 + num2;
  predictImage(sum);
}

// function a() {
//   var str = "first";
//   b(str);
//
// }
//
// function b(l) {
//   var s = "first";
//   var concat = l + " second";
//   console.log(concat);
// }

function hello() {



  function world() {

    return world();
  }
}


function setup() {
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady() {
  console.log('Model is ready...')
}
