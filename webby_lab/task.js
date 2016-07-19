function Animal (name) {
    this.name = name;
}

Animal.prototype = {
    getName: function(){
       return this.name;
    }
}

function Dog(){
    Animal.apply(this,arguments);
}

Dog.prototype = {
    getName:function(){
      Animal.prototype.getName.apply(this,arguments);
        return console.log(this.name);
    },
    
    bark: function(){
      Animal.prototype.getName.apply(this,arguments);
        return console.log(this.name+ "is barking");
    }
}

var litD = new Dog('Alpha');
litD.bark();
litD.getName();