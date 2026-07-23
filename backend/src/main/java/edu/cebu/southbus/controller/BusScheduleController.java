package edu.cebu.southbus.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.cebu.southbus.dto.response.BusScheduleResponse;
import edu.cebu.southbus.service.BusScheduleService;

@RestController
@RequestMapping("/bus-schedule")
public class BusScheduleController {
	@Autowired
	private BusScheduleService busScheduleService;

	@GetMapping
	public List<BusScheduleResponse> getBusSchedule(@RequestParam String destination,
			@RequestParam Integer passengerCount,
			@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
		return busScheduleService.getBusSchedules(destination, passengerCount, date);
	}
}
