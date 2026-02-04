const amount = document.getElementById("amount")

// Manipulando o input amount pare receber somente números
amount.addEventListener("input", ()=>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})