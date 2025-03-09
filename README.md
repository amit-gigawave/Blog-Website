````markdown

# Full Stack Next.js Technical Assessment (With Auth)

## Time Limit: 3 hours ⏳
**UI Reference**: (https://beautiful-blogscape.vercel.app/)

### Objective

Build a secure blog platform with custom authentication and modern UI components. Demonstrate full-stack skills including protected routes, middleware, and component library implementation.

---

## Key Requirements

### Core Features

1. **Authentication System**

   - Custom JWT implementation
   - User registration & login
   - Protected routes for authenticated users
   - Role-based access control (admin/user)
   - Session management with HTTP-only cookies

2. **Blog Post Management**

   - Create/edit/delete posts (authenticated users)
   - Public post viewing
   - Author-based permissions

3. **Comment System**

   - Add comments (authenticated users)
   - Delete comments (author/admin only)

4. **UI Implementation**
   - Minimum 3 shadcn components
   - Responsive layouts
   - Accessible form components

### Technical Expectations

#### Authentication

- Custom middleware implementation
- JWT verification
- Protected API routes
- Password hashing (bcrypt)
- Secure credential storage

#### Frontend

- shadcn/ui component library
- Auth-aware navigation
- Protected client-side routes
- Session state management
- Loading states & error handling

#### Backend

- Type-safe API handlers
- Zod validation
- PostgreSQL integration
- Secure cookies configuration
- Rate limiting (basic)

---

## Project Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   npx shadcn-ui@latest init
   ```
````

3. Set up environment variables (.env.example provided)
4. Configure database with auth tables
5. Run development server: `npm run dev`

---

## Expected Deliverables

1. **Authentication Flow**

   - Custom JWT implementation
   - Middleware for protected routes
   - Session persistence
   - Error handling for auth failures

2. **Component System**

   - shadcn components in critical flows
   - Custom form implementations
   - Responsive card layouts

3. **Security Implementation**
   - Password hashing
   - Secure token handling
   - CSRF protection
   - Input validation

---

## Technology Constraints

| Component       | Required Tech             |
| --------------- | ------------------------- |
| Authentication  | Custom JWT Implementation |
| UI Library      | shadcn/ui                 |
| Middleware      | Next.js middleware        |
| Security        | bcrypt & jose             |
| Session Storage | Cookies/JWT               |

---

## Evaluation Criteria

1. **Security Implementation**

   - Proper credential handling
   - Secure session management
   - Protected routes/API endpoints

2. **Component Quality**

   - Effective shadcn usage
   - Accessible markup
   - Responsive design

3. **Auth Architecture**
   - Middleware effectiveness
   - Role-based access implementation
   - Error handling for unauthorized requests

---

## Submission Checklist

After 3 hours, provide:

1. Complete project with auth flow
2. Middleware implementation
3. Security measures documentation
4. Component usage explanation

---

**Critical Requirements**:

- Implement authentication without auth libraries
- Use minimum 3 shadcn components
- Never store plain text passwords
- Validate all API requests
- Maintain TypeScript integrity

```

```
