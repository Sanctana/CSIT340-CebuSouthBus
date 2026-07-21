package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.request.BookRequest;
import edu.cebu.southbus.dto.request.BookRequest.Contact;
import edu.cebu.southbus.entity.Ticket;

public class TicketMapper {
	public static Ticket toEntity(BookRequest bookRequest) {
		Ticket ticket = new Ticket();
		Contact contact = bookRequest.getPassengerContact();

		ticket.setFirstName(contact.getFirstName());
		ticket.setLastName(contact.getLastName());
		ticket.setMiddleName(contact.getMiddleName());
		ticket.setEmailAddress(contact.getEmail());
		ticket.setMobileNumber(contact.getMobile());
		ticket.setPaymentMethod(bookRequest.getPaymentMethod().getLabel());

		return ticket;
	}
}