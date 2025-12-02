import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService, Post } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-post',
    imports: [FormsModule, CommonModule],
    templateUrl: './add-post.component.html'
})
export class AddPostComponent {

  title = '';
  body = '';

  @Output() postCreated = new EventEmitter<Post>();
  @Output() cancel = new EventEmitter();
  @Output() error = new EventEmitter<string>();

  constructor(private postsService: PostsService) {}

  submitForm() {

    // VALIDATION - title/body cannot be empty
    if (!this.title.trim() || !this.body.trim()) {
      this.error.emit("Post cannot be empty");
      return;
    }

    const newPost: Post = { 
      title: this.title.trim(), 
      body: this.body.trim() 
    };

    this.postsService.addPost(newPost).subscribe({
      next: (data) => {
        this.postCreated.emit(data);
      },
      error: () => {
        this.error.emit('Adding a post failed. Please try again.');
      }
    });
  }
}
