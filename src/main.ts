import * as angular from "angular";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";
import { downgradeComponent } from "@angular/upgrade/static";

import { AppModule } from "./app/app.module";
import { DriverModule } from "app/drivers/driver/driver";

import { AppComponent } from "app/app.component";

import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

// ng 1 wrapper
const myapp = angular
  .module("myapp", [DriverModule.name])
  .directive("appRoot", <any>downgradeComponent({ component: AppComponent }));

// bootstrap
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["myapp"], { strictDi: false });
  });
