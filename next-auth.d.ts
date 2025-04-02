import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    guestId?: string;
  }

  interface Session {
    user: User;
  }
}
