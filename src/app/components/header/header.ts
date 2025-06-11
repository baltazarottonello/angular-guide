import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LogoComponent } from "../logo-component/logo-component";
import { HeaderNavComponent } from "../header-nav-component/header-nav-component";
import { HeaderOptionsComponent } from "../header-options-component/header-options-component";

@Component({
  selector: "app-header",
  imports: [LogoComponent, HeaderNavComponent, HeaderOptionsComponent],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
