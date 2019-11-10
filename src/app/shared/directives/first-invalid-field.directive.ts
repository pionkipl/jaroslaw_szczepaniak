import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[focusFirstInvalidField]'
})
export class FirstInvalidFieldDirecvite {
  constructor(private elementRef: ElementRef) {}

  @HostListener('submit')
  onSubmit() {
    const invalidControl = this.elementRef.nativeElement.querySelector(
      '.ng-invalid'
    );

    if (invalidControl) {
      invalidControl.focus();
    }
  }
}
