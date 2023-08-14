import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-lab-add-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-lab-add-form.component.html',
  styleUrls: ['./manage-lab-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabAddFormComponent {

}
