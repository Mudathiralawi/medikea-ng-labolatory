import { AfterViewInit, ChangeDetectionStrategy, Component , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { DispensingMedicineFormComponent } from '../dispensing-medicine-form/dispensing-medicine-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-perscription-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule , DispensingMedicineFormComponent , MatDialogModule ],
  templateUrl: './all-perscription-table.component.html',
  styleUrls: ['./all-perscription-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllPerscriptionTableComponent {

  displayedColumns = ['patientId', 'patientName', 'age', 'gender' , 'weight' , 'prescriber' , 'channel' , 'status'];

  patient =  [
    {
      patientId: 1,
      patientName: 'John Doe',
      age: 30,
      gender: 'Male',
      weight: 75,
      prescriber: 'Dr. Smith',
      channel: 'In-person',
      status: 'Pending'
    },
    {
      patientId: 2,
      patientName: 'Jane Smith',
      age: 28,
      gender: 'Female',
      weight: 62,
      prescriber: 'Dr. Johnson',
      channel: 'Online',
      status: 'Dispensed'
    },
    {
      patientId: 3,
      patientName: 'Alex Johnson',
      age: 45,
      gender: 'Non-binary',
      weight: 80,
      prescriber: 'Dr. Brown',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 4,
      patientName: 'Emily White',
      age: 22,
      gender: 'Female',
      weight: 50,
      prescriber: 'Dr. Davis',
      channel: 'In-person',
      status: 'Dispensed'
    },
    {
      patientId: 5,
      patientName: 'Michael Wilson',
      age: 60,
      gender: 'Male',
      weight: 90,
      prescriber: 'Dr. Lee',
      channel: 'Online',
      status: 'Pending'
    },
    {
      patientId: 6,
      patientName: 'Linda Martinez',
      age: 38,
      gender: 'Female',
      weight: 68,
      prescriber: 'Dr. Rodriguez',
      channel: 'In-person',
      status: 'Dispensed'
    },
    {
      patientId: 7,
      patientName: 'William Taylor',
      age: 55,
      gender: 'Male',
      weight: 78,
      prescriber: 'Dr. Wilson',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 8,
      patientName: 'Sophia Anderson',
      age: 29,
      gender: 'Female',
      weight: 60,
      prescriber: 'Dr. Thompson',
      channel: 'Online',
      status: 'Dispensed'
    },
    {
      patientId: 9,
      patientName: 'David Harris',
      age: 40,
      gender: 'Male',
      weight: 85,
      prescriber: 'Dr. Miller',
      channel: 'In-person',
      status: 'Pending'
    },
    {
      patientId: 10,
      patientName: 'Olivia Clark',
      age: 24,
      gender: 'Female',
      weight: 55,
      prescriber: 'Dr. Evans',
      channel: 'Online',
      status: 'Dispensed'
    },
    {
      patientId: 11,
      patientName: 'Robert Allen',
      age: 50,
      gender: 'Male',
      weight: 82,
      prescriber: 'Dr. King',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 12,
      patientName: 'Ava Scott',
      age: 32,
      gender: 'Female',
      weight: 63,
      prescriber: 'Dr. Green',
      channel: 'In-person',
      status: 'Dispensed'
    },
    {
      patientId: 13,
      patientName: 'James Perez',
      age: 28,
      gender: 'Male',
      weight: 70,
      prescriber: 'Dr. Hall',
      channel: 'Online',
      status: 'Pending'
    },
    {
      patientId: 14,
      patientName: 'Mia Jackson',
      age: 26,
      gender: 'Female',
      weight: 58,
      prescriber: 'Dr. Turner',
      channel: 'In-person',
      status: 'Dispensed'
    },
    {
      patientId: 15,
      patientName: 'Daniel Martinez',
      age: 35,
      gender: 'Male',
      weight: 76,
      prescriber: 'Dr. Martinez',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 16,
      patientName: 'Isabella Johnson',
      age: 31,
      gender: 'Female',
      weight: 64,
      prescriber: 'Dr. Hernandez',
      channel: 'Online',
      status: 'Dispensed'
    },
    {
      patientId: 17,
      patientName: 'Michael Brown',
      age: 48,
      gender: 'Male',
      weight: 88,
      prescriber: 'Dr. Young',
      channel: 'In-person',
      status: 'Pending'
    },
    {
      patientId: 18,
      patientName: 'Sophia Taylor',
      age: 29,
      gender: 'Female',
      weight: 59,
      prescriber: 'Dr. Adams',
      channel: 'Online',
      status: 'Dispensed'
    },
    {
      patientId: 19,
      patientName: 'William Jackson',
      age: 42,
      gender: 'Male',
      weight: 80,
      prescriber: 'Dr. Scott',
      channel: 'Phone',
      status: 'Pending'
    },
    {
      patientId: 20,
      patientName: 'Olivia Smith',
      age: 27,
      gender: 'Female',
      weight: 61,
      prescriber: 'Dr. Allen',
      channel: 'In-person',
      status: 'Dispensed'
    }
  ];

  dataSource = new MatTableDataSource(this.patient);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  OpenForm(){

    this.openDialog();

  }

  constructor( public dialog: MatDialog ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DispensingMedicineFormComponent, {
      data: { patient: this.patient }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const dispensed = result ;
      }
    });
  }

}
