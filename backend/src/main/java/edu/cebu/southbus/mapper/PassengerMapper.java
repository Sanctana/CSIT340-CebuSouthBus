package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.request.BookRequest;
import edu.cebu.southbus.entity.Passenger;

public class PassengerMapper {
	public static Passenger toEntity(BookRequest.Passenger passenger) {
		Passenger passengerEntity = new Passenger();

		passengerEntity.setFirstName(passenger.getFirstName());
		passengerEntity.setMiddleName(passenger.getMiddleName());
		passengerEntity.setLastName(passenger.getLastName());
		passengerEntity.setSuffix(passenger.getSuffix());
		passengerEntity.setDateOfBirth(passenger.getDateOfBirth());
		passengerEntity.setIsFemale(passenger.getGender() == BookRequest.Gender.FEMALE);

		return passengerEntity;
	}
}
