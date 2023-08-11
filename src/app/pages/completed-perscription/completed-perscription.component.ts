import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompletedPerscriptionTableComponent} from '../../core/components/completed-perscription-table/completed-perscription-table.component';

@Component({
  selector: 'app-completed-perscription',
  standalone: true,
  imports: [CommonModule , CompletedPerscriptionTableComponent ],
  templateUrl: './completed-perscription.component.html',
  styleUrls: ['./completed-perscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CompletedPerscriptionComponent {

}
