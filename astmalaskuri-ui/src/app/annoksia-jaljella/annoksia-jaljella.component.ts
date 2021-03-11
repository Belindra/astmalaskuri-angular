import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MedicineInfoService } from '../_services/medicine-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventInfoService } from '../_services/event-info.service';
import { IEventInfo } from '../_models/IEventInfo';

@Component({
  selector: 'app-annoksia-jaljella',
  templateUrl: './annoksia-jaljella.component.html',
  styleUrls: ['./annoksia-jaljella.component.css']
})
export class AnnoksiaJaljellaComponent implements OnInit, OnDestroy {
  flix: boolean = false;
  ven: boolean = false;
  flixotide: any = [];
  ventoline: any = [];
  subF = new Subscription;
  subV = new Subscription;
  eventInfo: IEventInfo;
  uportion = 0;
  @ViewChild('f') form: NgForm;

  constructor(private medicineInfoService: MedicineInfoService, private eventInfoService: EventInfoService, private toastr: ToastrService) { }

  ngOnDestroy(): void {
    this.subF.unsubscribe();
    this.subV.unsubscribe();
  }

  ngOnInit(): void {
    this.subF = this.medicineInfoService.getFlixotide().subscribe(data => {
      this.flixotide = data;
    }, error => {
      console.log(error);
    });

    this.subV = this.medicineInfoService.getVentoline().subscribe(data => {
      this.ventoline = data;
    }, error => {
      console.log(error);
    });
  }

  flixotideLaake() {
    this.flix = !this.flix;
    this.ven = false;
  }

  ventolineLaake() {
    this.ven = !this.ven;
    this.flix = false;
  }

  paivitaLaakkeet():void {
    if (this.flix) {

      this.eventInfo = {

        medicineId: 1,
        usedPortionNow: this.uportion

      };
      this.eventInfoService.useFlixotide(this.eventInfo);
    } else if (this.ven) {
      this.eventInfo = {

        medicineId: 2,
        usedPortionNow: this.uportion

      };
      this.eventInfoService.useVentoline(this.eventInfo);
    }

    console.log("tiedot: id:" + this.eventInfo.medicineId + ", annos: " + this.eventInfo.usedPortionNow);

    this.toastr.success("Käytetyt annokset päivitetty!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }
}
