package com.akp.area.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Expenses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="title",nullable=false)
	private String title;
	@Column(name="amount",nullable=false)
	private double amount;
	@Column(name="category",nullable=false)
	private String category;
	@Column(name="paymentMode",nullable=false)
	private String paymentMode;
	@Column(name="date",nullable=false)
	private LocalDate date;
	@Column(name="note", nullable=true)
	private String note;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
}
