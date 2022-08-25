import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SideNavbarComponent} from "../side-navbar/side-navbar.component";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  SideNavbar: SideNavbarComponent = new SideNavbarComponent(this.router);

  copyString: string = 'Click to copy';


  constructor(private router: Router) {
    // @ts-ignore
    const height = document.getElementById('profile-container').style.height

    // @ts-ignore
    const height2 = document.getElementById('profile-container').style.height
    }

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


  copyText(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copyString = 'Copied!'
  }


}
