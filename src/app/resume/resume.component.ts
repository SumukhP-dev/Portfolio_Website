import { Component } from '@angular/core';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-resume',
  imports: [NgxDocViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  documenturl =
    'https://drive.google.com/file/d/1NQ2wiWdicPwh-97_ADtnWOmCPYsewmtQ/view?usp=sharing';
}
