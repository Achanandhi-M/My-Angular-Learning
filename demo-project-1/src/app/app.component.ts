import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StaticContentComponent } from './static-content/static-content.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StaticContentComponent,QuoteDisplayComponent],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
