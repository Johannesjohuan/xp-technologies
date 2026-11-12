import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { Country, State } from "country-state-city";
import "./Consultation.css";

const API_URL = "http://localhost:5000/api";

const serviceOptions = [
  "Custom business / ERP system",
  "Business process automation",
  "Existing system modernisation",
  "System integration",
  "Technical support",
  "Not sure yet",
  "Other"
];

const currentSystemOptions = [
  "Spreadsheets",
  "Paper / manual processes",
  "Existing business software",
  "Multiple applications",
  "Nothing currently",
  "Other"
];

const companySizes = [
  "1–5 employees",
  "6–10 employees",
  "11–25 employees",
  "26–50 employees",
  "51–100 employees",
  "101–250 employees",
  "251+ employees"
];

const meetingMethods = [
  {
    value: "google-meet",
    label: "Google Meet",
    icon: "bi-camera-video"
  },
  {
    value: "microsoft-teams",
    label: "Microsoft Teams",
    icon: "bi-people"
  },
  {
    value: "phone",
    label: "Phone",
    icon: "bi-telephone"
  }
];

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  country: "",
  stateRegion: "",
  industry: "",
  companySize: "",
  serviceCategory: "",
  serviceOther: "",
  requirementsDescription: "",
  currentSystemType: "",
  currentSystemOther: "",
  preferredMeetingMethod: "google-meet",
  consent: false
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const locationSelectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "8px",
    borderColor: state.isFocused ? "#c62828" : "#d8dde5",
    boxShadow: state.isFocused
      ? "0 0 0 1px #c62828"
      : "none",
    backgroundColor: state.isDisabled ? "#f5f5f5" : "#fff",
    "&:hover": {
      borderColor: state.isFocused ? "#c62828" : "#aab3c2"
    }
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "6px 12px"
  }),
  placeholder: (base) => ({
    ...base,
    color: "#7b8494"
  }),
  menu: (base) => ({
    ...base,
    zIndex: 20
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999
  }),
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#c62828"
      : state.isFocused
        ? "#f3f4f6"
        : "#fff",
    color: state.isSelected ? "#fff" : "#222"
  })
};

function Consultation() {
  const today = useMemo(() => {
    const currentDate = new Date();

    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdLead, setCreatedLead] = useState(null);

  const countries = useMemo(() => {
    return Country.getAllCountries()
      .map((country) => ({
        value: country.isoCode,
        label: country.name
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const selectedCountry = useMemo(() => {
    return (
      countries.find(
        (country) => country.label === formData.country
      ) || null
    );
  }, [countries, formData.country]);

  const states = useMemo(() => {
    if (!selectedCountry) {
      return [];
    }

    return State.getStatesOfCountry(selectedCountry.value)
      .map((state) => ({
        value: state.isoCode,
        label: state.name
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [selectedCountry]);

  const selectedState = useMemo(() => {
    return (
      states.find(
        (state) => state.label === formData.stateRegion
      ) || null
    );
  }, [states, formData.stateRegion]);

  const handleCountryChange = (option) => {
    setFormData((current) => ({
      ...current,
      country: option?.label || "",
      stateRegion: ""
    }));

    setErrors((current) => ({
      ...current,
      country: "",
      stateRegion: ""
    }));

    setSubmissionError("");
    setBookingMessage("");
  };

  const handleStateChange = (option) => {
    setFormData((current) => ({
      ...current,
      stateRegion: option?.label || ""
    }));

    setErrors((current) => ({
      ...current,
      stateRegion: ""
    }));

    setSubmissionError("");
    setBookingMessage("");
  };

  const [calendarDate, setCalendarDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);

  const selectedMeetingMethod = useMemo(() => {
    return meetingMethods.find(
      (method) =>
        method.value === formData.preferredMeetingMethod
    );
  }, [formData.preferredMeetingMethod]);

  const calendarYear = calendarDate.getFullYear();
  const calendarMonth = calendarDate.getMonth();

  const calendarDays = useMemo(() => {
    const firstDay = new Date(
      calendarYear,
      calendarMonth,
      1
    );

    const lastDay = new Date(
      calendarYear,
      calendarMonth + 1,
      0
    );

    const mondayBasedStart =
      firstDay.getDay() === 0
        ? 6
        : firstDay.getDay() - 1;

    const days = [];

    for (
      let index = 0;
      index < mondayBasedStart;
      index += 1
    ) {
      days.push(null);
    }

    for (
      let day = 1;
      day <= lastDay.getDate();
      day += 1
    ) {
      days.push(day);
    }

    return days;
  }, [calendarYear, calendarMonth]);

  const selectedFullDate = useMemo(() => {
    if (!selectedDate) {
      return null;
    }

    return new Date(
      calendarYear,
      calendarMonth,
      selectedDate
    );
  }, [selectedDate, calendarYear, calendarMonth]);

  const selectedDateText = useMemo(() => {
    if (!selectedFullDate) {
      return "Select a date";
    }

    return selectedFullDate.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }, [selectedFullDate]);

  const selectedDateForApi = useMemo(() => {
    if (!selectedDate) {
      return "";
    }

    const month = String(calendarMonth + 1).padStart(
      2,
      "0"
    );

    const day = String(selectedDate).padStart(2, "0");

    return `${calendarYear}-${month}-${day}`;
  }, [selectedDate, calendarYear, calendarMonth]);

  useEffect(() => {
    if (!selectedDateForApi) {
      setAvailableTimes([]);
      setSelectedTime("");
      return;
    }

    const fetchAvailability = async () => {
      setIsLoadingTimes(true);
      setSelectedTime("");
      setBookingMessage("");

      try {
        const response = await fetch(
          `${API_URL}/bookings/availability?date=${selectedDateForApi}`
        );

        const contentType =
          response.headers.get("content-type");

        let result = null;

        if (
          contentType &&
          contentType.includes("application/json")
        ) {
          result = await response.json();
        }

        if (!response.ok) {
          setAvailableTimes([]);
          setBookingMessage(
            result?.message ||
              `Unable to load available times. Server returned ${response.status}.`
          );
          return;
        }

        if (!result?.success) {
          setAvailableTimes([]);
          setBookingMessage(
            result?.message ||
              "The server did not return consultation availability."
          );
          return;
        }

        setAvailableTimes(
          Array.isArray(result.data)
            ? result.data
            : []
        );
      } catch (error) {
        setAvailableTimes([]);
        setBookingMessage(
          "Could not load available consultation times. Please try again."
        );
      } finally {
        setIsLoadingTimes(false);
      }
    };

    fetchAvailability();
  }, [selectedDateForApi]);

  const firstName =
    createdLead?.full_name?.trim().split(" ")[0] ||
    formData.fullName.trim().split(" ")[0] ||
    "there";

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));

    setSubmissionError("");
    setBookingMessage("");
  };

  const validateEnquiry = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName =
        "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email =
        "Please enter your business email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone =
        "Please enter your phone or WhatsApp number.";
    }

    if (!formData.companyName.trim()) {
      nextErrors.companyName =
        "Please enter your company name.";
    }

    if (!formData.country.trim()) {
      nextErrors.country =
        "Please select your country.";
    }

    if (
      states.length > 0 &&
      !formData.stateRegion.trim()
    ) {
      nextErrors.stateRegion =
        "Please select your state, province or region.";
    }

    if (!formData.industry.trim()) {
      nextErrors.industry =
        "Please enter your industry.";
    }

    if (!formData.serviceCategory) {
      nextErrors.serviceCategory =
        "Please select an option.";
    }

    if (
      formData.serviceCategory === "Other" &&
      !formData.serviceOther.trim()
    ) {
      nextErrors.serviceOther =
        "Please tell us what you are looking for.";
    }

    if (!formData.requirementsDescription.trim()) {
      nextErrors.requirementsDescription =
        "Please tell us what you need.";
    }

    if (
      formData.currentSystemType === "Other" &&
      !formData.currentSystemOther.trim()
    ) {
      nextErrors.currentSystemOther =
        "Please tell us what you currently use.";
    }

    if (!formData.preferredMeetingMethod) {
      nextErrors.preferredMeetingMethod =
        "Please select your preferred meeting method.";
    }

    if (!formData.consent) {
      nextErrors.consent =
        "Please confirm that we may contact you regarding your enquiry.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleContinueToBooking = async (event) => {
    event.preventDefault();

    if (!validateEnquiry()) {
      return;
    }

    setSubmissionError("");
    setIsSubmitting(true);

    const enquiryPayload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      companyName: formData.companyName.trim(),
      country: formData.country.trim(),
      stateRegion: formData.stateRegion.trim(),
      industry: formData.industry.trim(),
      companySize:
        formData.companySize || undefined,
      serviceCategory:
        formData.serviceCategory,
      serviceOther:
        formData.serviceCategory === "Other"
          ? formData.serviceOther.trim()
          : undefined,
      requirementsDescription:
        formData.requirementsDescription.trim(),
      currentSystemType:
        formData.currentSystemType || undefined,
      currentSystemOther:
        formData.currentSystemType === "Other"
          ? formData.currentSystemOther.trim()
          : undefined,
      preferredMeetingMethod:
        formData.preferredMeetingMethod,
      consent: formData.consent
    };

    try {
      const response = await fetch(
        `${API_URL}/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(enquiryPayload)
        }
      );

      const contentType =
        response.headers.get("content-type");

      let result = null;

      if (
        contentType &&
        contentType.includes("application/json")
      ) {
        result = await response.json();
      }

      if (!response.ok) {
        setSubmissionError(
          result?.message ||
            `Unable to submit your enquiry. Server returned ${response.status}.`
        );

        return;
      }

      if (!result?.success) {
        setSubmissionError(
          result?.message ||
            "The server did not confirm the enquiry."
        );

        return;
      }

      if (!result?.data?.id) {
        setSubmissionError(
          "The enquiry reached the server, but the created lead was not returned."
        );

        return;
      }

      setCreatedLead(result.data);
      setSubmissionError("");
      setBookingMessage("");
      setStep(2);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      setSubmissionError(
        "Could not connect to the XP Technologies API. Make sure the backend is running on port 5000."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(
      calendarYear,
      calendarMonth - 1,
      1
    );

    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previousMonth < currentMonth) {
      return;
    }

    setCalendarDate(previousMonth);
    setSelectedDate(null);
    setSelectedTime("");
    setAvailableTimes([]);
    setBookingMessage("");
  };

  const handleNextMonth = () => {
    setCalendarDate(
      new Date(
        calendarYear,
        calendarMonth + 1,
        1
      )
    );

    setSelectedDate(null);
    setSelectedTime("");
    setAvailableTimes([]);
    setBookingMessage("");
  };

  const isPastDate = (day) => {
    const date = new Date(
      calendarYear,
      calendarMonth,
      day
    );

    return date < today;
  };

  const handleSelectDate = (day) => {
    if (isPastDate(day)) {
      return;
    }

    setSelectedDate(day);
    setSelectedTime("");
    setBookingMessage("");
  };

  const refreshAvailability = async () => {
    if (!selectedDateForApi) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/bookings/availability?date=${selectedDateForApi}`
      );

      const contentType =
        response.headers.get("content-type");

      let result = null;

      if (
        contentType &&
        contentType.includes("application/json")
      ) {
        result = await response.json();
      }

      if (response.ok && result?.success) {
        setAvailableTimes(
          Array.isArray(result.data)
            ? result.data
            : []
        );
      }
    } catch (error) {
      setAvailableTimes([]);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      setBookingMessage(
        "Please select a date and time."
      );
      return;
    }

    if (!createdLead?.id) {
      setBookingMessage(
        "Unable to identify your enquiry. Please return to the previous step and try again."
      );
      return;
    }

    setBookingMessage("");
    setIsSubmitting(true);

    const bookingPayload = {
      leadId: createdLead.id,
      meetingDate: selectedDateForApi,
      startTime: selectedTime,
      meetingMethod:
        formData.preferredMeetingMethod
    };

    try {
      const response = await fetch(
        `${API_URL}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bookingPayload)
        }
      );

      const contentType =
        response.headers.get("content-type");

      let result = null;

      if (
        contentType &&
        contentType.includes("application/json")
      ) {
        result = await response.json();
      }

      if (!response.ok) {
        setBookingMessage(
          result?.message ||
            `Unable to book your consultation. Server returned ${response.status}.`
        );

        if (response.status === 409) {
          setSelectedTime("");
          await refreshAvailability();
        }

        return;
      }

      if (!result?.success) {
        setBookingMessage(
          result?.message ||
            "The server did not confirm the booking."
        );

        return;
      }

      setBookingMessage("");
      setStep(3);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      setBookingMessage(
        "Could not connect to the XP Technologies API. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }

    setSubmissionError("");
    setBookingMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="consultation-page">
      <section className="consultation-hero">
        <div className="consultation-shell">
          <div className="consultation-hero-copy">
            <span className="consultation-eyebrow">
              BOOK A CONSULTATION
            </span>

            <h1>
              Let&apos;s understand your business
              <span> before we talk technology.</span>
            </h1>

            <p>
              Tell us what you&apos;re trying to improve.
              You don&apos;t need to know the technical
              solution yet — that&apos;s what the
              conversation is for.
            </p>
          </div>

          <div className="consultation-hero-panel">
            <div className="consultation-hero-icon">
              <i className="bi bi-chat-square-text"></i>
            </div>

            <div>
              <strong>
                A focused discovery conversation.
              </strong>

              <p>
                No technical preparation required. No
                obligation. Just a conversation about your
                business and what needs to work better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-content">
        <div className="consultation-shell">
          <div className="consultation-progress">
            <div
              className={`progress-item ${
                step >= 1 ? "active" : ""
              }`}
            >
              <span>1</span>

              <div>
                <strong>Your business</strong>
                <small>Tell us what you need</small>
              </div>
            </div>

            <div className="progress-line"></div>

            <div
              className={`progress-item ${
                step >= 2 ? "active" : ""
              }`}
            >
              <span>2</span>

              <div>
                <strong>Choose a time</strong>
                <small>Book your consultation</small>
              </div>
            </div>

            <div className="progress-line"></div>

            <div
              className={`progress-item ${
                step >= 3 ? "active" : ""
              }`}
            >
              <span>3</span>

              <div>
                <strong>Confirmation</strong>
                <small>You&apos;re all set</small>
              </div>
            </div>
          </div>

          {step === 1 && (
            <div className="consultation-layout">
              <form
                className="consultation-card consultation-form"
                onSubmit={handleContinueToBooking}
              >
                <div className="consultation-section-heading">
                  <span>STEP 1 OF 3</span>

                  <h2>Tell us about your business.</h2>

                  <p>
                    Give us enough context to understand why
                    you&apos;re reaching out. We&apos;ll
                    explore the details together during the
                    consultation.
                  </p>
                </div>

                <div className="form-grid">
                  <Field
                    label="Full name"
                    required
                    error={errors.fullName}
                  >
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                    />
                  </Field>

                  <Field
                    label="Business email"
                    required
                    error={errors.email}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                    />
                  </Field>

                  <Field
                    label="Phone / WhatsApp"
                    required
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +351 912 345 678"
                    />
                  </Field>

                  <Field
                    label="Company name"
                    required
                    error={errors.companyName}
                  >
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. ABC Ltd"
                    />
                  </Field>

                  <Field
                    label="Country"
                    required
                    error={errors.country}
                  >
                    <Select
                      inputId="consultation-country"
                      name="country"
                      options={countries}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      placeholder="Search or select country"
                      isSearchable
                      isClearable
                      classNamePrefix="location-select"
                      styles={locationSelectStyles}
                      menuPortalTarget={
                        typeof document !== "undefined"
                          ? document.body
                          : undefined
                      }
                      noOptionsMessage={() =>
                        "No countries found"
                      }
                    />
                  </Field>

                  <Field
                    label="State / Province / Region"
                    required={states.length > 0}
                    error={errors.stateRegion}
                  >
                    <Select
                      inputId="consultation-state"
                      name="stateRegion"
                      options={states}
                      value={selectedState}
                      onChange={handleStateChange}
                      placeholder={
                        !selectedCountry
                          ? "Select a country first"
                          : states.length === 0
                            ? "No regions available"
                            : "Search or select state"
                      }
                      isSearchable
                      isClearable
                      isDisabled={
                        !selectedCountry ||
                        states.length === 0
                      }
                      classNamePrefix="location-select"
                      styles={locationSelectStyles}
                      menuPortalTarget={
                        typeof document !== "undefined"
                          ? document.body
                          : undefined
                      }
                      noOptionsMessage={() =>
                        "No regions found"
                      }
                    />
                  </Field>

                  <Field
                    label="Industry"
                    required
                    error={errors.industry}
                  >
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. Fashion, Hospitality, Logistics"
                    />
                  </Field>

                  <Field label="Company size">
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select company size
                      </option>

                      {companySizes.map((size) => (
                        <option
                          key={size}
                          value={size}
                        >
                          {size}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="form-grid-spacer"></div>

                  <Field
                    label="What are you looking for?"
                    required
                    error={errors.serviceCategory}
                    full
                  >
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select an option
                      </option>

                      {serviceOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {formData.serviceCategory ===
                    "Other" && (
                    <Field
                      label="Tell us what you're looking for"
                      required
                      error={errors.serviceOther}
                      full
                    >
                      <input
                        type="text"
                        name="serviceOther"
                        value={formData.serviceOther}
                        onChange={handleChange}
                        placeholder="Briefly describe the type of support you need"
                      />
                    </Field>
                  )}

                  <Field
                    label="Tell us what you need"
                    required
                    error={
                      errors.requirementsDescription
                    }
                    full
                  >
                    <textarea
                      name="requirementsDescription"
                      value={
                        formData.requirementsDescription
                      }
                      onChange={handleChange}
                      rows="6"
                      placeholder="Describe what you want to improve, the problem you're experiencing, or what you'd like your new system to help you achieve."
                    />
                  </Field>

                  <Field
                    label="What are you currently using?"
                    full
                  >
                    <select
                      name="currentSystemType"
                      value={
                        formData.currentSystemType
                      }
                      onChange={handleChange}
                    >
                      <option value="">
                        Select an option
                      </option>

                      {currentSystemOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </Field>

                  {formData.currentSystemType ===
                    "Other" && (
                    <Field
                      label="Tell us what you currently use"
                      error={errors.currentSystemOther}
                      full
                    >
                      <input
                        type="text"
                        name="currentSystemOther"
                        value={
                          formData.currentSystemOther
                        }
                        onChange={handleChange}
                        placeholder="Tell us about your current tools or process"
                      />
                    </Field>
                  )}

                  <div className="form-field form-field-full">
                    <label>
                      Preferred meeting method
                    </label>

                    <div className="meeting-methods">
                      {meetingMethods.map((method) => (
                        <label
                          className={`meeting-method ${
                            formData.preferredMeetingMethod ===
                            method.value
                              ? "selected"
                              : ""
                          }`}
                          key={method.value}
                        >
                          <input
                            type="radio"
                            name="preferredMeetingMethod"
                            value={method.value}
                            checked={
                              formData.preferredMeetingMethod ===
                              method.value
                            }
                            onChange={handleChange}
                          />

                          <i
                            className={`bi ${method.icon}`}
                          ></i>

                          <span>
                            {method.label}
                          </span>
                        </label>
                      ))}
                    </div>

                    {errors.preferredMeetingMethod && (
                      <small className="field-error">
                        {
                          errors.preferredMeetingMethod
                        }
                      </small>
                    )}
                  </div>

                  <div className="form-field form-field-full">
                    <label className="consent-field">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                      />

                      <span>
                        I agree to be contacted by XP
                        Technologies regarding this enquiry.
                      </span>
                    </label>

                    {errors.consent && (
                      <small className="field-error">
                        {errors.consent}
                      </small>
                    )}
                  </div>
                </div>

                {submissionError && (
                  <p className="field-error">
                    {submissionError}
                  </p>
                )}

                <button
                  type="submit"
                  className="consultation-primary-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Continue to booking"}

                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>

              <aside className="consultation-aside">
                <div className="aside-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <span>
                  YOU DON&apos;T NEED ALL THE ANSWERS
                </span>

                <h3>
                  Tell us the problem. We&apos;ll explore
                  the solution.
                </h3>

                <p>
                  You don&apos;t need to know which modules,
                  technologies or integrations your business
                  needs before speaking with us.
                </p>

                <div className="aside-points">
                  <div>
                    <i className="bi bi-check2"></i>
                    <span>
                      Understand your current process
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check2"></i>
                    <span>
                      Identify bottlenecks and opportunities
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check2"></i>
                    <span>
                      Explore the right system approach
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check2"></i>
                    <span>No obligation</span>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {step === 2 && (
            <div className="booking-card consultation-card">
              <button
                type="button"
                className="back-button"
                onClick={handleBack}
              >
                <i className="bi bi-arrow-left"></i>
                Back
              </button>

              <div className="consultation-section-heading booking-heading">
                <span>STEP 2 OF 3</span>

                <h2>Book your consultation.</h2>

                <p>
                  Choose a convenient time to discuss your
                  business and what you&apos;re looking to
                  improve.
                </p>
              </div>

              <div className="booking-layout">
                <div className="calendar-panel">
                  <div className="calendar-header">
                    <button
                      type="button"
                      aria-label="Previous month"
                      onClick={handlePreviousMonth}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <strong>
                      {monthNames[calendarMonth]}{" "}
                      {calendarYear}
                    </strong>

                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={handleNextMonth}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>

                  <div className="calendar-weekdays">
                    {[
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun"
                    ].map((day) => (
                      <span key={day}>
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="calendar-days">
                    {calendarDays.map(
                      (day, index) => {
                        if (!day) {
                          return (
                            <span
                              className="empty-day"
                              key={`empty-${index}`}
                            ></span>
                          );
                        }

                        const past =
                          isPastDate(day);

                        return (
                          <button
                            type="button"
                            key={day}
                            disabled={past}
                            className={
                              selectedDate === day
                                ? "selected-day"
                                : ""
                            }
                            onClick={() =>
                              handleSelectDate(day)
                            }
                          >
                            {day}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="time-panel">
                  <span className="selected-date-label">
                    {selectedDateText}
                  </span>

                  <h3>Available times</h3>

                  {!selectedDate && (
                    <p>
                      Select a date to view available times.
                    </p>
                  )}

                  {selectedDate &&
                    isLoadingTimes && (
                    <p>
                      Checking available times...
                    </p>
                  )}

                  {selectedDate &&
                    !isLoadingTimes &&
                    availableTimes.length === 0 &&
                    !bookingMessage && (
                    <p>
                      No consultation times are available
                      for this date.
                    </p>
                  )}

                  {selectedDate &&
                    !isLoadingTimes &&
                    availableTimes.length > 0 && (
                    <div className="time-slots">
                      {availableTimes.map((time) => (
                        <button
                          type="button"
                          key={time}
                          className={
                            selectedTime === time
                              ? "selected-time"
                              : ""
                          }
                          onClick={() => {
                            setSelectedTime(time);
                            setBookingMessage("");
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}

                  <h3 className="meeting-heading">
                    Meeting method
                  </h3>

                  <div className="booking-meeting-methods">
                    {meetingMethods.map((method) => (
                      <label key={method.value}>
                        <input
                          type="radio"
                          name="preferredMeetingMethod"
                          value={method.value}
                          checked={
                            formData.preferredMeetingMethod ===
                            method.value
                          }
                          onChange={handleChange}
                        />

                        <span>
                          {method.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="booking-selection">
                <span>Your selection</span>

                <div>
                  <i className="bi bi-calendar3"></i>

                  <p>
                    <strong>
                      {selectedDateText}
                    </strong>

                    <small>
                      {selectedTime
                        ? `${selectedTime} · Europe/Lisbon`
                        : "Choose an available time"}
                    </small>
                  </p>
                </div>

                <div>
                  <i
                    className={`bi ${
                      selectedMeetingMethod?.icon || ""
                    }`}
                  ></i>

                  <p>
                    <strong>
                      {selectedMeetingMethod?.label}
                    </strong>

                    <small>
                      30-minute discovery consultation
                    </small>
                  </p>
                </div>
              </div>

              {bookingMessage && (
                <p
                  className="field-error"
                  style={{
                    marginTop: "18px"
                  }}
                >
                  {bookingMessage}
                </p>
              )}

              <div className="booking-actions">
                <button
                  type="button"
                  className="consultation-secondary-button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  <i className="bi bi-arrow-left"></i>
                  Back
                </button>

                <button
                  type="button"
                  className="consultation-primary-button"
                  onClick={handleConfirmBooking}
                  disabled={
                    isSubmitting ||
                    isLoadingTimes ||
                    !selectedDate ||
                    !selectedTime
                  }
                >
                  {isSubmitting
                    ? "Confirming..."
                    : "Confirm consultation"}

                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="confirmation-card consultation-card">
              <div className="confirmation-icon">
                <i className="bi bi-check-lg"></i>
              </div>

              <span className="confirmation-label">
                CONSULTATION CONFIRMED
              </span>

              <h2>
                You&apos;re booked, {firstName}.
              </h2>

              <p className="confirmation-intro">
                Your discovery consultation with XP
                Technologies has been scheduled.
              </p>

              <div className="confirmation-details">
                <div>
                  <i className="bi bi-calendar3"></i>
                  <span>{selectedDateText}</span>
                </div>

                <div>
                  <i className="bi bi-clock"></i>
                  <span>
                    {selectedTime} · Europe/Lisbon
                  </span>
                </div>

                <div>
                  <i
                    className={`bi ${
                      selectedMeetingMethod?.icon || ""
                    }`}
                  ></i>

                  <span>
                    {selectedMeetingMethod?.label}
                  </span>
                </div>
              </div>

              <div className="confirmation-email">
                <i className="bi bi-envelope"></i>

                <p>
                  A confirmation will be sent to{" "}
                  <strong>
                    {createdLead?.email ||
                      formData.email}
                  </strong>{" "}
                  with your meeting details and joining
                  link. You'll also receive an email
                  reminder two hours before your
                  consultation.
                </p>
              </div>

              <div className="what-next">
                <h3>What happens next?</h3>

                <div>
                  <span>1</span>
                  <p>
                    You&apos;ll receive your consultation
                    confirmation and meeting details.
                  </p>
                </div>

                <div>
                  <span>2</span>
                  <p>
                    We&apos;ll review the information you
                    shared before the meeting.
                  </p>
                </div>

                <div>
                  <span>3</span>
                  <p>
                    During the consultation, we&apos;ll
                    explore your workflow, challenges and
                    what you want to improve.
                  </p>
                </div>
              </div>

              <a
                href="/"
                className="consultation-primary-button home-button"
              >
                Back to home
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  required,
  error,
  full,
  children
}) {
  return (
    <div
      className={`form-field ${
        full ? "form-field-full" : ""
      } ${error ? "has-error" : ""}`}
    >
      <label>
        {label}
        {required && <span> *</span>}
      </label>

      {children}

      {error && (
        <small className="field-error">
          {error}
        </small>
      )}
    </div>
  );
}

export default Consultation;