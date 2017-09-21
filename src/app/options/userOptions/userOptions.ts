import * as angular from "angular";

export class UserOptionsController {
  /*@ngInject*/
  constructor() {}
}

const component: IExtendedComponentOptions = {
  controller: UserOptionsController,
  template: require("./userOptions.html"),
  styles: require("./userOptions.scss")
};

export const UserOptionsModule = angular
  .module("component_useroptions")
  .component("userOptions", component);
