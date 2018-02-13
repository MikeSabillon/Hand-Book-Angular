package com.handbook.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.handbook.dao.UserDataDao;
import com.handbook.entities.UserData;

@Service
public class UserDataService {

	@Autowired
	private UserDataDao dao;

	// Get user data by id
	public UserData getUserDataById(Integer id) {
		return this.dao.findOne(id);
	}

	// Saves user new user data
	public boolean saveUserData(UserData data) {
		if (this.dao.exists(data.getId())) {
			this.dao.save(data);
			return true;
		}

		return false;
	}

	// Creates new user data
	public void createUserData(UserData data) {
		this.dao.save(data);
	}

}
