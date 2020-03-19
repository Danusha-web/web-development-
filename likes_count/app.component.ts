import { Component } from '@angular/core';
// import { onFavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite : false ,
    isLiked : false,
    noOfLikes : 0
  }
  // onFavoriteChanged(eventArgs : onFavoriteChangedEventArgs){
  //   console.log("Favorite changed", eventArgs);
  // }
  
}
