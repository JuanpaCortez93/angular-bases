import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public heroName : string = 'Ironman';
  public realName : string = 'Tony Stark';
  public age : number = 45;


  get capitalizedName() : string {
    return this.heroName.toUpperCase();
  }


  public getHeroDescription() : string
  {
    return `${this.heroName} - ${this.age}`;
  }


  public changeHero():void {
    this.heroName = 'Spiderman';
    this.realName = 'Peter Parker'
  }

  public changeAge():void {
    this.age = 20;
  }

  public resetForm() : void
  {
    this.heroName = 'Ironman';
    this.realName = 'Tony Stark'
    this.age = 45;
  }


}
