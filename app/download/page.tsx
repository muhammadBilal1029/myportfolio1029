
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  Download,
  PlayCircle,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const APP_NAME = "Kameti Manager";
const APP_VERSION = "1.0.0";
const APK_URL = "/downloads/app-release.apk";
const VIDEO_URL = "/videos/app-demo.mp4";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-sky-400">APP</span> DOWNLOAD
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-16 text-center sm:pt-20">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/30">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-sky-400/20 bg-sky-400/10">
            <Smartphone size={38} className="text-sky-400" />
          </div>

          <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-300">
            Official Android Download
          </span>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Experience the App
            <span className="mt-2 block bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Before You Download
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Watch our quick demo to explore the features, see how everything
            works, and download the Android app when you are ready.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-sky-950/30">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <PlayCircle className="text-sky-400" size={23} />

            <div>
              <h2 className="font-semibold">App Demo Video</h2>
              <p className="text-xs text-slate-400">
                See the app in action
              </p>
            </div>
          </div>

          <video
            className="aspect-video w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster="/images/app-video-poster.jpg"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support HTML video.
          </video>

          <div className="px-5 py-4 text-sm text-slate-400">
            Take a look at the main features before installing the app.
          </div>
        </div>
      </section>

      {/* App information */}
      <section className="mx-auto mt-10 max-w-4xl px-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "App Version", value: APP_VERSION },
            { label: "Platform", value: "Android" },
            { label: "Format", value: "APK File" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-2 font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-400/[0.08] to-indigo-500/[0.04] p-7 sm:p-10">
          <ShieldCheck
            size={38}
            className="mx-auto text-sky-400"
          />

          <h2 className="mt-5 text-3xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400">
            Download the Android APK and install the app on your device.
            Make sure you download it from a trusted source.
          </p>

          <a
            href={APK_URL}
            download
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400 sm:w-auto"
          >
            <Download size={21} />
            Download APK
          </a>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Android app
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Direct download
            </span>
          </div>
        </div>
      </section>

      {/* Installation instructions */}
      <section className="mx-auto max-w-4xl px-5 pb-20">
        <h2 className="text-center text-2xl font-bold">
          How to Install
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Download",
              description: "Tap the Download APK button above.",
            },
            {
              number: "02",
              title: "Open the APK",
              description:
                "Find the downloaded file and open it. Allow installation from this source if Android asks.",
            },
            {
              number: "03",
              title: "Install & Enjoy",
              description:
                "Follow the installation prompts, then open the app.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="text-sm font-bold text-sky-400">
                STEP {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </footer>
    </main>
  );
}
