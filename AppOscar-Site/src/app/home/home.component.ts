import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = true;
  values: any;

  horarioCountdow: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.calcularTempoRestante();
  }

  calcularTempoRestante() {
      const horarioFinal =  new Date(2020, 2, 9, 0, 1, 0);
      const horarioInicial =  Date.now();

      this.horarioCountdow =  ( Number(horarioFinal) - Number(horarioInicial));

  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
