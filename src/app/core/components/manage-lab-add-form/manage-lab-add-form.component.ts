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
  selector: 'app-manage-lab-add-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule],
  templateUrl: './manage-lab-add-form.component.html',
  styleUrls: ['./manage-lab-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabAddFormComponent {

  addLabTest: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ManageLabAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private Form: FormBuilder
  ) {
    this.addLabTest = this.Form.group({
      testname: ['' , [Validators.required]],
      department: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['' ,  [Validators.required]],
      description: ['', [Validators.required]],
      resultType: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      range: ['' , [Validators.required]],
    });
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close();
  }


}
