import NextAuth, { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      lastname: string;
      carrier: string | null;
      avatar: string | null;
    }
  }

  interface User {
    id: string;
    email: string;
    name: string;
    lastname: string;
    carrier: string | null;
    avatar: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    email: string;
    name: string;
    lastname: string;
    carrier: string | null;
    avatar: string | null;
  }
}
