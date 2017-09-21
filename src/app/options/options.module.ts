import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OptionsComponent } from "./options.component";
// import {
//   UserOptionsWrapperComponent,
//   UserOptionsWrapperDirective
// } from "./userOptions/userOptions.component";

const routes: Routes = [
  {
    path: "options",
    component: OptionsComponent,
    children: [
      { path: "", redirectTo: "userOptions", pathMatch: "full" }
      //   {
      //     path: "userOptions",
      //     component: UserOptionsWrapperComponent
      //   }
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forChild(routes)],
  declarations: [
    OptionsComponent
    // UserOptionsWrapperComponent,
    // UserOptionsWrapperDirective
  ],
  exports: []
})
export class OptionsModule {}
