"use client";

type ScribeBackgroundProps = {
  accent?: string;
};

const waveformBars = [
  14, 24, 38, 19, 48, 31, 57, 26, 42, 64, 34, 51, 22, 39, 58, 29, 46, 68,
  37, 53, 25, 43, 61, 32, 49, 21, 36, 55, 28, 45, 65, 34, 50, 24, 41, 59,
  30, 47, 67, 36, 52, 27, 44, 62, 33, 48, 23, 40,
];

const neuralNodes = [
  { left: "12%", top: "22%", delay: "-0.4s" },
  { left: "19%", top: "46%", delay: "-1.8s" },
  { left: "10%", top: "72%", delay: "-3.2s" },
  { left: "29%", top: "16%", delay: "-2.3s" },
  { left: "34%", top: "67%", delay: "-4.1s" },
  { left: "46%", top: "31%", delay: "-1.2s" },
  { left: "52%", top: "78%", delay: "-3.7s" },
  { left: "64%", top: "17%", delay: "-2.8s" },
  { left: "69%", top: "53%", delay: "-0.9s" },
  { left: "81%", top: "26%", delay: "-4.5s" },
  { left: "87%", top: "69%", delay: "-2s" },
  { left: "75%", top: "84%", delay: "-3.4s" },
];

export default function ScribeBackground({
  accent = "#38bdf8",
}: ScribeBackgroundProps) {
  return (
    <div className="scribe-background" aria-hidden="true">
      <div className="scribe-bg-glow scribe-bg-glow-one" />
      <div className="scribe-bg-glow scribe-bg-glow-two" />

      <div className="scribe-bg-grid" />
      <div className="scribe-bg-vignette" />

      <div className="scribe-bg-wave">
        <div className="scribe-bg-wave-line" />

        <div className="scribe-bg-bars">
          {waveformBars.map((height, index) => (
            <span
              key={index}
              style={{
                height: `${height}px`,
                animationDelay: `${index * -0.055}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="scribe-bg-microphone">
        <div className="scribe-bg-mic-ripple ripple-one" />
        <div className="scribe-bg-mic-ripple ripple-two" />
        <div className="scribe-bg-mic-ripple ripple-three" />

        <div className="scribe-bg-mic-body">
          <div className="scribe-bg-mic-slots">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="scribe-bg-mic-arm" />
        <div className="scribe-bg-mic-base" />
      </div>

      <div className="scribe-bg-document document-one">
        <div className="scribe-bg-document-header">
          <span>CLINICAL NOTE</span>
          <i />
        </div>

        <div className="scribe-bg-document-section">
          <strong>SUBJECTIVE</strong>
          <span />
          <span />
          <span className="short-line" />
        </div>

        <div className="scribe-bg-document-section">
          <strong>OBJECTIVE</strong>
          <span />
          <span className="medium-line" />
        </div>

        <div className="scribe-bg-document-footer">
          <span>AI GENERATED</span>
          <span>97.8%</span>
        </div>
      </div>

      <div className="scribe-bg-document document-two">
        <div className="scribe-bg-document-header">
          <span>SOAP NOTE</span>
          <i />
        </div>

        <div className="scribe-bg-document-section">
          <strong>ASSESSMENT</strong>
          <span />
          <span />
          <span className="medium-line" />
        </div>

        <div className="scribe-bg-document-section">
          <strong>PLAN</strong>
          <span />
          <span className="short-line" />
        </div>
      </div>

      <div className="scribe-bg-transcript transcript-one">
        <div className="scribe-bg-speaker-dot" />

        <div>
          <strong>PHYSICIAN</strong>
          <span>Continue current treatment...</span>
        </div>

        <i />
      </div>

      <div className="scribe-bg-transcript transcript-two">
        <div className="scribe-bg-speaker-dot" />

        <div>
          <strong>PATIENT</strong>
          <span>Symptoms have improved...</span>
        </div>
      </div>

      <div className="scribe-bg-code code-one">
        <small>ICD-10</small>
        <strong>R06.02</strong>
        <span>Shortness of breath</span>
      </div>

      <div className="scribe-bg-code code-two">
        <small>CONFIDENCE</small>
        <strong>97.8%</strong>
        <span>Clinical context verified</span>
      </div>

      <div className="scribe-bg-neural-network">
        <svg
          className="scribe-bg-connections"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <path d="M120 154 L290 112 L460 217 L640 119 L810 182" />
          <path d="M190 322 L460 217 L690 371 L870 483" />
          <path d="M100 504 L340 469 L520 546 L750 588" />
          <path d="M290 112 L340 469" />
          <path d="M640 119 L690 371 L750 588" />
          <path d="M190 322 L100 504" />
          <path d="M460 217 L520 546" />
          <path d="M810 182 L690 371" />
        </svg>

        {neuralNodes.map((node, index) => (
          <span
            key={index}
            className="scribe-bg-node"
            style={{
              left: node.left,
              top: node.top,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      <div className="scribe-bg-ai-core">
        <div className="scribe-bg-core-ring ring-outer" />
        <div className="scribe-bg-core-ring ring-middle" />
        <div className="scribe-bg-core-ring ring-inner" />

        <div className="scribe-bg-core-center">
          <span>AI</span>
        </div>
      </div>

      <div className="scribe-bg-security">
        <div className="scribe-bg-lock">
          <span />
        </div>

        <div>
          <strong>ENCRYPTED</strong>
          <small>CLINICAL SESSION</small>
        </div>
      </div>

      <div className="scribe-bg-scan-line" />

      <style>{`
        .scribe-background {
          position: absolute;
          z-index: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 18% 34%,
              ${accent}12,
              transparent 32%
            ),
            radial-gradient(
              circle at 78% 68%,
              ${accent}0d,
              transparent 38%
            );
        }

        .scribe-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.35;
          animation: scribeBgGlow 9s ease-in-out infinite;
        }

        .scribe-bg-glow-one {
          left: -9%;
          top: 8%;
          width: 410px;
          height: 410px;
          background: ${accent}38;
        }

        .scribe-bg-glow-two {
          right: -8%;
          bottom: -14%;
          width: 520px;
          height: 520px;
          background: ${accent}22;
          animation-delay: -4.5s;
        }

        .scribe-bg-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.1;
          background-image:
            linear-gradient(${accent}24 1px, transparent 1px),
            linear-gradient(90deg, ${accent}24 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0, 0, 0, 0.65) 42%,
            transparent 82%
          );
          animation: scribeBgGrid 30s linear infinite;
        }

        .scribe-bg-vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.16),
              transparent 28%,
              transparent 72%,
              rgba(2, 6, 23, 0.2)
            ),
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(2, 6, 23, 0.34) 100%
            );
        }

        .scribe-bg-wave {
          position: absolute;
          left: -4%;
          top: 50%;
          width: 108%;
          height: 132px;
          opacity: 0.23;
          transform: translateY(-50%);
        }

        .scribe-bg-wave-line {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            ${accent}66,
            ${accent},
            ${accent}66,
            transparent
          );
          box-shadow: 0 0 15px ${accent}55;
        }

        .scribe-bg-bars {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .scribe-bg-bars span {
          width: 2px;
          max-height: 96px;
          min-height: 7px;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent},
            transparent
          );
          box-shadow: 0 0 8px ${accent};
          animation: scribeBgWave 1.15s ease-in-out infinite alternate;
        }

        .scribe-bg-microphone {
          position: absolute;
          left: 6%;
          top: 28%;
          width: 145px;
          height: 190px;
          opacity: 0.23;
          transform: rotate(-8deg);
          animation: scribeBgMicFloat 8s ease-in-out infinite;
        }

        .scribe-bg-mic-body {
          position: absolute;
          left: 50%;
          top: 18px;
          width: 56px;
          height: 92px;
          overflow: hidden;
          border: 1px solid ${accent}99;
          border-radius: 30px;
          background: linear-gradient(
            145deg,
            ${accent}1c,
            rgba(2, 6, 23, 0.55)
          );
          box-shadow:
            0 0 28px ${accent}25,
            inset 0 0 18px ${accent}13;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-slots {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .scribe-bg-mic-slots span {
          width: 2px;
          height: 54px;
          border-radius: 999px;
          background: ${accent}77;
          box-shadow: 0 0 7px ${accent};
        }

        .scribe-bg-mic-arm {
          position: absolute;
          left: 50%;
          top: 105px;
          width: 78px;
          height: 46px;
          border-right: 2px solid ${accent}88;
          border-bottom: 2px solid ${accent}88;
          border-left: 2px solid ${accent}88;
          border-radius: 0 0 42px 42px;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-arm::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45px;
          width: 2px;
          height: 25px;
          background: ${accent}88;
          transform: translateX(-50%);
        }

        .scribe-bg-mic-base {
          position: absolute;
          left: 50%;
          bottom: 5px;
          width: 68px;
          height: 2px;
          border-radius: 999px;
          background: ${accent}99;
          box-shadow: 0 0 10px ${accent};
          transform: translateX(-50%);
        }

        .scribe-bg-mic-ripple {
          position: absolute;
          left: 50%;
          top: 58px;
          border: 1px solid ${accent}88;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          animation: scribeBgRipple 4.2s ease-out infinite;
        }

        .ripple-one {
          width: 70px;
          height: 70px;
        }

        .ripple-two {
          width: 70px;
          height: 70px;
          animation-delay: -1.4s;
        }

        .ripple-three {
          width: 70px;
          height: 70px;
          animation-delay: -2.8s;
        }

        .scribe-bg-document {
          position: absolute;
          width: 190px;
          padding: 15px;
          border: 1px solid ${accent}35;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.32),
            rgba(2, 6, 23, 0.48)
          );
          box-shadow:
            0 22px 55px rgba(0, 0, 0, 0.28),
            inset 0 0 20px rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(6px);
          opacity: 0.18;
        }

        .document-one {
          left: 23%;
          bottom: 5%;
          transform: rotate(-7deg);
          animation: scribeBgDocumentOne 11s ease-in-out infinite;
        }

        .document-two {
          right: 4%;
          top: 13%;
          transform: rotate(6deg) scale(0.88);
          animation: scribeBgDocumentTwo 12s ease-in-out infinite;
        }

        .scribe-bg-document-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid ${accent}24;
          color: ${accent};
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .scribe-bg-document-header i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 9px ${accent};
        }

        .scribe-bg-document-section {
          margin-top: 10px;
        }

        .scribe-bg-document-section strong {
          display: block;
          margin-bottom: 7px;
          color: ${accent};
          font-size: 5px;
          letter-spacing: 1px;
        }

        .scribe-bg-document-section span {
          display: block;
          width: 100%;
          height: 3px;
          margin-top: 5px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.21);
        }

        .scribe-bg-document-section .short-line {
          width: 48%;
        }

        .scribe-bg-document-section .medium-line {
          width: 72%;
        }

        .scribe-bg-document-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          padding-top: 7px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.3);
          font-family: "Courier New", monospace;
          font-size: 5px;
        }

        .scribe-bg-transcript {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 190px;
          padding: 10px 12px;
          border: 1px solid ${accent}30;
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.35);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          opacity: 0.2;
          backdrop-filter: blur(5px);
        }

        .transcript-one {
          left: 7%;
          bottom: 12%;
          animation: scribeBgTranscriptOne 9s ease-in-out infinite;
        }

        .transcript-two {
          right: 18%;
          top: 8%;
          animation: scribeBgTranscriptTwo 10s ease-in-out infinite;
        }

        .scribe-bg-speaker-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 12px ${accent};
          animation: scribeBgDot 1.8s ease-in-out infinite;
        }

        .scribe-bg-transcript > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .scribe-bg-transcript strong {
          color: ${accent};
          font-size: 5px;
          letter-spacing: 1px;
        }

        .scribe-bg-transcript span {
          color: rgba(255, 255, 255, 0.48);
          font-size: 7px;
        }

        .scribe-bg-transcript i {
          width: 1px;
          height: 12px;
          background: ${accent};
          animation: scribeBgCursor 0.8s steps(2) infinite;
        }

        .scribe-bg-code {
          position: absolute;
          display: flex;
          width: 126px;
          flex-direction: column;
          gap: 3px;
          padding: 10px 12px;
          border-left: 2px solid ${accent}88;
          border-radius: 3px 9px 9px 3px;
          background: linear-gradient(
            90deg,
            ${accent}0e,
            rgba(2, 6, 23, 0.22)
          );
          opacity: 0.2;
        }

        .code-one {
          left: 39%;
          top: 9%;
          animation: scribeBgCodeOne 8s ease-in-out infinite;
        }

        .code-two {
          right: 9%;
          bottom: 17%;
          animation: scribeBgCodeTwo 9s ease-in-out infinite;
        }

        .scribe-bg-code small {
          color: rgba(255, 255, 255, 0.28);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .scribe-bg-code strong {
          color: ${accent};
          font-family: "Courier New", monospace;
          font-size: 12px;
        }

        .scribe-bg-code span {
          color: rgba(255, 255, 255, 0.36);
          font-size: 5px;
        }

        .scribe-bg-neural-network {
          position: absolute;
          inset: 0;
          opacity: 0.15;
        }

        .scribe-bg-connections {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .scribe-bg-connections path {
          fill: none;
          stroke: ${accent};
          stroke-width: 0.65;
          stroke-dasharray: 7 11;
          filter: drop-shadow(0 0 4px ${accent});
          animation: scribeBgConnections 18s linear infinite;
        }

        .scribe-bg-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border: 1px solid ${accent};
          border-radius: 50%;
          background: ${accent};
          box-shadow:
            0 0 8px ${accent},
            0 0 18px ${accent}88;
          animation: scribeBgNode 4.5s ease-in-out infinite;
        }

        .scribe-bg-ai-core {
          position: absolute;
          right: 25%;
          bottom: 7%;
          width: 126px;
          height: 126px;
          opacity: 0.17;
          animation: scribeBgCoreFloat 10s ease-in-out infinite;
        }

        .scribe-bg-core-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${accent}99;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-outer {
          width: 118px;
          height: 118px;
          border-style: dashed;
          animation: scribeBgSpin 19s linear infinite;
        }

        .ring-middle {
          width: 88px;
          height: 88px;
          animation: scribeBgSpinReverse 13s linear infinite;
        }

        .ring-inner {
          width: 58px;
          height: 58px;
          border-style: dotted;
          animation: scribeBgSpin 8s linear infinite;
        }

        .scribe-bg-core-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 37px;
          height: 37px;
          place-items: center;
          border-radius: 50%;
          background: ${accent}17;
          box-shadow:
            0 0 22px ${accent}77,
            inset 0 0 12px ${accent}28;
          transform: translate(-50%, -50%);
        }

        .scribe-bg-core-center span {
          color: ${accent};
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .scribe-bg-security {
          position: absolute;
          left: 48%;
          bottom: 3%;
          display: flex;
          align-items: center;
          gap: 9px;
          opacity: 0.18;
          animation: scribeBgSecurity 8s ease-in-out infinite;
        }

        .scribe-bg-lock {
          position: relative;
          width: 24px;
          height: 20px;
          border: 1px solid ${accent};
          border-radius: 4px;
          box-shadow: 0 0 10px ${accent}44;
        }

        .scribe-bg-lock::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -12px;
          width: 13px;
          height: 13px;
          border: 1px solid ${accent};
          border-bottom: 0;
          border-radius: 8px 8px 0 0;
          transform: translateX(-50%);
        }

        .scribe-bg-lock span {
          position: absolute;
          left: 50%;
          top: 6px;
          width: 3px;
          height: 7px;
          border-radius: 999px;
          background: ${accent};
          transform: translateX(-50%);
        }

        .scribe-bg-security > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .scribe-bg-security strong {
          color: ${accent};
          font-size: 6px;
          letter-spacing: 1px;
        }

        .scribe-bg-security small {
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
          letter-spacing: 0.8px;
        }

        .scribe-bg-scan-line {
          position: absolute;
          z-index: 8;
          left: 0;
          top: -12%;
          width: 100%;
          height: 10%;
          opacity: 0;
          border-bottom: 1px solid ${accent}5c;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent}08,
            ${accent}20,
            transparent
          );
          animation: scribeBgScan 11s ease-in-out infinite;
        }

        @keyframes scribeBgGlow {
          0%,
          100% {
            opacity: 0.22;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.42;
            transform: scale(1.1);
          }
        }

        @keyframes scribeBgGrid {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(52px, 52px);
          }
        }

        @keyframes scribeBgWave {
          from {
            opacity: 0.28;
            transform: scaleY(0.26);
          }

          to {
            opacity: 0.9;
            transform: scaleY(1);
          }
        }

        @keyframes scribeBgMicFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-8deg);
          }

          50% {
            transform: translateY(-14px) rotate(-5deg);
          }
        }

        @keyframes scribeBgRipple {
          0% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.7);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.3);
          }
        }

        @keyframes scribeBgDocumentOne {
          0%,
          100% {
            transform: translateY(0) rotate(-7deg);
          }

          50% {
            transform: translateY(-13px) rotate(-4deg);
          }
        }

        @keyframes scribeBgDocumentTwo {
          0%,
          100% {
            transform: translateY(0) rotate(6deg) scale(0.88);
          }

          50% {
            transform: translateY(12px) rotate(3deg) scale(0.9);
          }
        }

        @keyframes scribeBgTranscriptOne {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(10px, -9px);
          }
        }

        @keyframes scribeBgTranscriptTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-9px, 10px);
          }
        }

        @keyframes scribeBgDot {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.22);
          }
        }

        @keyframes scribeBgCursor {
          0%,
          45% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        @keyframes scribeBgCodeOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scribeBgCodeTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(11px);
          }
        }

        @keyframes scribeBgConnections {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes scribeBgNode {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.75);
          }

          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        @keyframes scribeBgCoreFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }

        @keyframes scribeBgSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scribeBgSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes scribeBgSecurity {
          0%,
          100% {
            opacity: 0.12;
            transform: translateY(0);
          }

          50% {
            opacity: 0.24;
            transform: translateY(-7px);
          }
        }

        @keyframes scribeBgScan {
          0%,
          63% {
            top: -12%;
            opacity: 0;
          }

          69% {
            opacity: 0.22;
          }

          94% {
            top: 108%;
            opacity: 0.03;
          }

          100% {
            top: 108%;
            opacity: 0;
          }
        }

        @media (max-width: 900px) {
          .scribe-bg-document,
          .scribe-bg-code,
          .scribe-bg-security {
            opacity: 0.1;
          }

          .scribe-bg-microphone {
            left: 1%;
            transform: scale(0.8) rotate(-8deg);
          }

          .scribe-bg-ai-core {
            right: 7%;
          }
        }

        @media (max-width: 650px) {
          .scribe-bg-document,
          .scribe-bg-transcript,
          .scribe-bg-code,
          .scribe-bg-security,
          .scribe-bg-microphone {
            display: none;
          }

          .scribe-bg-wave {
            opacity: 0.16;
          }

          .scribe-bg-ai-core {
            right: -15px;
            bottom: 5%;
            transform: scale(0.75);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scribe-background *,
          .scribe-background *::before,
          .scribe-background *::after {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}