import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<ICharacter> = new EventEmitter();

  public character : ICharacter = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter() : void
  {
    if(this.character.name.length === 0) return;

    this.character.id = uuid();

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0
    }

  }

}
