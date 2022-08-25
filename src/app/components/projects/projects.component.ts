import { Component, OnInit } from '@angular/core';
import {Projects, Project} from "../../project-list";
import { trigger, transition, animate, style } from '@angular/animations'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [

        style({transform: 'translateX(100%)'}),
        style({opacity: 0}),
        animate('500ms ease-in', style({transform: 'translateX(0%)', opacity: '1'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)', opacity: '0'}))

      ])
    ]),
    trigger('slideOutIn',[
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-in', style({opacity: '1'}))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: '0'}))

      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = Projects;
  counter: number = 0;
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  async previousProject() {
    this.visible = false;

    if (!(this.counter - 1 < 0)) {
      this.counter = this.counter - 1;
    } else this.counter = this.projects.length - 1;
    await this.delay(500);
    //
    this.visible = true;

  }

  async nextProject() {
    this.visible = false;

    if (!(this.counter + 1 > this.projects.length - 1)) {
      this.counter++;
    } else this.counter = 0;
    await this.delay(500);
    //
    this.visible = true;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
