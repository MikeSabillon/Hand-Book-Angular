package com.handbook.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.handbook.dao.UserDao;
import com.handbook.dto.UserDTO;
import com.handbook.entities.HandBookUser;
import com.handbook.mappers.UserMapper;

@Service
public class UserService {

	@Autowired
	private UserDao dao;

	// Returns all users from db
	public Iterator<UserDTO> getAllUsers() {

		Iterator<HandBookUser> users = this.dao.findAll().iterator();

		List<UserDTO> usersDTO = new ArrayList<UserDTO>();

		while (users.hasNext()) {
			usersDTO.add(UserMapper.userToDTO(users.next()));
		}

		return usersDTO.iterator();
	}

	// Returns specific user by id
	public UserDTO getUserById(Integer id) {
		return UserMapper.userToDTO(this.dao.findOne(id));
	}

	// Returns a handbook user object by id
	public HandBookUser getHandBookUserById(Integer id) {
		return this.dao.findOne(id);
	}

	// Creates user
	public void createUser(HandBookUser user) {
		this.dao.save(user);
	}

	// Checks and authentificates user login
	public boolean loginAuthen(String username, String password) {

		HandBookUser user = this.dao.findByUsername(username);

		if (user != null) {
			if (user.getPassword().equals(password)) {
				return true;
			}
		}

		return false;
	}

	// Returns user by username
	public UserDTO getUserByUsername(String username) {
		return UserMapper.userToDTO(this.dao.findByUsername(username));
	}

	// Updates hand book user
	public boolean updateHandBookUser(HandBookUser user) {
		if (this.dao.exists(user.getId())) {
			this.dao.save(user);
			return true;
		}

		return false;
	}

}
