package com.akp.area.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.akp.area.dtos.UserDto;
import com.akp.area.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {


	Optional<User> findByEmail(String email);
	
	

}
