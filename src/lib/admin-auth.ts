// Simple admin authentication
// In production, use a proper authentication system like NextAuth.js

export const ADMIN_CREDENTIALS = {
  email: 'admin@darrahati.ma',
  password: 'admin123' // Change this in production!
}

export function validateAdmin(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}

export function getAdminSession(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('admin_logged_in') === 'true'
}

export function setAdminSession(value: boolean): void {
  if (typeof window === 'undefined') return
  if (value) {
    localStorage.setItem('admin_logged_in', 'true')
  } else {
    localStorage.removeItem('admin_logged_in')
  }
}

