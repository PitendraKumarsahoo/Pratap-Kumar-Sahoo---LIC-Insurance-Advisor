import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Phone, 
  Clock, 
  ShieldCheck,
  User,
  Mail
} from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { agentConfig, getWhatsAppConsultationUrl } from '../../data/agentConfig';

export interface ConsultationFormProps {
  initialPlanName?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialPlanName,
  onSuccess,
  compact = false,
}) => {
  const { user } = useAuth();

  const [fullName, setFullName] = useState(user?.displayName || '');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'phone' | 'whatsapp' | 'email'>('whatsapp');
  const [areaOfInterest, setAreaOfInterest] = useState<string>(
    initialPlanName ? `Plan Enquiry: ${initialPlanName}` : 'Family Protection'
  );
  const [planName, setPlanName] = useState(initialPlanName || '');
  const [preferredLanguage, setPreferredLanguage] = useState('Odia / English');
  const [message, setMessage] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const areaOptions = [
    'Family Protection',
    'Savings and Long-Term Planning',
    'Child-Focused Planning',
    'Retirement Planning',
    'Existing Policy Servicing',
    'Claim Procedure',
    'General Enquiry',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit telephone number.');
      return;
    }
    if (!consentGiven) {
      setErrorMessage('Please check the consent box to allow the advisor to contact you.');
      return;
    }

    setLoading(true);

    const payload: Record<string, any> = {
      fullName: fullName.trim(),
      phoneNumber: cleanPhone,
      preferredContactMethod,
      areaOfInterest,
      preferredLanguage,
      consentGiven: true,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (email.trim()) {
      payload.email = email.trim();
    }
    if (planName.trim()) {
      payload.planName = planName.trim();
    }
    if (message.trim()) {
      payload.message = message.trim();
    }
    if (user?.uid) {
      payload.userId = user.uid;
    }

    try {
      const docRef = await addDoc(collection(db, 'consultations'), payload);
      setSubmissionId(docRef.id);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.warn('Consultation submission error to Firestore:', err);
      // Fallback: If network issue or permission issue, provide immediate WhatsApp dispatch
      setErrorMessage('We could not save your submission to the server, but you can instantly forward your request directly via WhatsApp below.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendViaWhatsAppFallback = () => {
    const text = `Hello, I would like to request an insurance consultation.\n*Name:* ${fullName || 'Visitor'}\n*Phone:* ${phoneNumber || 'Not provided'}\n*Area of Interest:* ${areaOfInterest}${planName ? `\n*Plan:* ${planName}` : ''}${message ? `\n*Message:* ${message}` : ''}`;
    window.open(`https://wa.me/918908677424?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 sm:p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#102A43]">Consultation Request Received</h3>
          <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
            Thank you, <strong className="text-slate-800">{fullName}</strong>. Your consultation enquiry has been recorded securely. Our advisor will reach out to you via your preferred channel ({preferredContactMethod}).
          </p>
          {submissionId && (
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              Reference ID: {submissionId.slice(0, 8)}...
            </p>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleSendViaWhatsAppFallback}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open in WhatsApp Now</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSubmissionId(null);
            }}
            className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-300 text-xs font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errorMessage && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
          <div className="space-y-1">
            <p>{errorMessage}</p>
            <button
              type="button"
              onClick={handleSendViaWhatsAppFallback}
              className="text-[#004C97] font-bold underline block mt-1"
            >
              Click here to send enquiry directly via WhatsApp &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & Phone Number */}
      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rajesh Kumar Mohapatra"
              className="w-full text-xs pl-8 pr-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
            />
            <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full text-xs pl-8 pr-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
            />
            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>
      </div>

      {/* Row 2: Email (Optional) & Preferred Contact Method */}
      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full text-xs pl-8 pr-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
            />
            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Preferred Contact Method
          </label>
          <select
            value={preferredContactMethod}
            onChange={(e) => setPreferredContactMethod(e.target.value as any)}
            className="w-full text-xs px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
          >
            <option value="whatsapp">WhatsApp Message</option>
            <option value="phone">Telephone Call</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      {/* Row 3: Area of Interest & Plan Name */}
      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Area of Interest <span className="text-red-500">*</span>
          </label>
          <select
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            className="w-full text-xs px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
          >
            {areaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102A43] mb-1">
            Specific LIC Plan <span className="text-slate-400 font-normal">(if decided)</span>
          </label>
          <input
            type="text"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="e.g. LIC's Jeevan Labh, Jeevan Utsav..."
            className="w-full text-xs px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
          >
          </input>
        </div>
      </div>

      {/* Row 4: Preferred Language & Notes */}
      <div>
        <label className="block text-xs font-semibold text-[#102A43] mb-1">
          Brief Questions or Goals <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={compact ? 2 : 3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your family savings goals, preferred investment horizon, or any existing policy questions..."
          className="w-full text-xs px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            className="mt-0.5 rounded border-slate-300 text-[#004C97] focus:ring-[#004C97] w-4 h-4 shrink-0"
          />
          <span className="text-[11px] text-slate-600 leading-tight">
            I consent to being contacted by the LIC insurance advisor via phone, WhatsApp, or email for the purpose of discussing official insurance options and receiving requested policy guidance. My data will not be shared with third parties.
          </span>
        </label>
      </div>

      {/* Buttons: Submit & WhatsApp Direct */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:flex-1 py-3 px-4 bg-[#004C97] hover:bg-[#003B75] text-white text-xs font-bold rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <span>Recording Enquiry...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleSendViaWhatsAppFallback}
          className="w-full sm:w-auto py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat via WhatsApp</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#004C97]" />
          <span>No spam guarantee</span>
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Response within 24 hours</span>
        </span>
      </div>
    </form>
  );
};
