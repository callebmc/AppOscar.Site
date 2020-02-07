import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuxService } from '../_services/timeaux.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = true;
  values: any;

  horarioCountdown = 0;

  constructor(  private http: HttpClient,
                private auxService: AuxService) { }

  ngOnInit() {
    //   this.auxService.getTimeLeft().subscribe(
    //       left => {
    //           this.horarioCountdown = left;
    //       }
    //   );
    //   console.log(this.horarioCountdown);
  }


  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
