const user = {


name : 'Ali',
cities :['Peshawar','Islamabad','Wah'],
printPlacesLived: function () {
    
     return this.cities.map((cities) =>{

        console.log (this.name +' has lived in '+ cities);
        
    })

//     this.cities.forEach((cities) =>{
//         console.log(this.name+ ' has lived in '+ cities);
//     });

 }
};


user.printPlacesLived();