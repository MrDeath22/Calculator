let fNum = '';
let sNum = '';
let option = '';
let finish = false;

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let action = ['-', '+', 'x', '/'];

let output = document.querySelector('.number');

// clear btn

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

function clearAll() {
   fNum = '';
   sNum = '';
   option = '';
   finish = false;
   output.textContent = 0;
}

// tap btns

let tap = document.querySelector('.angry-grid');
tap = addEventListener('click', tapBtn);

function tapBtn() {
   let key = event.target.textContent;

   if (numbers.includes(key)) {
      if (sNum === '' && option === '') {
         fNum += key;

         output.textContent = fNum; 
      } else if (!fNum == '' && !sNum == '' && finish) {
         sNum = key;
         finish = false;
         output.textContent = sNum;
      } else {
         sNum += key;
         output.textContent = sNum;
      }
      console.log(fNum, sNum, option);
      return;
      
   }

   if (action.includes(key)) {
      option = key;
      output.textContent = option;
      console.log(option);
      return;
   }

   if (key === '=') {
      switch (option) {
         case '+':
            fNum = fNum + sNum;
            break;
         case '-':
            fNum = fNum - sNum;
            break;
         case 'x':
            fNum = fNum * sNum;
            break;
         case '/':
            fNum = fNum / sNum;
            break;
      }
      finish = true;
      output.textContent = fNum;
      console.log(fNum, sNum, option);
   }
}