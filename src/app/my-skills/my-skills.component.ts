import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
  scrolledBy: boolean = false;

  icons: string[] = [
    'angular',
    'typescript',
    'javascript',
    'html',
    'firebase',
    'git',
    'css',
    'api',
    'scrum',
    'material-design',
    'python',
    'django',
    'linux',
    'redis',
    'postgresql',
    'heroku',
    'sql',
    'cloud',
  ];
  descriptions: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    ' Material Design',
    'Python',
    'Django',
    'Linux',
    'Redis',
    'PostgreSQL',
    'Heroku',
    'SQL',
    'Cloud',
  ];

  /**
   * This function signals that the element is in view.
   * It sets the 'scrolledBy' flag to 'true'.
   */
  inVision() {
    this.scrolledBy = true;
  }
}
