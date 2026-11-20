"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSubmissionErrorMessage, submitToWebhook } from "@/lib/webhook";
import SubmissionError from "@/components/SubmissionError";
import { useSubmissionProtection } from "@/components/SubmissionProtection";

interface ResourceOptinModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "masterclass" | "ebook";
  resourceTitle: string;
  file?: string;
}

export default function ResourceOptinModal({
  isOpen,
  onClose,
  type,
  resourceTitle,
  file,
}: ResourceOptinModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [downloadReady, setDownloadReady] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const protection = useSubmissionProtection();

  useEffect(() => {
    if (isOpen) {
      setSubmitError("");
      setDownloadReady(false);
    }
  }, [file, isOpen, resourceTitle]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitToWebhook(
        {
          source: "BAS",
          tag: `BAS ${type === "masterclass" ? "Masterclass" : "Ebook"} Opt-in`,
          type: type === "masterclass" ? "free master class" : "resource",
          event_type: "lead_optin",
          resource_title: resourceTitle,
          resource_type: type,
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          tags: `${type === "masterclass" ? "Masterclass" : "Ebook"}, ${resourceTitle}`,
        },
        protection.token,
        form,
      );

      if (file) {
        const link = document.createElement("a");
        link.href = file;
        link.download = file.split("/").pop() || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadReady(true);
        return;
      }

      onClose();
      router.push(
        type === "masterclass" ? "/free-training/video" : "/success?type=training",
      );
    } catch (error) {
      protection.reset();
      setSubmitError(getSubmissionErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-3xl bg-white text-navy shadow-2xl"
          >
            <div
              className={`h-2 bg-gradient-to-r ${
                type === "masterclass"
                  ? "from-orchid to-gold"
                  : "from-gold to-gold-lt"
              }`}
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-navy"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">
                {type === "masterclass"
                  ? "Instant Access Training"
                  : "Digital Guide Download"}
              </div>

              {downloadReady && file ? (
                <div className="text-center">
                  <div className="mb-5 text-orchid">
                    <span className="material-symbols-outlined text-5xl">
                      check_circle
                    </span>
                  </div>
                  <h2 className="mb-3 font-serif text-2xl italic leading-tight">
                    Your download is ready
                  </h2>
                  <p className="mb-7 text-[0.9rem] font-light text-gray-500">
                    Your request was received. If the download didn&apos;t start,
                    use the button below.
                  </p>
                  <a
                    href={file}
                    download
                    className="block w-full rounded-xl bg-navy py-4 text-center font-bold text-white no-underline shadow-lg transition-all hover:bg-navy-alt"
                  >
                    Download {resourceTitle}
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 text-sm font-bold text-gray-500 hover:text-navy"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-4 font-serif text-2xl italic leading-tight">
                    {type === "masterclass"
                      ? "Watch the Masterclass"
                      : "Get your resource"}
                  </h2>
                  <p className="mb-8 text-[0.9rem] font-light text-gray-500">
                    {resourceTitle}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 ml-1 block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-gray-100 bg-gray-50 px-4 py-3.5 text-[0.9rem] transition-all focus:border-orchid focus:outline-none focus:ring-2 focus:ring-orchid/20"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData({ ...formData, name: event.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 ml-1 block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="Your best email"
                        className="w-full rounded-lg border border-gray-100 bg-gray-50 px-4 py-3.5 text-[0.9rem] transition-all focus:border-orchid focus:outline-none focus:ring-2 focus:ring-orchid/20"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData({ ...formData, email: event.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 ml-1 block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        autoComplete="tel"
                        placeholder="WhatsApp number preferred"
                        className="w-full rounded-lg border border-gray-100 bg-gray-50 px-4 py-3.5 text-[0.9rem] transition-all focus:border-orchid focus:outline-none focus:ring-2 focus:ring-orchid/20"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData({ ...formData, phone: event.target.value })
                        }
                      />
                    </div>

                    {protection.fields}
                    <SubmissionError message={submitError} />

                    <button
                      disabled={isSubmitting}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 font-bold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-alt active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
                      type="submit"
                    >
                      {isSubmitting ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      ) : (
                        <>
                          {type === "masterclass"
                            ? "Get Instant Access"
                            : "Get My Resource"}
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>

                    <p className="mt-6 text-center text-[0.6rem] text-gray-400">
                      We value your privacy. Your data is encrypted and secure.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
