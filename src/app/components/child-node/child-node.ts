import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-child-node",
  imports: [],
  templateUrl: "./child-node.html",
  styleUrl: "./child-node.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildNode implements OnDestroy {
  ngOnDestroy(): void {
    console.log("ngOnDestroy(): Runs once before Angular destroy a component");
    console.log("From the ChildNode component : I will be destroyed!");
  }
}
