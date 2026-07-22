package edu.cebu.southbus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.entity.Ticket;
import edu.cebu.southbus.repository.ViewTicketRepository;

@Service
public class ViewTicketService {
	@Autowired
	private ViewTicketRepository viewTicketRepository;

	public Ticket getTicketById(String ticketId) {
		return viewTicketRepository.findByIdWithDetails(ticketId)
				.orElseThrow(() -> new RuntimeException("Ticket not found with ID: " + ticketId));
	}
}
