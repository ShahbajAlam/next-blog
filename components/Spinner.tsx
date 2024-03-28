import Image from "next/image";

export default function Spinner({ size }: { size: number }) {
    return (
        <div
            className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] aspect-square"
            style={{
                width: size,
            }}
        >
            <Image src="/spinner.svg" priority fill alt="Spinner" />
        </div>
    );
}
