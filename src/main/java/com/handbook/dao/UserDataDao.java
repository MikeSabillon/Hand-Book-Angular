package com.handbook.dao;

import org.springframework.data.repository.CrudRepository;

import com.handbook.entities.UserData;

public interface UserDataDao extends CrudRepository<UserData, Integer> {

}
