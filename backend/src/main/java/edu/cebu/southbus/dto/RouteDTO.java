package edu.cebu.southbus.dto;

public record RouteDTO(Integer id, String destination, Integer distance, Integer minDuration, Integer maxDuration,
		Integer schedule,
		Integer minFare, Integer maxFare) {
}
