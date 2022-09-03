import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower:string  ='luis angel';
  nombreUpper:string  ='LUIS ANGEL';
  nombreCompleto:string  ='LUIS angEl santOs';

  fecha:Date = new Date();

}
