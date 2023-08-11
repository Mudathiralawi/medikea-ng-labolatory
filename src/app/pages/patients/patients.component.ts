import { ChangeDetectionStrategy, Component , OnInit , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet , ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { IPatient, PatientsService } from '@core/services/patients.service';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule , RouterOutlet, RouterLink , MatCardModule ],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PatientsComponent implements OnInit {

  private patientService = inject(PatientsService);
  private router = inject(Router);
  patientId: string = '';
  patients = this.patientService.patients ;
  activePatient = this.patientService.activePatient ;
  morePatientData: boolean = false ;

  ngOnInit(): void {
    const url = this.router.url;
    const lastSlashIndex = url.lastIndexOf('/');
    this.patientId = url.substring(lastSlashIndex + 1);
    this.patientService.fetchPatients();
  }

  patientLabTest (id: IPatient['id'] , patient: IPatient){
    this.patientService.activePatientAssign(patient);
    this.router.navigate(["lab-assigments" , id]);
  }

  moreData(patient: IPatient , cardStatus: string){
    this.patientService.activePatientAssign(patient);
    this.morePatientData = !this.morePatientData ;
    const myDiv = document.getElementById(patient.id.toString());
    if (myDiv) {
      switch (cardStatus) {
        case "show":
          myDiv.classList.remove("hide");
          myDiv.classList.add("show");
          break;
        case "hide":
          myDiv.classList.remove("show");
          myDiv.classList.add("hide");
          break;
        default:
          break;
      }
    }
  }
}
