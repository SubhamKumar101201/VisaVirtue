import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, jsonb, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const visaApplications = pgTable("visa_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  applicationNumber: text("application_number").notNull().unique(),
  
  // Personal Information
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  nationality: text("nationality").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  passportNumber: text("passport_number").notNull(),
  passportExpiry: text("passport_expiry").notNull(),
  
  // Travel Details
  destinationCountry: text("destination_country").notNull(),
  visaType: text("visa_type").notNull(),
  departureDate: text("departure_date").notNull(),
  returnDate: text("return_date"),
  visitPurpose: text("visit_purpose"),
  accommodationType: text("accommodation_type"),
  flightConfirmation: text("flight_confirmation"),
  
  // Application Status
  status: text("status").default("draft").notNull(), // draft, submitted, under_review, approved, rejected
  currentStep: integer("current_step").default(1).notNull(),
  submittedAt: timestamp("submitted_at"),
  reviewedAt: timestamp("reviewed_at"),
  completedAt: timestamp("completed_at"),
  
  // Additional Data
  documents: jsonb("documents").default([]),
  notes: text("notes"),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  applicationId: varchar("application_id").references(() => visaApplications.id),
  userId: varchar("user_id").references(() => users.id),
  
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").default("USD").notNull(),
  
  paymentMethod: text("payment_method").notNull(), // card, paypal
  paymentStatus: text("payment_status").default("pending").notNull(), // pending, completed, failed, refunded
  
  // Payment Details (encrypted in production)
  transactionId: text("transaction_id"),
  paymentData: jsonb("payment_data"), // Store encrypted payment details
  
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const documents = pgTable("documents", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  applicationId: varchar("application_id").references(() => visaApplications.id),
  userId: varchar("user_id").references(() => users.id),
  
  documentType: text("document_type").notNull(), // passport, photo, financial, additional
  fileName: text("file_name").notNull(),
  originalName: text("original_name").notNull(),
  fileSize: integer("file_size").notNull(),
  mimeType: text("mime_type").notNull(),
  filePath: text("file_path").notNull(),
  
  verified: boolean("verified").default(false),
  verifiedAt: timestamp("verified_at"),
  verifiedBy: text("verified_by"),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertVisaApplicationSchema = createInsertSchema(visaApplications).omit({
  id: true,
  applicationNumber: true,
  createdAt: true,
  updatedAt: true,
  submittedAt: true,
  reviewedAt: true,
  completedAt: true,
});

export const insertPaymentSchema = createInsertSchema(payments).omit({
  id: true,
  createdAt: true,
  processedAt: true,
});

export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
  createdAt: true,
  verifiedAt: true,
  verifiedBy: true,
});

// Personal Info Step Schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  passportNumber: z.string().min(1, "Passport number is required"),
  passportExpiry: z.string().min(1, "Passport expiry is required"),
});

// Travel Details Step Schema
export const travelDetailsSchema = z.object({
  destinationCountry: z.string().min(1, "Destination country is required"),
  visaType: z.string().min(1, "Visa type is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  returnDate: z.string().optional(),
  visitPurpose: z.string().optional(),
  accommodationType: z.string().optional(),
  flightConfirmation: z.string().optional(),
});

// Payment Schema
export const paymentSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits"),
  cardholderName: z.string().min(1, "Cardholder name is required"),
  paymentMethod: z.enum(["card", "paypal"]),
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type VisaApplication = typeof visaApplications.$inferSelect;
export type InsertVisaApplication = z.infer<typeof insertVisaApplicationSchema>;
export type Payment = typeof payments.$inferSelect;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type Document = typeof documents.$inferSelect;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type TravelDetails = z.infer<typeof travelDetailsSchema>;
export type PaymentInfo = z.infer<typeof paymentSchema>;
