import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { LayoutComponent } from './core/components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe, LayoutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'medikea-ng-repo';
  private authService = inject(AuthService);

  user = this.authService.user;
  token = this.authService.token;

  formLoading = this.authService.formLoading;
  isAuth = this.authService.isAuth;
  error = this.authService.error;

  constructor() {}

  login() {}

  ngOnInit() {
    // this.UsersService.FindUserService().subscribe((data) => {
    //   this.service = data ;
    //  });
  }
}
