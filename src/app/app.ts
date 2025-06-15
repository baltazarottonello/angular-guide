import { Component, inject, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./components/header/header";
import { ThemeService } from "./services/theme-service";
import { NgClass } from "@angular/common";
import { CssHostComponent } from "./components/csshost/csshost";
import { InputComponent } from "./components/input/input";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, NgClass, CssHostComponent, InputComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  themeService = inject(ThemeService);
}
