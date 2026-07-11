package edu.cebu.southbus.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "tblroute")
public class RouteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotNull
    private String destination;

    @Column(nullable = false)
    @NotNull
    private Integer distance;

    @Column(name = "min_duration", nullable = false)
    @NotNull
    private Integer minDuration;

    @Column(name = "max_duration", nullable = false)
    @NotNull
    private Integer maxDuration;

    @Column(nullable = false)
    @NotNull
    private Integer schedule; // every <int> minutes

    @Column(name = "min_fare", nullable = false)
    @NotNull
    private Integer minFare;

    @Column(name = "max_fare", nullable = false)
    @NotNull
    private Integer maxFare;

    public String getDestination() {
        return destination;
    }

    public Integer getDistance() {
        return distance;
    }

    public Integer getMinDuration() {
        return minDuration;
    }

    public Integer getMaxDuration() {
        return maxDuration;
    }

    public Integer getSchedule() {
        return schedule;
    }

    public Integer getMinFare() {
        return minFare;
    }

    public Integer getMaxFare() {
        return maxFare;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    public void setMinDuration(Integer minDuration) {
        this.minDuration = minDuration;
    }

    public void setMaxDuration(Integer maxDuration) {
        this.maxDuration = maxDuration;
    }

    public void setSchedule(Integer schedule) {
        this.schedule = schedule;
    }

    public void setMinFare(Integer minFare) {
        this.minFare = minFare;
    }

    public void setMaxFare(Integer maxFare) {
        this.maxFare = maxFare;
    }
}