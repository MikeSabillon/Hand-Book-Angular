package com.handbook.controllers;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.handbook.dto.UserDTO;
import com.handbook.entities.HandBookUser;
import com.handbook.entities.UserData;
import com.handbook.services.UserDataService;
import com.handbook.services.UserService;

@Controller
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserDataService dataService;

	@GetMapping("")
	@ResponseBody
	public Iterator<UserDTO> getAllUsers() {
		return this.userService.getAllUsers();
	}

	@GetMapping("/user")
	@ResponseBody
	public UserDTO getUserById(@RequestParam("id") Integer id) {
		return this.userService.getUserById(id);
	}

	public HandBookUser getHandBookUserById(Integer id) {
		return this.userService.getHandBookUserById(id);
	}

	@GetMapping("/login/user={username}/pass={password}")
	@ResponseBody
	public boolean loginAuthentication(@PathVariable("username") String username,
			@PathVariable("password") String password) {
		return this.userService.loginAuthen(username, password);
	}

	@GetMapping("/user={username}")
	@ResponseBody
	public UserDTO getUserByUsername(@PathVariable("username") String username) {
		return this.userService.getUserByUsername(username);
	}

	@PostMapping("/name={username}/pass={password}")
	@ResponseBody
	public ResponseEntity createUser(@PathVariable("username") String username,
			@PathVariable("password") String password) {

		UserData userData = new UserData();
		userData.setName("");
		userData.setApellido("");
		userData.setEdad(0);
		userData.setCorreo("");

		this.dataService.createUserData(userData);

		HandBookUser newUser = new HandBookUser();
		newUser.setUsername(username);
		newUser.setPassword(password);
		newUser.setUserData(userData);

		this.userService.createUser(newUser);

		return ResponseEntity.ok(HttpStatus.OK);
	}

}
