import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlbumInterface } from '../album-interface';
import { AlbumsERVICEService } from '../albums-ervice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albumRequest!:Subscription

  constructor(private albumServ:AlbumsERVICEService) { }

  albums:AlbumInterface[] = []

  ngOnInit(): void {
    this.albumRequest = this.albumServ.getAlbum().subscribe((res)=>{
      this.albums = res
    })
  }

  deleteFromArr(index:number){
    this.albums.splice(index,1)
  }
  deleteFromApi(id:number){
    this.albumServ.delateAlbum(id)
  }

  x = this.albumServ.like
  ilikeit(){
    this.x = this.albumServ.like
  }


  ngOnDestroy(){
    this.albumRequest.unsubscribe()
  }

}
