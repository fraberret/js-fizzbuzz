const ul = document.getElementById("list")



//creare ciclo
for (let i = 1; i < 101; i++) {

const li = document.createElement(`li`)
    //se multiplo di 3 e 5 Fizz buzz
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log(`${i} FizzBuzz`);//stampa risultati
        //markupItem = `<li class="box">FizzBuzz</li>`
        //ul.innerHTML += markupItem
        li.append(`FizzBuzz`);
        li.classList.add('box');
        
        
    }
    //se multiplo di 3 Fizz 
    else if (i % 3 === 0) {
        //console.log(`${i} Fizz`);//stampa risultati
        //markupItem = `<li class="box bg_green">Fizz</li>`
        //ul.innerHTML += markupItem
        li.append(`Fizz`);
        li.classList.add('box','bg_green');
    }
    //se multiplo di 5 Buzz
    else if (i % 5 === 0) {
        //console.log(`${i} Buzz`);//stampa risultati
        //markupItem = `<li class="box bg_yellow">Buzz</li>`
        //ul.innerHTML += markupItem
        li.append(`Buzz`);
        li.classList.add('box','bg_yellow');
    }
    else {

        li.append(i);
        li.classList.add('box','bg_dark');
    }
    ul.append(li);
}
