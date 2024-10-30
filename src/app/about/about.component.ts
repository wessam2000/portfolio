import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  profile:string="Highly motivated and results-oriented Junior MEARN Stack Developer Recently graduated from the Faculty ofComputer and Information Sciences (FCIS), specializing in Bioinformatics.I successfully transitioned into theworld of web development through an intensive MEARN Stack internship at the Information Technology Institute(ITI). Seeking a challenging role to leverage my technical skills and contribute to innovative softwaresolutions."
  CV:string="../../../public/assets/files/Wessam-Ahmed-CV.pdf"
}
