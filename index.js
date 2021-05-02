const result = document.getElementById('result');
const numBtns = document.querySelectorAll('.keybord button.num');
const opeBtns = document.querySelectorAll('.keybord button.ope');
const deleteBtn = document.querySelector('.outputSreen i');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');


numBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        result.value += parseInt(btn.textContent);
    })
})

opeBtns.forEach(function (opeBtn) {
    opeBtn.addEventListener("click", function () {
        result.value += opeBtn.getAttribute('data-ope');
    })
})

clearBtn.addEventListener('click', function () {
    result.value = null;
})


equalBtn.addEventListener('click', function () {
    if (result.value == null || result.value == '') {
        return null
    }
    result.value = eval(result.value);
})

deleteBtn.addEventListener('click', function () {
    let resultVal = Array(result.value)[0];
    result.value = Math.trunc(resultVal / 10);
    if (result.value == 0) {
        result.value = null
    } else if (result.value == null) {
        return null
    }
})

