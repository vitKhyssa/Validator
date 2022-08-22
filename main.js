// const btnArr =[{
//     element: btn_one,
//     removeClass:[
//         {element: step_one , stili: 'step_one' },
//     ],
//     addClass:[
//         {element: step_two, stili: 'step_two'},
//
//     ]
// },{
//     element: btn_two,
//     removeClass: [
//         {element: step_two , stili: 'step_two'},
//     ],
//     addClass: [
//         {element: step_tree , stili: 'step_tree'}
//     ]
// },{
//     element: last_one,
//     removeClass: [
//         {element: step_tree , stili: 'step_tree'}
//     ] ,
//     addClass: [
//         {element: step_two , stili: 'step_two'}
//     ]
// } , {
//     element: last_two,
//     removeClass: [
//         {element: step_two , stili: 'step_two' }
//     ],
//     addClass: [
//         {element: step_one , stili: 'step_one'}
//     ]
// }]
//
// btnArr.forEach(({element , addClass , removeClass})=>{
//     element.addEventListener('click' , ()=>{
//         removeClass.forEach(({element , stili})=>{
//             delClass(element , stili)
//         })
//     })
//     addClass.forEach(({element,stili})=>{
//         getClass(element,stili)
//     })
// })
const btn_one = document.getElementById('btn_next_one')
const btn_two = document.getElementById('btn_next_two')
// const btn_tree = document.getElementById('btn_next_tree')
const last_one = document.getElementById('btn_last_one')
const last_two = document.getElementById('btn_last_two')
const step_one = document.querySelector('.step_one')
const step_two = document.querySelector('.step_two')
const step_tree = document.querySelector('.step_tree')
const linia_one = document.querySelector('.pervaia')
const linia_two = document.querySelector('.vtoraia')
const kub_dva = document.querySelector('.kub_dva')
const kub_tri = document.querySelector('.kub_tri')
const mail = document.getElementById('mail')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')
const done = document.getElementById('confirm')
const ok_mail = document.getElementById('ok_mail')
const ok_password = document.getElementById('ok_password')
const ok_confirm = document.getElementById('ok_confirm')
const hello = "hello world."
console.log(hello.length);
console.log(hello.length - 2)
console.log(hello.indexOf('.', hello.length - 2));
function getClass(div, stili) {
    div.classList.add(stili)
}
function delClass(div, stili) {
    div.classList.remove(stili)
}
const wrong = "Email is wrong"
function isEmailValid(mail, ok_mail) {
    const hasAron = mail.includes("@")
    const aronIndex = mail.indexOf("@")
    const aronIsFour = mail.indexOf("@") >= 3
    const countAron = mail.indexOf("@", aronIndex + 1) === -1
    const hasDotAfterAron = mail.indexOf(".", aronIsFour + 3) !== -1
    if (mail.value === "" || !hasAron || !aronIsFour || !countAron || !hasDotAfterAron) {
        ok_mail.textContent = wrong
        return false;
    } else {
        ok_mail.textContent = ""
        return true
    }
}
function checkHasLower(password){
    const pasValue = password.split("");
    let oneLower = false;
    pasValue.forEach(item => {
        if (item === item.toLowerCase())
            oneLower = true;
    })
    return oneLower
}
function checkHasUpper(password){
    const pasValue = password.split("")
    let oneUpper = false;
    pasValue.forEach(item =>{
        if ( item === item.toUpperCase())
            oneUpper = true
    })
    return oneUpper;
}
function checkHasHumber(password){
    const pasValue = password.split("")
    let oneNumber = false;
    pasValue.forEach(item =>{
        if (!Number.isNaN(parseInt(item)))
            oneNumber = true;
    })
    return oneNumber
}
function checkLength(password){
    return password.length >= 4 && password.length <= 8
}
function isPasswordValid(password, ok_password) {
    if (password === "") {
        ok_password.textContent = "Password wrong"
        return false
    } else if (!checkHasLower(password)){
        ok_password.textContent = "Turn one lower"
        return false
    }else if (!checkHasUpper(password)){
        ok_password.textContent = "Turn one upper"
        return false
    }else if (!checkHasHumber(password)){
        ok_password.textContent = "Turn one number"
        return false
    }else if (!checkLength(password)){
        ok_password.textContent = "Turn then 4 to 8"
        return false
    }
    else {
        ok_password.textContent = "Checked"
        return true
    }
}
function isPasswordSame(password, confirm) {
    if (password !== confirm) {
        ok_confirm.textContent = "Password not a same"
    } else {
        ok_confirm.textContent = "Done"
        return true
    }
}

function isFormValid() {
    return isEmailValid(mail.value, ok_mail) && isPasswordValid(password.value, ok_password) && isPasswordSame(password.value, confirm.value);
}
function getFormClick(){
     if (isFormValid()) {
         getClass(step_one, 'none_step')
         getClass(step_tree, 'none_step')
         delClass(step_two, 'none_step')
         getClass(linia_one, 'kub')
         getClass(kub_dva, 'kub')
     }
 }
btn_one.addEventListener('click', () => {
   getFormClick()
})
password.addEventListener('input', () =>{
    getFormClick()
})

confirm.addEventListener('input' , () =>{
    getFormClick()
})



btn_two.addEventListener('click', () => {
    getClass(step_one, 'none_step')
    getClass(step_two, 'none_step')
    delClass(step_tree, 'none_step')
    getClass(linia_two, 'kub')
    getClass(kub_tri, 'kub')
})
last_two.addEventListener('click', () => {
    getClass(step_one, 'none_step')
    getClass(step_tree, 'none_step')
    delClass(step_two, 'none_step')
    delClass(kub_tri, 'kub')
    delClass(linia_two, 'kub')
})
last_one.addEventListener('click', () => {
    delClass(step_one, 'none_step')
    getClass(step_two, 'none_step')
    getClass(step_tree, 'none_step')
    delClass(kub_dva, 'kub')
    delClass(linia_one, 'kub')
})
console.log("number" , Number)

