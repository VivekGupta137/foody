import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  'selector': "[appDropdown]"
})
export class AppDropdownDirective{
  // @HostBinding('class.show') isOpen: boolean = false;

  constructor(private elref: ElementRef){  }

  @HostListener('click') toggleOpen(){
    this.elref.nativeElement.childNodes[1].classList.toggle('show')
  }
}
