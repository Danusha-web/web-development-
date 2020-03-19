import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() isLiked : boolean
  @Input() noOfLikes : number
  constructor() { }

  ngOnInit(): void {
  }
  onClick() { 
    this.noOfLikes+= (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;     //for toggling the action



      }

}
