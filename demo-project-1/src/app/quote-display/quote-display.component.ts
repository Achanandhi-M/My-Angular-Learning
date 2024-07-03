import { QuoteService } from '../quote.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule],
  providers:[HttpClientModule],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.css'
})

export class QuoteDisplayComponent implements OnInit {
  quote: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
   // this.fetchQuote();
  }

  fetchQuote(): void {
    console.log('Fetching quote...')
    this.quoteService.fetchRandomQuote().subscribe(
      (quote: any) => {
        this.quote = quote;
        console.log('Quote fetched:',this.quote)
        
      },
      error => {
        console.error('Error fetching quote:', error);
      }
    );
  }
}