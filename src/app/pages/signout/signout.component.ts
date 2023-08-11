import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignoutComponent {

}
