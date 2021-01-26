import { Component, OnInit  } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';


@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})
export class GalerijaComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages1: NgxGalleryImage[];
    galleryImages2: NgxGalleryImage[];
    galleryImages3: NgxGalleryImage[];
    galleryImages4: NgxGalleryImage[];
    galleryImages5: NgxGalleryImage[];
    galleryImages6: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '800px',
                height: '600px',
                thumbnailsColumns: 6,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages1 = [
            {
                small: 'assets/assets/img/portfolio/a.jpg',
                medium: 'assets/assets/img/portfolio/a.jpg',
                big: 'assets/assets/img/portfolio/a.jpg'
            },
            {
                small: 'assets/assets/img/portfolio/b.jpg',
                medium: 'assets/assets/img/portfolio/b.jpg',
                big: 'assets/assets/img/portfolio/b.jpg'
            },
            {
                small: 'assets/assets/img/portfolio/c.jpg',
                medium: 'assets/assets/img/portfolio/c.jpg',
                big: 'assets/assets/img/portfolio/c.jpg'
            },
            {
              small: 'assets/assets/img/portfolio/d.jpg',
              medium: 'assets/assets/img/portfolio/d.jpg',
              big: 'assets/assets/img/portfolio/d.jpg'
            },
            {
              small: 'assets/assets/img/portfolio/e.jpg',
              medium: 'assets/assets/img/portfolio/e.jpg',
              big: 'assets/assets/img/portfolio/e.jpg'
            },
            {
              small: 'assets/assets/img/portfolio/f.jpg',
              medium: 'assets/assets/img/portfolio/f.jpg',
              big: 'assets/assets/img/portfolio/f.jpg'
            }
        ];

        this.galleryImages2 = [
          {
              small: 'assets/assets/img/portfolio/i.jpg',
              medium: 'assets/assets/img/portfolio/i.jpg',
              big: 'assets/assets/img/portfolio/i.jpg'
          },
          {
              small: 'assets/assets/img/portfolio/j.jpg',
              medium: 'assets/assets/img/portfolio/j.jpg',
              big: 'assets/assets/img/portfolio/j.jpg'
          },
          {
              small: 'assets/assets/img/portfolio/k.jpg',
              medium: 'assets/assets/img/portfolio/k.jpg',
              big: 'assets/assets/img/portfolio/k.jpg'
          },
          {
            small: 'assets/assets/img/portfolio/l.jpg',
            medium: 'assets/assets/img/portfolio/l.jpg',
            big: 'assets/assets/img/portfolio/l.jpg'
          },
          {
            small: 'assets/assets/img/portfolio/m.jpg',
            medium: 'assets/assets/img/portfolio/m.jpg',
            big: 'assets/assets/img/portfolio/m.jpg'
          },
          {
            small: 'assets/assets/img/portfolio/n.jpg',
            medium: 'assets/assets/img/portfolio/n.jpg',
            big: 'assets/assets/img/portfolio/n.jpg'
          }
      ];
        this.galleryImages3 = [
        {
            small: 'assets/assets/img/portfolio/2.jpg',
            medium: 'assets/assets/img/portfolio/2.jpg',
            big: 'assets/assets/img/portfolio/2.jpg'
        },
        {
            small: 'assets/assets/img/portfolio/4.jpg',
            medium: 'assets/assets/img/portfolio/4.jpg',
            big: 'assets/assets/img/portfolio/4.jpg'
        },
        {
            small: 'assets/assets/img/portfolio/5.jpg',
            medium: 'assets/assets/img/portfolio/5.jpg',
            big: 'assets/assets/img/portfolio/5.jpg'
        },
        {
          small: 'assets/assets/img/portfolio/6.jpg',
          medium: 'assets/assets/img/portfolio/6.jpg',
          big: 'assets/assets/img/portfolio/6.jpg'
        }
    ];
        this.galleryImages4 = [
      {
          small: 'assets/assets/img/portfolio/8.jpg',
          medium: 'assets/assets/img/portfolio/8.jpg',
          big: 'assets/assets/img/portfolio/8.jpg'
      },
      {
          small: 'assets/assets/img/portfolio/9.jpg',
          medium: 'assets/assets/img/portfolio/9.jpg',
          big: 'assets/assets/img/portfolio/9.jpg'
      },
      {
          small: 'assets/assets/img/portfolio/10.jpg',
          medium: 'assets/assets/img/portfolio/10.jpg',
          big: 'assets/assets/img/portfolio/10.jpg'
      },
      {
        small: 'assets/assets/img/portfolio/11.jpg',
        medium: 'assets/assets/img/portfolio/11.jpg',
        big: 'assets/assets/img/portfolio/11.jpg'
      },
      {
        small: 'assets/assets/img/portfolio/12.jpg',
        medium: 'assets/assets/img/portfolio/12.jpg',
        big: 'assets/assets/img/portfolio/12.jpg'
      }
  ];
        this.galleryImages5 = [
    {
        small: 'assets/assets/img/portfolio/p.jpg',
        medium: 'assets/assets/img/portfolio/p.jpg',
        big: 'assets/assets/img/portfolio/p.jpg'
    },
    {
        small: 'assets/assets/img/portfolio/r.jpg',
        medium: 'assets/assets/img/portfolio/r.jpg',
        big: 'assets/assets/img/portfolio/r.jpg'
    },
    {
        small: 'assets/assets/img/portfolio/s.jpg',
        medium: 'assets/assets/img/portfolio/s.jpg',
        big: 'assets/assets/img/portfolio/s.jpg'
    },
    {
      small: 'assets/assets/img/portfolio/t.jpg',
      medium: 'assets/assets/img/portfolio/t.jpg',
      big: 'assets/assets/img/portfolio/t.jpg'
    },
    {
      small: 'assets/assets/img/portfolio/u.jpg',
      medium: 'assets/assets/img/portfolio/u.jpg',
      big: 'assets/assets/img/portfolio/u.jpg'
    },
    {
      small: 'assets/assets/img/portfolio/v.jpg',
      medium: 'assets/assets/img/portfolio/v.jpg',
      big: 'assets/assets/img/portfolio/v.jpg'
    }
];
        this.galleryImages6 = [
  {
      small: 'assets/assets/img/portfolio/13.jpg',
      medium: 'assets/assets/img/portfolio/13.jpg',
      big: 'assets/assets/img/portfolio/13.jpg'
  },
  {
      small: 'assets/assets/img/portfolio/14.jpg',
      medium: 'assets/assets/img/portfolio/14.jpg',
      big: 'assets/assets/img/portfolio/14.jpg'
  },
  {
      small: 'assets/assets/img/portfolio/15.jpg',
      medium: 'assets/assets/img/portfolio/15.jpg',
      big: 'assets/assets/img/portfolio/15.jpg'
  },
  {
    small: 'assets/assets/img/portfolio/16.jpg',
    medium: 'assets/assets/img/portfolio/16.jpg',
    big: 'assets/assets/img/portfolio/16.jpg'
  },
  {
    small: 'assets/assets/img/portfolio/17.jpg',
    medium: 'assets/assets/img/portfolio/17.jpg',
    big: 'assets/assets/img/portfolio/17.jpg'
  },
  {
    small: 'assets/assets/img/portfolio/18.jpg',
    medium: 'assets/assets/img/portfolio/18.jpg',
    big: 'assets/assets/img/portfolio/18.jpg'
  }
];
    }
  }
