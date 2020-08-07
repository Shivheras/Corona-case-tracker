import { Component, OnInit,HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

export class WorldComponent implements OnInit {
  pieChartLabels:string[] = [];
  pieChartData:number[] = [];
  pieChart:number[] = [];
  pie:number[] = [];
  pieChartType:string = 'doughnut';
  options = {
    legend: {
        display: false
    }
};
  pieChartColor:any = [
    {
      
        
        backgroundColor: [
    ]
    }
  ]
  
  showScroll: boolean;
    showScrollHeight = 300;
    hideScrollHeight = 10;
  constructor(private http: HttpClient) { }
  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
    {
        this.showScroll = true;
    } 
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
    { 
      this.showScroll = false; 
    }
  }
  url="https://api.covid19api.com/summary";
  
  httpData:any;
  result:any = [];
  searchText;
  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.httpData=data;
      
      for(let key of this.httpData["Countries"]){
        
       
          
          for(var i in key)
          {
            if(i=="TotalConfirmed")
            {
              this.pieChartData.push(key[i])

            }
            if(i=="TotalDeaths")
            {
              this.pieChart.push(key[i])

            }
            if(i=="TotalRecovered")
            {
              this.pie.push(key[i])

            }
            if(i=="Country")
            {
              this.pieChartLabels.push(key[i])

            }
            var col = this.getRandomRgb();
            this.pieChartColor[0].backgroundColor.push(col);
            console.log("fdvdavavsaeq",this.pieChartLabels);


          
            
        }
  
      }

     
    })
    
    

  }
  scrollToTop() 
  { 
    (function smoothscroll() 
    { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) 
      {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
  
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

