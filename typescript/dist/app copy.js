var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
//console.log(message);
var episode = 4;
//console.log("This is episode " + episode)
var isEnoughToBeatMF = function (parses) {
    return parses < 12;
};
var distance = 14;
//console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? "YES" : "NO"}`) //template string
var call = function (name) { return console.log("Do you copy, " + name + "?"); }; //arrow function
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
//console.log(inc(5,3))
//console.log(inc(5))
function countJedis() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
//console.log(countJedis(2,3,4))
