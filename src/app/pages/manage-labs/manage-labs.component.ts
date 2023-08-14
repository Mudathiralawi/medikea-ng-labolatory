import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageLabSearchComponent } from '../../core/components/manage-lab-search/manage-lab-search.component';
import { ManageLabTableComponent } from '../../core/components/manage-lab-table/manage-lab-table.component';

@Component({
  selector: 'app-manage-labs',
  standalone: true,
  imports: [CommonModule , ManageLabSearchComponent , ManageLabTableComponent ],
  templateUrl: './manage-labs.component.html',
  styleUrls: ['./manage-labs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ManageLabsComponent {

}
