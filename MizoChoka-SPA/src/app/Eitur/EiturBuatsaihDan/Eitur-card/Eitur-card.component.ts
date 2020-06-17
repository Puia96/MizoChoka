import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-Eitur-card',
  templateUrl: './Eitur-card.component.html',
  styleUrls: ['./Eitur-card.component.css']
})
export class EiturCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
