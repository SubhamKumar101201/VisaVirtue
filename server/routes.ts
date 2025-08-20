import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { personalInfoSchema, travelDetailsSchema, paymentSchema, insertVisaApplicationSchema } from "@shared/schema";

// Configure multer for file uploads
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const upload = multer({
  dest: uploadsDir,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPG, PNG, and PDF files are allowed.'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Dashboard statistics
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      const stats = await storage.getDashboardStats(userId);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard statistics" });
    }
  });

  // Get all applications for a user
  app.get("/api/applications", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const applications = await storage.getApplicationsByUserId(userId);
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  // Get a specific application
  app.get("/api/applications/:id", async (req, res) => {
    try {
      const application = await storage.getApplication(req.params.id);
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(application);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch application" });
    }
  });

  // Create a new application
  app.post("/api/applications", async (req, res) => {
    try {
      const applicationData = insertVisaApplicationSchema.parse(req.body);
      const application = await storage.createApplication(applicationData);
      res.status(201).json(application);
    } catch (error: any) {
      res.status(400).json({ message: "Invalid application data", error: error.message });
    }
  });

  // Update application step
  app.patch("/api/applications/:id/step", async (req, res) => {
    try {
      const { step, data } = req.body;
      const application = await storage.getApplication(req.params.id);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }

      let validatedData: any = {};

      // Validate data based on step
      switch (step) {
        case 1:
          validatedData = personalInfoSchema.parse(data);
          break;
        case 2:
          validatedData = travelDetailsSchema.parse(data);
          break;
        default:
          validatedData = data;
      }

      const updated = await storage.updateApplication(req.params.id, {
        ...validatedData,
        currentStep: step,
      });

      res.json(updated);
    } catch (error: any) {
      res.status(400).json({ message: "Invalid step data", error: error.message });
    }
  });

  // Submit application
  app.post("/api/applications/:id/submit", async (req, res) => {
    try {
      const application = await storage.getApplication(req.params.id);
      
      if (!application) {
        return res.status(404).json({ message: "Application not found" });
      }

      const updated = await storage.updateApplication(req.params.id, {
        status: "submitted",
        submittedAt: new Date(),
        currentStep: 5,
      });

      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit application" });
    }
  });

  // Upload documents
  app.post("/api/applications/:id/documents", upload.single('document'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const { documentType } = req.body;
      const applicationId = req.params.id;

      const document = await storage.createDocument({
        applicationId,
        userId: req.body.userId || "default-user",
        documentType,
        fileName: req.file.filename,
        originalName: req.file.originalname,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        filePath: req.file.path,
        verified: false,
      });

      res.status(201).json(document);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to upload document", error: error.message });
    }
  });

  // Get documents for an application
  app.get("/api/applications/:id/documents", async (req, res) => {
    try {
      const documents = await storage.getDocumentsByApplicationId(req.params.id);
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documents" });
    }
  });

  // Delete document
  app.delete("/api/documents/:id", async (req, res) => {
    try {
      const document = await storage.getDocument(req.params.id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      // Delete file from disk
      if (fs.existsSync(document.filePath)) {
        fs.unlinkSync(document.filePath);
      }

      const deleted = await storage.deleteDocument(req.params.id);
      if (deleted) {
        res.json({ message: "Document deleted successfully" });
      } else {
        res.status(500).json({ message: "Failed to delete document" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete document" });
    }
  });

  // Process payment
  app.post("/api/payments", async (req, res) => {
    try {
      const paymentData = req.body;
      
      // Validate payment data
      const validatedPayment = paymentSchema.parse(paymentData);

      // Create payment record
      const payment = await storage.createPayment({
        applicationId: paymentData.applicationId,
        userId: paymentData.userId,
        amount: "160.00",
        currency: "USD",
        paymentMethod: validatedPayment.paymentMethod,
        paymentStatus: "pending",
        paymentData: {
          cardholderName: validatedPayment.cardholderName,
          // Note: In production, never store actual card details
          lastFourDigits: validatedPayment.cardNumber.slice(-4),
        },
      });

      // Simulate payment processing
      setTimeout(async () => {
        try {
          await storage.updatePayment(payment.id, {
            paymentStatus: "completed",
            transactionId: `TXN_${Date.now()}`,
            processedAt: new Date(),
          });

          // Update application status
          await storage.updateApplication(paymentData.applicationId, {
            status: "under_review",
          });
        } catch (error) {
          console.error("Payment processing error:", error);
        }
      }, 2000);

      res.status(201).json({ 
        paymentId: payment.id,
        status: "processing",
        message: "Payment is being processed" 
      });
    } catch (error: any) {
      res.status(400).json({ message: "Payment processing failed", error: error.message });
    }
  });

  // Get payment status
  app.get("/api/payments/:id", async (req, res) => {
    try {
      const payment = await storage.getPayment(req.params.id);
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.json(payment);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch payment" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
