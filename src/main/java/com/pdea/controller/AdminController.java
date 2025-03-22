package com.pdea.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

	@GetMapping("admin")
	public String get() {
		return "add more details";
	}
	
}
