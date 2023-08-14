import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayLabStatusComponent } from '../../core/components/today-lab-status/today-lab-status.component';
import { PendingLabStatusComponent } from '../../core/components/pending-lab-status/pending-lab-status.component';
import { SampleColllectedStatusComponent } from '../../core/components/sample-colllected-status/sample-colllected-status.component';
import { DoneLabStatusComponent } from '../../core/components/done-lab-status/done-lab-status.component';
import { SearchTodayComponent } from '../../core/components/search-today/search-today.component';
import { TodayLabTableComponent } from '../../core/components/today-lab-table/today-lab-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule , TodayLabStatusComponent , TodayLabTableComponent , SearchTodayComponent , SampleColllectedStatusComponent , DoneLabStatusComponent , PendingLabStatusComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DashboardComponent {

}
