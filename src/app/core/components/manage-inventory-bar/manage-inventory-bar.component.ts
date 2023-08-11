import { AfterViewInit, ChangeDetectionStrategy, Component , inject , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component' ;
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule , ReactiveFormsModule , FormBuilder, FormGroup} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-manage-inventory-bar',
  standalone: true,
  imports: [CommonModule , AddProductFormComponent , MatDialogModule , FormsModule , ReactiveFormsModule , MatInputModule , MatFormFieldModule ],
  templateUrl: './manage-inventory-bar.component.html',
  styleUrls: ['./manage-inventory-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageInventoryBarComponent {

search: FormGroup ;

constructor(public dialog: MatDialog,
            public FormGroup: FormBuilder) {
this.search = this.FormGroup.group({
  searchQuery: ['']
});
}

  openAddProduct() {
    const dialogRef = this.dialog.open(AddProductFormComponent, {
      data: { Stock: 'Medicine' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const Stock = result ;
      }
    });
  }

  Add(){
    this.openAddProduct() ;
  }

  submit(){

  }

}
