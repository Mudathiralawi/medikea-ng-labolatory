import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { IUser , ISession} from '@core/interfaces';

interface IAuthState {
  user: IUser | null;
  isAuth: boolean;
  userLoading: boolean;
  formLoading: boolean;
  token: string | null;
  error: string | null;
}

// type TAuthState {}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = 'https://saliosmart-api.muneersahel.com/v1/auth/login';

  private http = inject(HttpClient);

  private state = signal<IAuthState>({
    user: null,
    isAuth: false,
    formLoading: false,
    userLoading: false,
    token: null,
    error: null,
  });

  user = computed(() => this.state().user)
  isAuth = computed(() => this.state().isAuth)
  formLoading =computed(() => this.state().formLoading)
  token =computed(() => this.state().token)
  error = computed(() => this.state().error)

  login(payload: {email: string, password: string}) {
    console.log(payload)
    // change form loading state
    this.state.update((state) => {
      return {
        ...state,
        formLoading: true,
        error: null,
      }
    });

    this.http.post<{access_token: string, user: IUser, session: any}>(this.baseUrl, {
      ...payload,
      device: 'Pc'
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.state.update((state) => {
          return {
            ...state,
            formLoading: false,
            token: res.access_token,
            user: res.user,
            isAuth: true,
          }
        });
        // change token state
        // change isAuth state and change form loading
      },
      error: (err) => {
        // change error state if present
        const error = err.error.message ?? err.message ?? "Something went wrong, please try again later";
        this.state.update((state) => {
          return {
            ...state,
            error: error,
            formLoading: false,
          }
        });
      }
    })
  }

  logout() {
    // change user state
    // change isAuth state
      // change token state
    // change error state if present
  }

  getAuthUser() {
     // change user state
    // change isAuth state

    // change error state if present
  }
}
