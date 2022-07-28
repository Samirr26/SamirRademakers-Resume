import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SideNavbarComponent} from "../side-navbar/side-navbar.component";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  SideNavbar: SideNavbarComponent = new SideNavbarComponent(this.router);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  toBiography(){
    this.SideNavbar.selectBiography()
    this.router.navigate(['aboutme/biography'])
  }

  toInformation(){
    this.SideNavbar.selectInformation()
    this.router.navigate(['aboutme/information'])
  }

  toAchievements(){
    this.SideNavbar.selectAchievements()
    this.router.navigate(['aboutme/achievements'])
  }
}
