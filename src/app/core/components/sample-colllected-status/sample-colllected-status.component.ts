import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-colllected-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-colllected-status.component.html',
  styleUrls: ['./sample-colllected-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleColllectedStatusComponent {

}
