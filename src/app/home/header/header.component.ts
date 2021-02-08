import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isLoggedIn = false;
  isAdmin = false;
  username: string;

  private userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;
      if (this.isLoggedIn) {
        this.username = user.username;
        this.isAdmin = user.roles.includes('ROLE_ADMIN');
      }
    });
  }

  logout() {
    this.authService.signOut();
    window.location.reload();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
