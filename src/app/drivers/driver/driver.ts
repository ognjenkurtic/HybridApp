import * as angular from "angular";
import { Router } from "@angular/router";
import { downgradeInjectable } from "@angular/upgrade/static";

export class DriverController {
  /*@ngInject*/
  constructor(private router: Router) {}
}

const component: IExtendedComponentOptions = {
  controller: DriverController,
  template: require("./driver.html"),
  styles: require("./driver.scss")
};

export const DriverModule = angular
  .module("component_driver", [])
  .factory("router", downgradeInjectable(Router))
  .component("driver", component);
