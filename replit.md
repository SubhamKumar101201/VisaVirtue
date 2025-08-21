# VisaVirtue - Visa Application Platform

## Overview

VisaVirtue is a comprehensive visa application management platform that streamlines the entire visa application process. The system provides an intuitive multi-step wizard interface for users to submit visa applications, upload required documents, process payments, and track application status. Built with a modern tech stack, it offers a seamless experience for both applicants and administrators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with dedicated routes for applications, documents, and payments
- **File Handling**: Multer middleware for multipart form uploads with file type and size validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)

### Multi-Step Application Wizard
The application process is broken into five distinct steps:
1. **Personal Information**: User details and passport information
2. **Travel Details**: Destination, visa type, and travel dates
3. **Document Upload**: Required document submission with file validation
4. **Payment Processing**: Secure payment handling
5. **Review & Submit**: Final review before application submission

### Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Design**: Comprehensive database schema including users, visa applications, documents, and payments tables
- **Database Configuration**: Configured for PostgreSQL with Neon Database serverless driver
- **Validation**: Zod schemas for runtime type checking and validation

### File Upload System
- **Upload Management**: Custom file upload component with drag-and-drop support
- **File Validation**: Strict validation for file types (PDF, JPG, PNG) and size limits (5MB)
- **Progress Tracking**: Real-time upload progress indication
- **Error Handling**: Comprehensive error messaging for upload failures

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Management**: User creation and authentication system ready for implementation
- **Security**: Secure session handling with proper cookie configuration

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle Kit**: Database migration and schema management tool

### UI Components & Styling
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant API for component styling

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema declaration and validation library
- **Hookform Resolvers**: Zod integration for React Hook Form

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking throughout the application
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### File Processing
- **Multer**: Node.js middleware for handling multipart/form-data for file uploads
- **File Type Validation**: Built-in validation for document uploads

### Date & Time
- **Date-fns**: Modern JavaScript date utility library for date formatting and manipulation

The architecture emphasizes type safety, performance, and user experience while maintaining flexibility for future enhancements and integrations.