import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  viewChild,
  ViewContainerRef,
} from "@angular/core";
import { Title } from "../title/title";
import { HtmlCard } from "../html-card/html-card";

@Component({
  selector: "app-view-queries",
  imports: [Title, HtmlCard],
  templateUrl: "./view-queries.html",
  styleUrl: "./view-queries.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewQueries {
  child = viewChild(Title);

  childProp = computed(() => this.child()?.someProp);

  textLines = [
    `// TS Title component`,
    `@Component({`,
    `  selector: "app-title",`,
    `  imports: [],`,
    `  templateUrl: "./title.html",`,
    `  styleUrl: "./title.css",`,
    `  changeDetection: ChangeDetectionStrategy.OnPush,`,
    `})`,
    `export class Title {`,
    `  textInput = input();`,
    `someProp = "Horse";`,
    `}`,
    `// HTML Title component`,
    `<div class="container">`,
    `  @if(textInput()){`,
    `  <p>{{textInput()}}</p>`,
    `  } @else {`,
    `  <ng-content></ng-content>`,
    `  }`,
    `</div>`,
    `//TS ViewQueries component`,
    `@Component({`,
    `  selector: "app-view-queries"`,
    `  imports: [Title]`,
    `  templateUrl: "./view-queries.html"`,
    `  styleUrl: "./view-queries.css"`,
    `  changeDetection: ChangeDetectionStrategy.OnPush`,
    `})`,
    `export class ViewQueries {`,
    `  child = viewChild(Title);`,
    `  childProp = computed(() => this.child()?.someProp);`,
    `}`,
    `// HTML ViewQueries component`,
    `<p class="title">View Queries:</p>`,
    `<p>`,
    `  We have a child component called Title, which has a property someProp with a`,
    `  value.`,
    `</p>`,
    `<app-title [textInput]='Título' />`,
    `<p>`,
    `  If we make a query of type ViewChild, we will have access to its “view” which`,
    `  is the content of the template of the component already rendered.`,
    `</p>`,
    `<p>Value: {{childProp()}}</p>`,
  ];
}
