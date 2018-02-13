package com.handbook.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.handbook.entities.UserComment;

public interface UserCommentDao extends CrudRepository<UserComment, Integer> {

	public List<UserComment> findByUserIdId(Integer id);

}
