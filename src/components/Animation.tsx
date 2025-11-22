import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function HoverSpline() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const app = new Application(canvasRef.current);
        appRef.current = app;

        app.load("https://prod.spline.design/oZW8JWN8TN-0aXel/scene.splinecode")
            .catch(err => {
                console.error("Spline load failed:", err);
            });
    }, []);

    const handleMouseEnter = () => {
        if (appRef.current) {
            // Trigger an event defined in your Spline scene,
            // e.g., "mouseHover" event on root object or named object
            appRef.current.emitEvent("mouseHover", "Root");
            // you might need to use the right name or UUID of your object
        }
    };
    const handleMouseLeave = () => {
        if (appRef.current) {
            appRef.current.emitEventReverse("mouseHover", "Root");
        }
    };

    return (
        <div
            style={{
                width: "150vw",
                height: "150vh",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: -1
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <canvas ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    width: "120%",  // Increased from 130%
                    height: "120%", // Increased from 120%
                    transform: "translate(-16.66%, -16.66%)" // Centers the enlarged canvas
                }}
            />
        </div>
    );
}
