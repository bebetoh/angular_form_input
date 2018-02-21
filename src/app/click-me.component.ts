import { Component } from '@angular/core';


@Component({
    selector: 'app-click-me',
    template: `
      <button (click)="onClickMe()">Click me!</button>
      {{clickMessage}}`
})

export class ClickMeComponent {
    cont = 0;
    clickMessage = 'Não clicou';

    onClickMe() {
        this.cont = this.cont + 1;
        this.clickMessage = 'You are my hero! ' + this.cont ;
    }
}
