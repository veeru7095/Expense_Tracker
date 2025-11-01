package com.akp.area.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akp.area.dtos.ExpenseDto;
import com.akp.area.service.ExpenseService;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
	
	@Autowired
	ExpenseService expenseService;
	

	@PostMapping("/{userId}/add")
	public ResponseEntity<ExpenseDto> add(
			@PathVariable long userId,@RequestBody ExpenseDto expenseDto
			){
	
		return new ResponseEntity<>(expenseService.add(userId, expenseDto),HttpStatus.CREATED);
	}
	
	
	  @GetMapping("/{userId}/getAll") 
	  public ResponseEntity<List<ExpenseDto>>getAll(@PathVariable long  userId){ 
		  return new ResponseEntity<>(expenseService.getAllExpenses(userId),HttpStatus.OK);
	  }

	 

}
