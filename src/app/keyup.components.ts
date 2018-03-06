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
        this.values += event.key + ' | ';
    }

    onKeyTipado(event: KeyboardEvent) {
        this.values2 += (<HTMLInputElement>event.target).value + ' | ';
    }
}


@Component({
    selector: 'app-key-up2',
    template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v2 {

    values = '';
    onKey(value: string) {
        this.values += value + ' | ';
    }

}
