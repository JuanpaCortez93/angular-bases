import { Injectable } from "@angular/core";
import { ICharacter } from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService
{

  public characterList : ICharacter[] = [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Gokú', power: 9500},
    {id: uuid(), name: 'Vegeta', power: 7500}
  ];

  public onNewCharacter(character:ICharacter) : void
  {
    console.log(character);
    this.characterList.push(character);
  }

  public onDeleteCharacterId(id:string):void{
    console.log(id);
    const indexFind = this.characterList.findIndex(item => item.id === id);
    if(indexFind === -1) return;
    this.characterList.splice(indexFind, 1);
  }

}
