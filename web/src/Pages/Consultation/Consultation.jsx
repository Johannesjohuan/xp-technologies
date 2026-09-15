import { useMemo, useState } from "react";
import "./Consultation.css";

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

const availableTimes = [
  "09:30",
  "11:00",
  "14:00",
  "15:30",
  "17:00"
];

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  country: "",
  industry: "",
  companySize: "",
  serviceCategory: "",
  serviceOther: "",
  requirementsDescription: "",
  currentSystemType: "",
  currentSystemOther: "",
  meetingMethod: "google-meet",
  consent: false
};

function Consultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [errors, setErrors] = useState({});

  const selectedMeetingMethod = useMemo(() => {
    return meetingMethods.find(
      (method) => method.value === formData.meetingMethod
    );
  }, [formData.meetingMethod]);

  const firstName = formData.fullName.trim().split(" ")[0] ?? "there";

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    console.log("handleChange called with:", { name, value, type, checked });   

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const validateEnquiry = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone or WhatsApp number.";
    }

    if (!formData.companyName.trim()) {
      nextErrors.companyName = "Please enter your company name.";
    }

    if (!formData.country.trim()) {
      nextErrors.country = "Please enter your country.";
    }

    if (!formData.industry.trim()) {
      nextErrors.industry = "Please enter your industry.";
    }

    if (!formData.serviceCategory) {
      nextErrors.serviceCategory = "Please select an option.";
    }

    if (
      formData.serviceCategory === "Other" &&
      !formData.serviceOther.trim()
    ) {
      nextErrors.serviceOther = "Please tell us what you are looking for.";
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

    if (!formData.consent) {
      nextErrors.consent =
        "Please confirm that we may contact you regarding your enquiry.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleContinueToBooking = (event) => {
    event.preventDefault();

    if (!validateEnquiry()) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(2);
  };

  const handleConfirmBooking = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(3);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep((current) => Math.max(1, current - 1));
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
              Tell us what you&apos;re trying to improve. You don&apos;t
              need to know the technical solution yet — that&apos;s what
              the conversation is for.
            </p>
          </div>

          <div className="consultation-hero-panel">
            <div className="consultation-hero-icon">
              <i className="bi bi-chat-square-text"></i>
            </div>

            <div>
              <strong>A focused discovery conversation.</strong>
              <p>
                No technical preparation required. No obligation. Just a
                conversation about your business and what needs to work
                better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-content">
        <div className="consultation-shell">
          <div className="consultation-progress">
            <div className={`progress-item ${step >= 1 ? "active" : ""}`}>
              <span>1</span>
              <div>
                <strong>Your business</strong>
                <small>Tell us what you need</small>
              </div>
            </div>

            <div className="progress-line"></div>

            <div className={`progress-item ${step >= 2 ? "active" : ""}`}>
              <span>2</span>
              <div>
                <strong>Choose a time</strong>
                <small>Book your consultation</small>
              </div>
            </div>

            <div className="progress-line"></div>

            <div className={`progress-item ${step >= 3 ? "active" : ""}`}>
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
                    Give us enough context to understand why you&apos;re
                    reaching out. We&apos;ll explore the details together
                    during the consultation.
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
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Portugal"
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
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
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
                      <option value="">Select an option</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {formData.serviceCategory === "Other" && (
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
                    error={errors.requirementsDescription}
                    full
                  >
                    <textarea
                      name="requirementsDescription"
                      value={formData.requirementsDescription}
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
                      value={formData.currentSystemType}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      {currentSystemOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {formData.currentSystemType === "Other" && (
                    <Field
                      label="Tell us what you currently use"
                      error={errors.currentSystemOther}
                      full
                    >
                      <input
                        type="text"
                        name="currentSystemOther"
                        value={formData.currentSystemOther}
                        onChange={handleChange}
                        placeholder="Tell us about your current tools or process"
                      />
                    </Field>
                  )}

                  <div className="form-field form-field-full">
                    <label>Preferred meeting method</label>

                    <div className="meeting-methods">
                      {meetingMethods.map((method) => (
                        <label
                          className={`meeting-method ${
                            formData.meetingMethod === method.value
                              ? "selected"
                              : ""
                          }`}
                          key={method.value}
                        >
                          <input
                            type="radio"
                            name="meetingMethod"
                            value={method.value}
                            checked={
                              formData.meetingMethod === method.value
                            }
                            onChange={handleChange}
                          />

                          <i className={`bi ${method.icon}`}></i>
                          <span>{method.label}</span>
                        </label>
                      ))}
                    </div>
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
                        I agree to be contacted by XP Technologies regarding
                        this enquiry.
                      </span>
                    </label>

                    {errors.consent && (
                      <small className="field-error">
                        {errors.consent}
                      </small>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="consultation-primary-button"
                >
                  Continue to booking
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>

              <aside className="consultation-aside">
                <div className="aside-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <span>YOU DON&apos;T NEED ALL THE ANSWERS</span>

                <h3>Tell us the problem. We&apos;ll explore the solution.</h3>

                <p>
                  You don&apos;t need to know which modules, technologies
                  or integrations your business needs before speaking with
                  us.
                </p>

                <div className="aside-points">
                  <div>
                    <i className="bi bi-check2"></i>
                    <span>Understand your current process</span>
                  </div>

                  <div>
                    <i className="bi bi-check2"></i>
                    <span>Identify bottlenecks and opportunities</span>
                  </div>

                  <div>
                    <i className="bi bi-check2"></i>
                    <span>Explore the right system approach</span>
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
                  Choose a convenient time to discuss your business and
                  what you&apos;re looking to improve.
                </p>
              </div>

              <div className="booking-layout">
                <div className="calendar-panel">
                  <div className="calendar-header">
                    <button type="button" aria-label="Previous month">
                      <i className="bi bi-chevron-left"></i>
                    </button>

                    <strong>September 2026</strong>

                    <button type="button" aria-label="Next month">
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>

                  <div className="calendar-weekdays">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <span key={day}>{day}</span>
                      )
                    )}
                  </div>

                  <div className="calendar-days">
                    <span className="empty-day"></span>
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <button type="button">6</button>

                    {Array.from({ length: 24 }, (_, index) => index + 7).map(
                      (day) => (
                        <button
                          type="button"
                          key={day}
                          className={
                            selectedDate === day ? "selected-day" : ""
                          }
                          onClick={() => setSelectedDate(day)}
                        >
                          {day}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="time-panel">
                  <span className="selected-date-label">
                    Tuesday, {selectedDate} September 2026
                  </span>

                  <h3>Available times</h3>

                  <div className="time-slots">
                    {availableTimes.map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={
                          selectedTime === time ? "selected-time" : ""
                        }
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <h3 className="meeting-heading">Meeting method</h3>

                  <div className="booking-meeting-methods">
                    {meetingMethods.map((method) => (
                      <label key={method.value}>
                        <input
                          type="radio"
                          name="meetingMethod"
                          value={method.value}
                          checked={
                            formData.meetingMethod === method.value
                          }
                          onChange={handleChange}
                        />
                        <span>{method.label}</span>
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
                      Tuesday, {selectedDate} September 2026
                    </strong>
                    <small>{selectedTime} · Europe/Lisbon</small>
                  </p>
                </div>

                <div>
                  <i className={`bi ${selectedMeetingMethod?.icon}`}></i>
                  <p>
                    <strong>{selectedMeetingMethod?.label}</strong>
                    <small>30-minute discovery consultation</small>
                  </p>
                </div>
              </div>

              <div className="booking-actions">
                <button
                  type="button"
                  className="consultation-secondary-button"
                  onClick={handleBack}
                >
                  <i className="bi bi-arrow-left"></i>
                  Back
                </button>

                <button
                  type="button"
                  className="consultation-primary-button"
                  onClick={handleConfirmBooking}
                >
                  Confirm consultation
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

              <h2>You're booked, {firstName}.</h2>

              <p className="confirmation-intro">
                Your discovery consultation with XP Technologies has been
                scheduled.
              </p>

              <div className="confirmation-details">
                <div>
                  <i className="bi bi-calendar3"></i>
                  <span>
                    Tuesday, {selectedDate} September 2026
                  </span>
                </div>

                <div>
                  <i className="bi bi-clock"></i>
                  <span>{selectedTime} · Europe/Lisbon</span>
                </div>

                <div>
                  <i className={`bi ${selectedMeetingMethod?.icon}`}></i>
                  <span>{selectedMeetingMethod?.label}</span>
                </div>
              </div>

              <div className="confirmation-email">
                <i className="bi bi-envelope"></i>

                <p>
                  A confirmation will be sent to
                  <strong>{formData.email}</strong>
                  with the meeting details and calendar invitation.
                </p>
              </div>

              <div className="what-next">
                <h3>What happens next?</h3>

                <div>
                  <span>1</span>
                  <p>
                    You&apos;ll receive your consultation confirmation and
                    meeting details.
                  </p>
                </div>

                <div>
                  <span>2</span>
                  <p>
                    We&apos;ll review the information you shared before the
                    meeting.
                  </p>
                </div>

                <div>
                  <span>3</span>
                  <p>
                    During the consultation, we&apos;ll explore your
                    workflow, challenges and what you want to improve.
                  </p>
                </div>
              </div>

              <a href="/" className="consultation-primary-button home-button">
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

function Field({ label, required, error, full, children }) {
  return (
    <div
      className={`form-field ${full ? "form-field-full" : ""} ${
        error ? "has-error" : ""
      }`}
    >
      <label>
        {label}
        {required && <span> *</span>}
      </label>

      {children}

      {error && <small className="field-error">{error}</small>}
    </div>
  );
}

export default Consultation;