import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
        MainPageComponent,
        ListComponent
    ],
    exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule {

}
