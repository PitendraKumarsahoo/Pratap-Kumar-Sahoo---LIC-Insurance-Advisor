/**
 * CENTRALIZED AGENT & BUSINESS CONFIGURATION
 * 
 * Configured for Pratap Kumar Sahoo - LIC Insurance Advisor, Bhubaneswar, Odisha
 */

export interface AgentConfig {
  agentName: string;
  isPlaceholderName: boolean;
  advisorPhoto: string;
  familyHeroPhoto: string;
  consultationPhoto: string;
  licenceNumber: string;
  isPlaceholderLicence: boolean;
  branchCode: string;
  divisionalOffice: string;
  primaryLocation: string;
  officeAddress: string;
  isPlaceholderAddress: boolean;
  phone: string;
  phoneDisplay: string;
  phoneTelLink: string;
  whatsappNumber: string;
  whatsappLink: string;
  instagramUrl: string;
  email: string;
  languagesSpoken: string[];
  isPlaceholderLanguages: boolean;
  experienceYearsText: string;
  isPlaceholderExperience: boolean;
  officialLicUrls: {
    portalHome: string;
    products: string;
    insurancePlans: string;
    policyStatus: string;
    premiumPayment: string;
  };
  adminEmail: string;
}

export const agentConfig: AgentConfig = {
  // Verified Agent Name provided by client
  agentName: "Pratap Kumar Sahoo",
  isPlaceholderName: false,

  // Generated High-Fidelity Local Assets
  advisorPhoto: "/src/assets/images/advisor_pratap_sahoo_1793012899726.jpg",
  familyHeroPhoto: "/src/assets/images/indian_family_protection_1793012901416.jpg",
  consultationPhoto: "/src/assets/images/advisor_consultation_office_1793012901737.jpg",

  licenceNumber: "[Verified Agent Licence / Agency Code - To be confirmed]",
  isPlaceholderLicence: true,

  branchCode: "[Bhubaneswar Branch Code - To be confirmed]",
  divisionalOffice: "LIC Bhubaneswar Divisional Office",

  primaryLocation: "Bhubaneswar, Odisha, India",
  officeAddress: "Bhubaneswar, Odisha, India",
  isPlaceholderAddress: false,

  // Real verified contact details
  phone: "+91 89086 77424",
  phoneDisplay: "+91 89086 77424",
  phoneTelLink: "tel:+918908677424",

  whatsappNumber: "+91 89086 77424",
  whatsappLink: "https://wa.me/918908677424",

  instagramUrl: "https://www.instagram.com/lic.bhubaneswar?dlrf=a3Z2NHdsejVuNHFv",

  email: "pitendrakumarsahoo84@gmail.com",

  languagesSpoken: ["Odia", "Hindi", "English"],
  isPlaceholderLanguages: false,

  experienceYearsText: "Professional Insurance Advisor in Bhubaneswar",
  isPlaceholderExperience: false,

  officialLicUrls: {
    portalHome: "https://www.licindia.in/",
    products: "https://www.licindia.in/en/web/guest/products",
    insurancePlans: "https://www.licindia.in/en/web/guest/insurance-plan",
    policyStatus: "https://licindia.in/en/web/guest/policy-status",
    premiumPayment: "https://www.licindia.in/",
  },

  adminEmail: "pitendrakumarsahoo84@gmail.com",
};

/**
 * Generate a pre-filled WhatsApp message URL
 */
export function getWhatsAppConsultationUrl(planName?: string, customMessage?: string): string {
  let message = "";
  if (planName) {
    message = `Hello Pratap Kumar Sahoo ji, I would like to know more about ${planName}. Please share the official details and explain the eligibility and features.`;
  } else if (customMessage) {
    message = customMessage;
  } else {
    message = "Hello Pratap Kumar Sahoo ji, I visited your website and would like to know more about LIC insurance plans. Please contact me.";
  }
  return `https://wa.me/918908677424?text=${encodeURIComponent(message)}`;
}
