import { Component, Input } from '@angular/core'; 


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() node: any;

  check:boolean=false;

  onChange(){
    this.check=true;
  }
  hideDetails(){
    this.check=false
  }
}
