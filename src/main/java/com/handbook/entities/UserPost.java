package com.handbook.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name = "USERSPOSTS")
public class UserPost {

	@Id
	@GeneratedValue
	private Integer id;

	@Column(length = 200)
	private String postContent;

	@ManyToOne(targetEntity = HandBookUser.class)
	@JoinColumn(name = "post_owner", referencedColumnName = "id")
	private HandBookUser postOwner;

	@OneToMany(targetEntity = UserComment.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "post_id", referencedColumnName = "id")
	private List<UserComment> postComments;

	@ManyToMany(targetEntity = HandBookUser.class, cascade = CascadeType.DETACH)
	@JoinColumn(name = "post_likes", referencedColumnName = "id")
	private List<HandBookUser> postLikes;

	public List<HandBookUser> getPostLikes() {
		return postLikes;
	}

	public void setPostLikes(List<HandBookUser> postLikes) {
		this.postLikes = postLikes;
	}

	public List<UserComment> getPostComments() {
		return postComments;
	}

	public void setPostComments(List<UserComment> postComments) {
		this.postComments = postComments;
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

	public HandBookUser getPostOwner() {
		return postOwner;
	}

	public void setPostOwner(HandBookUser postOwner) {
		this.postOwner = postOwner;
	}

}
