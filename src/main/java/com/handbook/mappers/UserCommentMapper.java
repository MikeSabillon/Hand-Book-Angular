package com.handbook.mappers;

import com.handbook.dto.UserCommentDTO;
import com.handbook.entities.UserComment;

public class UserCommentMapper {

	public static UserCommentDTO userCommentToDTO(UserComment comment) {
		UserCommentDTO newDto = new UserCommentDTO();
		newDto.setComment_id(comment.getId());
		newDto.setCommentOwnerName(
				comment.getUserId().getUserData().getName() + " " + comment.getUserId().getUserData().getApellido());
		newDto.setComment(comment.getComment());
		newDto.setComment_likes(comment.getLikes());
		newDto.setUserId(comment.getUserId().getId());
		newDto.setCommentPostId(comment.getPostId().getId());

		return newDto;
	}

}
