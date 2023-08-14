import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-result-fill-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-result-fill-form.component.html',
  styleUrls: ['./lab-result-fill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabResultFillFormComponent {

}
