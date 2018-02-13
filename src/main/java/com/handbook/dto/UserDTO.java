package com.handbook.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class UserDTO {

	private Integer userId;
	private Integer userDataId;
	private String username;
	private String password;
	private String name;
	private String lastName;
	private String correo;
	private int edad;

	private List<UserCommentDTO> userComments = new ArrayList<UserCommentDTO>();
	private List<UserPostDTO> userPosts = new ArrayList<UserPostDTO>();

	public Integer getUserDataId() {
		return userDataId;
	}

	public void setUserDataId(Integer userDataId) {
		this.userDataId = userDataId;
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

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public List<UserCommentDTO> getUserComments() {
		return userComments;
	}

	public void setUserComments(List<UserCommentDTO> userComments) {
		this.userComments = userComments;
	}

	public List<UserPostDTO> getUserPosts() {
		return userPosts;
	}

	public void setUserPosts(List<UserPostDTO> userPosts) {
		this.userPosts = userPosts;
	}

}
