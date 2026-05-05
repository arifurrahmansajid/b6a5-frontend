# Ummah Care Frontend

[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748)](https://prisma.io/)

A modern, full-stack humanitarian platform connecting Muslim communities worldwide. Built with Next.js 16, React 19, and TypeScript for optimal performance and developer experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

**Ummah Care** is a comprehensive humanitarian platform designed to strengthen Muslim communities through technology. The platform enables seamless coordination between individuals in need, donors, volunteers, and organizations, creating a trusted network for humanitarian assistance.

### Core Mission

To empower the Ummah by providing a transparent, secure, and efficient platform where help requests are fulfilled through community-driven collaboration.

## ✨ Features

### 🔐 Multi-Role Authentication System

- **User**: Request help and connect with supporters
- **Donor**: Provide financial aid with transparent tracking
- **Volunteer**: Offer skills and time for direct impact
- **Organization**: Manage campaigns and coordinate large-scale efforts

### 📋 Smart Help Request System

- Location-based filtering and urgency prioritization
- Category-based organization (Medical, Financial, Education, etc.)
- Real-time status tracking and updates

### 🤝 Structured Response Management

- Multi-type responses (Donations, Volunteering, Organization Support)
- Secure messaging and coordination tools
- Progress tracking and completion verification

### 🛡️ Trust & Verification

- User verification system with ratings and reviews
- Transparent impact tracking and reporting
- Secure payment processing and donation management

### 📊 Analytics & Reporting

- Real-time dashboard for all user roles
- Impact metrics and community statistics
- Comprehensive reporting tools

## 🏗️ Architecture

### Frontend Architecture (This Repository)

```
Next.js 16 App Router
├── Public Routes (Authentication, Landing, About)
├── Protected Routes (Role-based Dashboards)
├── Component Library (shadcn/ui + Custom Components)
├── State Management (TanStack Query + React Context)
└── API Integration (RESTful + Real-time Updates)
```

### Backend Architecture (Separate Repository)

```
Node.js + Express
├── RESTful API Endpoints
├── Prisma ORM with PostgreSQL
├── JWT Authentication
├── Real-time WebSocket Support
└── File Upload & Processing
```

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query + React Context
- **Forms**: TanStack React Form + Zod Validation
- **UI Components**: Radix UI + Lucide Icons
- **Charts**: Recharts
- **Date Handling**: date-fns

### Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Type Checking**: TypeScript
- **Testing**: Jest + React Testing Library

## 📁 Project Structure

```
ummah-care-frontend/
├── public/                          # Static assets
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── actions/                     # Server actions (Next.js)
│   │   ├── auth-actions.ts         # Authentication actions
│   │   ├── donate.action.ts        # Donation handling
│   │   ├── message.action.ts       # Messaging system
│   │   ├── request.action.ts       # Help request management
│   │   └── stats.action.ts         # Analytics and statistics
│   ├── app/                        # Next.js App Router
│   │   ├── (public-layout)/        # Public pages
│   │   │   ├── about/              # About page
│   │   │   ├── contact/            # Contact page
│   │   │   ├── page.tsx            # Landing page
│   │   │   └── requests/           # Public request viewing
│   │   ├── (protected-layout)/     # Protected pages (role-based)
│   │   │   ├── (admin)/            # Admin dashboard
│   │   │   ├── (donor)/            # Donor dashboard
│   │   │   ├── (organization)/     # Organization dashboard
│   │   │   ├── (user)/             # User dashboard
│   │   │   └── (volunteer)/        # Volunteer dashboard
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   ├── error.tsx               # Error boundary
│   │   └── not-found.tsx           # 404 page
│   ├── components/                 # Reusable components
│   │   ├── layout/                 # Layout components
│   │   ├── modules/                # Page-specific modules
│   │   │   ├── home/               # Home page components
│   │   │   ├── about/              # About page components
│   │   │   └── auth/               # Authentication components
│   │   ├── shared/                 # Shared components
│   │   │   ├── typography/         # Typography components
│   │   │   └── ui/                 # UI primitives
│   │   └── ui/                     # shadcn/ui components
│   ├── constants/                  # Application constants
│   │   ├── donate.const.ts         # Donation constants
│   │   ├── pagination-option.const.ts
│   │   ├── payment.const.ts        # Payment configurations
│   │   └── user.const.ts           # User-related constants
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-async-form-submit.tsx
│   │   ├── use-data-table.tsx      # Table management
│   │   ├── use-debounce.ts         # Debounce utility
│   │   ├── use-fetch.ts            # Data fetching
│   │   └── use-session.ts          # Session management
│   ├── lib/                        # Utility libraries
│   │   ├── http-client.ts          # API client
│   │   └── utils.ts                # General utilities
│   ├── providers/                  # React context providers
│   │   ├── providers.tsx           # Main provider
│   │   ├── react-query-provider.tsx
│   │   └── theme-provider.tsx      # Theme management
│   ├── routes/                     # Route definitions
│   │   ├── admin.route.ts          # Admin routes
│   │   ├── common.route.ts         # Shared routes
│   │   ├── donor.route.ts          # Donor routes
│   │   └── volunteer.route.ts      # Volunteer routes
│   ├── services/                   # External service integrations
│   │   └── auth-service.ts         # Authentication service
│   ├── types/                      # TypeScript type definitions
│   │   ├── api-type.ts             # API response types
│   │   ├── auth-type.ts            # Authentication types
│   │   └── index.ts                # Main type exports
│   └── utils/                      # Utility functions
├── .env.example                    # Environment variables template
├── components.json                 # shadcn/ui configuration
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.17 or higher
- **pnpm**: Version 8.0 or higher (recommended)
- **Git**: Version control system

