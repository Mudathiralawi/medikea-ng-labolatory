import { AfterViewInit, ChangeDetectionStrategy, Component , inject , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule , MatTableDataSource  } from '@angular/material/table';
import { MatPaginatorModule , MatPaginator } from '@angular/material/paginator';
import { EditStockFormComponent } from '../edit-stock-form/edit-stock-form.component' ;
import { UpdateStockFormComponent } from '../update-stock-form/update-stock-form.component' ;
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-available-inventory-table',
  standalone: true,
  imports: [CommonModule , MatTableModule , MatPaginatorModule, EditStockFormComponent , UpdateStockFormComponent  , MatDialogModule ],
  templateUrl: './available-inventory-table.component.html',
  styleUrls: ['./available-inventory-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableInventoryTableComponent {

  displayedColumns = ['productName', 'price', 'quantity' , 'id'];

  pharmacyMedicines = [
    {
      id: 1,
      productName: 'Aspirin',
      price: 5.99,
      quantity: 100
    },
    {
      id: 2,
      productName: 'Ibuprofen',
      price: 3.49,
      quantity: 75
    },
    {
      id: 3,
      productName: 'Paracetamol',
      price: 2.99,
      quantity: 120
    },
    {
      id: 4,
      productName: 'Loratadine',
      price: 7.95,
      quantity: 60
    },
    {
      id: 5,
      productName: 'Omeprazole',
      price: 12.75,
      quantity: 30
    },
    {
      id: 6,
      productName: 'Cetirizine',
      price: 6.25,
      quantity: 90
    },
    {
      id: 7,
      productName: 'Amoxicillin',
      price: 8.99,
      quantity: 50
    },
    {
      id: 8,
      productName: 'Simvastatin',
      price: 15.50,
      quantity: 40
    },
    {
      id: 9,
      productName: 'Metformin',
      price: 4.75,
      quantity: 85
    },
    {
      id: 10,
      productName: 'Losartan',
      price: 9.85,
      quantity: 70
    },
    {
      id: 11,
      productName: 'Warfarin',
      price: 7.20,
      quantity: 25
    },
    {
      id: 12,
      productName: 'Atorvastatin',
      price: 11.30,
      quantity: 60
    },
    {
      id: 13,
      productName: 'Fluoxetine',
      price: 6.80,
      quantity: 70
    },
    {
      id: 14,
      productName: 'Ciprofloxacin',
      price: 13.45,
      quantity: 40
    },
    {
      id: 15,
      productName: 'Prednisone',
      price: 8.15,
      quantity: 50
    },
    {
      id: 16,
      productName: 'Furosemide',
      price: 4.50,
      quantity: 100
    },
    {
      id: 17,
      productName: 'Lisinopril',
      price: 5.70,
      quantity: 90
    },
    {
      id: 18,
      productName: 'Amlodipine',
      price: 6.25,
      quantity: 80
    },
    {
      id: 19,
      productName: 'Gabapentin',
      price: 9.99,
      quantity: 60
    },
    {
      id: 20,
      productName: 'Metoprolol',
      price: 7.40,
      quantity: 70
    }
  ];

  dataSource = new MatTableDataSource(this.pharmacyMedicines);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor( public dialog: MatDialog ) {}

  openEditStock() {
    const dialogRef = this.dialog.open(EditStockFormComponent, {
      data: { Stock: 'Medicine' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const Stock = result ;
      }
    });
  }

  openUpdateStock(product : any) {
    const dialogRef = this.dialog.open(UpdateStockFormComponent, {
      data: { Stock: product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result ?? null){
        const Stock = result ;
      }
    });
  }

  updateStock(product: any){
    this.openUpdateStock(product);
  }

  editStock(product : any){
    this.openEditStock();
  }

}
