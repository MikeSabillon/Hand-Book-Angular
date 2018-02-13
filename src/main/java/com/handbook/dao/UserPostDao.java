package com.handbook.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.handbook.entities.UserPost;

public interface UserPostDao extends CrudRepository<UserPost, Integer> {

	public List<UserPost> findAllByPostOwnerId(Integer id);

}
