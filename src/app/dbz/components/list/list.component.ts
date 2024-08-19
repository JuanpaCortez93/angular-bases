import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList : ICharacter[] = [];


  @Output()
  public onDeleteCharacterId:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index:string):void
  {
    this.onDeleteCharacterId.emit(index);
    console.log(index);
  }

}
