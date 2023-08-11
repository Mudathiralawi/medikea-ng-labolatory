import { ChangeDetectionStrategy, Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dispensing-medicine-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispensing-medicine-form.component.html',
  styleUrls: ['./dispensing-medicine-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DispensingMedicineFormComponent implements OnInit {

IntendedPatient: any ;

  constructor(
    public dialogRef: MatDialogRef<DispensingMedicineFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {
    this.IntendedPatient = data ;
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }

}
