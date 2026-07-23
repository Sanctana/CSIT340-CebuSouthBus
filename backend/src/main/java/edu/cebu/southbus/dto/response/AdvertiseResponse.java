package edu.cebu.southbus.dto.response;

public record AdvertiseResponse(
		Integer id,
		String title,
		String description,
		String location,
		String category) {

}