import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?:string;
  public heroNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Hawkeye'];


  public removeLastHero() : void
  {
    if(this.heroNames.length > 0)
    {
      const deletedHero = this.heroNames.pop();
      this.deletedHero = deletedHero;
    }
  }

}
