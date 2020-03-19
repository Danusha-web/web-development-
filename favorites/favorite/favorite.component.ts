import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles : [
    `.glyphicon{
      color: green
  }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated

})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isFavorite = !this.isFavorite;     //for toggling the action
    this.change.emit({newValue: this.isFavorite});

      }
}
export interface onFavoriteChangedEventArgs{
  newValue : boolean
}
