package com.akp.area.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akp.area.entity.Expenses;

public interface ExpenseRepo extends JpaRepository<Expenses, Long>{

	List<Expenses> findByUserId(long userId);

}
