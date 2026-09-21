import { Routes } from '@angular/router';
import { DirectivesPractice } from './directives-practice/directives-practice';

export const routes: Routes = [
    {
        path: 'directives',
        loadComponent: () => import(`./directives-practice/directives-practice`).then(c => c.DirectivesPractice)
    }
];