import { ChangeDetectionStrategy, Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule , ReactiveFormsModule , FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-manage-lab-edit-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule],
  templateUrl: './manage-lab-edit-form.component.html',
  styleUrls: ['./manage-lab-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabEditFormComponent {

  test: any ;
  editLabTest: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ManageLabEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private Form: FormBuilder
  ) {
    this.editLabTest = this.Form.group({
      testname: [data.test.testName , Validators.required],
      department: [data.test.department, [Validators.required]],
      category: [data.test.category, [Validators.required]],
      price: [data.test.price ,  [Validators.required]],
      description: ['', [Validators.required]],
      resultType: [data.test.resultType, [Validators.required]],
      range: [data.test.normalRange],
    });
    this.test = data.test ;
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close(this.test);
  }

}
