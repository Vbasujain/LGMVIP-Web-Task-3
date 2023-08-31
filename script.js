


let fname = document.getElementById('fname')
let gmail = document.getElementById('gmail')
let image = document.getElementById('image')
let phone = document.getElementById('phone')
let website = document.getElementById('website')
let checkbtn1 = document.getElementById('checkbtn1')
let checkbtn2 = document.getElementById('checkbtn2')
let checkbox1 = document.getElementById('checkbox1')
let checkbox2 = document.getElementById('checkbox2')
let checkbox3 = document.getElementById('checkbox3')
let form = document.querySelector('form');
let submitbtn = document.querySelector('.submitbtn');
let idcard = document.querySelector('.idcard');

let photu
let load = function (event) {
  photu = URL.createObjectURL(event.target.files[0]);
};



submitbtn.addEventListener(
  'click',
  function () {


    let buttons = document.querySelectorAll('input[type="checkbox"]:checked');
    let arr = []
    buttons.forEach((checkbox) => {
      arr.push(checkbox.value);
      console.log(arr);
    });


    if (!fname.value || !gmail.value || !phone.value || !website.value) {
      alert(' !! Do not leave any field blank,Every field is compulsory  !!')
    }
    else {
      idcard.innerHTML +=
        `
<div class="infotag">

<img src= '${photu}'height="120px" width="120px" class="imgtag"  />

<div class="flex2">
<p class="nametag"> <u> ${fname.value} </u> </p>
<u> <p class="mailtag"> ${gmail.value} </p></u>
<p class="phonetag">phone--: +91 ${phone.value}</p>
<p class="gendertag">gender--: ${checkbtn1.checked ? checkbtn1.value : checkbtn2.checked ? checkbtn2.value : 'Others'}</p>
<p class="skilltag">Skills--: ${arr}</p>
</div>

</div>

 `

      alert('!!SUCCESS!!')

      form.reset()
    }

  });