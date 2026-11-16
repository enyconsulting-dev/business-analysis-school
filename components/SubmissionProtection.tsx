"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";

interface TurnstileOptions {
  sitekey: string;
  action: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function TurnstileWidget({
  onTokenChange,
}: {
  onTokenChange: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    const turnstile = window.turnstile;
    if (!scriptReady || !siteKey || !container || !turnstile) {
      return;
    }

    let active = true;
    const widgetId = turnstile.render(container, {
      sitekey: siteKey,
      action: "lead_submission",
      callback: (token) => {
        if (active) {
          setError("");
          onTokenChange(token);
        }
      },
      "expired-callback": () => {
        if (active) {
          onTokenChange("");
        }
      },
      "error-callback": () => {
        if (active) {
          onTokenChange("");
          setError("Verification failed to load. Please refresh and try again.");
        }
      },
    });

    return () => {
      active = false;
      turnstile.remove(widgetId);
    };
  }, [onTokenChange, scriptReady]);

  if (!siteKey) {
    return (
      <p role="alert" className="text-sm text-red-700">
        Secure form verification is not configured. Please contact us directly.
      </p>
    );
  }

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() =>
          setError("Verification failed to load. Please refresh and try again.")
        }
      />
      <div ref={containerRef} />
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function useSubmissionProtection() {
  const [token, setToken] = useState("");
  const [widgetKey, setWidgetKey] = useState(0);
  const honeypotId = useId();
  const reset = useCallback(() => {
    setToken("");
    setWidgetKey((key) => key + 1);
  }, []);

  const fields = (
    <>
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <TurnstileWidget key={widgetKey} onTokenChange={setToken} />
    </>
  );

  return { token, reset, fields };
}
