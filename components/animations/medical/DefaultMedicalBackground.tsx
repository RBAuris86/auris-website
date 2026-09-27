"use client";

export default function DefaultMedicalBackground() {
  return (
    <div className="medical-default-background" aria-hidden="true">
      <div className="medical-base" />
      <div className="medical-grid" />
      <div className="medical-red-glow medical-red-glow-left" />
      <div className="medical-red-glow medical-red-glow-right" />

      <svg
        className="medical-ecg"
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
      >
        <path
          className="medical-ecg-shadow"
          d="
            M 0 120
            L 220 120
            L 270 120
            L 300 95
            L 330 145
            L 365 45
            L 405 175
            L 440 120
            L 650 120
            L 700 120
            L 730 96
            L 760 144
            L 795 48
            L 835 172
            L 870 120
            L 1080 120
            L 1130 120
            L 1160 96
            L 1190 144
            L 1225 48
            L 1265 172
            L 1300 120
            L 1600 120
          "
        />

        <path
          className="medical-ecg-line"
          d="
            M 0 120
            L 220 120
            L 270 120
            L 300 95
            L 330 145
            L 365 45
            L 405 175
            L 440 120
            L 650 120
            L 700 120
            L 730 96
            L 760 144
            L 795 48
            L 835 172
            L 870 120
            L 1080 120
            L 1130 120
            L 1160 96
            L 1190 144
            L 1225 48
            L 1265 172
            L 1300 120
            L 1600 120
          "
        />
      </svg>

      <div className="medical-cross medical-cross-one">
        <span />
        <span />
      </div>

      <div className="medical-cross medical-cross-two">
        <span />
        <span />
      </div>

      <div className="medical-cross medical-cross-three">
        <span />
        <span />
      </div>

      <div className="medical-vignette" />

      <style jsx>{`
        .medical-default-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          background: #020617;
          z-index: 0;
        }

        .medical-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(30, 41, 59, 0.38),
              transparent 48%
            ),
            linear-gradient(
              145deg,
              #020617 0%,
              #07101f 48%,
              #020617 100%
            );
        }

        .medical-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.16;
          background-image:
            linear-gradient(
              rgba(239, 68, 68, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(239, 68, 68, 0.12) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: radial-gradient(
            circle at center,
            black 20%,
            transparent 78%
          );
          animation: medicalGridDrift 28s linear infinite;
        }

        .medical-red-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.13;
          background: #dc2626;
        }

        .medical-red-glow-left {
          left: -260px;
          top: 18%;
        }

        .medical-red-glow-right {
          right: -300px;
          bottom: 8%;
        }

        .medical-ecg {
          position: absolute;
          left: -5%;
          top: 50%;
          width: 110%;
          height: 220px;
          transform: translateY(-50%);
          overflow: visible;
          opacity: 0.52;
        }

        .medical-ecg-shadow,
        .medical-ecg-line {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .medical-ecg-shadow {
          stroke: rgba(220, 38, 38, 0.18);
          stroke-width: 11;
          filter: blur(8px);
        }

        .medical-ecg-line {
          stroke: rgba(248, 113, 113, 0.62);
          stroke-width: 2;
          stroke-dasharray: 12 18;
          animation: medicalEcgIdle 14s linear infinite;
          filter: drop-shadow(0 0 7px rgba(239, 68, 68, 0.45));
        }

        .medical-cross {
          position: absolute;
          width: 28px;
          height: 28px;
          opacity: 0.07;
          animation: medicalCrossFloat 12s ease-in-out infinite;
        }

        .medical-cross span {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 4px;
          background: #ffffff;
          transform: translate(-50%, -50%);
        }

        .medical-cross span:first-child {
          width: 28px;
          height: 8px;
        }

        .medical-cross span:last-child {
          width: 8px;
          height: 28px;
        }

        .medical-cross-one {
          left: 16%;
          top: 22%;
        }

        .medical-cross-two {
          right: 18%;
          top: 30%;
          animation-delay: -4s;
          transform: scale(0.72);
        }

        .medical-cross-three {
          left: 72%;
          bottom: 18%;
          animation-delay: -8s;
          transform: scale(0.55);
        }

        .medical-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              transparent 30%,
              rgba(2, 6, 23, 0.34) 70%,
              rgba(2, 6, 23, 0.88) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.015),
              transparent 35%,
              rgba(2, 6, 23, 0.46)
            );
          animation: medicalIdlePulse 7s ease-in-out infinite;
        }

        @keyframes medicalGridDrift {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(70px, 70px, 0);
          }
        }

        @keyframes medicalEcgIdle {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -600;
          }
        }

        @keyframes medicalCrossFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes medicalIdlePulse {
          0%,
          100% {
            box-shadow: inset 0 0 0 rgba(220, 38, 38, 0);
          }

          50% {
            box-shadow: inset 0 0 120px rgba(220, 38, 38, 0.045);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .medical-grid,
          .medical-ecg-line,
          .medical-cross,
          .medical-vignette {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}