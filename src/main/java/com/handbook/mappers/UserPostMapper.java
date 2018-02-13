package com.handbook.mappers;

import com.handbook.dto.UserPostDTO;
import com.handbook.entities.UserPost;

public class UserPostMapper {

	public static UserPostDTO userPostToDTO(UserPost post) {

		UserPostDTO newPostDTO = new UserPostDTO();
		newPostDTO.setId(post.getId());
		newPostDTO.setPostOwnerName(
				post.getPostOwner().getUserData().getName() + " " + post.getPostOwner().getUserData().getApellido());
		newPostDTO.setPostContent(post.getPostContent());
		newPostDTO.setPostOwnerId(post.getPostOwner().getId());

		for (int a = 0; a < post.getPostComments().size(); a++) {
			newPostDTO.getPostComments().add(UserCommentMapper.userCommentToDTO(post.getPostComments().get(a)));
		}

		for (int b = 0; b < post.getPostLikes().size(); b++) {
			newPostDTO.getPostUserLikes().add(post.getPostLikes().get(b).getId());
		}

		return newPostDTO;
	}

}
