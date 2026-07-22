package edu.cebu.southbus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.entity.Ticket;
import edu.cebu.southbus.service.ViewTicketService;

@RestController
@RequestMapping("/view-ticket")
public class ViewTicketController {
	@Autowired
	private ViewTicketService viewTicketService;

	@GetMapping("/{ticketId}")
	public Ticket getTicketById(@PathVariable String ticketId) {
		return viewTicketService.getTicketById(ticketId);
	}
}
