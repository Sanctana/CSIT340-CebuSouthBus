package edu.cebu.southbus.entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NonNull;

@Entity
@Table(name = "tblbus")
@Getter
public class BusSchedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bus_id", nullable = false)
	private Integer id;

	@Column(nullable = false)
	@NotNull
	private Integer capacity;

	@Column(name = "is_aircon", nullable = false)
	@NotNull
	private Boolean isAircon;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "route_id", nullable = false)
	private Route route;

	@Column(name = "bus_operator", nullable = false)
	@NotNull
	private String busOperator;

	@Column(name = "departure_time", nullable = false)
	@NonNull
	private LocalTime departureTime;
}