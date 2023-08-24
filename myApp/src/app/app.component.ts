import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuData: any[] = [];

  constructor(private menuService: MyService) {}

  ngOnInit(): void {
    this.menuService.getData().subscribe(
      (data: any) => {
        this.menuData = data;
      }
    );
  }
}