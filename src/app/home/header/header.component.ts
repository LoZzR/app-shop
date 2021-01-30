import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn = false;
  isAdmin = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = this.tokenStorageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;

      this.isAdmin = this.tokenStorageService.isAdmin();
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
