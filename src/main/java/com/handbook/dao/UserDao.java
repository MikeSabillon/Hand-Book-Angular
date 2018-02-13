package com.handbook.dao;

import org.springframework.data.repository.CrudRepository;

import com.handbook.entities.HandBookUser;

public interface UserDao extends CrudRepository<HandBookUser, Integer> {

	public HandBookUser findByUsername(String username);

}
