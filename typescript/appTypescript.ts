let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
//console.log(message);


let episode: number = 4
//console.log("This is episode " + episode)


let isEnoughToBeatMF = function(parses: number) :  boolean {
    return parses < 12
}
let distance = 14
//console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? "YES" : "NO"}`) //template string


let call = (name: string) => console.log(`Do you copy, ${name}?`) //arrow function
call('R2')

function inc(speed: number, inc: number = 1) : number {
    return speed + inc
}
//console.log(inc(5,3))
//console.log(inc(5))


function countJedis(...jedis: number[]) : number {
    return jedis.reduce((a,b)=>a+b, 0)
}
//console.log(countJedis(2,3,4))