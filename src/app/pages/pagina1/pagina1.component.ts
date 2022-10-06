import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
        implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked, 
                   AfterViewInit,AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange');
  }
  ngDoCheck(): void {
    console.log('Do check');
  }
  ngAfterContentInit(): void {
    console.log('Afetr content init');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterViewInit(): void {
    console.log('after view init ');
  }
  ngAfterViewChecked(): void {
    console.log('after checked');
  }
  ngOnDestroy(): void {
    console.log('On destroy');
  }

  ngOnInit(): void {
    console.log('ngOninit');
  }
  onClick(){
    
  }



}
