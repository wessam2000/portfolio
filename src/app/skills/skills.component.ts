import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  title: string = 'Skills';
  focus: string = 'My Focuses';
  focus1:string="Responsive Web Design";
  focus2:string="SEO";
  focus3:string="Node JS";
  focus4:string="Restful API";
}
