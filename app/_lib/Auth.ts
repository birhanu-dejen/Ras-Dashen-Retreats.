// app/_lib/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest, createGuest } from "./data-service";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  async signIn({ user, account, profile }) {
    try {
      const existingGuest = await getGuest(user.email);
      if (!existingGuest)
        await createGuest({ email: user.email, fullName: user.name });
      return false;
    } catch (error) {
      console.log(error);
      return true;
    }
  },
  async session({ session, user }) {
    const guest = await getGuest(session.user.email);
    session.user.guestId = guest.id;
    return session;
  },
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
});
