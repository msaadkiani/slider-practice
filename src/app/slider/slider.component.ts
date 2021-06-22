import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
    imgArray: any[];
    i: number;
    length: number;
    rightClicked: boolean;
    leftClicked: boolean;
    constructor() {
        this.imgArray = [];
        this.i = 0;
        this.length = 0;
        this.rightClicked = false;
        this.leftClicked = false;
    }

    ngOnInit(): void {
        this.imgArray = [
            { "source": "assets/Images/1.jpg" },
            { "source": "assets/Images/2.jpg" },
            { "source": "assets/Images/3.jpg" },
            { "source": "assets/Images/4.jpg" }
        ]
        this.length = this.imgArray.length;
    }

    onRight() {
        const sli = document.getElementById('slide');
        if (sli) sli.scrollLeft += 500;
        console.log('Clicked Right');

    }

    onLeft() {
        const sli = document.getElementById('slide');
        if (sli) sli.scrollLeft -= 500;
        console.log('Clicked Left');
    }

    dotScroll(i: number) 
    {
        const sli = document.getElementById('slide');
        if (sli) 
        {
            sli.scrollLeft = i * 500;
        }
    }
}
