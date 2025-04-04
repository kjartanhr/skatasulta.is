import { cn } from "lib/utils";

export function Loader({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 40 14" className={cn("loader-svg", className)}>
            <circle className="dot" cx="10" cy="7" r="3" />
            <circle className="dot" cx="20" cy="7" r="3" />
            <circle className="dot" cx="30" cy="7" r="3" />
        </svg>
    );
}

export function Frettavakt({ done, className }: { done?: string; className: string }) {
    return (
        <p
            className={cn(
                "inline-flex items-center gap-1 bg-red-700 px-2 py-1 font-bold text-white uppercase",
                className,
            )}
        >
            {done ? (
                <>Samandráttur</>
            ) : (
                <>
                    Fréttavakt
                    <Loader className="h-2.5" />
                </>
            )}
        </p>
    );
}
