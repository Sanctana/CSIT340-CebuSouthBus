package edu.cebu.southbus.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.time.LocalDate;

@Entity
@Table(name = "tblpassenger")
public class PassengerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ticket_uid", nullable = false, length = 6)
    @NotNull
    @Size(max = 6)
    private String ticketUid;

    @Column(name = "first_name", nullable = false)
    @NotNull
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name", nullable = false)
    @NotNull
    private String lastName;

    @Column(name = "suffix", nullable = true)
    private String suffix;

    @Column(name = "date_of_birth", nullable = false)
    @NotNull
    private LocalDate dateOfBirth;

    @Column(name = "is_female", nullable = false)
    @NotNull
    private Boolean isFemale;

    @Column(name = "phone_number", nullable = false, length = 20)
    @NotNull
    @Size(max = 20)
    private String phoneNumber;

    @Column(nullable = false, length = 50)
    @NotNull
    @Size(max = 50)
    private String email;

}