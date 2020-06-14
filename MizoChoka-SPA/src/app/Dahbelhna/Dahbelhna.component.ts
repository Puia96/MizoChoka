import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Dahbelhna',
  templateUrl: './Dahbelhna.component.html',
  styleUrls: ['./Dahbelhna.component.css']
})
export class DahbelhnaComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle2() {
    this.registerMode = true;
  }

  cancelRegisterMode( registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
