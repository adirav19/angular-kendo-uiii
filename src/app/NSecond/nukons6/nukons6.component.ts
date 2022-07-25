import { Component, OnInit } from '@angular/core';
import { suretut } from 'src/app/entities/suretut';
import { HttpClientService } from 'src/app/services/http-client.service';
import { OkumaServisi } from 'src/app/services/okumaservisi';

@Component({
  selector: 'app-nukons6',
  templateUrl: './nukons6.component.html',
  styleUrls: ['./nukons6.component.scss']
})
export class Nukons6Component implements OnInit {

  constructor(private httpclient:HttpClientService, private okuma:OkumaServisi) { }
  dataSource:suretut[] = [];
  async ngOnInit() {
    const allmakine:suretut[] =
    await this.okuma.read2(6)
    this.dataSource = allmakine
  }

  public salesData: number[] = [20, 40, 45, 30, 50];
  public purchaseData: number[] = [12, 30, 30, 45, 10];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];


}
