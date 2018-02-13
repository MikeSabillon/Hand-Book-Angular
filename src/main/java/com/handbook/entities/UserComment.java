package com.handbook.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "USERCOMMENT")
public class UserComment {

	@Id
	@GeneratedValue
	private Integer id;
	private String comment;
	private int likes;

	@ManyToOne(targetEntity = HandBookUser.class)
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private HandBookUser userId;

	@ManyToOne(targetEntity = UserPost.class)
	@JoinColumn(name = "post_id", referencedColumnName = "id")
	private UserPost postId;

	public HandBookUser getUserId() {
		return userId;
	}

	public void setUserId(HandBookUser userId) {
		this.userId = userId;
	}

	public UserPost getPostId() {
		return postId;
	}

	public void setPostId(UserPost postId) {
		this.postId = postId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

}
