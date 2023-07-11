import 'zone.js/dist/zone';
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
})
export class App {
  left = signal<number>(0);
  right = signal<number>(0);
  val = signal<info>({ name: 'Test', val: '' });
  result = computed(() => this.left() * +this.right());
  effectRef = effect(() => console.log('latest value:', this.result()));
  constructor() {}

  //Override the value of signals
  set() {
    this.val.set({ name: 'new Test', val: 'new Value' });
  }
  //Update the value of signals based on original value.
  update() {
    this.val.update((v) => {
      return { name: v.name, val: v.val + ' updated' };
    });
  }
  //change the content of value of signals in place.
  mutate() {
    this.val.mutate((v) => {
      v.val = v.val + ' mtated';
    });
  }
}

bootstrapApplication(App);

export interface info {
  name: string;
  val: string;
}
