import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPerscriptionTableComponent } from '../../core/components/all-perscription-table/all-perscription-table.component';

@Component({
  selector: 'app-all-perscription',
  standalone: true,
  imports: [CommonModule , AllPerscriptionTableComponent ],
  templateUrl: './all-perscription.component.html',
  styleUrls: ['./all-perscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AllPerscriptionComponent {

}
