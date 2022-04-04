const count = document.getElementById('count');

const defaultValue = 0;

let updatedValue = 0;

const minusOne = () => {
    updatedValue --;
    count.innerHTML = updatedValue;
}

const plusOne = () => {
    updatedValue ++;
    count.innerHTML = updatedValue;
}

const setReset = () => {
    updatedValue = defaultValue;
    count.innerHTML = updatedValue;
}

decrease.addEventListener("click", minusOne);
reset.addEventListener("click", setReset);
increase.addEventListener("click", plusOne);