import { NextAuthOptions } from "next-auth";

import { User } from "@/models/users";
import { connectDB } from "@/DB/connectDB";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn(params) {
            try {
                connectDB();
                const user = await User.findOne({
                    $and: [
                        { email: params.user.email },
                        { provider: params.account?.provider },
                    ],
                });

                if (!user) {
                    await User.create({
                        provider: params.account?.provider,
                        username: params.user.name,
                        email: params.user.email,
                        image: params.user.image,
                    });
                }

                return true;
            } catch (error) {
                return false;
            }
        },
    },
};
