import { Component } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';

@Component({
    selector: 'app-root',
    imports: [PostsComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {}
