# Full Stack Next.js Blog Platform

## Project Overview
A secure blog platform with custom authentication, modern UI components, and full-stack implementation.

**UI Reference**: [Beautiful Blogscape](https://beautiful-blogscape.vercel.app/)  
**Time Limit**: 3 hours ⏳

---

## Architecture Overview

### Frontend (Next.js + TypeScript)
- **UI Framework**: Next.js 15 with App Router
- **Component Library**: shadcn/ui
- **State Management**: 
  - Local: Zustand/React Context
  - Server State: React Query (optional)
- **Type Safety**: TypeScript

### Backend (Next.js API Routes / Express.js)
- **Database**: PostgreSQL
- **API Validation**: Zod
- **Authentication**: Custom JWT implementation
- **Password Security**: bcrypt

---

## Implementation Requirements

### Frontend Implementation

#### 1. User Interface
- **Required shadcn/ui Components** (minimum 3):
  - Authentication forms
  - Blog post cards
  - Comment sections
  
#### 2. Pages & Routes
- `/` - Home/Blog listing (Index page)
- `/login` - User authentication
- `/post/:id` - Individual post details
- `/create` - Create new post (protected)
- `/edit/:id` - Edit existing post (protected)
- `*` - 404 Not Found page

#### 3. State Management
- Authentication state
- Blog post data
- Form states
- Loading states
- Error handling

#### 4. Client-side Security
- Protected route handling
- Auth token management
- Form validation

---

### Backend Implementation

#### 1. Authentication System
- **JWT Implementation**:
  - Token generation
  - Token validation
  - Refresh token mechanism

  
#### 2. API Endpoints
- **Auth Routes**:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  
- **Blog Routes**:
  - `GET /api/posts`
  - `GET /api/posts/[id]`
  - `POST /api/posts` (protected)
  - `PUT /api/posts/[id]` (protected)
  - `DELETE /api/posts/[id]` (protected)
  
- **Comment Routes**:
  - `GET /api/posts/[id]/comments`
  - `POST /api/posts/[id]/comments` (protected)
  - `DELETE /api/posts/[id]/comments/[commentId]` (protected)

#### 3. Database Schema
- **Users Table**:
  - id (UUID)
  - email
  - hashed_password
  - created_at
  
- **Posts Table**:
  - id (UUID)
  - title
  - content
  - author_id
  - created_at
  - updated_at
  
- **Comments Table**:
  - id (UUID)
  - post_id
  - user_id
  - content
  - created_at

#### 4. Security Measures
- Password hashing with bcrypt
- Input validation with Zod

---

## Critical Requirements
- ✅ Custom authentication (no auth libraries)
- ✅ Minimum 3 shadcn components
- ✅ Secure password storage
- ✅ Complete API validation
- ✅ TypeScript implementation
