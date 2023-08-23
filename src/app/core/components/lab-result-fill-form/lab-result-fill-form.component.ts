import { ChangeDetectionStrategy, Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule , ReactiveFormsModule , FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-lab-result-fill-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , MatSelectModule, MatSlideToggleModule , MatSliderModule , FormsModule , MatFormFieldModule , MatInputModule , DatePipe ],
  templateUrl: './lab-result-fill-form.component.html',
  styleUrls: ['./lab-result-fill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LabResultFillFormComponent implements OnInit {

  collectSample: FormGroup;
  patient: any ;
  currentDate: Date = new Date();
  currentTime: string = '' ;
  postion: number = 0.5;

  constructor(
    public dialogRef: MatDialogRef<LabResultFillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private form: FormBuilder
  ) {
    this.collectSample = this.form.group({
      patientId: [data.patient.patientId, Validators.required],
      patientName: [data.patient.patientName, Validators.required],
      age: [data.patient.age, Validators.required],
      gender: [data.patient.gender, Validators.required],
      orderedBy: [data.patient.orderedBy, Validators.required],
      sampleCollectedBy: ['Me', Validators.required]
    });
    this.patient = data.patient ;
  }

  ngOnInit(): void {
    this.currentTime = this.formatAMPM(this.currentDate);
  }

  close(){
    this.dialogRef.close();
  }

  update(){
    this.dialogRef.close();
  }

  private formatAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  captureInput(testName: any){
    const index = this.patient.tests.findIndex((test: any) => test.testName === testName);
    const inputValue = (document.getElementById(testName) as HTMLInputElement)?.value;
    if (index !== -1) {
      this.patient.tests[index].result = inputValue;
    }
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
