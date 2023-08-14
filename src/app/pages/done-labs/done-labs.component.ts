import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneLabSearchComponent } from '../../core/components/done-lab-search/done-lab-search.component';
import { DoneLabTableComponent} from '../../core/components/done-lab-table/done-lab-table.component';

@Component({
  selector: 'app-done-labs',
  standalone: true,
  imports: [CommonModule , DoneLabSearchComponent , DoneLabTableComponent ],
  templateUrl: './done-labs.component.html',
  styleUrls: ['./done-labs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DoneLabsComponent {

}
