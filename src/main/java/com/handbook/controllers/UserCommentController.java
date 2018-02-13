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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.handbook.dto.UserCommentDTO;
import com.handbook.entities.UserComment;
import com.handbook.services.UserCommentService;
import com.handbook.services.UserPostService;

@Controller
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:4200")
public class UserCommentController {

	@Autowired
	private UserCommentService commentService;

	@Autowired
	private UserPostService postService;

	@Autowired
	private UserController userService;

	@GetMapping("")
	@ResponseBody
	public Iterator<UserCommentDTO> getAllUsersComments() {
		return this.commentService.getAllUsersComments();
	}

	@GetMapping("/comment")
	@ResponseBody
	public Iterator<UserCommentDTO> getAllUserComments(@RequestParam("id") Integer id) {
		return this.commentService.getAllUserComments(id);
	}

	@DeleteMapping("/deleteComment={id}")
	@ResponseBody
	public ResponseEntity deleteUserCommentById(@PathVariable("id") Integer id) {
		boolean hasDeleted = this.commentService.deleteUserCommentById(id);

		if (hasDeleted) {
			return ResponseEntity.ok(HttpStatus.OK);
		}

		return ResponseEntity.ok(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/createComment")
	@ResponseBody
	public UserCommentDTO createUserComment(@RequestBody UserCommentDTO createdComment) {

		UserComment newComment = new UserComment();
		newComment.setComment(createdComment.getComment());
		newComment.setLikes(0);
		newComment.setUserId(this.userService.getHandBookUserById(createdComment.getUserId()));
		newComment.setPostId(this.postService.getPostById(createdComment.getCommentPostId()));

		UserComment tempCom = this.commentService.createComment(newComment);

		if (tempCom != null) {
			createdComment.setComment_id(tempCom.getId());
			return createdComment;
		}

		return null;
	}

}
