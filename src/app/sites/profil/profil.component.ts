import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/models/profil';
import { ProfilService } from '../../services/profil.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  isEditMode: boolean = false;
  Object = Object;
  keys: string[] = [];

  values: string[] = [];

  profil: Profil = {
    id: 0,
    name: "",
    surname: "",
    address: "",
    correspondanceAddress: "",
    titleBeforeName: "",
    titleAfterName: "",
    imgUrl: "",
    cardNumber: 0
  };
  
  constructor(private profilService: ProfilService) {
    this.profilService.getProfils().subscribe((prof) => {
      this.profil = prof[0];
    })
  }

  ngOnInit(): void {
  }

  clickedEdit(): void {
    if (this.isEditMode){
      this.profilService.updateProfil(this.profil).subscribe((p) => {
        this.profil = p[0];
      })
    }

    this.isEditMode = !this.isEditMode;
  }
}
