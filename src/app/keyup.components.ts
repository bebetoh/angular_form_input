import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-key-up1',
    template: `
            <input (keyup)="onKeyAny($event)">
            <p>{{values}}</p>
            <br>
            <input (keyup)="onKeyTipado($event)">
            <p>{{values2}}</p>
            `
})


export class KeyUpComponent_v1   {
   // constructor() { }
    values = '';

    values2= '';

    
    onKeyAny(event: any) {
        this.values += event.target.value + ' | ';
    }
    
    onKeyTipado(event: KeyboardEvent) {
        this.values2 += (<HTMLInputElement>event.target).value + ' | ';
    }
}
