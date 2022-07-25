import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anyChanged } from '@progress/kendo-angular-common';
import { firstValueFrom, Observable } from 'rxjs';
import { makine } from '../entities/makine';
import { suretut } from '../entities/suretut';
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



        async read2(id?:number): Promise<suretut[]> {
          const getObservable: Observable<suretut[]> = this.httpClientService.get<suretut[]>({
              controller: "Makine"


          },id);
        
              const mak2: suretut[] = await firstValueFrom(getObservable);
              
              return mak2;
          }
          async read3(id?:number): Promise<suretut[]> {
            const getObservable: Observable<suretut[]> = this.httpClientService.get<suretut[]>({
                controller: "MakineLastKesim"
  
  
            },id);
          
                const mak2: suretut[] = await firstValueFrom(getObservable);
                
                
                
                return mak2;
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