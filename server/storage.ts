import { type User, type InsertUser, type VisaApplication, type InsertVisaApplication, type Payment, type InsertPayment, type Document, type InsertDocument } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Visa Application operations
  getApplication(id: string): Promise<VisaApplication | undefined>;
  getApplicationsByUserId(userId: string): Promise<VisaApplication[]>;
  createApplication(application: InsertVisaApplication): Promise<VisaApplication>;
  updateApplication(id: string, application: Partial<VisaApplication>): Promise<VisaApplication | undefined>;
  getApplicationByNumber(applicationNumber: string): Promise<VisaApplication | undefined>;

  // Payment operations
  getPayment(id: string): Promise<Payment | undefined>;
  getPaymentsByApplicationId(applicationId: string): Promise<Payment[]>;
  createPayment(payment: InsertPayment): Promise<Payment>;
  updatePayment(id: string, payment: Partial<Payment>): Promise<Payment | undefined>;

  // Document operations
  getDocument(id: string): Promise<Document | undefined>;
  getDocumentsByApplicationId(applicationId: string): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;
  updateDocument(id: string, document: Partial<Document>): Promise<Document | undefined>;
  deleteDocument(id: string): Promise<boolean>;

  // Dashboard statistics
  getDashboardStats(userId?: string): Promise<{
    totalApplications: number;
    pendingApplications: number;
    approvedApplications: number;
    successRate: number;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private applications: Map<string, VisaApplication>;
  private payments: Map<string, Payment>;
  private documents: Map<string, Document>;

  constructor() {
    this.users = new Map();
    this.applications = new Map();
    this.payments = new Map();
    this.documents = new Map();
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      firstName: insertUser.firstName || null,
      lastName: insertUser.lastName || null,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Visa Application operations
  async getApplication(id: string): Promise<VisaApplication | undefined> {
    return this.applications.get(id);
  }

  async getApplicationsByUserId(userId: string): Promise<VisaApplication[]> {
    return Array.from(this.applications.values()).filter(app => app.userId === userId);
  }

  async createApplication(insertApplication: InsertVisaApplication): Promise<VisaApplication> {
    const id = randomUUID();
    const applicationNumber = `APP-${new Date().getFullYear()}-${String(this.applications.size + 1).padStart(3, '0')}`;
    
    const application: VisaApplication = {
      ...insertApplication,
      id,
      applicationNumber,
      userId: insertApplication.userId || null,
      documents: insertApplication.documents || [],
      status: insertApplication.status || 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
      submittedAt: null,
      reviewedAt: null,
      completedAt: null,
    };
    
    this.applications.set(id, application);
    return application;
  }

  async updateApplication(id: string, updateData: Partial<VisaApplication>): Promise<VisaApplication | undefined> {
    const existing = this.applications.get(id);
    if (!existing) return undefined;

    const updated: VisaApplication = {
      ...existing,
      ...updateData,
      updatedAt: new Date(),
    };
    
    this.applications.set(id, updated);
    return updated;
  }

  async getApplicationByNumber(applicationNumber: string): Promise<VisaApplication | undefined> {
    return Array.from(this.applications.values()).find(app => app.applicationNumber === applicationNumber);
  }

  // Payment operations
  async getPayment(id: string): Promise<Payment | undefined> {
    return this.payments.get(id);
  }

  async getPaymentsByApplicationId(applicationId: string): Promise<Payment[]> {
    return Array.from(this.payments.values()).filter(payment => payment.applicationId === applicationId);
  }

  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = {
      ...insertPayment,
      id,
      userId: insertPayment.userId || null,
      applicationId: insertPayment.applicationId || null,
      currency: insertPayment.currency || 'USD',
      paymentStatus: insertPayment.paymentStatus || 'pending',
      transactionId: insertPayment.transactionId || null,
      createdAt: new Date(),
      processedAt: null,
    };
    
    this.payments.set(id, payment);
    return payment;
  }

  async updatePayment(id: string, updateData: Partial<Payment>): Promise<Payment | undefined> {
    const existing = this.payments.get(id);
    if (!existing) return undefined;

    const updated: Payment = {
      ...existing,
      ...updateData,
    };
    
    this.payments.set(id, updated);
    return updated;
  }

  // Document operations
  async getDocument(id: string): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async getDocumentsByApplicationId(applicationId: string): Promise<Document[]> {
    return Array.from(this.documents.values()).filter(doc => doc.applicationId === applicationId);
  }

  async createDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = randomUUID();
    const document: Document = {
      ...insertDocument,
      id,
      userId: insertDocument.userId || null,
      applicationId: insertDocument.applicationId || null,
      verified: insertDocument.verified || false,
      createdAt: new Date(),
      verifiedAt: null,
      verifiedBy: null,
    };
    
    this.documents.set(id, document);
    return document;
  }

  async updateDocument(id: string, updateData: Partial<Document>): Promise<Document | undefined> {
    const existing = this.documents.get(id);
    if (!existing) return undefined;

    const updated: Document = {
      ...existing,
      ...updateData,
    };
    
    this.documents.set(id, updated);
    return updated;
  }

  async deleteDocument(id: string): Promise<boolean> {
    return this.documents.delete(id);
  }

  // Dashboard statistics
  async getDashboardStats(userId?: string): Promise<{
    totalApplications: number;
    pendingApplications: number;
    approvedApplications: number;
    successRate: number;
  }> {
    let applications = Array.from(this.applications.values());
    
    if (userId) {
      applications = applications.filter(app => app.userId === userId);
    }

    const totalApplications = applications.length;
    const pendingApplications = applications.filter(app => app.status === 'under_review').length;
    const approvedApplications = applications.filter(app => app.status === 'approved').length;
    const successRate = totalApplications > 0 ? Math.round((approvedApplications / totalApplications) * 100) : 0;

    return {
      totalApplications,
      pendingApplications,
      approvedApplications,
      successRate,
    };
  }
}

export const storage = new MemStorage();
