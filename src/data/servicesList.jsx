import {
  FaPassport,
  FaRegCalendarCheck,
  FaBriefcase,
  FaClipboardList,
  FaFileAlt,
  FaHotel,
  FaPlaneDeparture,
  FaShieldAlt,
} from "react-icons/fa";

export const services = [
    {
      title: "Visa Form Filling",
      desc: "We simplify the visa application process by accurately filling your visa forms and ensuring every detail meets embassy standards.",
      icon: <FaPassport className="text-3xl text-[#780606]" />,
      image: "/visa-form-filling-service.png",
    },
    {
      title: "Appointment Booking",
      desc: "Get hassle-free bookings for embassy interviews, biometrics, and submissions — tailored to your schedule.",
      icon: <FaRegCalendarCheck className="text-3xl text-[#780606]" />,
      image: "/appointment-booking-service.png",
    },
    {
      title: "Work Permit",
      desc: "Assistance with obtaining valid work permits, documentation, and official approvals for your target country.",
      icon: <FaBriefcase className="text-3xl text-[#780606]" />,
      image: "/work-permit-service.png",
    },
    {
      title: "Permanent Residency (PR)",
      desc: "Comprehensive guidance through eligibility, documentation, and approval for your permanent residency application.",
      icon: <FaClipboardList className="text-3xl text-[#780606]" />,
      image: "/permanent-residency-service.png",
    },
    {
      title: "Document Arrangement",
      desc: "From notarization to translation — we ensure every document is perfectly organized for your visa process.",
      icon: <FaFileAlt className="text-3xl text-[#780606]" />,
      image: "/document-arrangement-service.png",
    },
    {
      title: "Hotel & Flight Booking",
      desc: "Get the best travel deals with secure and flexible flight and hotel bookings that fit your plan.",
      icon: <FaHotel className="text-3xl text-[#780606]" />,
      image: "/hotel-and-flight-booking-service.png",
    },
    {
      title: "Itinerary Planning",
      desc: "We plan your travel itinerary end-to-end — destinations, routes, stays, and activities — everything covered.",
      icon: <FaPlaneDeparture className="text-3xl text-[#780606]" />,
      image: "/itinerary-planning-service.png",
    },
    {
      title: "Travel Insurance",
      desc: "Stay protected with comprehensive insurance plans covering cancellations, health, and emergencies.",
      icon: <FaShieldAlt className="text-3xl text-[#780606]" />,
      image: "/travel-insurance-service.png",
    },
  ];