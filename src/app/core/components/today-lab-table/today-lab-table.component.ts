import { AfterViewInit, ChangeDetectionStrategy, Component , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SampleCollectionFillFormComponent } from '../../components/sample-collection-fill-form/sample-collection-fill-form.component';
import { LabResultFillFormComponent } from '../../components/lab-result-fill-form/lab-result-fill-form.component';

@Component({
  selector: 'app-today-lab-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule , MatDialogModule , SampleCollectionFillFormComponent , LabResultFillFormComponent ],
  templateUrl: './today-lab-table.component.html',
  styleUrls: ['./today-lab-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayLabTableComponent {

  displayedColumns = ['patientId', 'patientName', 'age', 'gender' , 'weight' , 'orderedBy' , 'channel' , 'status'];

  patient =  [
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
            testName: 'Electrolyte Symphony',
            result: null,
            units: 'mmol/L',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Biochemistry',
            sampleType: 'Blood'
        },
        {
            testName: 'Mystical Microbes Panel',
            result: null,
            units: '',
            referenceRange: 'Undetectable',
            status: 'Pending',
            department: 'Microbiology',
            sampleType: 'Stool'
        },
        {
            testName: 'Ethereal Energy Index',
            result: null,
            units: 'kWh/L',
            referenceRange: '10 - 100 kWh/L',
            status: 'Pending',
            department: 'Metabolism',
            sampleType: 'Urine'
        },
        {
          testName: 'Vitality Spectrum',
          result: 'Optimal',
          units: '',
          referenceRange: 'Optimal',
          status: 'Completed',
          department: 'Wellness',
          sampleType: 'Blood'
      }
    ]
    },
    {
      patientId: 1,
      patientName: 'John Doe',
      age: 30,
      gender: 'Male',
      weight: 75,
      orderedBy: 'Dr. Smith',
      channel: 'In-person',
      status: 'Pending',
      tests: [
          {
              testName: 'Electrolyte Symphony',
              result: null,
              units: 'mmol/L',
              referenceRange: 'Varies',
              status: 'Pending',
              department: 'Biochemistry',
              sampleType: 'Blood'
          },
          {
              testName: 'Mystical Microbes Panel',
              result: null,
              units: '',
              referenceRange: 'Undetectable',
              status: 'Pending',
              department: 'Microbiology',
              sampleType: 'Stool'
          },
          {
              testName: 'Ethereal Energy Index',
              result: null,
              units: 'kWh/L',
              referenceRange: '10 - 100 kWh/L',
              status: 'Pending',
              department: 'Metabolism',
              sampleType: 'Urine'
          }
      ]
  },
  {
      patientId: 2,
      patientName: 'Jane Smith',
      age: 28,
      gender: 'Female',
      weight: 62,
      orderedBy: 'Dr. Johnson',
      channel: 'Online',
      status: 'Collected',
      tests: [
          {
              testName: 'Neurotransmitter Harmony',
              result: 'Normal',
              units: '',
              referenceRange: 'Normal',
              status: 'Completed',
              department: 'Neurology',
              sampleType: 'Saliva'
          },
          {
              testName: 'Vitality Spectrum',
              result: 'Optimal',
              units: '',
              referenceRange: 'Optimal',
              status: 'Completed',
              department: 'Wellness',
              sampleType: 'Blood'
          }
      ]
  },
  {
      patientId: 3,
      patientName: 'Alex Johnson',
      age: 45,
      gender: 'Non-binary',
      weight: 80,
      orderedBy: 'Dr. Brown',
      channel: 'Phone',
      status: 'Pending',
      tests: [
          {
              testName: 'DNA Resonance Analysis',
              result: null,
              units: '',
              referenceRange: 'Personalized',
              status: 'Pending',
              department: 'Genetics',
              sampleType: 'Saliva'
          }
      ]
  },
  {
      patientId: 4,
      patientName: 'Emily White',
      age: 22,
      gender: 'Female',
      weight: 50,
      orderedBy: 'Dr. Davis',
      channel: 'In-person',
      status: 'Collected',
      tests: [
          {
              testName: 'Metabolic Enigma',
              result: null,
              units: '',
              referenceRange: 'Enigmatic',
              status: 'Pending',
              department: 'Metabolism',
              sampleType: 'Blood'
          },
          {
              testName: 'Chromosomal Kaleidoscope',
              result: null,
              units: '',
              referenceRange: 'Multicolored',
              status: 'Pending',
              department: 'Genetics',
              sampleType: 'Blood'
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
            testName: 'Complete Blood Count (CBC)',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Hematology',
            sampleType: 'Blood'
        },
        {
            testName: 'Basic Metabolic Panel (BMP)',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Biochemistry',
            sampleType: 'Blood'
        }
    ]
},
{
    patientId: 6,
    patientName: 'Linda Martinez',
    age: 38,
    gender: 'Female',
    weight: 68,
    orderedBy: 'Dr. Rodriguez',
    channel: 'In-person',
    status: 'Collected',
    tests: [
        {
            testName: 'Urinalysis',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Clinical Pathology',
            sampleType: 'Urine'
        },
        {
            testName: 'Thyroid Function Tests',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Endocrinology',
            sampleType: 'Blood'
        }
    ]
},
{
    patientId: 7,
    patientName: 'William Taylor',
    age: 55,
    gender: 'Male',
    weight: 78,
    orderedBy: 'Dr. Wilson',
    channel: 'Phone',
    status: 'Pending',
    tests: [
        {
            testName: 'Liver Function Tests',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Hepatology',
            sampleType: 'Blood'
        },
        {
            testName: 'Lipid Profile',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Cardiology',
            sampleType: 'Blood'
        }
    ]
},
{
    patientId: 8,
    patientName: 'Sophia Anderson',
    age: 29,
    gender: 'Female',
    weight: 60,
    orderedBy: 'Dr. Thompson',
    channel: 'Online',
    status: 'Done',
    tests: [
        {
            testName: 'Pregnancy Test',
            result: 'Negative',
            units: '',
            referenceRange: 'Negative',
            status: 'Completed',
            department: 'Obstetrics',
            sampleType: 'Urine'
        },
        {
            testName: 'Blood Type and Rh Factor',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Blood Bank',
            sampleType: 'Blood'
        }
    ]
},
{
    patientId: 9,
    patientName: 'David Harris',
    age: 40,
    gender: 'Male',
    weight: 85,
    orderedBy: 'Dr. Miller',
    channel: 'In-person',
    status: 'Done',
    tests: [
        {
            testName: 'Prostate-Specific Antigen (PSA) Test',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Urology',
            sampleType: 'Blood'
        },
        {
            testName: 'C-Reactive Protein (CRP) Test',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Inflammation',
            sampleType: 'Blood'
        }
    ]
},
{
    patientId: 10,
    patientName: 'Olivia Clark',
    age: 24,
    gender: 'Female',
    weight: 55,
    orderedBy: 'Dr. Evans',
    channel: 'Online',
    status: 'Collected',
    tests: [
        {
            testName: 'Thyroid Stimulating Hormone (TSH) Test',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Endocrinology',
            sampleType: 'Blood'
        },
        {
            testName: 'Uric Acid Test',
            result: null,
            units: '',
            referenceRange: 'Varies',
            status: 'Pending',
            department: 'Rheumatology',
            sampleType: 'Blood'
        }
    ]
},
{
  patientId: 11,
  patientName: 'Robert Allen',
  age: 50,
  gender: 'Male',
  weight: 82,
  orderedBy: 'Dr. King',
  channel: 'Phone',
  status: 'Pending',
  tests: [
      {
          testName: 'Lipid Profile',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Cardiology',
          sampleType: 'Blood'
      },
      {
          testName: 'Glucose Test',
          result: null,
          units: '',
          referenceRange: '70 - 140 mg/dL',
          status: 'Pending',
          department: 'Endocrinology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 12,
  patientName: 'Ava Scott',
  age: 32,
  gender: 'Female',
  weight: 63,
  orderedBy: 'Dr. Green',
  channel: 'In-person',
  status: 'Collected',
  tests: [
      {
          testName: 'Complete Blood Count (CBC)',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Hematology',
          sampleType: 'Blood'
      },
      {
          testName: 'Thyroid Function Tests',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Endocrinology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 13,
  patientName: 'James Perez',
  age: 28,
  gender: 'Male',
  weight: 70,
  orderedBy: 'Dr. Hall',
  channel: 'Online',
  status: 'Done',
  tests: [
      {
          testName: 'Hemoglobin A1c Test',
          result: '5.2%',
          units: '',
          referenceRange: '4.8% - 5.6%',
          status: 'Completed',
          department: 'Endocrinology',
          sampleType: 'Blood'
      },
      {
          testName: 'Liver Function Tests',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Hepatology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 14,
  patientName: 'Mia Jackson',
  age: 26,
  gender: 'Female',
  weight: 58,
  orderedBy: 'Dr. Turner',
  channel: 'In-person',
  status: 'Collected',
  tests: [
      {
          testName: 'Renal Function Panel',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Nephrology',
          sampleType: 'Blood'
      },
      {
          testName: 'Urinalysis',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Clinical Pathology',
          sampleType: 'Urine'
      }
  ]
},
{
  patientId: 15,
  patientName: 'Daniel Martinez',
  age: 35,
  gender: 'Male',
  weight: 76,
  orderedBy: 'Dr. Martinez',
  channel: 'Phone',
  status: 'Pending',
  tests: [
      {
          testName: 'Thyroid Stimulating Hormone (TSH) Test',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Endocrinology',
          sampleType: 'Blood'
      },
      {
          testName: 'C-Reactive Protein (CRP) Test',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Inflammation',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 16,
  patientName: 'Isabella Johnson',
  age: 31,
  gender: 'Female',
  weight: 64,
  orderedBy: 'Dr. Hernandez',
  channel: 'Online',
  status: 'Done',
  tests: [
      {
          testName: 'Vitamin D Test',
          result: '30 ng/mL',
          units: '',
          referenceRange: '30 - 100 ng/mL',
          status: 'Completed',
          department: 'Endocrinology',
          sampleType: 'Blood'
      },
      {
          testName: 'Iron Panel',
          result: null,
          units: '',
          referenceRange: '50 - 150 mcg/dL',
          status: 'Pending',
          department: 'Hematology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 17,
  patientName: 'Michael Brown',
  age: 48,
  gender: 'Male',
  weight: 88,
  orderedBy: 'Dr. Young',
  channel: 'In-person',
  status: 'Pending',
  tests: [
      {
          testName: 'Cardiac Enzyme Panel',
          result: null,
          units: '',
          referenceRange: 'Varies',
          status: 'Pending',
          department: 'Cardiology',
          sampleType: 'Blood'
      },
      {
          testName: 'Electrocardiogram (ECG)',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Cardiology',
          sampleType: 'None'
      }
  ]
},
{
  patientId: 18,
  patientName: 'Sophia Taylor',
  age: 29,
  gender: 'Female',
  weight: 59,
  orderedBy: 'Dr. Adams',
  channel: 'Online',
  status: 'Collected',
  tests: [
      {
          testName: 'Blood Type and Rh Factor',
          result: null,
          units: '',
          referenceRange: 'Varies',
          status: 'Pending',
          department: 'Blood Bank',
          sampleType: 'Blood'
      },
      {
          testName: 'Lipid Profile',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Cardiology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 19,
  patientName: 'William Jackson',
  age: 42,
  gender: 'Male',
  weight: 80,
  orderedBy: 'Dr. Scott',
  channel: 'Phone',
  status: 'Pending',
  tests: [
      {
          testName: 'Liver Function Tests',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Hepatology',
          sampleType: 'Blood'
      },
      {
          testName: 'Kidney Function Panel',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Nephrology',
          sampleType: 'Blood'
      }
  ]
},
{
  patientId: 20,
  patientName: 'Olivia Smith',
  age: 27,
  gender: 'Female',
  weight: 61,
  orderedBy: 'Dr. Allen',
  channel: 'In-person',
  status: 'Collected',
  tests: [
      {
          testName: 'Urinalysis',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Clinical Pathology',
          sampleType: 'Urine'
      },
      {
          testName: 'Thyroid Function Tests',
          result: null,
          units: '',
          referenceRange: 'Normal',
          status: 'Pending',
          department: 'Endocrinology',
          sampleType: 'Blood'
      }
  ]
}
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
