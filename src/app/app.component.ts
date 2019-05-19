import { Component, OnInit } from '@angular/core';
import { HttpServiceService, Post } from './http-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputid:number;
  post:Post[];
  constructor(private postService:HttpServiceService){}

  ngOnInit(){

  }

  getPostDetails(){
     this.postService.getPost(this.inputid).subscribe(
      data=>{
        this.post=data;
        console.log(this.post);
      }

      
    );
  }
}
