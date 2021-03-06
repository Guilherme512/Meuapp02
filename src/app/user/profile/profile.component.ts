import { Component, OnInit } from '@angular/core';

// Importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    // Injeta dependĂȘncias
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  openProfile() {
    window.open('https://myaccount.google.com/');
  }
}
