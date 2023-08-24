import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent {
@Input() node:any;

}
