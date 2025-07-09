import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterEveryRender,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
  Renderer2,
  ViewRef,
  signal,
  viewChild,
} from "@angular/core";
import { ChildNode } from "../child-node/child-node";

@Component({
  selector: "app-lifecycle",
  imports: [ChildNode],
  templateUrl: "./lifecycle.html",
  styleUrl: "./lifecycle.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lifecycle
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  childNodeVisible = signal(true);
  myInput = input(0);
  element = inject(ElementRef);
  nativeElement = this.element.nativeElement;
  renderer = inject(Renderer2);

  constructor() {
    console.log(
      "Hooks order execution: ",
      "\nconstructor(): The constructor function of the component JavaScript class"
    );
    afterNextRender({
      earlyRead: () => {
        console.log(
          "afterNextRender earlyRead phase callback: use it to read DOM before write anything"
        );
      },
      write: () => {
        console.log(
          "afterNextRender write phase callback: use it to write after earlyReads are made"
        );
      },
      read: () => {
        console.log(
          "afterNextRender read phase callback: use it to read after writing the DOM"
        );
      },
    });

    afterEveryRender(() =>
      console.log(
        "afterEveryRender(): This method allows to register a callback that runs every time all components have been rendered to the DOM."
      )
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      "ngAfterViewChecked(): Runs every time the component view has been checked for changes"
    );
  }
  ngAfterViewInit(): void {
    console.log(
      "ngAfterViewInit(): Runs once after the component view has been initialized"
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      "ngAfterContentChecked(): Runs every time this component content has been checked for changes"
    );
  }

  ngAfterContentInit() {
    console.log(
      "ngAfterContentInit(): Runs once after the component content has been initialized"
    );
  }

  ngOnInit(): void {
    console.log(
      "ngOnInit(): Component initialized, runs exactly once. After all components inputs are initialized. Can be used to update the component state based on initial input values"
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      "ngOnChanges(): Input properties changed (when they are initialized too, because setting the initial value is changing the value of input)."
    );
    console.log(
      "This hook accepts a parameter of type SimpleChanges, which contains the values of the inputs, both old and new."
    );
    console.log(`Input previous value: ${changes["myInput"].previousValue}`);
    console.log(`Input current value: ${changes["myInput"].currentValue}`);
    console.log("This input will change every 20 seconds");
  }

  ngDoCheck() {
    console.log(
      "ngDoCheck(): Runs every time this component is checked for changes, with the OnPush detection strategy, we limit the number of times this hook is executed."
    );
  }

  hideChildNode() {
    this.childNodeVisible.update((prev) => !prev);
  }
}
