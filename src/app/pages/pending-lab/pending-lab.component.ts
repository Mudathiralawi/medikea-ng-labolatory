import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingLabSearchComponent } from '../../core/components/pending-lab-search/pending-lab-search.component';
import { PendingLabTableComponent } from '../../core/components/pending-lab-table/pending-lab-table.component';

@Component({
  selector: 'app-pending-lab',
  standalone: true,
  imports: [CommonModule , PendingLabSearchComponent , PendingLabTableComponent ],
  templateUrl: './pending-lab.component.html',
  styleUrls: ['./pending-lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PendingLabComponent {

}
