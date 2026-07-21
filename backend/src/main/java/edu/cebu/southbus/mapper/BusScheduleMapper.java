package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.response.BusScheduleResponse;
import edu.cebu.southbus.entity.BusSchedule;

public class BusScheduleMapper {
	public static BusScheduleResponse toDTO(BusSchedule busSchedule) {
		return new BusScheduleResponse(
				busSchedule.getId(),
				busSchedule.getCapacity(),
				busSchedule.getIsAircon(),
				busSchedule.getBusOperator(),
				busSchedule.getDepartureTime(),
				busSchedule.getRoute());
	}
}
