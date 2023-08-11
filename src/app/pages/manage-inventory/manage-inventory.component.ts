import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageInventoryBarComponent } from '../../core/components/manage-inventory-bar/manage-inventory-bar.component' ;
import { AvailableInventoryTableComponent } from '../../core/components/available-inventory-table/available-inventory-table.component';


@Component({
  selector: 'app-manage-inventory',
  standalone: true,
  imports: [CommonModule , ManageInventoryBarComponent , AvailableInventoryTableComponent ],
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ManageInventoryComponent {

}
