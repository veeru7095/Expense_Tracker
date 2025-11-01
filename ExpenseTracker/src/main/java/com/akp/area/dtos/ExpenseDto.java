package com.akp.area.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseDto {
	
	private long id;
	private String title;
	private double amount;
	private String category;
	private String paymentMode;
	private LocalDate date;
	private String note;

}
