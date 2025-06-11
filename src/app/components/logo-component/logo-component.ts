import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  signal,
} from "@angular/core";

@Component({
  selector: "app-logo-component",
  imports: [],
  templateUrl: "./logo-component.html",
  styleUrl: "./logo-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
