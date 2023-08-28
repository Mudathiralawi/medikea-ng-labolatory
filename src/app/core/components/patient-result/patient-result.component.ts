import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-result.component.html',
  styleUrls: ['./patient-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientResultComponent {

  patient: any ;

constructor(
  public dialogRef: MatDialogRef<PatientResultComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
){
this.patient = data ;
}

close(){
  this.dialogRef.close();
}

calculateMarkerPosition(row: any): string {
  if (row.result <= row.minimumRange) {
    return (row.result / row.minimumRange) * 33.3 + '%';
  } else if (row.result >= row.maximumRange) {
    const result = row.result - row.maximumRange;
    if (result > 33.2) {
      return '100%';
    } else {
      return (result + 66.6) + '%';
    }
  } else {
    return ((row.result - row.minimumRange) / (row.maximumRange - row.minimumRange))*33.3 + 33.3 + '%';
  }
}

calculateMarkerPositionBinary(row: any): string {
  if (row.result === row.normalRange) {
    return '25%';
  } else {
    return '75%';
  }
}

}
