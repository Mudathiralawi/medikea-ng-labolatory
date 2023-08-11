import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LabResultsComponent {

}
