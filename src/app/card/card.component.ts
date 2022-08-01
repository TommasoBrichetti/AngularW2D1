import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlbumsERVICEService } from '../albums-ervice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() album:any
  @Input() index:any
  @Output() customEvent=new EventEmitter()
  @Output() customEvent2=new EventEmitter()
  @Output() customEvent3=new EventEmitter()

  constructor(private albumServ:AlbumsERVICEService) { }

  ngOnInit(): void {
  }

  delate(){
    this.customEvent.emit(this.index)
    this.customEvent2.emit(this.album.id)
  }

  like(){
    this.albumServ.likeIt()
    this.customEvent3.emit(null)
  }

}
