const game1 = {
    name: 'EaSports',
    studio : 'Punk Studio',
    getInfo : function() {
        return `Game ${this.name} by ${this.studio}`
    }
}

console.log(game1.getInfo());

const game2 = {
    name: 'GTA 5',
    studio : 'RockStar',

}
const game2Info = game1.getInfo.bind(game2);
console.log("BIND",game2Info());