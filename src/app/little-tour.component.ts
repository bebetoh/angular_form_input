import { Component } from '@angular/core';

@Component({
    selector: 'app-little-tour',
    template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value);  ">

    <button (click)="addHero(newHero.value)">Add</button>

    <ul><li *ngFor="let hero of heroes" (click)="testeFn(hero);">{{hero}}</li></ul>
    {{teste}}
  `
})

export class LittleTourComponent {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    teste = '';
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
    testeFn(hero: string) {
        this.teste = hero;
    }
}
