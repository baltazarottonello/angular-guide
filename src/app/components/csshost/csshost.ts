import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-csshost",
  imports: [],
  templateUrl: "./csshost.html",
  styleUrl: "./csshost.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssHostComponent {}
