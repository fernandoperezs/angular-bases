import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public nameIsVisible = true;
  public ageIsVisible = true;
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.nameIsVisible = false;
  }

  changeAge(): void {
    this.age = 25;
    this.ageIsVisible = false;
  }
  resetValues(): void {
    this.age = 45;
    this.name = 'Ironman';
    this.ageIsVisible = true;
    this.nameIsVisible = true;
  }
}
