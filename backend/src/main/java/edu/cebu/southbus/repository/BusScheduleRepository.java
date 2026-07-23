package edu.cebu.southbus.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import edu.cebu.southbus.dto.response.BusScheduleResponse;
import edu.cebu.southbus.entity.BusSchedule;

@Repository
public interface BusScheduleRepository extends JpaRepository<BusSchedule, Integer> {

	@Query("SELECT new edu.cebu.southbus.dto.response.BusScheduleResponse(" +
			"b.id, b.capacity, b.isAircon, b.busOperator, b.departureTime, b.route, " +
			"(b.capacity - COUNT(t))) " +
			"FROM BusSchedule b " +
			"JOIN b.route r " +
			"LEFT JOIN Ticket t ON t.busSchedule = b AND t.date = :date " +
			"WHERE r.destination = :destination " +
			"GROUP BY b " +
			"HAVING (b.capacity - COUNT(t)) >= :passengerCount")
	List<BusScheduleResponse> findAvailableBusesWithSeats(
			@Param("destination") String destination,
			@Param("date") LocalDate date,
			@Param("passengerCount") int passengerCount);
}
