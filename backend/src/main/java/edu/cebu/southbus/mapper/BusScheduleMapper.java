package edu.cebu.southbus.mapper;

import edu.cebu.southbus.dto.BusScheduleDTO;
import edu.cebu.southbus.entity.BusSchedule;

public class BusScheduleMapper {
	public static BusScheduleDTO toDTO(BusSchedule busSchedule) {
		return new BusScheduleDTO(
				busSchedule.getId(),
				busSchedule.getCapacity(),
				busSchedule.getIsAircon(),
				busSchedule.getBusOperator(),
				busSchedule.getDepartureTime(),
				busSchedule.getRoute());
	}
}
