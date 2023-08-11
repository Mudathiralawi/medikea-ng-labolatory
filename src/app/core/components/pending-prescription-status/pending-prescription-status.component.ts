import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-prescription-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-prescription-status.component.html',
  styleUrls: ['./pending-prescription-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingPrescriptionStatusComponent {

}
