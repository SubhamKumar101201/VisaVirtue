import { apiRequest } from "./queryClient";

// Visa Application API
export const visaApi = {
  // Application Management
  async createApplication(data: any) {
    const response = await apiRequest('POST', '/api/applications', data);
    return response.json();
  },

  async getApplication(id: string) {
    const response = await apiRequest('GET', `/api/applications/${id}`);
    return response.json();
  },

  async updateApplication(id: string, data: any) {
    const response = await apiRequest('PATCH', `/api/applications/${id}`, data);
    return response.json();
  },

  async updateApplicationStep(id: string, step: number, data: any) {
    const response = await apiRequest('PATCH', `/api/applications/${id}/step`, { step, data });
    return response.json();
  },

  async submitApplication(id: string) {
    const response = await apiRequest('POST', `/api/applications/${id}/submit`);
    return response.json();
  },

  async getUserApplications(userId: string) {
    const response = await apiRequest('GET', `/api/applications?userId=${userId}`);
    return response.json();
  },

  // Document Management
  async uploadDocument(applicationId: string, file: File, documentType: string, userId: string = 'default-user') {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('documentType', documentType);
    formData.append('userId', userId);

    const response = await fetch(`/api/applications/${applicationId}/documents`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Document upload failed');
    }

    return response.json();
  },

  async getApplicationDocuments(applicationId: string) {
    const response = await apiRequest('GET', `/api/applications/${applicationId}/documents`);
    return response.json();
  },

  async deleteDocument(documentId: string) {
    const response = await apiRequest('DELETE', `/api/documents/${documentId}`);
    return response.json();
  },

  // Payment Processing
  async processPayment(paymentData: any) {
    const response = await apiRequest('POST', '/api/payments', paymentData);
    return response.json();
  },

  async getPaymentStatus(paymentId: string) {
    const response = await apiRequest('GET', `/api/payments/${paymentId}`);
    return response.json();
  },

  // Dashboard & Statistics
  async getDashboardStats(userId?: string) {
    const url = userId ? `/api/dashboard/stats?userId=${userId}` : '/api/dashboard/stats';
    const response = await apiRequest('GET', url);
    return response.json();
  },
};

// Utility functions for visa processing
export const visaUtils = {
  // Country and visa type mappings
  getCountryName(countryCode: string): string {
    const countries: Record<string, string> = {
      US: 'United States',
      UK: 'United Kingdom', 
      CA: 'Canada',
      AU: 'Australia',
      DE: 'Germany',
      FR: 'France',
      IT: 'Italy',
      ES: 'Spain',
      JP: 'Japan',
      SG: 'Singapore',
      CN: 'China',
      IN: 'India',
      BR: 'Brazil',
      MX: 'Mexico',
    };
    return countries[countryCode] || countryCode;
  },

  getVisaTypeName(visaType: string): string {
    const types: Record<string, string> = {
      tourist: 'Tourist/Visitor',
      business: 'Business',
      student: 'Student',
      work: 'Work/Employment',
      transit: 'Transit',
      family: 'Family/Relative',
      medical: 'Medical Treatment',
      conference: 'Conference/Seminar',
    };
    return types[visaType] || visaType;
  },

  // Application status helpers
  getStatusDisplay(status: string): { text: string; color: string; icon: string } {
    const statusMap: Record<string, { text: string; color: string; icon: string }> = {
      draft: { text: 'Draft', color: 'gray', icon: 'file-text' },
      submitted: { text: 'Submitted', color: 'blue', icon: 'send' },
      under_review: { text: 'Under Review', color: 'yellow', icon: 'clock' },
      approved: { text: 'Approved', color: 'green', icon: 'check-circle' },
      rejected: { text: 'Rejected', color: 'red', icon: 'x-circle' },
      pending_documents: { text: 'Pending Documents', color: 'orange', icon: 'file-plus' },
    };
    return statusMap[status] || statusMap.draft;
  },

  // Processing time estimates (in business days)
  getProcessingTime(destinationCountry: string, visaType: string): string {
    const processingTimes: Record<string, Record<string, string>> = {
      US: {
        tourist: '7-15 days',
        business: '7-15 days',
        student: '30-60 days',
        work: '30-90 days',
      },
      UK: {
        tourist: '15-25 days',
        business: '15-25 days',
        student: '25-35 days',
        work: '60-120 days',
      },
      CA: {
        tourist: '10-20 days',
        business: '10-20 days',
        student: '20-40 days',
        work: '30-60 days',
      },
    };

    return processingTimes[destinationCountry]?.[visaType] || '7-21 days';
  },

  // Document validation
  validateDocument(file: File, documentType: string): { valid: boolean; error?: string } {
    const documentRequirements: Record<string, { maxSize: number; allowedTypes: string[] }> = {
      passport: { maxSize: 5 * 1024 * 1024, allowedTypes: ['pdf', 'jpg', 'jpeg', 'png'] },
      photo: { maxSize: 2 * 1024 * 1024, allowedTypes: ['jpg', 'jpeg', 'png'] },
      financial: { maxSize: 10 * 1024 * 1024, allowedTypes: ['pdf'] },
      additional: { maxSize: 5 * 1024 * 1024, allowedTypes: ['pdf', 'jpg', 'jpeg', 'png'] },
    };

    const requirements = documentRequirements[documentType] || documentRequirements.additional;
    
    // Check file size
    if (file.size > requirements.maxSize) {
      return {
        valid: false,
        error: `File size exceeds ${(requirements.maxSize / 1024 / 1024).toFixed(1)}MB limit`,
      };
    }

    // Check file type
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !requirements.allowedTypes.includes(fileExtension)) {
      return {
        valid: false,
        error: `Invalid file type. Allowed: ${requirements.allowedTypes.join(', ')}`,
      };
    }

    return { valid: true };
  },

  // Fee calculation
  calculateFees(destinationCountry: string, visaType: string, processingSpeed: string = 'standard'): {
    applicationFee: number;
    processingFee: number;
    serviceFee: number;
    total: number;
  } {
    const baseFees: Record<string, Record<string, number>> = {
      US: { tourist: 160, business: 160, student: 350, work: 190 },
      UK: { tourist: 95, business: 95, student: 363, work: 244 },
      CA: { tourist: 100, business: 100, student: 150, work: 155 },
    };

    const applicationFee = baseFees[destinationCountry]?.[visaType] || 100;
    let processingFee = 15;
    const serviceFee = 5;

    // Adjust processing fee based on speed
    if (processingSpeed === 'express') {
      processingFee += 50;
    } else if (processingSpeed === 'premium') {
      processingFee += 100;
    }

    return {
      applicationFee,
      processingFee,
      serviceFee,
      total: applicationFee + processingFee + serviceFee,
    };
  },

  // Form validation helpers
  validatePersonalInfo(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.firstName?.trim()) errors.push('First name is required');
    if (!data.lastName?.trim()) errors.push('Last name is required');
    if (!data.dateOfBirth) errors.push('Date of birth is required');
    if (!data.nationality?.trim()) errors.push('Nationality is required');
    if (!data.email?.trim()) errors.push('Email is required');
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Invalid email format');
    }
    if (!data.phone?.trim()) errors.push('Phone number is required');
    if (!data.passportNumber?.trim()) errors.push('Passport number is required');
    if (!data.passportExpiry) errors.push('Passport expiry date is required');

    // Check if passport is not expired
    if (data.passportExpiry && new Date(data.passportExpiry) <= new Date()) {
      errors.push('Passport has expired');
    }

    return { valid: errors.length === 0, errors };
  },

  validateTravelDetails(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.destinationCountry?.trim()) errors.push('Destination country is required');
    if (!data.visaType?.trim()) errors.push('Visa type is required');
    if (!data.departureDate) errors.push('Departure date is required');

    // Check if departure date is in the future
    if (data.departureDate && new Date(data.departureDate) <= new Date()) {
      errors.push('Departure date must be in the future');
    }

    // Check if return date is after departure date
    if (data.returnDate && data.departureDate && 
        new Date(data.returnDate) <= new Date(data.departureDate)) {
      errors.push('Return date must be after departure date');
    }

    return { valid: errors.length === 0, errors };
  },
};

// Error handling utilities
export class VisaApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'VisaApiError';
  }
}

export const handleVisaApiError = (error: any): VisaApiError => {
  if (error instanceof VisaApiError) {
    return error;
  }

  if (error.response) {
    const { status, data } = error.response;
    return new VisaApiError(
      data.message || 'API request failed',
      status,
      data.code,
      data
    );
  }

  if (error.request) {
    return new VisaApiError('Network error - please check your connection');
  }

  return new VisaApiError(error.message || 'An unexpected error occurred');
};
