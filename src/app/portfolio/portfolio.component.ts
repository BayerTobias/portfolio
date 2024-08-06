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
    'Join is a task manager inspired by the Kanban system. The frontend is built with Angular V17 and TypeScript, focusing on the new Angular Signals to ensure a reactive and high-performance user interface. With drag-and-drop functionality, you can easily create and organize tasks, assigning them to users and categories. The backend consists of a robust REST API implemented with Django and the Django REST Framework in Python, providing scalable and efficient data management.',
    'Space-Shooter is a side-scrolling space shooter game developed with JavaScript, HTML, and CSS, based on an object-oriented approach. Object-oriented programming allows for a modular and extendable game structure, ensuring a clear separation of game components and easy code maintenance.',
    'A sleek chat messenger built with Angular, powered by Firebase technologies. Drawing design inspiration from Slack, its intuitive user interface provides a familiar and user-friendly experience. Firebase Authentication ensures secure logins, while Firestore enables efficient data storage and retrieval.',
    'Videoflix is a Netflix-inspired streaming portal with an Angular frontend. The backend uses the Django REST Framework to provide a scalable API. Background tasks are handled with Django RQ, while Redis is used for both the database and caching. FFmpeg is used for video conversion and optimization, enabling efficient management and delivery of video content.',
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
    'https://github.com/BayerTobias/DABubble',
    'https://github.com/BayerTobias/videoflix-backend',
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
