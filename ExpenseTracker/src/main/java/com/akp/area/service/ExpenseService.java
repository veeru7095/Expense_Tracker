package com.akp.area.service;

import java.util.List;

import com.akp.area.dtos.ExpenseDto;

public interface ExpenseService {
	
	public ExpenseDto add(long userId,ExpenseDto expenseDto);
	
	public List<ExpenseDto> getAllExpenses(long id);

}
