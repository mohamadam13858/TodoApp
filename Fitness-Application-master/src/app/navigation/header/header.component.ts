import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit ,OnDestroy {

@Output() sidenavToggle = new EventEmitter<void>();

isAuth:boolean | null = null

subscription:Subscription | null = null


constructor(private authService : AuthService) {
  
}


ngOnInit(): void {
   this.subscription = this.authService.authChange.subscribe(authStatus => {
    this.isAuth = authStatus
  })
}


ngOnDestroy(): void {
  this.subscription!.unsubscribe()
}
  onTggleSidenav(){
        this.sidenavToggle.emit()
  }


  onLogout(){
    this.authService.logout()
  }

}
