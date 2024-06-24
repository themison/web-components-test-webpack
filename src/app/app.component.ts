import { Component, DoBootstrap, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button.component';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoBootstrap {
  title = 'web-components-test';
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ButtonComponent, {
      injector: this.injector,
    });
    customElements.define('test-test', el);
  }
}
