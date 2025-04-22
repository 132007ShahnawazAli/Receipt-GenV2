# Receipt Generator Application

A professional web application for generating branded receipt emails with a multi-template system.

## Overview

This receipt generator allows users to create and send branded receipts through email. It features a subscription-based model with monthly and lifetime payment options, a dashboard for managing receipt generation, and a flexible template system that supports multiple brands with customized receipt templates.

## Features

- **User Authentication**: Secure login and signup with NextAuth
- **Subscription Management**: Monthly and lifetime subscription options via Stripe
- **Dynamic Dashboard**: View available templates and statistics
- **Multi-brand Templates**: Each brand has its own customized template
- **Dynamic Form Generation**: Forms adapt to each template's required fields
- **Email Delivery**: Receipts are sent to the user's email
- **Mobile Responsive**: Works on all device sizes

## Template Management System

The application uses a template management system to handle different brand templates. Each template defines:

1. The form fields required for that brand
2. The email subject format
3. The HTML structure of the receipt email

### Adding a New Template

To add a new brand template:

1. Add the brand logo to the `public/assets/brand-logos/` directory
2. Add the template configuration to `src/lib/templates/index.js`
3. Define the form fields, email subject, and HTML generation function


## Setup

### Prerequisites

- Node.js 16+ 
- MongoDB database
- Stripe account for payments
- Email service for sending receipts
