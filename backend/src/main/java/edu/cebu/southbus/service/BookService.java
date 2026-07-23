package edu.cebu.southbus.service;

import java.util.Arrays;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.dto.request.BookRequest;
import edu.cebu.southbus.entity.Ticket;
import edu.cebu.southbus.mapper.PassengerMapper;
import edu.cebu.southbus.mapper.TicketMapper;
import edu.cebu.southbus.repository.BookRepository;
import edu.cebu.southbus.repository.BusScheduleRepository;
import edu.cebu.southbus.repository.PassengerRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private BusScheduleRepository busScheduleRepository;

	@Autowired
	private PassengerRepository passengerRepository;

	private static final int MAX_RETRIES = 3;

	public String bookTicket(BookRequest bookRequest) {
		Ticket savedTicket = saveTicketWithRetry(TicketMapper.toEntity(bookRequest)
				.setPassengers(
						Arrays.stream(bookRequest.getPassengers())
								.map(PassengerMapper::toEntity)
								.collect(Collectors.toList())),
				bookRequest.getBusScheduleId());

		savedTicket.getPassengers()
				.forEach(passenger -> passenger.setTicket(savedTicket));
		passengerRepository.saveAll(savedTicket.getPassengers());

		return savedTicket.getUid();
	}

	private Ticket saveTicketWithRetry(Ticket ticket, Integer busScheduleId) {
		ticket.setBusSchedule(busScheduleRepository.getReferenceById(busScheduleId));

		for (int attempts = 0; attempts < MAX_RETRIES; attempts++) {
			try {
				return bookRepository.save(ticket);
			} catch (Exception e) {
				if (attempts >= MAX_RETRIES) {
					throw new RuntimeException("Failed to book ticket after " + MAX_RETRIES + " attempts", e);
				}
			}
		}

		throw new IllegalStateException("Unexpected error while booking ticket");
	}
}
