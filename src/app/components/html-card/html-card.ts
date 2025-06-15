import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

@Component({
  selector: "app-html-card",
  imports: [],
  templateUrl: "./html-card.html",
  styleUrl: "./html-card.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlCard {
  textValues = input<(string | undefined)[]>();

  text = computed(() => this.textValues());
}
