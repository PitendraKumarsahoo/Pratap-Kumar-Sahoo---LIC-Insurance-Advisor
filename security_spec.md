# Security Specification for LIC Insurance Advisor

## 1. Data Invariants
1. Users can only read and write their own user profile document (`/users/{userId}`) unless the requester is the verified admin (`pitendrakumarsahoo84@gmail.com`).
2. Self-assigned elevation to `admin` role is strictly forbidden: non-admin users cannot set or elevate `role` to 'admin'.
3. Saved plans in `/users/{userId}/savedPlans/{planId}` can only be read, created, updated, or deleted by the owning user `{userId}`.
4. Consultations (`/consultations/{consultationId}`):
   - Any user (or anonymous visitor submitting a contact form) can create a consultation enquiry with required valid fields, status set to 'pending', and valid phone and name.
   - If `userId` is present on the consultation, it must match `request.auth.uid`.
   - Only the owning user (`resource.data.userId == request.auth.uid`) or the verified admin (`pitendrakumarsahoo84@gmail.com`) can read consultation records.
   - Only the admin can update consultation `status` and `adminNotes`.
   - Non-admins cannot tamper with consultation status or other users' inquiries.

## 2. Dirty Dozen Payloads (Targeting Rejection)
1. User profile creation with arbitrary `role: "admin"` by standard user.
2. User updating another user's profile document.
3. Consultation creation with `userId` forged to another user's UID.
4. Consultation creation with missing `fullName` or `phoneNumber`.
5. Non-admin user querying/listing all consultations without filtering by their own `userId`.
6. Non-admin user attempting to change consultation status to `completed` or modify `adminNotes`.
7. Spoofed email address claiming `pitendrakumarsahoo84@gmail.com` with `email_verified == false`.
8. Document ID poisoning with a string longer than 128 characters or containing illegal characters.
9. Consultation injection with ghost payload fields not allowed by schema.
10. Unauthenticated user attempting to read any private user profile.
11. User attempting to delete another user's saved insurance plan.
12. Attempt to write consultation with huge payload (>2000 chars in message).

## 3. Security Rules Architecture
- `rules_version = '2'`;
- Admin detection: `request.auth != null && request.auth.token.email == 'pitendrakumarsahoo84@gmail.com' && request.auth.token.email_verified == true`
- Valid ID checks: `isValidId(id)`
- Default deny catch-all `/{document=**}`
