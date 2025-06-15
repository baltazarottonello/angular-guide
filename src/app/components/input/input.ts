import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-input",
  imports: [],
  templateUrl: "./input.html",
  styleUrl: "./input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public themeValue = input("", {
    transform: toUpperCaseInput,
  });
}

function toUpperCaseInput(value: string): string {
  return value?.toUpperCase() ?? "";
}
