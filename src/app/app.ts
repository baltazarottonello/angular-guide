import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./components/header/header";
import { ThemeService } from "./services/theme-service";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, NgClass],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  themeService = inject(ThemeService);
}
