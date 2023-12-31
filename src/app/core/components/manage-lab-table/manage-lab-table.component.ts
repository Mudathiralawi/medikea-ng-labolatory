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
      resultType: "Range",
      unit: "g/mol",
      minimumRange: 10,
      maximumRange: 100,
    },
    {
      id: 2,
      testName: "Sodium",
      department: "Biochemistry",
      category: "Electrolytes",
      price: "3500 TSH",
      resultType: "Observable",
      normalRange: "Seen",
    },
    {
      id: 3,
      testName: "Stool Examination",
      department: "Microbiology",
      category: "Microbiological Tests",
      price: "6000 TSH",
      resultType: "Sided",
      normalRange: "Positive",
    },
    {
      id: 4,
      testName: "Urinalysis",
      department: "Laboratory",
      category: "Urinalysis",
      price: "4000 TSH",
      resultType: "Conditional",
      normalRange: "Normal",
    },
    {
      id: 5,
      testName: "Blood Glucose",
      department: "Biochemistry",
      category: "Glucose Tests",
      price: "2500 TSH",
      resultType: "Conditional",
      normalRange: "Normal",
    },
    {
      id: 6,
      testName: "Thyroid Function Test",
      department: "Endocrinology",
      category: "Hormone Tests",
      price: "7000 TSH",
      resultType: "Conditional",
      normalRange: "Normal",
    },
    {
      id: 7,
      testName: "Tumor Marker Panel",
      department: "Oncology",
      category: "Tumor Markers",
      price: "10000 TSH",
      resultType: "Conditional",
      normalRange: "Normal",
    },
    {
      id: 8,
      testName: "Serology",
      department: "Immunology",
      category: "Serological Tests",
      price: "5500 TSH",
      resultType: "Sided",
      normalRange: "Negative",
    },
    {
      id: 9,
      testName: "Microscopic Urine Analysis",
      department: "Laboratory",
      category: "Urinalysis",
      price: "4500 TSH",
      resultType: "Sided",
      normalRange: "Negative",
    },
    {
      id: 10,
      testName: "Cholesterol",
      department: "Biochemistry",
      category: "Lipid Profile",
      price: "3000 TSH",
      resultType: "Sided",
      normalRange: "Negative",
    },
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
    },
  ];

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
