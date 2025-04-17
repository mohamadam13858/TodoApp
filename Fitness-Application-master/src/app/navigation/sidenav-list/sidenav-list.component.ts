import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  standalone: false,
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent implements OnInit , OnDestroy {

  @Output() sidenavCloseEvent = new EventEmitter<void>()


  isAuth: boolean | null = null


  subscription : Subscription | null = null


  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
   this.subscription = this.authService.authChange.subscribe(status => {
      this.isAuth = status
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  SidenavClose() {

    this.sidenavCloseEvent.emit()

  }
  onLogout(){
   this.SidenavClose()
    this.authService.logout()
  }



}
