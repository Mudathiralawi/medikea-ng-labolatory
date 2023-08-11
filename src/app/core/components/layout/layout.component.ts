import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  providers: [HttpClientModule],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('drawer') drawer: MatDrawer | undefined;
  @ViewChild('outlet') outlet: RouterOutlet | undefined;

  navItemClicked = signal(false);
  isDeviceSmall$ = this.breakpointObserver.observe('(max-width: 1023px)').pipe(
    map((result) => result.matches),
    shareReplay()
  );
  isDeviceSmall = toSignal(this.isDeviceSmall$);

  onLogout() {}
}
