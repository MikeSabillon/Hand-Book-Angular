package com.handbook.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class UserCommentDTO {

	private Integer comment_id;
	private String commentOwnerName;
	private String comment;
	private int comment_likes;
	private Integer userId;
	private Integer commentPostId;

	public String getCommentOwnerName() {
		return commentOwnerName;
	}

	public void setCommentOwnerName(String commentOwnerName) {
		this.commentOwnerName = commentOwnerName;
	}

	public Integer getCommentPostId() {
		return commentPostId;
	}

	public void setCommentPostId(Integer commentPostId) {
		this.commentPostId = commentPostId;
	}

	public Integer getComment_id() {
		return comment_id;
	}

	public void setComment_id(Integer comment_id) {
		this.comment_id = comment_id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getComment_likes() {
		return comment_likes;
	}

	public void setComment_likes(int comment_likes) {
		this.comment_likes = comment_likes;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

}
