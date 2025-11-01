package com.akp.area.serviceImplementation;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akp.area.dtos.ExpenseDto;
import com.akp.area.entity.Expenses;
import com.akp.area.entity.User;
import com.akp.area.exceptions.UserNotFound;
import com.akp.area.repository.ExpenseRepo;
import com.akp.area.repository.UserRepo;
import com.akp.area.service.ExpenseService;

@Service
public class ExpenseServiceImp implements ExpenseService{
	
	@Autowired
	private ExpenseRepo expenseRepo;

	@Autowired
	private UserRepo userRepo;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public ExpenseDto add(long userId, ExpenseDto expenseDto) {
		User user=userRepo.findById(userId).orElseThrow(
				()->new UserNotFound(String.format("user not found by id", userId)));
		Expenses expense=modelMapper.map(expenseDto, Expenses.class);
		expense.setUser(user);
		Expenses savedExpense=expenseRepo.save(expense);
		
		return modelMapper.map(savedExpense, ExpenseDto.class);
	}
	@Override
	public List<ExpenseDto> getAllExpenses(long userId) {
	    userRepo.findById(userId).orElseThrow(
	        () -> new UserNotFound(String.format("User not found by id %s:", userId))
	    );

	    List<Expense> allExpenses = expenseRepo.findByUserId(userId); // ✅ Fix class name

	    List<ExpenseDto> dtos = new ArrayList<>();
	    for (Expense expense : allExpenses) {
	        ExpenseDto dto = modelMapper.map(expense, ExpenseDto.class);
	        dtos.add(dto);
	    }

	    return dtos;
	}


}
