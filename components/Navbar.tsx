import Link from "next/link";
import { getServerSession } from "next-auth";

import Avatar from "./Avatar";
import ToggleThemeIcon from "./ToggleThemeIcon";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function Navbar() {
    const session = await getServerSession(options);

    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 text-xl backdrop-blur-xl">
            <Link href="/">
                <p className="font-black">NextBlog</p>
            </Link>
            <div className="flex justify-end gap-4 items-center">
                {!session ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Avatar src={session.user?.image as string} />
                )}
                <ToggleThemeIcon />
            </div>
        </nav>
    );
}

export default Navbar;
