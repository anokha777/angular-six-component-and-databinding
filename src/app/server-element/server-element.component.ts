import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // added the style in server-element.component.css
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('componentParagraph') componentPara: ElementRef;

  constructor() { 
    console.log('ServerElementComponent constructor called');
  }

  ngOnChanges(changes: any) {
    console.log('ServerElementComponent ngOnChange called ');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ServerElementComponent ngOnInit called');
    console.log('in ngOnInit componentPara = ', this.componentPara.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('in ngAfterViewInit componentPara = ', this.componentPara.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() { // whever some delete happens this hook will be called
    console.log('ngOnDestroy called');
  }
}
