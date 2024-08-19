import { Component } from "@angular/core";
import { ICharacter } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html'
})
export class MainPageComponent {

  constructor(private readonly _dbzService:DbzService){}


  get characterList() : ICharacter[]
  {
    return this._dbzService.characterList;
  }

  public onDeleteCharacterId(id:string)
  {
    return this._dbzService.onDeleteCharacterId(id);
  }

  public onNewCharacter(character:ICharacter)
  {
    return this._dbzService.onNewCharacter(character);
  }


}
