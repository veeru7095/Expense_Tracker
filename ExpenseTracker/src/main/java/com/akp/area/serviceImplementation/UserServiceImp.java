package com.akp.area.serviceImplementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akp.area.dtos.UserDto;
import com.akp.area.entity.User;
import com.akp.area.repository.UserRepo;
import com.akp.area.service.UserService;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDto register(UserDto userDto) {
		User user=modelMapper.map(userDto, User.class);
		User saveduser=userRepo.save(user);
		return modelMapper.map(saveduser, UserDto.class);
	}

}
