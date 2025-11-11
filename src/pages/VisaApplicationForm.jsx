import React, { useMemo, useState, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaGlobeAsia,
  FaPlaneDeparture,
  FaExchangeAlt,
} from "react-icons/fa";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};


const RouteChip = ({ from, to }) => (
  <div className="mx-auto w-full max-w-3xl flex items-center justify-between gap-3 sm:gap-4 bg-white/90 border border-[#f3d1d1] shadow-lg rounded-2xl sm:rounded-full px-4 py-3 sm:px-6 sm:py-3 transition-all duration-300">
    {/* Desktop */}
    <div className="hidden sm:flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#780606]/10 flex items-center justify-center">
          <FaGlobeAsia className="text-[#780606]" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-500 leading-none">Resident of</p>
          <p className="font-semibold truncate text-sm sm:text-base">
            {from || "Select country"}
          </p>
        </div>
      </div>
      <div className="flex items-center text-[#780606] opacity-80 text-xl">
        <FaExchangeAlt />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#780606]/10 flex items-center justify-center">
          <FaPlaneDeparture className="text-[#780606]" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-500 leading-none">Travelling to</p>
          <p className="font-semibold truncate text-sm sm:text-base">
            {to || "Destination Country"}
          </p>
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className="flex sm:hidden items-center gap-3 justify-center w-full">
      <div className="w-10 h-10 rounded-full bg-[#780606]/10 flex items-center justify-center">
        <FaPlaneDeparture className="text-[#780606] text-lg" />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-xs text-gray-500 leading-none">Destination</p>
        <p className="font-semibold truncate text-base text-gray-800">
          {to || "Destination Country"}
        </p>
      </div>
    </div>
  </div>
);

export default function VisaApplicationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();

  const fromState = location.state?.fromCountry || query.get("from") || "";
  const toState = location.state?.toCountry || query.get("to") || "";

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const onChange = (e) => {
    const { name, value } = e.target;
    // setForm((f) => ({ ...f, [name]: value }));
  };

  // Form submit logic (FormData pattern)
  const sendForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(form.current);

    const payload = {
      formType: "visaapplication",
      origin: String(window.location.origin),

      // Trip & Contact
      applicantName: formData.get("applicantName") || "",
      fromCountry: formData.get("fromCountry") || fromState,
      toCountry: formData.get("toCountry") || toState,
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      whatsapp: formData.get("whatsapp") || "",
      travelDay: formData.get("travelDay") || "",
      travelMonth: formData.get("travelMonth") || "",
      travelYear: formData.get("travelYear") || "",

      // Personal
      nationality: formData.get("nationality") || "",
      motherName: formData.get("motherName") || "",
      fatherName: formData.get("fatherName") || "",
      religion: formData.get("religion") || "",
      maritalStatus: formData.get("maritalStatus") || "",
      spouseName: formData.get("spouseName") || "",
      sex: formData.get("sex") || "",
      qualification: formData.get("qualification") || "",
      multiCitizenship: formData.get("multiCitizenship") || "",
      multiCitizenshipCountries: formData.get("multiCitizenshipCountries") || "",

      // UAE Address
      uaeAddr1: formData.get("uaeAddr1") || "",
      uaeAddr2: formData.get("uaeAddr2") || "",
      uaePO: formData.get("uaePO") || "",
      uaeCity: formData.get("uaeCity") || "",

      // Home Address
      homeAddr1: formData.get("homeAddr1") || "",
      homeAddr2: formData.get("homeAddr2") || "",
      homePO: formData.get("homePO") || "",
      homeCity: formData.get("homeCity") || "",
      homeCountry: formData.get("homeCountry") || "",

      // UAE Employment
      employer: formData.get("employer") || "",
      employerAddress: formData.get("employerAddress") || "",
      employerPhone: formData.get("employerPhone") || "",
      destCity: formData.get("destCity") || "",
      travelFromDay: formData.get("travelFromDay") || "",
      travelFromMonth: formData.get("travelFromMonth") || "",
      travelFromYear: formData.get("travelFromYear") || "",
      travelToDay: formData.get("travelToDay") || "",
      travelToMonth: formData.get("travelToMonth") || "",
      travelToYear: formData.get("travelToYear") || "",
      hotelInfo: formData.get("hotelInfo") || "",
      daysInEurope: formData.get("daysInEurope") || "",
      entryType: formData.get("entryType") || "",
      costCoveredBy: formData.get("costCoveredBy") || "",
      prevCountries: formData.get("prevCountries") || "",
      euFamily: formData.get("euFamily") || "",
      fingerprintsEarlier: formData.get("fingerprintsEarlier") || "",
      travelInsurance: formData.get("travelInsurance") || "",

      // Declaration
      signatoryName: formData.get("signatoryName") || "",
      companyName: formData.get("companyName") || "",
      dateDD: formData.get("dateDD") || "",
      dateMM: formData.get("dateMM") || "",
      dateYYYY: formData.get("dateYYYY") || "",
    };

    // Modal feedback helper
    const showModal = (message, isError = false) => {
      setErrorMessage(isError ? message : "");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage("");
      }, 4000);
    };

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      const canReadJson =
        response.ok &&
        response.headers.get("content-type")?.includes("application/json");

      if (canReadJson) {
        const result = await response.json();
        if (result?.success) {
          showModal("Your visa application has been successfully submitted.");
          e.target.reset();
        } else {
          showModal(result?.message || "Submission failed. Try again later.", true);
        }
      } else {
        showModal("Your visa application has been successfully submitted.");
        e.target.reset();
      }
    } catch (error) {
      console.warn("Fetch error, retrying with no-cors:", error);
      try {
        await fetch(scriptURL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        });
        showModal("Your visa application has been successfully submitted.");
        e.target.reset();
      } catch (fallbackError) {
        console.error("Final fallback error:", fallbackError);
        showModal("Network error. Please try again later.", true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Small UI Components ----------
  const Section = ({ title, children }) => (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#f3d1d1] shadow-lg p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#780606] mb-5">
        {title}
      </h3>
      {children}
    </div>
  );

  const Label = ({ children }) => (
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {children}
    </label>
  );

  const inputBase =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 \
   focus:outline-none focus:ring-2 focus:ring-[#780606]/40 focus:border-[#780606]/40 \
   transition-all duration-200";

  const Input = (props) => (
    <input {...props} className={`${inputBase} ${props.className || ""}`} />
  );

  const Radio = ({ name, value, label, required }) => (
    <label className="inline-flex items-center gap-2 mr-5 text-sm font-medium">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        className="w-4 h-4 accent-[#780606]"
      />
      {label}
    </label>
  );

  return (
    <div className="relative min-h-screen font-['Manrope'] bg-gradient-to-br from-[#fff5f5] via-white to-[#fff0f0] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-56 md:w-72 h-56 md:h-72 bg-[#780606]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#4a0303]/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="pt-20 pb-10 text-center px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#780606]"
        >
          Start Your <span className="text-gray-800">Visa Application</span>
        </motion.h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Fill the details below. Your{" "}
          <span className="font-semibold text-[#780606]">Departing</span> and{" "}
          <span className="font-semibold text-[#780606]">Arriving</span>{" "}
          countries are auto-filled from your selection.
        </p>

        <div className="mt-6">
          <RouteChip from={fromState} to={toState} />
        </div>
      </div>

      {/* Form Start */}
      <form
        ref={form}
        onSubmit={sendForm}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-8"
      >
        {/* Trip & Contact Details (unchanged) */}
        <Section title="Trip & Contact Details">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Applicant Name */}
            <div>
              <Label>Applicant Name *</Label>
              <Input
                name="applicantName"
                value={form.applicantName}
                onChange={onChange}
                placeholder="Full name as per passport"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label>Email *</Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="demo@gmail.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label>Phone *</Label>
              <Input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            {/* WhatsApp */}
            <div>
              <Label>WhatsApp *</Label>
              <Input
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={onChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            {/* Departing & Arriving Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
              <div>
                <Label>Departing Country *</Label>
                <Input
                  name="fromCountry"
                  value={form.fromCountry}
                  onChange={onChange}
                  placeholder="Resident of ..."
                  required
                />
              </div>
              <div>
                <Label>Arriving Country *</Label>
                <Input
                  name="toCountry"
                  value={form.toCountry}
                  onChange={onChange}
                  placeholder="Travelling to ..."
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label>Date of Travel (DD/MM/YYYY) *</Label>
              <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-2">
                <Input
                  type="text"
                  inputMode="numeric"
                  name="travelDay"
                  placeholder="DD"
                  maxLength={2}
                  value={form.travelDay}
                  onChange={onChange}
                  className="w-20 sm:w-24 text-center rounded-xl border border-gray-200 focus:border-[#780606]/40 focus:ring-2 focus:ring-[#780606]/30"
                  required
                />
                <Input
                  type="text"
                  inputMode="numeric"
                  name="travelMonth"
                  placeholder="MM"
                  maxLength={2}
                  value={form.travelMonth}
                  onChange={onChange}
                  className="w-20 sm:w-24 text-center rounded-xl border border-gray-200 focus:border-[#780606]/40 focus:ring-2 focus:ring-[#780606]/30"
                  required
                />
                <Input
                  type="text"
                  inputMode="numeric"
                  name="travelYear"
                  placeholder="YYYY"
                  maxLength={4}
                  value={form.travelYear}
                  onChange={onChange}
                  className="w-28 sm:w-32 text-center rounded-xl border border-gray-200 focus:border-[#780606]/40 focus:ring-2 focus:ring-[#780606]/30"
                  required
                />
              </div>
            </div>

          </div>
        </Section>


        {/* Personal Details (customized) */}
        <Section title="Personal Details">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label>Mother Name *</Label>
              <Input
                name="motherName"
                value={form.motherName}
                onChange={onChange}
                placeholder="Mother's full name"
                required
              />
            </div>

            <div>
              <Label>Father Name *</Label>
              <Input
                name="fatherName"
                value={form.fatherName}
                onChange={onChange}
                placeholder="Father's full name"
                required
              />
            </div>

            <div>
              <Label>Nationality *</Label>
              <Input
                name="nationality"
                value={form.nationality}
                onChange={onChange}
                placeholder="Nationality"
                required
              />
            </div>

            <div>
              <Label>Religion *</Label>
              <Input
                name="religion"
                value={form.religion}
                onChange={onChange}
                placeholder="Religion"
                required
              />
            </div>

            <div>
              <Label>Marital Status *</Label>
              <Input
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={onChange}
                placeholder="Single / Married"
                required
              />
            </div>

            <div>
              <Label>Spouse Name</Label>
              <Input
                name="spouseName"
                value={form.spouseName}
                onChange={onChange}
                placeholder="(optional)"
              />
            </div>

            <div>
              <Label>Sex *</Label>
              <div className="mt-2">
                <Radio name="sex" value="Male" label="Male" required />
                <Radio name="sex" value="Female" label="Female" required />
              </div>
            </div>

            <div>
              <Label>Qualification *</Label>
              <Input
                name="qualification"
                value={form.qualification}
                onChange={onChange}
                placeholder="Highest qualification"
                required
              />
            </div>

            <div>
              <Label>Do you hold more than one citizenship? *</Label>
              <div className="mt-2">
                <Radio
                  name="multiCitizenship"
                  value="Yes"
                  label="Yes"
                  required
                />
                <Radio
                  name="multiCitizenship"
                  value="No"
                  label="No"
                  required
                />
              </div>
            </div>

            <div>
              <Label>If yes, which countries?</Label>
              <Input
                name="multiCitizenshipCountries"
                value={form.multiCitizenshipCountries}
                onChange={onChange}
                placeholder="Country A, Country B"
                required={form.multiCitizenship === "Yes"}
              />
            </div>
          </div>
        </Section>

        {/* UAE Address */}
        <Section title="UAE Address">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <Label>Address Line 1 *</Label>
              <Input
                name="uaeAddr1"
                value={form.uaeAddr1}
                onChange={onChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label>Address Line 2</Label>
              <Input name="uaeAddr2" value={form.uaeAddr2} onChange={onChange} />
            </div>
            <div>
              <Label>PO Box</Label>
              <Input name="uaePO" value={form.uaePO} onChange={onChange} />
            </div>
            <div>
              <Label>City *</Label>
              <Input
                name="uaeCity"
                value={form.uaeCity}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </Section>

        {/* Home Country Address */}
        <Section title="Home Country Address">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <Label>Address Line 1 *</Label>
              <Input
                name="homeAddr1"
                value={form.homeAddr1}
                onChange={onChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label>Address Line 2</Label>
              <Input
                name="homeAddr2"
                value={form.homeAddr2}
                onChange={onChange}
              />
            </div>
            <div>
              <Label>PO Box</Label>
              <Input name="homePO" value={form.homePO} onChange={onChange} />
            </div>
            <div>
              <Label>City *</Label>
              <Input
                name="homeCity"
                value={form.homeCity}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <Label>Country *</Label>
              <Input
                name="homeCountry"
                value={form.homeCountry}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </Section>

        {/* UAE Employment Details */}
        <Section title="UAE Employment Details">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm sm:text-base">
            {/* Employer / Sponsor / School / College */}
            <div className="sm:col-span-2">
              <Label>Name of Employer / Sponsor / School / College *</Label>
              <Input
                name="employer"
                value={form.employer}
                onChange={onChange}
                placeholder="Enter employer / sponsor / school / college name"
                required
              />
            </div>

            {/* Full Address of Company */}
            <div className="sm:col-span-2">
              <Label>Full Address of Company *</Label>
              <Input
                name="employerAddress"
                value={form.employerAddress}
                onChange={onChange}
                placeholder="Building name, street, city, postal code"
                required
              />
            </div>

            {/* Phone Number of Company */}
            <div>
              <Label>Phone Number of Company *</Label>
              <Input
                name="employerPhone"
                value={form.employerPhone}
                onChange={onChange}
                placeholder="Company contact number"
                required
              />
            </div>

            {/* Destination Country & City */}
            <div>
              <Label>Destination Country & City *</Label>
              <Input
                name="destCity"
                value={form.destCity}
                onChange={onChange}
                placeholder="e.g., France – Paris"
                required
              />
            </div>

            {/* Travel Dates */}
            <div className="sm:col-span-2">
              <Label>Travel Dates *</Label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {/* From Section */}
                <div>
                  <span className="block text-sm text-gray-600 font-medium mb-2">
                    From:
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelFromDay"
                      placeholder="DD"
                      maxLength={2}
                      value={form.travelFromDay}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelFromMonth"
                      placeholder="MM"
                      maxLength={2}
                      value={form.travelFromMonth}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelFromYear"
                      placeholder="YYYY"
                      maxLength={4}
                      value={form.travelFromYear}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                  </div>
                </div>

                {/* To Section */}
                <div>
                  <span className="block text-sm text-gray-600 font-medium mb-2">
                    To:
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelToDay"
                      placeholder="DD"
                      maxLength={2}
                      value={form.travelToDay}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelToMonth"
                      placeholder="MM"
                      maxLength={2}
                      value={form.travelToMonth}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                    <Input
                      type="text"
                      inputMode="numeric"
                      name="travelToYear"
                      placeholder="YYYY"
                      maxLength={4}
                      value={form.travelToYear}
                      onChange={onChange}
                      className="text-center"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Name, Address & Phone */}
            <div className="sm:col-span-2">
              <Label>Hotel Name, Address & Phone Number *</Label>
              <Input
                name="hotelInfo"
                value={form.hotelInfo}
                onChange={onChange}
                placeholder="Hotel name, address, and contact number"
                required
              />
            </div>

            {/* Number of Days & Entry Type */}
            <div>
              <Label>Number of Days You Will Stay Within Europe *</Label>
              <Input
                name="daysInEurope"
                value={form.daysInEurope}
                onChange={onChange}
                placeholder="e.g., 15 days"
                required
              />
            </div>

            <div>
              <Label>Single or Multiple Entry (Single / Multiple) *</Label>
              <Input
                name="entryType"
                value={form.entryType}
                onChange={onChange}
                placeholder="Single / Multiple"
                required
              />
            </div>

            {/* Cost Covered By */}
            <div className="sm:col-span-2">
              <Label>Cost of Your Flight & Stay Will Be Covered By *</Label>
              <Input
                name="costCoveredBy"
                value={form.costCoveredBy}
                onChange={onChange}
                placeholder="Self / Sponsor / Company"
                required
              />
            </div>

            {/* Previously Traveled Countries */}
            <div className="sm:col-span-2">
              <Label>Previously Traveled Countries</Label>
              <Input
                name="prevCountries"
                value={form.prevCountries}
                onChange={onChange}
                placeholder="List previously visited countries"
              />
            </div>

            {/* Family / Relative in EU */}
            <div className="sm:col-span-2">
              <Label>Family / Relative in European Union (Full Details if Any)</Label>
              <Input
                name="euFamily"
                value={form.euFamily}
                onChange={onChange}
                placeholder="Full details: name, relation, address, contact"
              />
            </div>

            {/* Fingerprints & Travel Insurance */}
            <div>
              <Label>Fingerprints Collected Previously for Schengen Visa (YES / NO) *</Label>
              <Input
                name="fingerprintsEarlier"
                value={form.fingerprintsEarlier}
                onChange={onChange}
                placeholder="Yes / No"
                required
              />
            </div>

            <div>
              <Label>Travel Insurance (YES / NO) *</Label>
              <Input
                name="travelInsurance"
                value={form.travelInsurance}
                onChange={onChange}
                placeholder="Yes / No"
                required
              />
            </div>
          </div>
        </Section>


        {/* Declaration & Signature (unchanged) */}
        <Section title="Declaration & Signature">
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            I/We acknowledge that VisaVirtue processes visa applications only
            after all fees for VisaVirtue services have been paid in full. All
            applications are subject to the approval of the concerned
            Authority/Government.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label>Authorized Signatory Name *</Label>
              <Input
                name="signatoryName"
                value={form.signatoryName}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <Label>Company Name</Label>
              <Input
                name="companyName"
                value={form.companyName}
                onChange={onChange}
              />
            </div>

            <div className="sm:col-span-2">
              <Label>Date (DD/MM/YYYY) *</Label>
              <div className="grid grid-cols-1 sm:flex sm:flex-row gap-3 mt-2">
                <Input
                  type="text"
                  inputMode="numeric"
                  name="dateDD"
                  placeholder="DD"
                  maxLength={2}
                  value={form.dateDD}
                  onChange={onChange}
                  className="w-full sm:w-20 text-center"
                  required
                />
                <Input
                  type="text"
                  inputMode="numeric"
                  name="dateMM"
                  placeholder="MM"
                  maxLength={2}
                  value={form.dateMM}
                  onChange={onChange}
                  className="w-full sm:w-20 text-center"
                  required
                />
                <Input
                  type="text"
                  inputMode="numeric"
                  name="dateYYYY"
                  placeholder="YYYY"
                  maxLength={4}
                  value={form.dateYYYY}
                  onChange={onChange}
                  className="w-full sm:w-28 text-center"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit & Help Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(120,6,6,0.25)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-[#780606] px-8 py-3.5 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-70"
            >
              <FaCheckCircle />{" "}
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>

            <Link
              to="/contact"
              className="w-full sm:w-auto text-center rounded-xl bg-white border border-[#780606]/20 px-8 py-3.5 text-[#780606] font-semibold hover:bg-[#fef2f2] transition-all duration-300 leading-snug whitespace-normal break-words"
              style={{ wordBreak: "keep-all" }}
            >
              Need Help? Contact Us
            </Link>
          </div>
        </Section>
      </form>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-tr from-[#780606] to-[#4a0303] text-white text-center py-12 sm:py-16 px-4 sm:px-6 font-['Manrope']">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Almost There! Let’s Finalize Your Visa Application
          </h3>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">
            Once you’ve filled out your details, our experts will review your
            application to ensure everything is accurate and complete. Need
            assistance or have a question? Reach out — we’re here to help.
          </p>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,255,255,0.25)",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block rounded-full cursor-pointer"
          >
            <Link
              to="/contact"
              className="block bg-white text-[#780606] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#f4b02a] hover:text-[#4a0303] transition-all duration-300 shadow-lg"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4 sm:px-6"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center max-w-sm sm:max-w-md w-full border border-[#780606]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#780606]/10">
                <div
                  className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center text-white text-base sm:text-lg ${errorMessage ? "bg-red-600" : "bg-[#780606]"
                    }`}
                >
                  {errorMessage ? "!" : "✓"}
                </div>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-bold mb-2 ${errorMessage ? "text-red-600" : "text-[#780606]"
                  }`}
              >
                {errorMessage ? "Oops!" : "Thank You!"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {errorMessage
                  ? errorMessage
                  : "Your application has been successfully submitted!"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
