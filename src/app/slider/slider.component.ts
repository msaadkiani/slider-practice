import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    imgArray: String[];
    i: number;
    length: number;
  constructor() 
  { 
      this.imgArray = [];
      this.i = 0;
      this.length = 0;
    }
    
    ngOnInit(): void 
    {
        this.imgArray = [
            "assets/Images/1.jpg", "assets/Images/2.jpg", "assets/Images/3.jpg", "assets/Images/4.jpg"
        ]
        this.length = this.imgArray.length;
  }

  onRight()
  {
      if ( this.i == this.length - 1 )
      {
          this.i = 0;
      }
      else
      this.i++;
  }

  onLeft()
  {
    if ( this.i == 0 )
       {
          this.i = this.length - 1; 
       }
    else
      this.i--;
  }

  firstImg()
  {
      this.i = 0;
  }

  secondImg()
  {
      this.i = 1;
  }
  
  thirdImg()
  {
      this.i = 2;
  }

  fourthImg()
  {
      this.i = 3;
  }
}
