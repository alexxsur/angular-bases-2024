import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public id: string = '';
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase()
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'iroman';
    this.age = 45;
  }
}
