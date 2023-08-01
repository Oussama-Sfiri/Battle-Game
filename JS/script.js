
function Character(name, strength, health){
    this.name = name;
    this.strength = strength;
    this.health = health;

    this.attackBtn = document.querySelector(`#${this.name}-attack`);
    this.healthBtn = document.querySelector(`#${this.name}-make-health`);
    this.progress = document.querySelector(`.${this.name}-health span`);
    this.alive = document.querySelector(`#${this.name}-alive`);
};

Character.prototype.attack = function(opponent){
    opponent.health -= this.strength;
    opponent.progress.style.width = `${opponent.health}%`;
    if(opponent.health == 0){
        opponent.attackBtn.remove();
        opponent.healthBtn.remove();
        opponent.alive.style.display = "block";
        opponent.alive.innerHTML = `${opponent.name} is dead`;
    }
};

Character.prototype.makeHealth = function(){
    if(this.health < 100){
        this.health += 10;
        if(this.health > 100){
            this.health = 100;
        }
        this.progress.style.width = `${this.health}%`;
    }else{
        window.alert(`${this.name}'s health is already full !`);
    }
};

Character.prototype.status = function(){
    console.log(`Name : ${this.name}`);
    console.log(`Strength : ${this.strength}`);
    console.log(`Health : ${this.health}`);
};


let naruto = new Character("naruto", 10, 100);
let sasuke = new Character("sasuke", 5, 100);

naruto.attackBtn.addEventListener("click" , function(){
    naruto.attack(sasuke);
});

sasuke.attackBtn.addEventListener("click" , function(){
    sasuke.attack(naruto);
});

naruto.healthBtn.addEventListener("click" , function(){
    naruto.makeHealth();
});

sasuke.healthBtn.addEventListener("click" , function(){
    sasuke.makeHealth();
});

