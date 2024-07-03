import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet,RouterLink } from '@angular/router';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { StaticContentComponent } from '../../../demo-project-1/src/app/static-content/static-content.component';
import { QuoteDisplayComponent } from '../../../demo-project-1/src/app/quote-display/quote-display.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoutingExampleComponent,RouterLink,StaticContentComponent,QuoteDisplayComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-project-2';
}
