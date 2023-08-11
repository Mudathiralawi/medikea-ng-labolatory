import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountDashboardComponent } from '../../core/components/my-account-dashboard/my-account-dashboard.component'

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule , MyAccountDashboardComponent ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AccountComponent {

}
