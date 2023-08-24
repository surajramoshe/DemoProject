import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'parent',
    loadChildren:()=> import('./parent/parent.module').then(x=>x.ParentModule)
  },
  {
    path:'',
    redirectTo:'parent',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
