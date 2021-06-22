import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'slider-multiple',
  templateUrl: './slider-multiple.component.html',
  styleUrls: ['./slider-multiple.component.css']
})
export class SliderMultipleComponent implements OnInit {

    imgArray: String[];
    i: number;
    length: number;
    rightClicked: boolean;
  constructor() 
  { 
      this.imgArray = [];
      this.i = 0;
      this.length = 0;
      this.rightClicked = false;
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
      // if ( this.i == this.length - 1 )
      // {
      //     this.i = 0;
      // }
      // else
      this.i++;
      this.rightClicked = true;
      setTimeout(() => {
        this.rightClicked = false
      }, 1000);

  }

  onLeft()
  {
    // if ( this.i == 0 )
    //    {
    //       this.i = this.length - 1; 
    //    }
    // else
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
