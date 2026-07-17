package edu.cebu.southbus.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.cebu.southbus.dto.RouteAirconInfo;
import edu.cebu.southbus.entity.Route;

@Repository
public interface RouteRepository extends JpaRepository<Route, Integer> {

	@Query("SELECT new edu.cebu.southbus.dto.RouteAirconInfo(" +
			"  r.id, r.destination, r.distance, " +
			"  r.minDuration, r.maxDuration, r.schedule, " +
			"  r.minFare, r.maxFare, " +
			"  MAX(CASE WHEN b.isAircon = true THEN 1 ELSE 0 END), " +
			"  MAX(CASE WHEN b.isAircon = false THEN 1 ELSE 0 END) " +
			") " +
			"FROM Route r LEFT JOIN r.buses b " +
			"GROUP BY r.id, r.destination, r.distance, " +
			"         r.minDuration, r.maxDuration, r.schedule, r.minFare, r.maxFare")
	List<RouteAirconInfo> findAllRoutes();
}
