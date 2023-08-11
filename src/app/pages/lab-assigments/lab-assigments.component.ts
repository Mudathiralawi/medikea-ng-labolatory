import { ChangeDetectionStrategy, Component , inject , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPatient, PatientsService } from '@core/services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-assigments',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './lab-assigments.component.html',
  styleUrls: ['./lab-assigments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LabAssigmentsComponent implements OnInit {

  private patientService = inject(PatientsService);
  private router = inject(Router);
  activePatient = this.patientService.activePatient ;

  ngOnInit(): void {

  }

  submitLabTest(event: Event){

  }
}
