package com.akp.area.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akp.area.dtos.UserDto;
import com.akp.area.entity.User;
import com.akp.area.exceptions.EmailAlreadyExits;
import com.akp.area.repository.UserRepo;
import com.akp.area.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class UserController {
	@Autowired
	 private UserRepo userRepo;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserDto> register(@RequestBody UserDto userDto){
		if(userRepo.findByEmail(userDto.getEmail()).isPresent()) {
			throw new EmailAlreadyExits("Email already exits try with different emial");
		}
		return new ResponseEntity<>(userService.register(userDto),HttpStatus.CREATED);
	}

}
