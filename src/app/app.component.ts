import { Component, OnInit} from '@angular/core';
import { Service } from './service';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})


export class AppComponent implements OnInit{
    constructor(private service: Service) {

    }
   
    temp: any[] =[]
    
       ngOnInit() {
        this.service.getData().subscribe(
            (data: any) => {
                this.temp = data
            } 
        )
    }


  
    searchID(value) {
        this.temp.length = 0
        this.service.getData().subscribe(
            (data:any)=>{
                for(let element of data){
                    if(element.id.toString().toLowerCase().includes(value.toString().toLowerCase())){
                        this.temp.push(element)
                    }
                }
            }
        )
    }

    searchTitle(value) {
        this.temp.length = 0
        this.service.getData().subscribe(
            (data:any)=>{
                for(let element of data){
                    if(element.title.toString().toLowerCase().includes(value.toLowerCase())){
                        this.temp.push(element)
                    }
                }
            }
        )
    }

    searchAuthor(value) {
        this.temp.length = 0
        this.service.getData().subscribe(
            (data:any)=>{
                for(let element of data){
                    if(element.author.toString().toLowerCase().includes(value.toString().toLowerCase())){
                        this.temp.push(element)
                    }
                }
            }
        )
    }

    searchPublishYear(value) {
        this.temp.length = 0
        this.service.getData().subscribe(
            (data:any)=>{
                for(let element of data){
                    if(element.year.toString().toLowerCase().includes(value.toString().toLowerCase())){
                        this.temp.push(element)
                    }
                }
            }
        )
    }
}