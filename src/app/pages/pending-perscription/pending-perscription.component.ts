import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPendingPrescriptionComponent } from '../../core/components/search-pending-prescription/search-pending-prescription.component';
import { PendingPrescriptionTableComponent } from '../../core/components/pending-prescription-table/pending-prescription-table.component';

@Component({
  selector: 'app-pending-perscription',
  standalone: true,
  imports: [CommonModule , SearchPendingPrescriptionComponent, PendingPrescriptionTableComponent ],
  templateUrl: './pending-perscription.component.html',
  styleUrls: ['./pending-perscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PendingPerscriptionComponent {

}
