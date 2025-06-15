import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { InputComponent } from "../input/input";
import { HtmlCard } from "../html-card/html-card";
import { ModelInputs } from "../model-inputs/model-inputs";

@Component({
  selector: "app-input-copy",
  imports: [HtmlCard, ModelInputs],
  templateUrl: "./inputCopy.html",
  styleUrl: "./inputCopy.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponentCopy extends InputComponent {
  textLines = [
    `//HTML`,
    `<app-input [themeValue]="themeService.theme()" />`,
    `<app-input-copy [themeValue]="'otherValue'" />`,
    `//TS`,
    `@Component({`,
    `  selector: \`app-input-copy\`,`,
    `  imports: [HtmlCard],`,
    `  templateUrl: \`./inputCopy.html\`,`,
    `  styleUrl: \`./inputCopy.css\`,`,
    `  changeDetection: ChangeDetectionStrategy.OnPush,`,
    `})`,
    `export class InputComponentCopy extends InputComponent {}`,
    ,
  ];

  textLines2 = [
    `// TS`,
    `@Component({`,
    `  selector: "app-input",`,
    `  imports: [],`,
    `  templateUrl: "./input.html",`,
    `  styleUrl: "./input.css",`,
    `  changeDetection: ChangeDetectionStrategy.OnPush,`,
    `})`,
    `export class InputComponent {`,
    `  public themeValue = input("", {`,
    `    transform: toUpperCaseInput,`,
    `  });`,
    `}`,
    ``,
    `function toUpperCaseInput(value: string): string {`,
    `  return value?.toUpperCase() ?? "";`,
    `}`,
  ];
}
