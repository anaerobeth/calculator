function guessColor(actualResult, userGuess){
  if(actualResult === userGuess){
    return 'green';
  }
  else {
    return 'red';
  }
}

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
  if(secondNumber !== 0){
    return firstNumber / secondNumber;
  }
  else {
    return 'Undefined';
  }
}

function calculate(firstNumber, secondNumber, operation){
  var opMap = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "/": divide
  };
  return opMap[operation](firstNumber, secondNumber);
}

$("#calculator input[type='submit']").on('click', function (e){
  e.preventDefault();

  var firstNumber = $('#first-number').val();
  var secondNumber = $('#second-number').val();

  var $errorDiv = $("div.error");
  var $resultEl = $("#result");
  var $guess = $("#user-guess");

  $errorDiv.html("");
  $resultEl.html("");

  if(firstNumber !== '' && secondNumber !== ''){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    var result = calculate(firstNumber, secondNumber, $(e.currentTarget).val());

    $resultEl.html("Result: " + result).css({
      "background-color": guessColor(result, parseInt($("#user-guess").val()))
    });
  }
  else {
    $errorDiv.html("Please provide both numbers");
  }

});


