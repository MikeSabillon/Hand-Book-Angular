package com.handbook.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class UserPostDTO {

	private Integer id;
	private String postContent;
	private String postOwnerName;
	private Integer postOwnerId;
	private String postUserName;
	private List<UserCommentDTO> postComments = new ArrayList<UserCommentDTO>();
	private List<Integer> postUserLikes = new ArrayList<>();

	public List<Integer> getPostUserLikes() {
		return postUserLikes;
	}

	public void setPostUserLikes(List<Integer> postUserLikes) {
		this.postUserLikes = postUserLikes;
	}

	public String getPostOwnerName() {
		return postOwnerName;
	}

	public void setPostOwnerName(String postOwnerName) {
		this.postOwnerName = postOwnerName;
	}

	public String getPostUserName() {
		return postUserName;
	}

	public void setPostUserName(String postUserName) {
		this.postUserName = postUserName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPostContent() {
		return postContent;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

	public Integer getPostOwnerId() {
		return postOwnerId;
	}

	public void setPostOwnerId(Integer postOwnerId) {
		this.postOwnerId = postOwnerId;
	}

	public List<UserCommentDTO> getPostComments() {
		return postComments;
	}

	public void setPostComments(List<UserCommentDTO> postComments) {
		this.postComments = postComments;
	}

}
