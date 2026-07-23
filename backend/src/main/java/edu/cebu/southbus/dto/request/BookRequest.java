package edu.cebu.southbus.dto.request;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;

import lombok.Getter;
import lombok.Setter;

@Getter
public class BookRequest {
	public static enum Gender {
		MALE("Male"),
		FEMALE("Female");

		private final String label;

		Gender(String label) {
			this.label = label;
		}

		@JsonValue
		public String getLabel() {
			return label;
		}

		@JsonCreator
		public static Gender from(String value) {
			if (value == null)
				return null;
			return switch (value.trim().toLowerCase()) {
				case "male" -> MALE;
				case "female" -> FEMALE;
				default -> throw new IllegalArgumentException("Invalid gender: " + value);
			};
		}
	}

	public static enum PaymentMethod {
		GCASH("GCash"),
		MAYA("Maya"),
		CASH("Cash");

		private final String label;

		PaymentMethod(String label) {
			this.label = label;
		}

		@JsonValue
		public String getLabel() {
			return label;
		}

		@JsonCreator
		public static PaymentMethod from(String value) {
			if (value == null)
				return null;
			return switch (value.trim().toLowerCase()) {
				case "gcash" -> GCASH;
				case "maya" -> MAYA;
				case "cash" -> CASH;
				default -> throw new IllegalArgumentException("Invalid payment method: " + value);
			};
		}
	}

	@Getter
	public static class Name {
		@NotBlank(message = "First name is required")
		private String firstName;

		private String middleName;

		@NotBlank(message = "Last name is required")
		private String lastName;
	}

	@Getter
	public static class Contact extends Name {
		@NotBlank(message = "Email is required")
		@Email(message = "Email should be valid")
		private String email;

		@NotBlank(message = "Mobile number is required")
		@Pattern(regexp = "09\\d{9}", message = "Mobile must start with 09 and contain only digits")
		@Length(min = 11, max = 11, message = "Mobile number must be 11 digits")
		private String mobile;
	}

	@Getter
	public static class Passenger extends Name {
		@NotNull(message = "Date of birth is required")
		@Past(message = "Date of birth must be in the past")
		private LocalDate dateOfBirth;

		@NotNull(message = "Gender is required")
		private Gender gender;

		private String suffix;
	}

	@NotNull(message = "Bus schedule ID is required")
	private Integer busScheduleId;

	@NotNull(message = "Passenger contact is required")
	@Valid
	private Contact passengerContact;

	@NotNull(message = "Passenger/s are required")
	private Passenger @Valid [] passengers;

	@NotNull(message = "Payment method is required")
	private PaymentMethod paymentMethod;

	@NotNull(message = "Date is required")
	private LocalDate date;
}