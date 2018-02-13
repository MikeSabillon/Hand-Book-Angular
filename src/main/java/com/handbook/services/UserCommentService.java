package com.handbook.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.handbook.dao.UserCommentDao;
import com.handbook.dto.UserCommentDTO;
import com.handbook.entities.UserComment;
import com.handbook.mappers.UserCommentMapper;

@Service
public class UserCommentService {

	@Autowired
	private UserCommentDao dao;

	// Creates user comment
	public UserComment createComment(UserComment comment) {
		return this.dao.save(comment);

	}

	// Returns all user comments
	public Iterator<UserCommentDTO> getAllUsersComments() {

		Iterator<UserComment> userComments = this.dao.findAll().iterator();

		List<UserCommentDTO> formattedUserComments = new ArrayList<UserCommentDTO>();

		while (userComments.hasNext()) {
			formattedUserComments.add(UserCommentMapper.userCommentToDTO(userComments.next()));
		}

		return formattedUserComments.iterator();
	}

	// Gets all user comments by id
	public Iterator<UserCommentDTO> getAllUserComments(Integer id) {

		Iterator<UserComment> usersComments = this.dao.findByUserIdId(id).iterator();

		List<UserCommentDTO> formattedUserComments = new ArrayList<UserCommentDTO>();

		while (usersComments.hasNext()) {
			formattedUserComments.add(UserCommentMapper.userCommentToDTO(usersComments.next()));
		}

		return formattedUserComments.iterator();
	}

	// Deletes user comment by id
	public boolean deleteUserCommentById(Integer id) {
		if (this.dao.exists(id)) {
			this.dao.delete(id);
			return true;
		}

		return false;
	}

}
