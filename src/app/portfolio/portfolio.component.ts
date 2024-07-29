import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  scrolledBy: boolean = false;

  headlines: string[] = ['Join', 'Space-Shooter', 'DABubble', 'Videoflix'];

  technologies: string[] = [
    'Angular | TypeScript | Django | Python | Django REST framework',
    'JavaScript | HTML | CSS',
    'Angular | TypeScript | HTML | CSS | Firebase',
    'Angular | TypeScript | Django | Python | Django REST framework',
  ];

  descriptions: string[] = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'A side-scrolling space shooter game based on an object-oriented approach. Navigate your spacecraft through the vast expanse of outer space, confronting space pirates and ultimately vanquishing their leader at the end of your galactic journey.',
    'A sleek chat messenger built with Angular, powered by Firebase technologies. Drawing design inspiration from Slack, its intuitive user interface provides a familiar and user-friendly experience. Firebase Authentication ensures secure logins, while Firestore enables efficient data storage and retrieval.',
    'netflix inspired... etc etc django python toll toll toll',
  ];

  projectLinks: string[] = [
    'https://join.tobias-bayer.dev/',
    'https://space-shooter.tobias-bayer.dev/',
    'https://dabubble.tobias-bayer.dev/',
    'https://videoflix.tobias-bayer.dev/',
  ];

  githubLinks: string[] = [
    'https://github.com/BayerTobias/join',
    'https://github.com/BayerTobias/SpaceGame',
    'https://github.com/BayerTobias/DABubble', // ändern für dabubble
    'https://github.com/BayerTobias/videoflix-frontend-angular-17',
  ];

  images: string[] = [
    './assets/img/portfolio_join.png',
    './assets/img/spaceshooter.png',
    './assets/img/portfolio_dabubble.png',
    './assets/img/portfolio_videoflix.png',
  ];

  /**
   * This function signals that the element is in view.
   * It sets the 'scrolledBy' flag to 'true'.
   */
  inVision() {
    this.scrolledBy = true;
  }
}
