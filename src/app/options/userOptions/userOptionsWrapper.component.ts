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
  selector: "old-user-options",
  template: "<old-user-options-component></old-user-options-component>"
})
export class UserOptionsWrapperComponent {}

@Directive({ selector: "old-user-options-component" })
export class UserOptionsWrapperDirective extends UpgradeComponent {
  @Input() userId: string;
  @Output() userDeleted: EventEmitter<string>;
  constructor(elementRef: ElementRef, injector: Injector) {
    super("userOptions", elementRef, injector);
  }
}
