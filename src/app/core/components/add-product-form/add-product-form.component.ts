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
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule ],
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductFormComponent implements OnInit {

  Stock: any ;
  stockForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private Form: FormBuilder
  ) {
    this.stockForm = this.Form.group({
      productName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      description: ['' ,  Validators.required]
    });
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }

  save(){
    this.dialogRef.close(this.stockForm);
  }

}
