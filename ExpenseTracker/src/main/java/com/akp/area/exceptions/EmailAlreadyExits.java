package com.akp.area.exceptions;

public class EmailAlreadyExits extends RuntimeException{
	
	private String message;
	public EmailAlreadyExits(String message) {
		super(message);
	}

}
