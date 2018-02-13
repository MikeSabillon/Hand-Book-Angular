package com.handbook.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.handbook.entities.UserData;
import com.handbook.services.UserDataService;

@Controller
@RequestMapping("/userdata")
@CrossOrigin(origins = "http://localhost:4200")
public class UserDataController {

	@Autowired
	private UserDataService service;

	@GetMapping("/data")
	@ResponseBody
	public UserData getUserDataById(@RequestParam("id") Integer id) {
		return this.service.getUserDataById(id);
	}

	@PostMapping("/updateDate")
	@ResponseBody
	public ResponseEntity updateUserData(@RequestBody UserData data) {
		boolean canSave = this.service.saveUserData(data);

		if (canSave) {
			return ResponseEntity.ok(HttpStatus.OK);
		}

		return ResponseEntity.ok(HttpStatus.NOT_FOUND);
	}

}
