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
  selector: 'app-edit-stock-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule ],
  templateUrl: './edit-stock-form.component.html',
  styleUrls: ['./edit-stock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditStockFormComponent implements OnInit {

  Stock: any ;
  EditstockForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditStockFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private form: FormBuilder
  ) {
    this.EditstockForm = this.form.group({
      productName: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      description: ['']
    });
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }

  update(){

  }

}
