import Link from "next/link";

function Avatar({ src }: { src: string }) {
    return (
        <div className="avatar">
            <div className="w-10 h-10 rounded-full">
                <Link href="/profile">
                    <img src={src} alt="Avatar" />
                </Link>
            </div>
        </div>
    );
}

export default Avatar;
