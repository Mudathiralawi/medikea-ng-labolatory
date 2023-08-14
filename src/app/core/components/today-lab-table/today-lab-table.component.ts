import { AfterViewInit, ChangeDetectionStrategy, Component , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-today-lab-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule , MatDialogModule],
  templateUrl: './today-lab-table.component.html',
  styleUrls: ['./today-lab-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayLabTableComponent {

  displayedColumns = ['patientId', 'patientName', 'age', 'gender' , 'weight' , 'orderedBy' , 'channel' , 'status'];

  patient =  [
    {
      patientId: 1,
      patientName: 'John Doe',
      age: 30,
      gender: 'Male',
      weight: 75,
      orderedBy: 'Dr. Smith',
      channel: 'In-person',
      status: 'Pending'
    },
    {
      patientId: 2,
      patientName: 'Jane Smith',
      age: 28,
      gender: 'Female',
      weight: 62,
      orderedBy: 'Dr. Johnson',
      channel: 'Online',
      status: 'Collected'
    },
    {
      patientId: 3,
      patientName: 'Alex Johnson',
      age: 45,
      gender: 'Non-binary',
      weight: 80,
      orderedBy: 'Dr. Brown',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 4,
      patientName: 'Emily White',
      age: 22,
      gender: 'Female',
      weight: 50,
      orderedBy: 'Dr. Davis',
      channel: 'In-person',
      status: 'Collected'
    },
    {
      patientId: 5,
      patientName: 'Michael Wilson',
      age: 60,
      gender: 'Male',
      weight: 90,
      orderedBy: 'Dr. Lee',
      channel: 'Online',
      status: 'Pending'
    },
    {
      patientId: 6,
      patientName: 'Linda Martinez',
      age: 38,
      gender: 'Female',
      weight: 68,
      orderedBy: 'Dr. Rodriguez',
      channel: 'In-person',
      status: 'Collected'
    },
    {
      patientId: 7,
      patientName: 'William Taylor',
      age: 55,
      gender: 'Male',
      weight: 78,
      orderedBy: 'Dr. Wilson',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 8,
      patientName: 'Sophia Anderson',
      age: 29,
      gender: 'Female',
      weight: 60,
      orderedBy: 'Dr. Thompson',
      channel: 'Online',
      status: 'Done'
    },
    {
      patientId: 9,
      patientName: 'David Harris',
      age: 40,
      gender: 'Male',
      weight: 85,
      orderedBy: 'Dr. Miller',
      channel: 'In-person',
      status: 'Done'
    },
    {
      patientId: 10,
      patientName: 'Olivia Clark',
      age: 24,
      gender: 'Female',
      weight: 55,
      orderedBy: 'Dr. Evans',
      channel: 'Online',
      status: 'Collected'
    },
    {
      patientId: 11,
      patientName: 'Robert Allen',
      age: 50,
      gender: 'Male',
      weight: 82,
      orderedBy: 'Dr. King',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 12,
      patientName: 'Ava Scott',
      age: 32,
      gender: 'Female',
      weight: 63,
      orderedBy: 'Dr. Green',
      channel: 'In-person',
      status: 'Collected'
    },
    {
      patientId: 13,
      patientName: 'James Perez',
      age: 28,
      gender: 'Male',
      weight: 70,
      orderedBy: 'Dr. Hall',
      channel: 'Online',
      status: 'Done'
    },
    {
      patientId: 14,
      patientName: 'Mia Jackson',
      age: 26,
      gender: 'Female',
      weight: 58,
      orderedBy: 'Dr. Turner',
      channel: 'In-person',
      status: 'Collected'
    },
    {
      patientId: 15,
      patientName: 'Daniel Martinez',
      age: 35,
      gender: 'Male',
      weight: 76,
      orderedBy: 'Dr. Martinez',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 16,
      patientName: 'Isabella Johnson',
      age: 31,
      gender: 'Female',
      weight: 64,
      orderedBy: 'Dr. Hernandez',
      channel: 'Online',
      status: 'Done'
    },
    {
      patientId: 17,
      patientName: 'Michael Brown',
      age: 48,
      gender: 'Male',
      weight: 88,
      orderedBy: 'Dr. Young',
      channel: 'In-person',
      status: 'Pending'
    },
    {
      patientId: 18,
      patientName: 'Sophia Taylor',
      age: 29,
      gender: 'Female',
      weight: 59,
      orderedBy: 'Dr. Adams',
      channel: 'Online',
      status: 'Collected'
    },
    {
      patientId: 19,
      patientName: 'William Jackson',
      age: 42,
      gender: 'Male',
      weight: 80,
      orderedBy: 'Dr. Scott',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 20,
      patientName: 'Olivia Smith',
      age: 27,
      gender: 'Female',
      weight: 61,
      orderedBy: 'Dr. Allen',
      channel: 'In-person',
      status: 'Collected'
    }
  ];

  dataSource = new MatTableDataSource(this.patient);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
