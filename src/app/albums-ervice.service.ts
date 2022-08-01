import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumInterface } from './album-interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsERVICEService {

  constructor(private http:HttpClient) { }

  getAlbum(){
    let obs = this.http.get<AlbumInterface[]>('https://jsonplaceholder.typicode.com/photos')
    return obs
  }
  delateAlbum(id:number){
    return this.http.delete<AlbumInterface[]>('https://jsonplaceholder.typicode.com/photos'+id)
  }


  // likes

  like = 0

  likeIt(){
    this.like++
  }
}
