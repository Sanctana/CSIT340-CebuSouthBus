package edu.cebu.southbus.dto;

import java.time.LocalTime;

import edu.cebu.southbus.entity.Route;

public record BusScheduleDTO(Integer id, Integer capacity, Boolean isAircon,
		String busOperator, LocalTime departureTime, Route route) {
}
