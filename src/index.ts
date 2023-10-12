import { Container, injectable, inject } from './lib/ioc';

interface Weapon {
  attack(): string;
}
interface ProjectileWeapon {
  launch(): string;
}

@injectable()
class Sword implements Weapon {
  attack() {
    return 'Slashing with a sword!';
  }
}

@injectable()
class Bow implements ProjectileWeapon {
  launch() {
    return 'Shooting with a bow and arrow!';
  }
}

interface Warrior {
  fight(): string;
  fire(): string;
}

@injectable()
class Samurai implements Warrior {
  private katana: Weapon;
  private bow: ProjectileWeapon;

  constructor(
    @inject('Weapon') katana: Weapon,
    @inject('ProjectileWeapon') bow: ProjectileWeapon
  ) {
    this.katana = katana;
    this.bow = bow;
  }

  fight() {
    return `Samurai is ${this.katana.attack()}`;
  }

  fire() {
    return `Samurai is ${this.bow.launch()}`;
  }
}

const container = new Container();

container.bind("Weapon", Sword);
container.bind("ProjectileWeapon", Bow);
container.bind("Warrior", Samurai);

const samurai = container.get("Warrior");

console.log(samurai.fight());
console.log(samurai.fire());
