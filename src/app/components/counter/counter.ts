import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { HtmlCard } from "../html-card/html-card";

@Component({
  selector: "app-counter",
  imports: [HtmlCard],
  templateUrl: "./counter.html",
  styleUrl: "./counter.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  intervalId!: any;
  value = model(0);

  startCounter() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.value.set(0);
    }
    this.intervalId = setInterval(() => {
      this.value.update((v) => v + 1);
    }, 1000);
  }

  textLines = [
    `// Counter Component`,
    `export class Counter {`,
    `  value = model(0);`,
    ``,
    `  startCounter() {`,
    `    setInterval(() => {`,
    `      this.value.update((v) => v + 1);`,
    `    }, 1000);`,
    `  }`,
    `}`,
    `// HTML`,
    `<p>`,
    `  This button is for the child component, the value of the input is to way`,
    `  binding, when the child updates the value,<br />`,
    `  the value propagates to the parent, who renders the value.`,
    `</p>`,
    `<button (click)="startCounter()">Start counter</button>`,
  ];

  textLines2 = [
    `// HTML`,
    `<p>`,
    `  Counter signal value from parent component <i>ModelInputs</i>: {{count()}}`,
    `</p>`,
    `<app-counter (valueChange)="logCounterChange()" [(value)]="count" />`,
    `// TS`,
    `export class ModelInputs {`,
    `  count = signal(0);`,
    ``,
    `  logCounterChange() {`,
    `    console.log("Counter change to:", this.count());`,
    `  }`,
    `}`,
  ];
}
