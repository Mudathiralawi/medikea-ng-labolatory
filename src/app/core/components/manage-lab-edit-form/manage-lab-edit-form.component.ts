import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-lab-edit-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-lab-edit-form.component.html',
  styleUrls: ['./manage-lab-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabEditFormComponent {

}
