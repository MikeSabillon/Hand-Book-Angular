package com.handbook.mappers;

import com.handbook.dto.UserDTO;
import com.handbook.entities.HandBookUser;

public class UserMapper {

	public static UserDTO userToDTO(HandBookUser user) {

		UserDTO newUserDTO = new UserDTO();
		newUserDTO.setUsername(user.getUsername());
		newUserDTO.setPassword(user.getPassword());
		newUserDTO.setUserId(user.getId());
		newUserDTO.setUserDataId(user.getUserData().getId());
		newUserDTO.setName(user.getUserData().getName());
		newUserDTO.setLastName(user.getUserData().getApellido());
		newUserDTO.setEdad(user.getUserData().getEdad());
		newUserDTO.setCorreo(user.getUserData().getCorreo());

		for (int a = 0; a < user.getUserComments().size(); a++) {
			newUserDTO.getUserComments().add(UserCommentMapper.userCommentToDTO(user.getUserComments().get(a)));
		}

		for (int b = 0; b < user.getUserPosts().size(); b++) {
			newUserDTO.getUserPosts().add(UserPostMapper.userPostToDTO(user.getUserPosts().get(b)));
		}

		return newUserDTO;
	}

}
