import {
  ChangeDetectionStrategy,
  Component,
  inject,
  linkedSignal,
} from "@angular/core";
import { ThemeService, ThemeValues } from "../../services/theme-service";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-header-options-component",
  imports: [NgClass],
  templateUrl: "./header-options-component.html",
  styleUrl: "./header-options-component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOptionsComponent {
  themeService = inject(ThemeService);
  theme = linkedSignal<ThemeValues>(() => this.themeService.theme());

  handleThemeChange() {
    let newThemeValue: ThemeValues;

    newThemeValue = this.theme() == "dark" ? "light" : "dark";

    this.themeService.setTheme(newThemeValue);
  }
}
