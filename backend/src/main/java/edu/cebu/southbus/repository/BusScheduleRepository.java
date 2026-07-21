package edu.cebu.southbus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import edu.cebu.southbus.entity.BusSchedule;

@Repository
public interface BusScheduleRepository extends JpaRepository<BusSchedule, Integer> {

	@Query("SELECT b FROM BusSchedule b " +
			"JOIN b.route r " +
			"LEFT JOIN Ticket t ON t.busSchedule = b " +
			"WHERE r.destination = :destination " +
			"GROUP BY b " +
			"HAVING (b.capacity - COUNT(t)) >= :passengerCount")
	List<BusSchedule> findAvailableBusesByDestination(
			@Param("destination") String destination,
			@Param("passengerCount") int passengerCount);
}
