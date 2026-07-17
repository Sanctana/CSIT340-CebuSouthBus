package edu.cebu.southbus.dto;

import lombok.Getter;

@Getter
public class RouteDTO {
    private Integer id;
    private String destination;
    private Integer distance;
    private Integer minDuration;
    private Integer maxDuration;
    private Integer schedule;
    private Integer minFare;
    private Integer maxFare;
    private boolean hasAircon; // 1 if at least one aircon bus exists, else 0
    private boolean hasNonAircon; // 1 if at least one non‑aircon bus exists, else 0

    public RouteDTO(Integer id, String destination, Integer distance,
            Integer minDuration, Integer maxDuration,
            Integer schedule, Integer minFare, Integer maxFare,
            Integer hasAircon, Integer hasNonAircon) {
        this.id = id;
        this.destination = destination;
        this.distance = distance;
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
        this.schedule = schedule;
        this.minFare = minFare;
        this.maxFare = maxFare;
        this.hasAircon = hasAircon == 1;
        this.hasNonAircon = hasNonAircon == 1;
    }
}