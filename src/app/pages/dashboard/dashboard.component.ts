import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedPrescriptionStatusComponent } from '../../core/components/completed-prescription-status/completed-prescription-status.component';
import { PendingPrescriptionStatusComponent } from '../../core/components/pending-prescription-status/pending-prescription-status.component';
import { TotalPrescriptionTodayTableComponent } from '../../core/components/total-prescription-today-table/total-prescription-today-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule , CompletedPrescriptionStatusComponent , PendingPrescriptionStatusComponent , TotalPrescriptionTodayTableComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardComponent {

}
