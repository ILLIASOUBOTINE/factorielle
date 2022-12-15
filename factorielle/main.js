

{/* <input class="inp_text" type="text">
    <button class="btn_click" type="button">click!</button>
    <h3 class="h_result"></h3> */}


const inpText = document.querySelector('.inp_text');
const btnClick = document.querySelector('.btn_click');
const hResult = document.querySelector('.h_result');


function foo(num) {

  if (num === 1 || num === 0) {
    return 1;
  }else {
    
     return num*foo(num - 1);
  }
  
}


function summFactorial(num) {
  let n = 1;
  let result = 0;
  while(n <= Number(num)){
    result +=foo(n);
    n++;
    // console.log(result);
  }
  return result;
}

btnClick.addEventListener("click", () => {
  hResult.innerHTML = '';
  hResult.innerHTML = summFactorial(Number(inpText.value));
  inpText.value = '';

})

console.log(foo(5));
console.log(summFactorial(7));