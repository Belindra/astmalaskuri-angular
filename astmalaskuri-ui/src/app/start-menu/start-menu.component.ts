import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  naytaLaake: boolean = false;


  constructor() { }

  ngOnInit() {
  }



  resetoiLaake() {
    this.naytaLaake = !this.naytaLaake;
  }



}
