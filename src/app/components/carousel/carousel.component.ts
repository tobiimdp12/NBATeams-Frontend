import { Component, Input, OnInit } from '@angular/core';
import { carouselImage } from './carouselImage';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=3000;//default 3s
  selectedIndex=0;

  ngOnInit(): void {
    if(this.autoSlide)
    {
      this.autoSlideImages();
    }
  }
  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);
  }
  selectImage(index:number):void
  {
    this.selectedIndex=index;
  }

  onPrevClick():void
  {
    if(this.selectedIndex===0)//para producir el efecto de infinito
    {
      this.selectedIndex=this.images.length-1;
    }else
    {
      this.selectedIndex--;//vamos para atras
    }
  }

  onNextClick():void
  {
    if(this.selectedIndex===this.images.length-1)//para producir el efecto de infinito
    {
      this.selectedIndex=0;
    }else
    {
      this.selectedIndex++;//vamos para atras
    }
  }

}
