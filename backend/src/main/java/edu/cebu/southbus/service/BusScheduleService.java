package edu.cebu.southbus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.cebu.southbus.entity.BusSchedule;
import edu.cebu.southbus.repository.BusScheduleRepository;

@Service
public class BusScheduleService {
	@Autowired
	private BusScheduleRepository busScheduleRepository;

	public List<BusSchedule> getBusSchedules(String destination, Integer passengerCount) {
		return busScheduleRepository.findAvailableBusesByDestination(destination, passengerCount);
	}
}
