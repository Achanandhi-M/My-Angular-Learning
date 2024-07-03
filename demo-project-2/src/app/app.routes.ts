import { Routes } from '@angular/router';

//import { AppComponent} from '../../../demo-project-1/src/app/app.component';
import { QuoteDisplayComponent } from '../../../demo-project-1/src/app/quote-display/quote-display.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';

export const routes: Routes = [
{path: 'demo-project-1', component: QuoteDisplayComponent},
//{path: '', pathMatch : 'full', redirectTo: 'quote-display'},
{path: 'demo-project-2', component: RoutingExampleComponent}
];