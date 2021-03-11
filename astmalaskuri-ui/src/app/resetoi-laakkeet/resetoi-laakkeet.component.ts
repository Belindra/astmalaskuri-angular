import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MedicineInfoService } from '../_services/medicine-info.service';
import {IMedicineInfo} from 'src/app/_models/IMedicineInfo';

@Component({
  selector: 'app-resetoi-laakkeet',
  templateUrl: './resetoi-laakkeet.component.html',
  styleUrls: ['./resetoi-laakkeet.component.css']
})
export class ResetoiLaakkeetComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  medInfo: IMedicineInfo;

  constructor(private toastr: ToastrService, private medInfoService: MedicineInfoService) { }

  ngOnInit(): void {
  }

  resetoiFlixotide(): void {
    this.medInfo = {
      medicineId: 1,
      totalPortion: 120,
      usedPortion: 0,
      medicineName: "Flixotide"
    };

    this.medInfoService.resetFlixotide(this.medInfo);

    console.log(this.medInfo.medicineName +" nyt: annoksia jäljellä " +this.medInfo.totalPortion + ", käytetty " +this.medInfo.usedPortion);

    this.toastr.success("Flixotide resetoitu!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }

  resetoiVentoline():void {
    this.medInfo = {
      medicineId: 2,
      totalPortion: 200,
      usedPortion: 0,
      medicineName: "Ventoline"
    };

    this.medInfoService.resetVentoline(this.medInfo);

    console.log(this.medInfo.medicineName +" nyt: annoksia jäljellä " +this.medInfo.totalPortion + ", käytetty " +this.medInfo.usedPortion);

    this.toastr.success("Ventoline resetoitu!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }
}
