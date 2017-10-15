import {
  Component,
  Directive,
  ElementRef,
  Injector,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "old-driver",
  template: "<old-driver-component></old-driver-component>"
})
export class DriverWrapperComponent {}

@Directive({ selector: "old-driver-component" })
export class DriverWrapperDirective extends UpgradeComponent {
  @Input() userId: string;
  @Output() userDeleted: EventEmitter<string>;
  constructor(elementRef: ElementRef, injector: Injector) {
    super("driver", elementRef, injector);
  }
}
