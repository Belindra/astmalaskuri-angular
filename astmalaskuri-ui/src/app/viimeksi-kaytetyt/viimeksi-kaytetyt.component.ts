import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { IEventInfo } from '../_models/IEventInfo';
import { EventInfoService } from '../_services/event-info.service';


@Component({
  selector: 'app-viimeksi-kaytetyt',
  templateUrl: './viimeksi-kaytetyt.component.html',
  styleUrls: ['./viimeksi-kaytetyt.component.css']
})
export class ViimeksiKaytetytComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;
  FVikaKaytto: IEventInfo;
  VVikaKaytto: IEventInfo;
  eventInfo: IEventInfo;
  uportion:number = 0;
  subF = new Subscription;
  subV = new Subscription;


  FlixotideKaytot: IEventInfo[] = [];
  VentolineKaytot: IEventInfo[] = [];



  constructor(
    private toastr: ToastrService,
    private eventInfoService: EventInfoService,

    ) { }

  ngOnDestroy(): void {
    this.subF.unsubscribe();
    this.subV.unsubscribe();
  }

  ngOnInit() {


    //haetaan käyttötapahtumat ja lääkkeen id:n perusteella laitetaan Ventoline- ja Flixotide -käyttötapahtumuksi
    this.subF = this.eventInfoService.getMedUseEvents().subscribe(
        (tapahtuma) => { tapahtuma.forEach(t => {if (t.medicineId===1) {this.FlixotideKaytot.push(t);}
      else if (t.medicineId===2) {this.VentolineKaytot.push(t);} } )


      this.FVikaKaytto = this.FlixotideKaytot[this.FlixotideKaytot.length-1];
      this.VVikaKaytto = this.VentolineKaytot[this.VentolineKaytot.length-1];

    }, error => {
      console.log(error);
    });

  }



  getVikaFlixKaytto():string {


    if(this.FVikaKaytto.usedPortionNow ===1) {
      return "1 annos";
    } else {
      return this.FVikaKaytto.usedPortionNow.toString() + " annosta";
    }
  }

  getVikaVenKaytto():string {
    if(this.VVikaKaytto.usedPortionNow ===1) {
      return "1 annos";
    } else {
      return this.VVikaKaytto.usedPortionNow.toString() + " annosta";
    }
  }








}

