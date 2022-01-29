var targetWord = "READY";
const letter_count = 5;

function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keydown', function(event) {
        if (event.key === "Backspace") {
          inputs[i].value = '';
          if (i !== 0)
            inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1)
              inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }
  //OTPInput();

  function control(rowOrder){
      var word = "";
    for(var i = 1; i <= letter_count; i++){
        var letter = $('#' + rowOrder + '_' + i).val();
        if(letter === targetWord[i-1]){
          word += letter;
            $('#' + rowOrder + '_' + i).css("background-color", "green");
        }
        else if(targetWord.includes(letter)){
            $('#' + rowOrder + '_' + i).css("background-color", "RGB(181, 159, 59)");
        }
        
    }
    if(word === targetWord){
      alert("you win!!");
    }
    console.log(word);

  }

