import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";

import { OptionsModule } from "./options/options.module";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: false }),
    OptionsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {
    // override to prevent Angular from bootstrapping itself
  }
}
