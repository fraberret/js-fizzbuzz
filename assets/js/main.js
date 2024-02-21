const ul = document.getElementById("list")

//creare ciclo
for (let i = 1; i < 101; i++) {


    //se multiplo di 3 e 5 Fizz buzz
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log(`${i} FizzBuzz`);//stampa risultati
        markupItem = `<li class="box">FizzBuzz</li>`
        ul.innerHTML += markupItem

    }
    //se multiplo di 3 Fizz 
    else if (i % 3 === 0) {
        //console.log(`${i} Fizz`);//stampa risultati
        markupItem = `<li class="box bg_green">Fizz</li>`
        ul.innerHTML += markupItem
    }
    //se multiplo di 5 Buzz
    else if (i % 5 === 0) {
        //console.log(`${i} Buzz`);//stampa risultati
        markupItem = `<li class="box bg_yellow">Buzz</li>`
        ul.innerHTML += markupItem
    }
    else {

        let markupItem = `<li class="box bg_dark ">${i}</li>`
        ul.innerHTML += markupItem
    }
}
