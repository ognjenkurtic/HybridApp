import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CarsComponent } from "./cars.component";
import { CarComponent } from "./car/car.component";

const routes: Routes = [
  {
    path: "cars",
    component: CarsComponent,
    children: [
      { path: "", redirectTo: "car", pathMatch: "full" },
      {
        path: "car",
        component: CarComponent
      }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  declarations: [CarsComponent, CarComponent],
  exports: []
})
export class CarsModule {}
