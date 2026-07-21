package edu.cebu.southbus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.dto.response.BusScheduleResponse;
import edu.cebu.southbus.mapper.BusScheduleMapper;
import edu.cebu.southbus.repository.BusScheduleRepository;

@Service
public class BusScheduleService {
	@Autowired
	private BusScheduleRepository busScheduleRepository;

	public List<BusScheduleResponse> getBusSchedules(String destination, Integer passengerCount) {
		return busScheduleRepository.findAvailableBusesByDestination(destination, passengerCount).stream()
				.map(BusScheduleMapper::toDTO)
				.toList();
	}
}
