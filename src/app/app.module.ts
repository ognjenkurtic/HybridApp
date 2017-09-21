import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { OptionsModule } from "./options/options.module";
import { AppComponent } from "./app.component";
import { OptionsComponent } from "app/options/options.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "options",
    component: OptionsComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    OptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
