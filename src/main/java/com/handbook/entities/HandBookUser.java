package com.handbook.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity(name = "USERS")
public class HandBookUser {

	@Id
	@GeneratedValue
	private Integer id;
	private String username;
	private String password;

	@OneToOne(targetEntity = UserData.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "userdata", referencedColumnName = "id", nullable = true)
	private UserData userData;

	@OneToMany(targetEntity = UserComment.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "id", nullable = true)
	private List<UserComment> userComments;

	@OneToMany(targetEntity = UserPost.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "post_owner", referencedColumnName = "id")
	private List<UserPost> userPosts;

	@OneToMany(targetEntity = UserPost.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "post_user_likes", referencedColumnName = "id")
	private List<UserPost> userLikedPosts;

	public List<UserPost> getUserLikedPosts() {
		return userLikedPosts;
	}

	public void setUserLikedPosts(List<UserPost> userLikedPosts) {
		this.userLikedPosts = userLikedPosts;
	}

	public List<UserPost> getUserPosts() {
		return userPosts;
	}

	public void setUserPosts(List<UserPost> userPosts) {
		this.userPosts = userPosts;
	}

	public List<UserComment> getUserComments() {
		return userComments;
	}

	public void setUserComments(List<UserComment> userComments) {
		this.userComments = userComments;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserData getUserData() {
		return userData;
	}

	public void setUserData(UserData userData) {
		this.userData = userData;
	}

}
