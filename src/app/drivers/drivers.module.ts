import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DriversComponent } from "./drivers.component";
import {
  DriverWrapperComponent,
  DriverWrapperDirective
} from "./driver/driverWrapper.component";

const routes: Routes = [
  {
    path: "drivers",
    component: DriversComponent,
    children: [
      { path: "", redirectTo: "driver", pathMatch: "full" },
      {
        path: "driver",
        component: DriverWrapperComponent
      }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  declarations: [
    DriversComponent,
    DriverWrapperComponent,
    DriverWrapperDirective
  ],
  exports: []
})
export class DriversModule {}
