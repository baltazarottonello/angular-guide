import {
  Component,
  inject,
  OnChanges,
  signal,
  SimpleChanges,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./components/header/header";
import { ThemeService } from "./services/theme-service";
import { NgClass } from "@angular/common";
import { CssHostComponent } from "./components/csshost/csshost";
import { InputComponent } from "./components/input/input";
import { InputComponentCopy } from "./components/inputCopy/inputCopy";
import { ContentProjection } from "./components/content-projection/content-projection";
import { Lifecycle } from "./components/lifecycle/lifecycle";
import { ViewQueries } from "./components/view-queries/view-queries";
import { ContentQueries } from "./components/content-queries/content-queries";
import { Title } from "./components/title/title";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    Header,
    NgClass,
    CssHostComponent,
    InputComponent,
    InputComponentCopy,
    ContentProjection,
    Lifecycle,
    ViewQueries,
    ContentQueries,
    Title,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  themeService = inject(ThemeService);
  variableMyInput = signal<number>(3);

  constructor() {
    setInterval(
      () => this.variableMyInput.set(Math.trunc(Math.random() * 100)),
      20000
    );
  }
}
