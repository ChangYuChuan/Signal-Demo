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

  set() {
    this.val.set({ name: 'new Test', val: 'new Value' });
  }
  update() {
    this.val.update((v) => {
      return { name: v.name, val: v.val + ' updated' };
    });
  }
  mutate() {
    this.val.mutate(v=?)
  }
}

bootstrapApplication(App);

export interface info {
  name: string;
  val: string;
}
