const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(6));

const squareArrow2 = (x) => x * x;

console.log(squareArrow2(7));


const getFirstName = () =>{

        let firstName;
        let fullName = "Ali Baba";
        if (fullName){
        firstName = fullName.split(' ')[0]
        }
        return firstName;
}


console.log(getFirstName())