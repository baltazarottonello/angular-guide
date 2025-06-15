import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Counter } from "../counter/counter";
import { HtmlCard } from "../html-card/html-card";

@Component({
  selector: "app-model-inputs",
  imports: [Counter, HtmlCard],
  templateUrl: "./model-inputs.html",
  styleUrl: "./model-inputs.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelInputs {
  count = signal(0);

  logCounterChange() {
    console.log("Counter change to:", this.count());
  }

  textLines = [
    `@Component({`,
    `  selector: "app-model-inputs",`,
    `  imports: [Counter, HtmlCard],`,
    `  templateUrl: './model-inputs.html',`,
    `  styleUrl: './model-inputs.css',`,
    `  changeDetection: ChangeDetectionStrategy.OnPush,`,
    `})`,
    `export class ModelInputs {`,
    `  count = signal(0);`,
    `}`,
    `// HTML`,
    `<p>`,
    `  Counter signal value from parent component <i>ModelInputs</i>: {{count()}}`,
    `</p>`,
    `<app-counter [(value)]="count" />`,
  ];
}
