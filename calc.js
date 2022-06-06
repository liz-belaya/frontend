let nums = [''];
let sign = '';

const out =document.querySelector('.calc-screen p');
const buttons = document.querySelectorAll('.btn');
const digit = ['0' ,'1','2','3','4','5','6','7','8','9','.'];
const math = {
    "+": nums => parseFloat(nums[0]) + parseFloat(nums[1]),
    "÷": nums => parseFloat(nums[0]) / parseFloat(nums[1]),
    '×': nums => parseFloat(nums[0]) * parseFloat(nums[1]),
    '−': nums => parseFloat(nums[0]) - parseFloat(nums[1]), 
}

document.querySelector('.ac').addEventListener('click',() => {
    nums = [''];
    sign = '';
    out.textContent = '0';
});

for (btn of buttons ){
    btn.addEventListener('click', (event) => {

        //skip if AC
        if (event.target.classList.contains('ac')) return;

        out.textContent = ''; 
        key = event.target.textContent;
        if (digit.includes(key)){
           nums[nums.length-1] += key;
           out.textContent = nums[nums.length-1];
           return;
       } 
       if ( key === "%") {
           if(!nums[1]) {
            nums[0] = parseFloat(nums[0]) / 100;
            out.textContent = nums[0];
           } else {
            nums[1] = (parseFloat(nums[1]) * parseFloat(nums[0]))/100 ;
            out.textContent = nums[1];
           }
       }
       if (key === '+/-') {
        if(!nums[1]) {
            nums[0] = parseFloat(nums[0]) * (-1);
            out.textContent = nums[0];
        } else {
            nums[1] = parseFloat(nums[1]) * (-1);
            out.textContent = nums[1];
        }
       }
       if (Object.keys(math).includes(key)) {
           if (nums.length === 2) {
            out.textContent = math[sign](nums);
            nums[0] = math[sign](nums);
            nums[1] = '';
           } else {
               nums.push('');
           }
           sign = key;   
       }
       if (key === "=") {
           out.textContent = math[sign](nums); 
       }
    })
}
