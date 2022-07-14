import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  home: any;
  aboutme: any;
  projects: any;
  skills: any;
  contact: any;


  constructor() {


  }

  open: boolean = false;

  ngOnInit(): void {
    this.openNavigation();
    this.selectHome()
  }

  openNavigation(){
    const container = document.getElementById("container")
    const button = document.getElementById("open-nav-button")
    const icon = document.getElementById("icon")
    const profile = document.getElementById("profile-container")
    // @ts-ignore
    button.classList.toggle("open");
    // @ts-ignore
    container.classList.toggle("open");
    // @ts-ignore
    icon.classList.toggle("open");
    // @ts-ignore
    profile.classList.toggle("open")

  }

  deselectAll(){
    const home = document.getElementById("home")
    const aboutme = document.getElementById("aboutme")
    const projects = document.getElementById("projects")
    const skills = document.getElementById("skills")
    const contact = document.getElementById("contact")
    // @ts-ignore
    home.classList.toggle("selected", false);
    // @ts-ignore
    aboutme.classList.toggle("selected", false);
    // @ts-ignore
    projects.classList.toggle("selected", false);
    // @ts-ignore
    skills.classList.toggle("selected", false);
    // @ts-ignore
    contact.classList.toggle("selected", false);

  }

  selectHome(){
    this.deselectAll();
    const home = document.getElementById("home")
    // @ts-ignore
    home.classList.toggle("selected", true);
  }

  selectAboutme(){
    this.deselectAll();
    const aboutme = document.getElementById("aboutme")
    // @ts-ignore
    aboutme.classList.toggle("selected", true);
  }

  selectProjects(){
    this.deselectAll();
    const projects = document.getElementById("projects")
    // @ts-ignore
    projects.classList.toggle("selected", true);
  }

  selectSkills(){
    this.deselectAll();
    const skills = document.getElementById("skills")
    // @ts-ignore
    skills.classList.toggle("selected", true);
  }

  selectContact(){
    this.deselectAll();
    const contact = document.getElementById("contact")
    // @ts-ignore
    contact.classList.toggle("selected", true);
  }
}
