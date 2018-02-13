package com.handbook.controllers;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.handbook.dto.UserPostDTO;
import com.handbook.entities.HandBookUser;
import com.handbook.entities.UserPost;
import com.handbook.mappers.UserPostMapper;
import com.handbook.services.UserCommentService;
import com.handbook.services.UserPostService;
import com.handbook.services.UserService;

@Controller
@RequestMapping("/usersPosts")
@CrossOrigin(origins = "http://localhost:4200")
public class UserPostController {

	@Autowired
	private UserPostService postService;

	@Autowired
	private UserCommentService commentService;

	@Autowired
	private UserService userService;

	@GetMapping("")
	@ResponseBody
	public Iterator<UserPostDTO> getAllUsersPosts() {
		return this.postService.getAllUsersPosts();
	}

	@PostMapping("/content={postContent}/from={userId}")
	@ResponseBody
	public ResponseEntity createUserPost(@PathVariable("postContent") String postContent,
			@PathVariable("userId") Integer userId) {

		UserPost newPost = new UserPost();
		newPost.setPostContent(postContent);
		newPost.setPostOwner(this.userService.getHandBookUserById(userId));

		this.postService.createPost(newPost);

		return ResponseEntity.ok(HttpStatus.OK);
	}

	@GetMapping("/post")
	@ResponseBody
	public UserPostDTO getPostById(@RequestParam("id") Integer id) {
		return this.postService.getUserPostDTOById(id);
	}

	@GetMapping("/userPosts")
	@ResponseBody
	public Iterator<UserPostDTO> getAllUserPostsById(@RequestParam("id") Integer id) {
		return this.postService.getAllUserPostsById(id);
	}

	@PostMapping("/likePost={id}/user={userId}")
	@ResponseBody
	public UserPostDTO likePostById(@PathVariable("id") Integer id, @PathVariable("userId") Integer userId) {
		UserPost post = this.postService.getPostById(id);
		HandBookUser user = this.userService.getHandBookUserById(userId);

		if (!post.getPostLikes().contains(user)) {
			post.getPostLikes().add(user);
			user.getUserLikedPosts().add(post);
		} else {
			post.getPostLikes().remove(user);
			user.getUserLikedPosts().remove(post);
		}

		this.postService.updatePost(post);
		this.userService.updateHandBookUser(user);

		return UserPostMapper.userPostToDTO(this.postService.getPostById(id));
	}

	@DeleteMapping("/removePost={id}")
	@ResponseBody
	public ResponseEntity deletePostById(@PathVariable("id") Integer id) {

		UserPost postToDelete = this.postService.getPostById(id);

		boolean deleted = this.postService.deletePostById(postToDelete.getId());

		if (deleted) {
			return ResponseEntity.ok(HttpStatus.OK);
		}

		return ResponseEntity.ok(HttpStatus.NOT_FOUND);
	}

}
