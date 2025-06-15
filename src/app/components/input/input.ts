import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-input",
  imports: [],
  templateUrl: "./input.html",
  styleUrl: "./input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  themeValue = input();
}
