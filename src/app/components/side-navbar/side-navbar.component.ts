import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {animate} from "@angular/animations";

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


  constructor(private router: Router) {


  }

  open: boolean = false;

  ngOnInit(): void {
    // this.openNavigation();
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
    const aboutme_detail = document.getElementById("aboutme-detail")

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
    // @ts-ignore
    aboutme_detail.classList.toggle("selected", false);

  }

  selectHome(){
    this.deselectAll();
    const home = document.getElementById("home")
    // @ts-ignore
    home.classList.toggle("selected", true);

    this.router.navigate([''])
  }

  selectAboutme(){
    this.deselectAll();
    const aboutme = document.getElementById("aboutme")
    const aboutme_detail = document.getElementById("aboutme-detail")

    // @ts-ignore
    aboutme.classList.toggle("selected", true);
    // @ts-ignore
    aboutme_detail.classList.toggle("selected", true);

    this.router.navigate(['aboutme/information'])
    this.selectInformation()
  }

  // deselect all bullet points under 'about me'
  deselectDetailAboutMe(){
    const information = document.getElementById("information")
    const biography = document.getElementById("biography")
    const achievements = document.getElementById("achievements")

    // @ts-ignore
    information.classList.toggle("selected", false);
    // @ts-ignore
    biography.classList.toggle("selected", false);
    // @ts-ignore
    achievements.classList.toggle("selected", false);
  }

  selectInformation(){
    this.deselectDetailAboutMe()

    const information = document.getElementById("information")

    // @ts-ignore
    information.classList.toggle("selected", true);
    this.router.navigate(['aboutme/information'])


  }

  selectBiography(){
    this.deselectDetailAboutMe()

    const biography = document.getElementById("biography")

    // @ts-ignore
    biography.classList.toggle("selected", true);
    this.router.navigate(['aboutme/biography'])

  }

  selectAchievements(){
    this.deselectDetailAboutMe()

    const achievements = document.getElementById("achievements")

    // @ts-ignore
    achievements.classList.toggle("selected", true);
    this.router.navigate(['aboutme/achievements'])

  }

  selectProjects(){
    this.deselectAll();
    const projects = document.getElementById("projects")
    // @ts-ignore
    projects.classList.toggle("selected", true);

    this.router.navigate(['projects'])

  }

  selectSkills(){
    this.deselectAll();
    const skills = document.getElementById("skills")
    // @ts-ignore
    skills.classList.toggle("selected", true);
    window.scrollTo(0,3000)

  }

  selectContact(){
    this.deselectAll();
    const contact = document.getElementById("contact")
    // @ts-ignore
    contact.classList.toggle("selected", true);
    window.scrollTo(0,4000)

  }

  scrollDown(){
    window.scrollTo(0,0)
  }
}
