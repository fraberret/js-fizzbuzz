
//creare ciclo
for (let i=1; i<101; i++){
    //console.log(i);
    //se multiplo di 3 Fizz 
    if(i%3===0 && i%5===0){
        console.log(`${i} FizzBuzz`);//stampa i risultati
    }
    //se multiplo di 3 e 5 Fizz buzz
    else if (i%3===0){
        console.log(`${i} Fizz`);//stampa i risultati
    }
    //se multiplo di 5 Buzz
    else if (i%5===0){
        console.log(`${i} Buzz`);//stampa i risultati
    }
    //se non multiplo
    else {
        
        console.log(i);//stampa i risultati
    }
    


   
    
}