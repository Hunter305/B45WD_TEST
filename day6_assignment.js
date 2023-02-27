//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating= rating
        rating="pg"
    }
    
}

function getPG(x){

    x.push("PG")
    return x
}
console.log(getPG(["movie"]))

const movie1 = new Movie("casino Royale","Eon Productions")
console.log(movie1)
//2. Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;

    }
}