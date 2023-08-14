import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today-lab-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today-lab-status.component.html',
  styleUrls: ['./today-lab-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayLabStatusComponent {

}
