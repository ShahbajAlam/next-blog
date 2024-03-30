export default function Spinner({ size }: { size: number }) {
    return (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] aspect-square grid place-items-center">
            <span
                className="loading loading-spinner text-success"
                style={{
                    width: size,
                }}
            />
        </div>
    );
}
