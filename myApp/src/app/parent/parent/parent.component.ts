import { Component } from '@angular/core';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  treeData: any[] = [];
  constructor(private apiService: MyService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((response: any) => {
      this.treeData = this.createTreeStructure(response.data);
    });
  }

  createTreeStructure(data: any[]): any[] {
    const map = new Map();
    const result: any[] = [];

    data.forEach(item => {
      map.set(item.id, { ...item, children: [] });
    });

    data.forEach(item => {
      if (item.refMenuId) {
        const parent = map.get(item.refMenuId);
        if (parent) {
          parent.children.push(map.get(item.id));
        }
      } else {
        result.push(map.get(item.id));
      }
      
    });
    return result;
  }
}
