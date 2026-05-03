let btnS = document.querySelector('.btn')
console.log(btnS);

btnS.addEventListener("click", function () {
    const userConfirmed = confirm("Start The Game")
    if (userConfirmed) {
        let UserInput;
        do {
            UserInput = prompt('')
        } while (UserInput === '')
        console.log(UserInput);

    }
})