import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private http: HttpClient) { }
  url1="https://api.covid19api.com/world/total";
 
  result:any = [];
  ngOnInit(): void {
    this.http.get(this.url1).subscribe(data => {
      
      this.result=data;
      
  })
  
  
  }
 

}
