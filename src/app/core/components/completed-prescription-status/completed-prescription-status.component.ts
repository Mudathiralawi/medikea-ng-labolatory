import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed-prescription-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-prescription-status.component.html',
  styleUrls: ['./completed-prescription-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedPrescriptionStatusComponent {

}
