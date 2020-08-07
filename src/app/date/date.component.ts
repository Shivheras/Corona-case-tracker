import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  model:Date;
  model2 :Date;
  start:any;
  end:any;
  country:any;
  constructor(private http: HttpClient,public datePipe:DatePipe) { }
  url="https://api.covid19api.com/countries";
  url1="https://api.covid19api.com/country/";

  
  httpData:any;
  result:any = [];
  searchText;
  sd:any=[];
  ed:any=[];
  page = 1;
  pageSize =10;
  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.result=data;
     
    })
    
    
  

  }
  change(e) {
    var count= e.target.value;
    this.country=count
    console.log(count);
  }
  
  click()
  {
    
    


    for(var key in this.model){
      if(this.model.hasOwnProperty(key)){
          var value = this.model[key];
         
            

          this.sd.push(value);

          
      }

    }
    for(var key in this.model2){
      if(this.model.hasOwnProperty(key)){
          var value2 = this.model2[key];
          this.ed.push(value2);
           console.log(key,value2);
      }

    }
    
    
           console.log("this is start date",this.sd.join());
          
     
      this.start = this.datePipe.transform(this.sd.join(), 'yyyy-MM-dd');
      console.log(this.start);
      this.end = this.datePipe.transform(this.ed.join(), 'yyyy-MM-dd');
      console.log(this.end);
       

       this.http.get(this.url1+this.country+"/status/confirmed/live?from="+this.start+"T00:00:00Z&to="+this.end+"T00:00:00Z").subscribe(data => {
        this.httpData=data;
       console.log(this.httpData);
      })
      this.sd=[];
      this.ed = [];
  }

 
}
