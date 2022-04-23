var inputid = 0;
var blinkid = 0;

function getFocus() {
  document.getElementById(inputid).focus();
  console.log('1');
}


// const texts = ["Welcome! ", "Enter ", "1 ", "to ", "create ", "a ", "server. ", "Enter ", "2 ", "to ", "join ", "a ", "server."];
const texts = ["Welcome! ", "This ", "is ", "just ", "an ", "on-progress ", "prototype. ", "More ", "is ", "yet ", "to ", "come. ", " "];
const time = [1000, 2000, 2200, 2400, 2600, 2800, 3000, 4000, 4200, 4400, 4600, 4800, 5000];

function welCome() {
  document.getElementById('Texts').innerHTML = `
  <div class="text">
    <div class="left">
      >>
    </div>
    <div class="right">
      <span class="right" id='Welcome'></span>
      <span class="blink" id="Blink1">_</span>
    </div>
  </div>
  `;
  for (let i = 0; i < texts.length; i++) {
    setTimeout(function(){
      let var1 = texts[i].toString() + '';
      document.getElementById('Welcome').innerHTML += var1;
    }, time[i]);
  }
  newLine1();
}

function newLine1(){
  setTimeout(function(){
    inputid = Date.now();
    blinkid = Date.now();
    document.getElementById("Blink1").innerHTML = '';
    document.getElementById("Texts").innerHTML += `
      <div class="text">
        <div class="left">
          >>
        </div>
        <div class="right">
          <span class="blink" id="`+ blinkid +`">_</span>
        </div>
      </div>
    `;
    getFocus();
  }, 6000);
}

function newLine(){
  inputid = Date.now();
  blinkid = Date.now();
  document.getElementById("Texts").innerHTML += `
    <div class="text">
      <div class="left">
        >>
      </div>
      <div class="right">
        <span class="blink" id="`+ blinkid +`">_</span>
      </div>
    </div>
  `;
  getFocus();
}

setTimeout(function(){
  document.addEventListener("keyup", function(event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      document.getElementById(blinkid).innerHTML = '';
      newLine();
    };
  });
}, 6000);
