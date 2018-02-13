package com.handbook.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.handbook.dao.UserPostDao;
import com.handbook.dto.UserPostDTO;
import com.handbook.entities.UserPost;
import com.handbook.mappers.UserPostMapper;

@Service
public class UserPostService {

	@Autowired
	private UserPostDao dao;

	// Returns all users posts
	public Iterator<UserPostDTO> getAllUsersPosts() {
		Iterator<UserPost> userPosts = dao.findAll().iterator();

		List<UserPostDTO> userPostDTOs = new ArrayList<UserPostDTO>();

		while (userPosts.hasNext()) {
			userPostDTOs.add(UserPostMapper.userPostToDTO(userPosts.next()));
		}

		return userPostDTOs.iterator();
	}

	// Creates a user post
	public void createPost(UserPost newPost) {
		this.dao.save(newPost);
	}

	// Returns a user post by id
	public UserPost getPostById(Integer id) {
		return this.dao.findOne(id);
	}

	// Returns DTO of user post
	public UserPostDTO getUserPostDTOById(Integer id) {
		return UserPostMapper.userPostToDTO(this.dao.findOne(id));
	}

	public Iterator<UserPostDTO> getAllUserPostsById(Integer id) {

		Iterator<UserPost> userPosts = dao.findAllByPostOwnerId(id).iterator();

		List<UserPostDTO> userPostDTOs = new ArrayList<UserPostDTO>();

		while (userPosts.hasNext()) {
			userPostDTOs.add(UserPostMapper.userPostToDTO(userPosts.next()));
		}

		return userPostDTOs.iterator();
	}

	// Saves post if it exists
	public boolean updatePost(UserPost post) {
		if (this.dao.exists(post.getId())) {
			this.dao.save(post);
			return true;
		}

		return false;
	}

	// Deletes post by id
	public boolean deletePostById(Integer id) {

		if (this.dao.exists(id)) {
			this.dao.delete(id);
			return true;
		}

		return false;
	}

}
