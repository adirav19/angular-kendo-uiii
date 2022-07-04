import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { makine } from '../entities/makine';
import { HttpClientService } from './http-client.service';


@Injectable({
    providedIn: 'root'
  })
export class OkumaServisi{
    constructor(private httpClientService: HttpClientService) { }
    async read1(successCallBack?: () => void): Promise<makine[]> {
        const getObservable: Observable<makine[]> = this.httpClientService.get<makine[]>({
            controller: "Makine"
        });
      
            const mak1: makine[] = await firstValueFrom(getObservable);
            successCallBack();
            return mak1;
        }
    }




     /*
      async read(succesCallBack?:()=>void, errorCallBack?:(errorMessage:string)=>void):Promise<makine[]>{
        const promiseData:Promise<makine[]> =  this.httpClientService.get<makine[]>({
          controller:"WeatherForecast"
        }).toPromise();
        //promiseData.then(d =>console.log("badarılı",d))
        //.catch((errorResponse: HttpErrorResponse) => console.log("basarısız",errorResponse.message))
        return await promiseData;
      }*/