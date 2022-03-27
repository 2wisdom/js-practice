function Poketmon(name) {
    this.name = name;
    this.attackPoint = 50;
    this.hp = 100;
}

Poketmon.prototype.attack = function(poketmon) {
    console.log(this)
    poketmon.hp = poketmon.hp - this.attackPoint;
}
console.log(this) // Window

const 피카츄 = new Poketmon('피카츄')
const 파이리 = new Poketmon('파이리')

피카츄.attack(파이리)
피카츄.attack(파이리)

console.log('파이리의 남은 hp = ',파이리.hp)