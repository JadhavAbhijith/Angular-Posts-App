import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostsService, Post } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, AddPostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  showForm = false;

  // Popups
  showErrorPopup = false;
  errorMessage = '';

  showSuccessPopup = false;
  successMessage = '';

  // ID counter
  nextId = 1;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((data) => {

      // Show ALL posts from the API
      this.posts = data;

      // Find last post safely
      const lastPost = this.posts.length > 0 ? this.posts[this.posts.length - 1] : null;

      // Safely compute nextId
      this.nextId = (lastPost && lastPost.id) ? lastPost.id + 1 : 1;

      console.log("Next ID starts from:", this.nextId);
    });
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  handlePostCreated(post: Post) {
    const finalPost: Post = {
      id: this.nextId++,
      title: post.title,
      body: post.body
    };

    // Add the post at the bottom
    this.posts.push(finalPost);

    this.showForm = false;

    // Show success popup
    this.successMessage = "Post added successfully!";
    this.showSuccessPopup = true;

    // Clear any error popup
    this.showErrorPopup = false;
    this.errorMessage = '';
  }

  handleError(msg: string) {
    this.errorMessage = msg;
    this.showErrorPopup = true;
  }

  closeErrorPopup() {
    this.showErrorPopup = false;
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }
}
