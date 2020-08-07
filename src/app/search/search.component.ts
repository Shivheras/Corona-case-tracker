import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pieChartLabels:string[] = [];
  pieChartData:number[] = [];
  options = {
    legend: {
        display: false
    }
};
  display;
  pieChartType:string = 'line';
  constructor(private http: HttpClient) { }
  url="https://api.covid19api.com/countries";
  url1="https://api.covid19api.com/dayone/country/";

  page = 1;
  pageSize =10;
  httpData:any;
  result:any = [];
  hide;
  searchText;
  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.result=data;
     
    })
    this.hide=false;
    this.display = false;
  

  }
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  pieChartColor:any = [
    {
      
        
        backgroundColor: ['rgba(255,0,0,0.3)'
    ]
    }
  ]
   getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  change(e) {

    var count= e.target.value;
    this.http.get(this.url1+count).subscribe(data => {
      this.httpData=data;
     
      console.log("fvdsfvd",this.httpData);
      
        // do your job
        for (let key of this.httpData) {
         
          for(var i in key){
            if(i=="Active")
            { 
              
             
             this.pieChartData.push(key[i]);
              
               console.log('key: ' +  i + ',  value: ' + key[i]);
            }
            if(i=="Date")
            {
              var date = key[i].slice(0,10);
              this.pieChartLabels.push(date);
             
            } 
            var col = this.getRandomRgb();
            this.pieChartColor[0].backgroundColor.push(col);
            
            
             //console.log("fdvdavavsaeq",this.pieChartColor[0].backgroundColor);
            
          }
          
            
        }
        
        console.log("fdvdavavsaeq",this.pieChartLabels);
        this.display = true;
        
        
     
    })

    
    
    
    console.log(count);
    
   
    
    // this.pieChartColor[0].backgroundColor=[];
    this.pieChartData=[];
    this.pieChartLabels=[];
  }
  
  
  
}

