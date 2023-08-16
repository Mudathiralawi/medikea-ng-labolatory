import { ChangeDetectionStrategy, Component , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ManageLabEditFormComponent } from '../manage-lab-edit-form/manage-lab-edit-form.component';

@Component({
  selector: 'app-manage-lab-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule , MatDialogModule , ManageLabEditFormComponent ],
  templateUrl: './manage-lab-table.component.html',
  styleUrls: ['./manage-lab-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabTableComponent {

  displayedColumns = ['testName', 'department', 'category', 'price' , 'update'];


  tests = [
    {
      id: 1,
      testName: "FBC",
      department: "Hematology",
      category: "Hematology Tests",
      price: "8000 TSH",
      resultType: 'Range',
      unit: 'g/mol',
      normalRange: '10 - 100'
    },
    {
      id: 1,
      testName: "Sodium",
      department: "Biochemistry",
      category: "Electrolytes",
      price: "3500 TSH",
      resultType: 'Observable',
      unit: 'none',
      normalRange: 'Seen - Unseen'
    },
    {
      id: 1,
      testName: "Stool Examination",
      department: "Microbiology",
      category: "Microbiological Tests",
      price: "6000 TSH",
      resultType: 'Sided',
      unit: 'none',
      normalRange: 'positive - negative'
    },
    {
      id: 1,
      testName: "Urinalysis",
      department: "Laboratory",
      category: "Urinalysis",
      price: "4000 TSH",
      resultType: 'Conditional',
      unit: '',
      normalRange: 'Normal - Abnormal'
    },
    {
      id: 1,
      testName: "Blood Glucose",
      department: "Biochemistry",
      category: "Glucose Tests",
      price: "2500 TSH",
      resultType: 'Conditional',
      unit: '',
      normalRange: 'Normal - Abnormal'
    },
    {
      id: 1,
      testName: "Thyroid Function Test",
      department: "Endocrinology",
      category: "Hormone Tests",
      price: "7000 TSH",
      resultType: 'Conditional',
      unit: '',
      normalRange: 'Normal - Abnormal'
    },
    {
      id: 1,
      testName: "Tumor Marker Panel",
      department: "Oncology",
      category: "Tumor Markers",
      price: "10000 TSH",
      resultType: 'Conditional',
      unit: '',
      normalRange: 'Normal - Abnormal'
    },
    {
      id: 1,
      testName: "Serology",
      department: "Immunology",
      category: "Serological Tests",
      price: "5500 TSH",
      resultType: 'Sided',
      unit: 'none',
      normalRange: 'positive - negative'
    },
    {
      id: 1,
      testName: "Microscopic Urine Analysis",
      department: "Laboratory",
      category: "Urinalysis",
      price: "4500 TSH",
      resultType: 'Sided',
      unit: 'none',
      normalRange: 'positive - negative'
    },
    {
      id: 1,
      testName: "Cholesterol",
      department: "Biochemistry",
      category: "Lipid Profile",
      price: "3000 TSH",
      resultType: 'Sided',
      unit: 'none',
      normalRange: 'positive - negative'
    },
    {
      id: 1,
      testName: "Complete Metabolic Panel",
      department: "Biochemistry",
      category: "Comprehensive Metabolic Panel",
      price: "8500 TSH",
      resultType: 'Sided',
      unit: 'none',
      normalRange: 'positive - negative'
    },
    {
      id: 1,
      testName: "Hemoglobin A1c",
      department: "Hematology",
      category: "Hemoglobin Tests",
      price: "4000 TSH",
      resultType: 'Observable',
      unit: 'none',
      normalRange: 'Seen - Unseen'
    },
    {
      id: 1,
      testName: "Liver Function Tests",
      department: "Biochemistry",
      category: "Liver Function Tests",
      price: "6000 TSH",
      resultType: 'Observable',
      unit: 'none',
      normalRange: 'Seen - Unseen'
    },
    {
      id: 1,
      testName: "Coagulation Profile",
      department: "Hematology",
      category: "Coagulation Tests",
      price: "7500 TSH",
      resultType: 'Observable',
      unit: 'none',
      normalRange: 'Seen - Unseen'
    },
    {
      id: 1,
      testName: "Vitamin D Levels",
      department: "Biochemistry",
      category: "Vitamin Tests",
      price: "5000 TSH",
      resultType: 'Observable',
      unit: 'none',
      normalRange: 'Seen - Unseen'
    },
    {
      id: 1,
      testName: "Potassium",
      department: "Biochemistry",
      category: "Electrolytes",
      price: "3200 TSH",
      resultType: 'Range',
      unit: 'g/mol',
      normalRange: '10 - 100'
    },
    {
      id: 1,
      testName: "Stool Occult Blood",
      department: "Microbiology",
      category: "Microbiological Tests",
      price: "4200 TSH",
      resultType: 'Range',
      unit: 'g/mol',
      normalRange: '10 - 100'
    },
    {
      id: 1,
      testName: "Urine Culture",
      department: "Microbiology",
      category: "Microbiological Tests",
      price: "4800 TSH",
      resultType: 'Range',
      unit: 'g/mol',
      normalRange: '10 - 100'
    },
    {
      id: 1,
      testName: "Glycosylated Hemoglobin",
      department: "Hematology",
      category: "Hemoglobin Tests",
      price: "3800 TSH",
      resultType: 'Range',
      unit: 'g/mol',
      normalRange: '10 - 100'
    }
  ]

  dataSource = new MatTableDataSource(this.tests);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor( public dialog: MatDialog ) {}

  editDialog(test: any) {
    const dialogRef = this.dialog.open(ManageLabEditFormComponent, {
      data: { test: test }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const test = result ;
      }
    });
  }

  Edit(test: any){
    this.editDialog(test);
  }

}
