//------- HTML Manupulation-------------
const body = document.body;

body.style = `background-repeat: no-repeat;
    color:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 98vh;
    max-width: 100%;`;

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.appendChild(wrapper);

wrapper.style = `border: 2px solid #fff; border-radius:15px;padding:10px;width:350px; text-align:center;margin:20px`;

wrapper.innerHTML = `<h2>Age Calculator</h2><div id="currentDate" style="margin:20px"></div></div><div><span>Enter Your DOB : </span><input type="date"style ="height: 20px;text-align:center;padding:5px; border:none;border-radius:15px; font:1.1rem bold;"></div>`;

const currentDate = document.getElementById('currentDate');
currentDate.innerHTML = 'Current Date : ' + new Date().toDateString();

const display = document.createElement('div');
display.className = 'display';
display.style = `height:25px; width:280px;margin:15px;padding:20px;font-weight:bold;`;
wrapper.appendChild(display);

const button = document.createElement('button');
button.setAttribute('type', 'submit');

button.innerText = 'Submit';
wrapper.appendChild(button);

//----------Age Calculation-----------------/

function calculator() {
    const userInput = document.querySelector('input').value;

    let userDOB = new Date(userInput);

    let d1 = userDOB.getDate();
    let m1 = userDOB.getMonth() + 1;
    let y1 = userDOB.getFullYear();
    //-------current Date----------------------
    const myDate = new Date();

    const d2 = myDate.getDate();
    const m2 = myDate.getMonth() + 1;
    const y2 = myDate.getFullYear();

    if (userInput === '' || userInput < 0 || userInput === NaN || y1 > y2) {
        display.innerHTML = ' Please enter Your Date of Birth';

    } else if (m2 > m1 && d2 < d1) {
        let m3 = m2 - 1;
        if (m2 % 2 === 0) {
            let d3 = d2 + 30
            display.innerHTML = `Your Age is : ${y2 - y1} year ${m3 - m1} Month ${d3 - d1} Days`;
        }
        if (m2 % 2 !== 0) {
            let dy3 = d2 + 31
            display.innerHTML = `Your Age is : ${y2 - y1} year ${m3 - m1} Month ${dy3 - d1} Days`;
        }
    } else if (m2 <= m1 && d2 < d1) {
        let y3 = y2 - 1;
        let m4 = (m2 + 12) - 1;

        if (m2 % 2 === 0) {
            let d4 = d2 + 30;
            display.innerHTML = `Your Age is : ${y3 - y1} year ${m4 - m1} Month ${d4 - d1} Days`;
        }
        if (m2 % 2 !== 0) {
            let dy4 = d2 + 31;
            display.innerHTML = `Your Age is : ${y3 - y1} year ${m4 - m1} Month ${dy4 - d1} Days`;
        }
    } else if (m2 < m1 && d2 > d1) {
        let y4 = y2 - 1;
        let m5 = m2 + 12;
        display.innerHTML = `Your Age is : ${y4 - y1} year ${m5 - m1} Month ${d2 - d1} Days`;
    } else {
        userAge();

    }
    function userAge() {
        display.innerHTML = `Your Age is : ${y2 - y1}Year, ${m2 - m1} Month, ${d2 - d1} Days`;
    }
}
button.addEventListener('click', calculator);
