import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
  constructor(router: Router) {
    /**
   * Hybrid initialization works as following:
   * init Angular -> bootstrap Angular JS
   *
   * This means the router is already initialized when
   * AngularJS (which is the host for the root component)
   * is initialized.
   *
   * This is why we have to disable the intitial navigation in the
   * RouterModule (see app.module.ts) an init the navigation when this
   * component is ready.
   */
    router.initialNavigation();
  }
}
