import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  updateDoc, 
  doc, 
  orderBy,
  deleteDoc
} from 'firebase/firestore';
import { 
  User as UserIcon, 
  ShieldCheck, 
  LogIn, 
  LogOut, 
  Bookmark, 
  MessageSquare, 
  Phone, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Send,
  Calendar
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useAuth } from '../context/AuthContext';
import { db, handleFirestoreError, OperationType } from '../firebase/config';
import { agentConfig, getWhatsAppConsultationUrl } from '../data/agentConfig';
import { allPlans, PlanItem } from '../data/plansData';

interface ConsultationRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  preferredContactMethod?: string;
  areaOfInterest: string;
  planName?: string;
  message?: string;
  status: 'pending' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';
  adminNotes?: string;
  createdAt: string;
  userId?: string;
}

interface SavedPlanRecord {
  id: string;
  planId: string;
  planName: string;
  category: string;
  savedAt: string;
  notes?: string;
}

export const PortalPage: React.FC<{ onOpenConsultation: (planName?: string) => void }> = ({ onOpenConsultation }) => {
  const { user, loading: authLoading, isAdmin, login, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<'consultations' | 'savedPlans'>('consultations');
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([]);
  const [savedPlans, setSavedPlans] = useState<SavedPlanRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [notesInput, setNotesInput] = useState('');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchPortalData = async () => {
    if (!user) return;
    setDataLoading(true);
    try {
      if (isAdmin) {
        // Advisor/Admin view: Fetch all consultations
        const q = query(collection(db, 'consultations'));
        const snap = await getDocs(q);
        const list: ConsultationRecord[] = [];
        snap.forEach((d) => {
          list.push({ id: d.id, ...d.data() } as ConsultationRecord);
        });
        // Sort in memory by date descending
        list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        setConsultations(list);
      } else {
        // Client view: Fetch only consultations for this user
        const q = query(
          collection(db, 'consultations'),
          where('userId', '==', user.uid)
        );
        const snap = await getDocs(q);
        const list: ConsultationRecord[] = [];
        snap.forEach((d) => {
          list.push({ id: d.id, ...d.data() } as ConsultationRecord);
        });
        list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        setConsultations(list);

        // Fetch user's saved plans
        const spRef = collection(db, 'users', user.uid, 'savedPlans');
        const spSnap = await getDocs(spRef);
        const spList: SavedPlanRecord[] = [];
        spSnap.forEach((d) => {
          spList.push({ id: d.id, ...d.data() } as SavedPlanRecord);
        });
        setSavedPlans(spList);
      }
    } catch (err) {
      console.error('Error fetching portal data:', err);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchPortalData();
    }
  }, [user, isAdmin]);

  const handleUpdateStatus = async (consultationId: string, newStatus: ConsultationRecord['status']) => {
    try {
      const docRef = doc(db, 'consultations', consultationId);
      await updateDoc(docRef, {
        status: newStatus,
        updatedAt: new Date().toISOString(),
      });
      setConsultations((prev) =>
        prev.map((c) => (c.id === consultationId ? { ...c, status: newStatus } : c))
      );
      setActionSuccess(`Consultation updated to ${newStatus}`);
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `consultations/${consultationId}`);
    }
  };

  const handleSaveNotes = async (consultationId: string) => {
    try {
      const docRef = doc(db, 'consultations', consultationId);
      await updateDoc(docRef, {
        adminNotes: notesInput,
        updatedAt: new Date().toISOString(),
      });
      setConsultations((prev) =>
        prev.map((c) => (c.id === consultationId ? { ...c, adminNotes: notesInput } : c))
      );
      setEditingNotesId(null);
      setActionSuccess('Notes saved successfully');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `consultations/${consultationId}`);
    }
  };

  const handleRemoveSavedPlan = async (planDocId: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'savedPlans', planDocId));
      setSavedPlans((prev) => prev.filter((p) => p.id !== planDocId));
      setActionSuccess('Plan bookmark removed');
      setTimeout(() => setActionSuccess(null), 3000);
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `users/${user.uid}/savedPlans/${planDocId}`);
    }
  };

  const filteredConsultations = consultations.filter((c) => {
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    const queryStr = searchFilter.toLowerCase();
    const matchesSearch = 
      !queryStr ||
      c.fullName.toLowerCase().includes(queryStr) ||
      c.phoneNumber.includes(queryStr) ||
      (c.planName && c.planName.toLowerCase().includes(queryStr)) ||
      (c.areaOfInterest && c.areaOfInterest.toLowerCase().includes(queryStr));
    return matchesStatus && matchesSearch;
  });

  if (authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-3">
        <RefreshCw className="w-8 h-8 text-[#004C97] animate-spin mx-auto" />
        <p className="text-xs text-slate-500">Checking secure authentication state...</p>
      </div>
    );
  }

  // Unauthenticated State: Prompt user to log in with Google
  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8 text-center">
        <Breadcrumbs items={[{ label: 'Client & Advisor Portal' }]} />

        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 shadow-lg max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004C97] to-[#102A43] text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8 text-[#C5A15B]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
              Client &amp; Advisor Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sign in securely with your Google Account to view your consultation requests, manage bookmarked plans, or access the advisor dashboard.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => login()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl shadow-xs transition-all hover:shadow"
            >
              {/* Google logo svg */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google Sign-In</span>
            </button>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 text-[11px] text-slate-500 border border-slate-200 text-left space-y-1">
            <p className="font-semibold text-slate-700">What is this portal for?</p>
            <p>&bull; <strong>Prospective Clients:</strong> Review submitted consultation requests and saved insurance schemes.</p>
            <p>&bull; <strong>Advisor ({agentConfig.adminEmail}):</strong> Manage, review, and follow up with client enquiries across Bhubaneswar.</p>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated State
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Client & Advisor Portal' }]} />

      {/* Action success alert */}
      {actionSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-3 rounded-xl flex items-center justify-between animate-in fade-in">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{actionSuccess}</span>
          </span>
          <button onClick={() => setActionSuccess(null)} className="text-emerald-700 hover:text-emerald-900 font-bold">
            &times;
          </button>
        </div>
      )}

      {/* User Status Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#004C97] text-white flex items-center justify-center font-bold text-lg">
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-[#102A43]">
                {user.displayName || 'Authorized User'}
              </h1>
              {isAdmin ? (
                <span className="bg-[#C5A15B] text-[#102A43] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Verified Advisor
                </span>
              ) : (
                <span className="bg-blue-50 text-[#004C97] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Client Account
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={fetchPortalData}
            disabled={dataLoading}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${dataLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={() => logout()}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('consultations')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'consultations'
                ? 'bg-[#004C97] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isAdmin ? `All Enquiries (${consultations.length})` : `My Enquiries (${consultations.length})`}
          </button>

          {!isAdmin && (
            <button
              type="button"
              onClick={() => setActiveTab('savedPlans')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === 'savedPlans'
                  ? 'bg-[#004C97] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Saved Plans ({savedPlans.length})
            </button>
          )}
        </div>

        {activeTab === 'consultations' && (
          <div className="flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs py-2 px-3 bg-white border border-slate-300 rounded-lg text-slate-800 outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        )}
      </div>

      {/* Tab 1: Consultations Tab */}
      {activeTab === 'consultations' && (
        <div className="space-y-4">
          {filteredConsultations.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredConsultations.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-[#102A43]">{item.fullName}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          item.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : item.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : item.status === 'in_progress'
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {item.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Submitted: {item.createdAt ? new Date(item.createdAt).toLocaleString('en-IN') : 'Recent'} &bull; Preferred Contact: {item.preferredContactMethod || 'WhatsApp'}
                      </p>
                    </div>

                    {/* Admin Status Dropdown */}
                    {isAdmin && (
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-500 font-medium">Update Status:</span>
                        <select
                          value={item.status}
                          onChange={(e) => handleUpdateStatus(item.id, e.target.value as any)}
                          className="text-xs py-1 px-2.5 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-800"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact</span>
                      <p className="font-bold text-slate-800">{item.phoneNumber}</p>
                      {item.email && <p className="text-slate-500 truncate">{item.email}</p>}
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Goal / Area</span>
                      <p className="font-bold text-[#004C97]">{item.areaOfInterest}</p>
                      {item.planName && <p className="text-slate-600 truncate">{item.planName}</p>}
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-end gap-2">
                      <a
                        href={`tel:${item.phoneNumber}`}
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-[#004C97] text-xs font-semibold rounded flex items-center gap-1 shadow-xs"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#004C97]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/91${item.phoneNumber.replace(/[\s-]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[#25D366] text-white text-xs font-bold rounded flex items-center gap-1 shadow-xs hover:bg-[#20bd5a]"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {item.message && (
                    <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700 block mb-0.5">Visitor Notes:</span>
                      <p>{item.message}</p>
                    </div>
                  )}

                  {/* Advisor Private Notes */}
                  {isAdmin && (
                    <div className="pt-2 border-t border-slate-100 text-xs">
                      {editingNotesId === item.id ? (
                        <div className="space-y-2">
                          <textarea
                            value={notesInput}
                            onChange={(e) => setNotesInput(e.target.value)}
                            placeholder="Add private follow-up notes (e.g. Discussed Jeevan Labh 21-yr term, meeting scheduled Saturday)..."
                            rows={2}
                            className="w-full text-xs p-2.5 border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-[#004C97]"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveNotes(item.id)}
                              className="px-3 py-1.5 bg-[#004C97] text-white text-xs font-bold rounded"
                            >
                              Save Notes
                            </button>
                            <button
                              onClick={() => setEditingNotesId(null)}
                              className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="text-slate-600 text-[11px]">
                            <strong>Advisor Notes:</strong> {item.adminNotes || 'No internal notes added yet.'}
                          </div>
                          <button
                            onClick={() => {
                              setEditingNotesId(item.id);
                              setNotesInput(item.adminNotes || '');
                            }}
                            className="text-[#004C97] font-semibold text-xs hover:underline"
                          >
                            {item.adminNotes ? 'Edit Notes' : '+ Add Note'}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <MessageSquare className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-sm text-[#102A43]">No consultation enquiries found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {isAdmin
                  ? 'There are currently no enquiries matching the selected status filter.'
                  : 'You have not submitted any consultation requests yet. Request a consultation below to get started.'}
              </p>
              {!isAdmin && (
                <button
                  type="button"
                  onClick={() => onOpenConsultation()}
                  className="px-4 py-2 bg-[#004C97] text-white rounded-lg text-xs font-bold hover:bg-[#003B75]"
                >
                  Book Your First Consultation
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Saved Plans (Client Portal) */}
      {!isAdmin && activeTab === 'savedPlans' && (
        <div className="space-y-4">
          {savedPlans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedPlans.map((sp) => (
                <div key={sp.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#004C97] bg-blue-50 px-2 py-0.5 rounded">
                      {sp.category}
                    </span>
                    <h3 className="font-bold text-sm text-[#102A43] mt-1.5">{sp.planName}</h3>
                    {sp.notes && <p className="text-xs text-slate-500 mt-1 line-clamp-2">{sp.notes}</p>}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleRemoveSavedPlan(sp.id)}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(sp.planName)}
                      className="text-xs font-bold text-[#004C97] hover:underline"
                    >
                      Enquire Now &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-sm text-[#102A43]">No bookmarked plans yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore our insurance catalogue and click &quot;Bookmark Plan&quot; on any plan to save it here for convenient reference.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
