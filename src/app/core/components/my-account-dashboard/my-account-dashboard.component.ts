import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-my-account-dashboard',
  standalone: true,
  imports: [CommonModule , MatDialogModule , MatFormFieldModule , MatSelectModule , ReactiveFormsModule , MatInputModule , FormsModule , MatFormFieldModule ],
  templateUrl: './my-account-dashboard.component.html',
  styleUrls: ['./my-account-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAccountDashboardComponent {

  profile: FormGroup;
  password: FormGroup;
  imageUrl: string = "../../../../assets/default.png";
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder) {
    this.password = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
    this.profile = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      shortBio: ['' , [Validators.required]],
    });
   }

  Submit(){
    alert('here');
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadButtonClicked(): void {
    // Trigger the hidden file input element
    this.fileInput.nativeElement.click();
  }

}
