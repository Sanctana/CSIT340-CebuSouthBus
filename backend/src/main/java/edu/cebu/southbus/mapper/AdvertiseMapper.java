package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.response.AdvertiseResponse;
import edu.cebu.southbus.entity.Advertise;

public class AdvertiseMapper {
	public static AdvertiseResponse toResponse(Advertise tourist) {
		return new AdvertiseResponse(
				tourist.getId(),
				tourist.getTitle(),
				tourist.getDescription(),
				tourist.getLocation(),
				tourist.getCategory());
	}
}
