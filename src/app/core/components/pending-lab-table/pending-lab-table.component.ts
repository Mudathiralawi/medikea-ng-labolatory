import { ChangeDetectionStrategy, Component , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SampleCollectionFillFormComponent } from '../../components/sample-collection-fill-form/sample-collection-fill-form.component';
import { LabResultFillFormComponent } from '../../components/lab-result-fill-form/lab-result-fill-form.component';


@Component({
  selector: 'app-pending-lab-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule , MatDialogModule , SampleCollectionFillFormComponent , LabResultFillFormComponent],
  templateUrl: './pending-lab-table.component.html',
  styleUrls: ['./pending-lab-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingLabTableComponent {

  displayedColumns = ['patientId', 'patientName', 'age', 'gender' , 'weight' , 'orderedBy' , 'channel' , 'status'];

  patient = [
    {
      patientId: 1,
      patientName: 'John Doe Test',
      age: 30,
      gender: 'Male',
      weight: 75,
      orderedBy: 'Dr. Smith',
      channel: 'In-person',
      status: 'Collected',
      tests: [
        {
          id: 1,
          testName: "FBC",
          department: "Hematology",
          category: "Hematology Tests",
          price: "8000 TSH",
          resultType: "Range",
          unit: "g/mol",
          minimumRange: 10,
          maximumRange: 100,
          result: null
        },
        {
          id: 2,
          testName: "Sodium",
          department: "Biochemistry",
          category: "Electrolytes",
          price: "3500 TSH",
          resultType: "Observable",
          normalRange: "Seen",
          result: null
        },
        {
          id: 3,
          testName: "Stool Examination",
          department: "Microbiology",
          category: "Microbiological Tests",
          price: "6000 TSH",
          resultType: "Sided",
          normalRange: "Positive",
          result: null
        }
      ]
    },
    {
      patientId: 2,
      patientName: 'Emily White',
      age: 22,
      gender: 'Female',
      weight: 50,
      orderedBy: 'Dr. Davis',
      channel: 'In-person',
      status: 'Collected',
      tests: [
        {
          id: 11,
          testName: "Lipid Profile",
          department: "Biochemistry",
          category: "Lipid Tests",
          price: "4000 TSH",
          resultType: "Range",
          unit: "mg/dL",
          minimumRange: 100,
          maximumRange: 200,
          result: null
        },
        {
          id: 10,
          testName: "Cholesterol",
          department: "Biochemistry",
          category: "Lipid Profile",
          price: "3000 TSH",
          resultType: "Sided",
          normalRange: "Negative",
          result: null
        }
      ]
    },
    {
      patientId: 3,
      patientName: 'Jane Smith',
      age: 28,
      gender: 'Female',
      weight: 62,
      orderedBy: 'Dr. Johnson',
      channel: 'Online',
      status: 'Collected',
      tests: [
        {
          id: 11,
          testName: "Lipid Profile",
          department: "Biochemistry",
          category: "Lipid Tests",
          price: "4000 TSH",
          resultType: "Range",
          unit: "mg/dL",
          minimumRange: 100,
          maximumRange: 200,
          result: null
        }
      ]
    },
    {
      patientId: 4,
      patientName: 'Alex Johnson',
      age: 45,
      gender: 'Non-binary',
      weight: 80,
      orderedBy: 'Dr. Brown',
      channel: 'Phone',
      status: 'Pending',
      tests: [
        {
          id: 1,
          testName: "FBC",
          department: "Hematology",
          category: "Hematology Tests",
          price: "8000 TSH",
          resultType: "Range",
          unit: "g/mol",
          minimumRange: 10,
          maximumRange: 100,
          result: null
        },
        {
          id: 2,
          testName: "Sodium",
          department: "Biochemistry",
          category: "Electrolytes",
          price: "3500 TSH",
          resultType: "Observable",
          normalRange: "Seen",
          result: null
        }
      ]
    },
    {
      patientId: 5,
      patientName: 'Michael Wilson',
      age: 60,
      gender: 'Male',
      weight: 90,
      orderedBy: 'Dr. Lee',
      channel: 'Online',
      status: 'Pending',
      tests: [
        {
          id: 3,
          testName: "Stool Examination",
          department: "Microbiology",
          category: "Microbiological Tests",
          price: "6000 TSH",
          resultType: "Sided",
          normalRange: "Positive",
          result: null
        },
        {
          id: 4,
          testName: "Urinalysis",
          department: "Laboratory",
          category: "Urinalysis",
          price: "4000 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: null
        }
      ]
    },
    {
      patientId: 6,
      patientName: 'Linda Miller',
      age: 35,
      gender: 'Female',
      weight: 68,
      orderedBy: 'Dr. Harris',
      channel: 'In-person',
      status: 'Pending',
      tests: [
        {
          id: 5,
          testName: "Blood Glucose",
          department: "Biochemistry",
          category: "Glucose Tests",
          price: "2500 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: null
        },
        {
          id: 6,
          testName: "Thyroid Function Test",
          department: "Endocrinology",
          category: "Hormone Tests",
          price: "7000 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: null
        },
        {
          id: 7,
          testName: "Tumor Marker Panel",
          department: "Oncology",
          category: "Tumor Markers",
          price: "10000 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: null
        },
        {
          id: 8,
          testName: "Serology",
          department: "Immunology",
          category: "Serological Tests",
          price: "5500 TSH",
          resultType: "Sided",
          normalRange: "Negative",
          result: null
        }
      ]
    },
    {
      patientId: 5,
      patientName: 'Michael Wilson',
      age: 60,
      gender: 'Male',
      weight: 90,
      orderedBy: 'Dr. Lee',
      channel: 'Online',
      status: 'Pending',
      tests: [
        {
          id: 3,
          testName: "Stool Examination",
          department: "Microbiology",
          category: "Microbiological Tests",
          price: "6000 TSH",
          resultType: "Sided",
          normalRange: "Positive",
          result: null
        },
        {
          id: 4,
          testName: "Urinalysis",
          department: "Laboratory",
          category: "Urinalysis",
          price: "4000 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: null
        }
      ]
    },
    {
      patientId: 6,
      patientName: 'Michael Wilson',
      age: 60,
      gender: 'Male',
      weight: 90,
      orderedBy: 'Dr. Lee',
      channel: 'Online',
      status: 'Complete',
      tests: [
        {
          id: 3,
          testName: "Stool Examination",
          department: "Microbiology",
          category: "Microbiological Tests",
          price: "6000 TSH",
          resultType: "Sided",
          normalRange: "Positive",
          result: 'Negative'
        },
        {
          id: 4,
          testName: "Urinalysis",
          department: "Laboratory",
          category: "Urinalysis",
          price: "4000 TSH",
          resultType: "Conditional",
          normalRange: "Normal",
          result: 'Abnormal'
        }
      ]
    },
  ];

  dataSource = new MatTableDataSource(this.patient);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor( public dialog: MatDialog ) {}

  openCollectSample(patient : any) {
    const dialogRef = this.dialog.open(SampleCollectionFillFormComponent, {
      data: { patient: patient }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const resullt = result ;
      }
    });
  }

  openFillResult(patient : any) {
    const dialogRef = this.dialog.open(LabResultFillFormComponent, {
      data: { patient: patient }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const resullt = result ;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  collectForm(patient: any){
    this.openCollectSample(patient);
  }

  postResult(patient: any){
    this.openFillResult(patient);
  }

}
