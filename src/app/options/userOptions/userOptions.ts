import * as angular from "angular";
import { Router } from "@angular/router";
import { downgradeInjectable } from "@angular/upgrade/static";

export class UserOptionsController {
  /*@ngInject*/
  constructor(private router: Router) {}
}

const component: IExtendedComponentOptions = {
  controller: UserOptionsController,
  template: require("./userOptions.html"),
  styles: require("./userOptions.scss")
};

export const UserOptionsModule = angular
  .module("component_userOptions", [])
  .factory("router", downgradeInjectable(Router))
  .component("userOptions", component);
