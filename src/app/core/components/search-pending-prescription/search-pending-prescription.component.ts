import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
  selector: 'app-search-pending-prescription',
  standalone: true,
  imports: [CommonModule , MatIconModule  , MatNativeDateModule , ReactiveFormsModule , MatSelectModule , MatDatepickerModule , MatInputModule , FormsModule , MatFormFieldModule ],
  templateUrl: './search-pending-prescription.component.html',
  styleUrls: ['./search-pending-prescription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPendingPrescriptionComponent {

  searchForm: FormGroup;

  constructor(private formSearch: FormBuilder) {
    this.searchForm = this.formSearch.group({
      searchQuery: [''],
      date: [''],
      channel: [''],
      customInput: ['']
    });
  }

  onSubmit(){

  }

}
