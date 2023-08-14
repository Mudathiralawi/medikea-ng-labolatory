import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLabsSearchComponent } from '../../core/components/all-labs-search/all-labs-search.component';
import { AllLabsTableComponent } from '../../core/components/all-labs-table/all-labs-table.component';

@Component({
  selector: 'app-all-ordered-labs',
  standalone: true,
  imports: [CommonModule , AllLabsSearchComponent , AllLabsTableComponent ],
  templateUrl: './all-ordered-labs.component.html',
  styleUrls: ['./all-ordered-labs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AllOrderedLabsComponent {

}
