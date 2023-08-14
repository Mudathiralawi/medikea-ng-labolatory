import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-done-lab-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './done-lab-status.component.html',
  styleUrls: ['./done-lab-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneLabStatusComponent {

}
