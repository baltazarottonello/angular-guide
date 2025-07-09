import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  viewChild,
} from "@angular/core";
import { Title } from "../title/title";

@Component({
  selector: "app-content-queries",
  imports: [],
  templateUrl: "./content-queries.html",
  styleUrl: "./content-queries.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentQueries {
  child = contentChild(Title);

  childProp = computed(() => this.child()?.someProp);
}
