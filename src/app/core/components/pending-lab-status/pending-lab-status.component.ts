import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-lab-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-lab-status.component.html',
  styleUrls: ['./pending-lab-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingLabStatusComponent {

}
