package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.RouteDTO;
import edu.cebu.southbus.entity.Route;

public class RouteMapper {
	public static RouteDTO toDTO(Route routeEntity) {
		return new RouteDTO(routeEntity.getId(), routeEntity.getDestination(), routeEntity.getDistance(),
				routeEntity.getMinDuration(),
				routeEntity.getMaxDuration(), routeEntity.getSchedule(), routeEntity.getMinFare(),
				routeEntity.getMaxFare());
	}

	public static Route toEntity(RouteDTO routeDTO) {
		Route routeEntity = new Route();
		routeEntity.setDestination(routeDTO.destination());
		routeEntity.setDistance(routeDTO.distance());
		routeEntity.setMinDuration(routeDTO.minDuration());
		routeEntity.setMaxDuration(routeDTO.maxDuration());
		routeEntity.setSchedule(routeDTO.schedule());
		routeEntity.setMinFare(routeDTO.minFare());
		routeEntity.setMaxFare(routeDTO.maxFare());
		return routeEntity;
	}
}
