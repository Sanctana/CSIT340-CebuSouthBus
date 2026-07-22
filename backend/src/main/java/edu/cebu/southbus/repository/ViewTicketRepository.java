package edu.cebu.southbus.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import edu.cebu.southbus.entity.Ticket;

@Repository
public interface ViewTicketRepository extends JpaRepository<Ticket, String> {

	@Query("SELECT t FROM Ticket t " +
			"JOIN FETCH t.busSchedule bs " +
			"LEFT JOIN FETCH t.passengers p " +
			"WHERE t.uid = :uid")
	Optional<Ticket> findByIdWithDetails(@Param("uid") String uid);
}
