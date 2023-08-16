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

@Component({
  selector: 'app-sample-collection-fill-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule , MatFormFieldModule , MatInputModule , DatePipe],
  templateUrl: './sample-collection-fill-form.component.html',
  styleUrls: ['./sample-collection-fill-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleCollectionFillFormComponent implements OnInit {

  collectSample: FormGroup;
  patient: any ;
  currentDate: Date = new Date();
  currentTime: string = '';

  constructor(
    public dialogRef: MatDialogRef<SampleCollectionFillFormComponent>,
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

  private formatAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  }

  close(){
    this.dialogRef.close();
  }

  update(){
    this.dialogRef.close();
  }

collected(testName: any){
  const testIndex = this.patient.tests.findIndex((test: any) => test.testName === testName);
  this.patient.tests[testIndex].status = 'Collected';
}

  collectedDought(testName: any){
    const testIndex = this.patient.tests.findIndex((test: any) => test.testName === testName);
    this.patient.tests[testIndex].status = 'Pending';
  }

}
