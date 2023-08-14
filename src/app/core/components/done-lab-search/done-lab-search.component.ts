import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-done-lab-search',
  standalone: true,
  imports: [CommonModule , MatIconModule  , MatNativeDateModule , ReactiveFormsModule , MatSelectModule , MatDatepickerModule , MatInputModule , FormsModule , MatFormFieldModule],
  templateUrl: './done-lab-search.component.html',
  styleUrls: ['./done-lab-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneLabSearchComponent {

  searchForm: FormGroup;

  constructor(private formSearch: FormBuilder) {
    this.searchForm = this.formSearch.group({
      searchQuery: [''],
      date: [''],
      channel: ['']
    });
  }

  onSubmit(){

  }

}
