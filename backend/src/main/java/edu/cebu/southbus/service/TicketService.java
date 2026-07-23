package edu.cebu.southbus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.dto.request.BookRequest.Contact;
import edu.cebu.southbus.entity.Ticket;
import edu.cebu.southbus.repository.TicketRepository;

@Service
public class TicketService {
	@Autowired
	private TicketRepository ticketRepository;

	public Ticket getTicketById(String ticketId) {
		return ticketRepository.findByIdWithDetails(ticketId)
				.orElseThrow(() -> new RuntimeException("Ticket not found with ID: " + ticketId));
	}

	public Ticket updateTicket(String ticketId, Contact passengerContact) {
		System.out.println("Updating ticket with ID: " + ticketId + " and contact info: " + passengerContact);
		return ticketRepository.save(getTicketById(ticketId).updateContactInfo(passengerContact));
	}
}
