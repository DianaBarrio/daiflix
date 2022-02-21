import { Component, OnInit } from '@angular/core';
import { FalseFlix, Film } from './models/Falseflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public falseFlix: FalseFlix;
  public sciFi: Film;
  public terror: Film;
  constructor() {
    this.falseFlix = {
      navbar: {
        logo: {
          src: "../../../assets/images/LOGO/logo.png",
          alt: "FalseFlix Logo"
        }
      },
      hero: {
        title: "Los 5 más populares hoy",
        imgGallery: [
          {
            src: "../../../assets/images/Top10/1-papel.webp",
            alt: "La casa de papel"
          },
          {
            src: "../../../assets/images/Top10/2-reina.webp",
            alt: "Reina"
          },
          {
            src: "../../../assets/images/Top10/3-titanes.webp",
            alt: "Titans"
          },
          {
            src: "../../../assets/images/Top10/4-lostinspace.webp",
            alt: "Lost in Space"
          },
          {
            src: "../../../assets/images/Top10/5-dondecaben.webp",
            alt: "Donde Caben"
          }
        ]
      }

    },
    this.sciFi = {
      title: "Ciencia ficción",
      imgGallery: [
        {
          src: "../../../assets/images/Sci-fi/gits.webp",
          alt: "GITS"
        },
        {
          src: "../../../assets/images/Sci-fi/deepimpact.webp",
          alt: "Deep Impact"
        },
        {
          src: "../../../assets/images/Sci-fi/12monos.webp",
          alt: "12 Monos"
        },
        {
          src: "../../../assets/images/Sci-fi/core.webp",
          alt: "Core"
        },
        {
          src: "../../../assets/images/Sci-fi/6dia.webp",
          alt: "6 dia"
        }
      ]
    };
    this.terror = {
      title: "Terror",
      imgGallery: [
        {
          src: "../../../assets/images/Terror/apostol.jpg",
          alt: "Apostol"
        },
        {
          src: "../../../assets/images/Terror/calleterror.jpg",
          alt: "Calle Terror"
        },
        {
          src: "../../../assets/images/Terror/life.webp",
          alt: "Life"
        },
        {
          src: "../../../assets/images/Terror/multiple.webp",
          alt: "Multiple"
        },
        {
          src: "../../../assets/images/Terror/reflejos.webp",
          alt: "Reflejos"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
