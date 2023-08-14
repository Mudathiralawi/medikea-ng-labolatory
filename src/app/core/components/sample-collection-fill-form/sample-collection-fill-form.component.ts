import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-collection-fill-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-collection-fill-form.component.html',
  styleUrls: ['./sample-collection-fill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleCollectionFillFormComponent {

}
