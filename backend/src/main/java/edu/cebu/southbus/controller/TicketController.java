package edu.cebu.southbus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.dto.request.BookRequest.Contact;
import edu.cebu.southbus.entity.Ticket;
import edu.cebu.southbus.service.TicketService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/ticket")
public class TicketController {
	@Autowired
	private TicketService ticketService;

	@GetMapping("/{ticketId}")
	public Ticket getTicketById(@PathVariable String ticketId) {
		return ticketService.getTicketById(ticketId);
	}

	@PutMapping("/{ticketId}")
	public Ticket updateTicket(@PathVariable String ticketId, @Valid @RequestBody Contact passengerContact) {
		return ticketService.updateTicket(ticketId, passengerContact);
	}
}
