import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-lab-search',
  standalone: true,
  imports: [CommonModule, MatIconModule , ReactiveFormsModule , MatSelectModule , MatInputModule , FormsModule , MatFormFieldModule],
  templateUrl: './manage-lab-search.component.html',
  styleUrls: ['./manage-lab-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageLabSearchComponent {

  searchForm: FormGroup;

  constructor(private formSearch: FormBuilder) {
    this.searchForm = this.formSearch.group({
      searchQuery: [''],
      department: [''],
      category: ['']
    });
  }

  onSubmit(){

  }

  Add(){

  }

}
