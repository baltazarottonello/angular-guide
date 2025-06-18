import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-container',
  imports: [],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentContainer {

}
