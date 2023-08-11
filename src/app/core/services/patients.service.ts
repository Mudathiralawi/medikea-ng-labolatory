import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal ,Component } from '@angular/core';
import { of , from , Observable } from 'rxjs';

export interface IPatient {
  id: string;
  name: string;
  age: number | null;
  phone: string;
  picture: string | null ;
  location: string | null;
  gender : string ;
  date: string  ;
  history: string | null ;
  labtest: string[] | null
}

interface IPatientState {
  patients: IPatient[],
  laoading: boolean,
  activePatient: IPatient | null,
}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private http = inject(HttpClient);

  private _state = signal<IPatientState>({
    activePatient: null,
    laoading: false,
    patients: [] ,
  })

  public patients = computed(() => this._state().patients);
  public activePatient = computed(() => this._state().activePatient);

   patients$ = of([
    {
      id: 'jkeuhd564672ige',
      name: 'Issa Mussa Juma',
      age: 22,
      phone: '0624563784',
      picture: 'default.png',
      location: 'Dar es salaam',
      gender : 'Male',
      date: '23-09-2021',
      history: 'abnormal chest pain',
      labtest: [' LIVER FUNC_TEST ', ' HORMONES ']
    },
    {
      id: 'gudgebjasdadszgeg',
      name: 'Jame Rodrigues Samos',
      age: 22,
      phone: '0624563784',
      picture: 'default.png',
      location: 'Dar es salaam',
      gender : 'Male',
      date: '23-09-2021',
      history: 'abnormal chest pain',
      labtest: [' LIVER FUNC_TEST ', ' HORMONES ' , ' Electrolytes ']
    }
  ]);

  constructor() { }

  fetchPatients(){
    this._state.mutate((state) => {
      state.laoading = true;
      return state;
    })
    this.patients$.subscribe(patients => {
      this._state.mutate((state) => {
        state.patients = patients;
        state.laoading = false;
        state.activePatient = patients[0]
        return state;
      })
    });
  }

  fetchPatientDetails(id: IPatient['id']) {

  }

  activePatientAssign(patient: IPatient) {
    this._state.mutate((state) => {
      state.activePatient = patient
      return state;
    })
  }

}
