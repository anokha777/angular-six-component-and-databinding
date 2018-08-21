import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'typescript', content: 'jus for testing'},
            {type: 'server', name: 'typescript1', content: 'jus for testing1'}];

}
