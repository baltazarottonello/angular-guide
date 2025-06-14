import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private _theme: WritableSignal<ThemeValues> = signal("dark");

  readonly theme: Signal<ThemeValues> = computed(() => this._theme());

  setTheme(theme: ThemeValues) {
    this._theme.set(theme);
  }
}

export type ThemeValues = "dark" | "light";
