import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    {
      imageSrc:
        'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/Young-Cores-FTR.jpeg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/sporting-news-2022-photo-with-watermark-44bd45ad-bca7-4322-8ade-cfc90d1e0e9e.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/Ayton.png',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-07/Two%20stats%20social%20graphic%20%2816x9%29%20%283%29.png',
      imageAlt: 'person2',
    },
  ];
}
