import { Component, OnInit } from '@angular/core';
import {Skill, skills} from "../../skill-list";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill_list: Skill[] = skills;

  constructor() { }

  ngOnInit(): void {
  }


  getFilledStars(stars: number){
    let numbers: number[] = [];

    for (let i = 0; i<stars; i++ ){
      numbers.push(1);
    }
    return numbers
  }

  getEmptyStars(stars: number, halfStar: boolean){
    let numbers: number[] = [];

    if(stars === 4 && halfStar){
      return numbers;
    }

    if(halfStar){
      stars++;
    }

    for (let i = 5; i>stars; i-- ){
      numbers.push(1);
    }

    return numbers;
  }

}
