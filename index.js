let text = document.querySelector('#text');
let p = document.querySelector('#p');
let button = document.querySelector('#button');
let calculate = () =>{
    let arr = text.value;
    let wordTrim = arr.replace(/\s+/g, " ");
    let ans = wordTrim.split(" ");
    let a = ans.length;
    if(ans[0] == ""){
        a = 0;
    }
    p.innerHTML = a;
      
    
}
button.addEventListener('click', calculate);
