package edu.cebu.southbus.dto.response;

import java.time.LocalTime;

import edu.cebu.southbus.entity.Route;

public record BusScheduleResponse(Integer id, Integer capacity, Boolean isAircon,
		String busOperator, LocalTime departureTime, Route route) {
}
