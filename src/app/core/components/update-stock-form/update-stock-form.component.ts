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
  selector: 'app-update-stock-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule ],
  templateUrl: './update-stock-form.component.html',
  styleUrls: ['./update-stock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateStockFormComponent implements OnInit {

  Stock: any ;
  UpdatestockForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateStockFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private form: FormBuilder
  ) {
    this.Stock = data.Stock ;
    this.UpdatestockForm = this.form.group({
      productName: [this.Stock.productName , Validators.required],
      price: [ this.Stock.price , [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      Cquantity: [this.Stock.quantity, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      Nquantity: ['' , Validators.required],
      Tquantity: [this.Stock.quantity , Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.UpdatestockForm.get('Nquantity')?.valueChanges.subscribe(newValue => {
      const currentCquantity = this.UpdatestockForm.get('Cquantity')?.value || 0 ;
      const newTquantity = currentCquantity + (+newValue || 0);
      this.UpdatestockForm.patchValue({
        Tquantity: newTquantity
      });
    });
  }

  close(){
    this.dialogRef.close();
  }

  update(){
    this.dialogRef.close();
  }


}
