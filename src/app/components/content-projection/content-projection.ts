import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContentContainer } from "../content-container/content-container";
import { Title } from "../title/title";
import { Subtitle } from "../subtitle/subtitle";
import { HtmlCard } from "../html-card/html-card";

@Component({
  selector: "app-content-projection",
  imports: [ContentContainer, Title, Subtitle, HtmlCard],
  templateUrl: "./content-projection.html",
  styleUrl: "./content-projection.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentProjection {
  textLines = [
    `// HTML -- Passing content inside <app-content-container/> host element`,
    `<app-content-container>`,
    `  <app-title>Title content</app-title>`,
    `  <app-subtitle>Subtitle content</app-subtitle>`,
    `</app-content-container>`,
    `------------------------------------------------------------------------------------------------------------------------------------------------`,
    `//HTML -- ContentContainer view template`,
    `<div class="container">`,
    `  Content number 1:`,
    `  <ng-content select="app-title"></ng-content>`,
    `  <div class="divider"></div>`,
    `  Content number 2:`,
    `  <ng-content select="app-subtitle"></ng-content>`,
    `</div>`,
  ];
}
