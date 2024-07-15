
const myContainer = document.getElementById("my-container");

    for (let i = 1; i <= 100; i++){

        let mySquare = document.createElement("div");
        mySquare.classList.add("square", "my-bg-standard");
        myContainer.append(mySquare);

        if(i % 3 === 0 && i % 5 === 0){
            mySquare.append("FizzBuzz");
            mySquare.classList.replace("my-bg-standard", "my-bg-fizzbuzz");
        }
            
        else if(i % 3 === 0){
            mySquare.append("Fizz");
            mySquare.classList.replace("my-bg-standard", "my-bg-fizz");
        }

        else if(i % 5 === 0){
            mySquare.append("Buzz");
            mySquare.classList.replace("my-bg-standard", "my-bg-buzz");
        }

        else{
            mySquare.append(i);
        }
    }
