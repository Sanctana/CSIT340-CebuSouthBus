package edu.cebu.southbus.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.dto.request.BookRequest;
import edu.cebu.southbus.service.BookService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	private BookService bookService;

	@PostMapping
	public ResponseEntity<Map<String, String>> bookTicket(@Valid @RequestBody BookRequest ticket) {
		return ResponseEntity.ok(Map.of("confirmationCode", bookService.bookTicket(ticket)));
	}
}
