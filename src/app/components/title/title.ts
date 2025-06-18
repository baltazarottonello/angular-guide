import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Title {

}
