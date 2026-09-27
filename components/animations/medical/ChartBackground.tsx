"use client";

type ChartBackgroundProps = {
  accent: string;
};

const patientDetails = [
  { label: "PATIENT ID", value: "AUR-MED-2048" },
  { label: "DOB", value: "06 / 14 / 1987" },
  { label: "ROOM", value: "ICU-12" },
  { label: "CARE STATUS", value: "ACTIVE" },
];

const backgroundLabels = [
  {
    label: "LAB VERIFIED",
    detail: "08:42:16",
    left: "7%",
    top: "19%",
    delay: "-2s",
  },
  {
    label: "HIPAA SECURE",
    detail: "AES-256",
    left: "12%",
    top: "72%",
    delay: "-7s",
  },
  {
    label: "MRI COMPLETE",
    detail: "IMG-033",
    right: "5%",
    top: "67%",
    delay: "-11s",
  },
];

const networkNodes = [
  { left: "13%", top: "34%", delay: "0s" },
  { left: "22%", top: "47%", delay: "-1.2s" },
  { left: "11%", top: "59%", delay: "-2.7s" },
  { right: "11%", top: "29%", delay: "-0.8s" },
  { right: "18%", top: "48%", delay: "-2s" },
  { right: "9%", top: "58%", delay: "-3.1s" },
];

export default function ChartBackground({
  accent,
}: ChartBackgroundProps) {
  return (
    <div className="chart-background" aria-hidden="true">
      <div className="chart-base" />
      <div className="chart-grid" />
      <div className="chart-scanlines" />

      <div className="chart-glow chart-glow-left" />
      <div className="chart-glow chart-glow-right" />

      <div className="chart-network-lines">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path d="M 90 305 C 220 260 300 365 425 330" />
          <path d="M 105 520 C 260 470 330 590 470 535" />
          <path d="M 1160 265 C 1285 220 1370 330 1525 285" />
          <path d="M 1120 535 C 1275 470 1395 610 1535 540" />
          <path d="M 245 425 C 480 320 630 510 820 425" />
          <path d="M 815 425 C 1035 320 1190 510 1370 415" />
        </svg>
      </div>

      {networkNodes.map((node, index) => (
        <div
          key={index}
          className="chart-network-node"
          style={{
            left: node.left,
            right: node.right,
            top: node.top,
            animationDelay: node.delay,
          }}
        >
          <span />
        </div>
      ))}

      {backgroundLabels.map((item) => (
        <div
          key={item.label}
          className="chart-background-label"
          style={{
            left: item.left,
            right: item.right,
            top: item.top,
            animationDelay: item.delay,
          }}
        >
          <span>{item.label}</span>
          <small>{item.detail}</small>
        </div>
      ))}

      <div className="chart-hero">
        <div className="chart-hero-aura" />

        <div className="chart-document chart-document-back">
          <div className="chart-document-tab">
            <span>IMAGING</span>
            <small>IMG-033</small>
          </div>

          <div className="chart-imaging-preview">
            <div className="chart-imaging-ring chart-imaging-ring-one" />
            <div className="chart-imaging-ring chart-imaging-ring-two" />
            <div className="chart-imaging-core" />
            <div className="chart-imaging-crosshair chart-crosshair-x" />
            <div className="chart-imaging-crosshair chart-crosshair-y" />
          </div>

          <div className="chart-document-lines">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="chart-document chart-document-middle">
          <div className="chart-document-tab">
            <span>MEDICATIONS</span>
            <small>04 ACTIVE</small>
          </div>

          <div className="chart-medication-list">
            <div>
              <span className="chart-medication-icon" />
              <p>
                <strong>Medication 01</strong>
                <small>08:00 • Administered</small>
              </p>
            </div>

            <div>
              <span className="chart-medication-icon" />
              <p>
                <strong>Medication 02</strong>
                <small>12:00 • Scheduled</small>
              </p>
            </div>

            <div>
              <span className="chart-medication-icon" />
              <p>
                <strong>Medication 03</strong>
                <small>18:00 • Scheduled</small>
              </p>
            </div>
          </div>
        </div>

        <div className="chart-record">
          <div className="chart-record-shine" />
          <div className="chart-record-scan" />

          <div className="chart-record-header">
            <div>
              <span className="chart-eyebrow">
                AURIS MEDICAL RECORD SYSTEM
              </span>

              <h3>PATIENT CHART</h3>
            </div>

            <div className="chart-sync-status">
              <span className="chart-status-dot" />

              <div className="chart-status-words">
                <span>SYNCING</span>
                <span>VERIFYING</span>
                <span>ENCRYPTED</span>
                <span>SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          <div className="chart-patient-header">
            <div className="chart-patient-avatar">
              <div className="chart-avatar-ring" />
              <div className="chart-avatar-head" />
              <div className="chart-avatar-body" />
              <span className="chart-avatar-status" />
            </div>

            <div className="chart-patient-identity">
              <span>PATIENT PROFILE</span>
              <strong>AUTHORIZED CLINICAL RECORD</strong>

              <div className="chart-identity-bars">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="chart-security-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 3L19 6V11C19 15.4 16.1 19.4 12 21C7.9 19.4 5 15.4 5 11V6L12 3Z" />
                <path d="M9.5 12L11.2 13.7L14.8 10" />
              </svg>

              <span>SECURE</span>
            </div>
          </div>

          <div className="chart-patient-grid">
            {patientDetails.map((row) => (
              <div key={row.label} className="chart-patient-detail">
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>

          <div className="chart-clinical-grid">
            <div className="chart-clinical-panel chart-vitals-panel">
              <div className="chart-panel-header">
                <span>LIVE VITALS</span>
                <small>MONITORING</small>
              </div>

              <div className="chart-vitals">
                <div>
                  <span>HEART RATE</span>
                  <strong>72</strong>
                  <small>BPM</small>
                </div>

                <div>
                  <span>OXYGEN</span>
                  <strong>97</strong>
                  <small>%</small>
                </div>

                <div>
                  <span>TEMP</span>
                  <strong>98.6</strong>
                  <small>°F</small>
                </div>
              </div>
            </div>

            <div className="chart-clinical-panel chart-lab-panel">
              <div className="chart-panel-header">
                <span>LAB RESULTS</span>
                <small>VERIFIED</small>
              </div>

              <div className="chart-lab-results">
                <div>
                  <span>WBC</span>
                  <strong>7.4</strong>
                </div>

                <div>
                  <span>HGB</span>
                  <strong>14.1</strong>
                </div>

                <div>
                  <span>GLU</span>
                  <strong>92</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-activity">
            <div className="chart-panel-header">
              <span>CLINICAL ACTIVITY</span>
              <small>LIVE TELEMETRY</small>
            </div>

            <svg
              className="chart-activity-line"
              viewBox="0 0 700 92"
              preserveAspectRatio="none"
            >
              <path
                className="chart-activity-baseline"
                d="
                  M 0 48
                  L 95 48
                  L 120 48
                  L 140 35
                  L 158 64
                  L 180 14
                  L 204 74
                  L 228 48
                  L 330 48
                  L 355 48
                  L 375 35
                  L 393 64
                  L 415 14
                  L 439 74
                  L 463 48
                  L 565 48
                  L 590 48
                  L 610 35
                  L 628 64
                  L 650 14
                  L 674 74
                  L 700 48
                "
              />

              <path
                className="chart-activity-glow"
                d="
                  M 0 48
                  L 95 48
                  L 120 48
                  L 140 35
                  L 158 64
                  L 180 14
                  L 204 74
                  L 228 48
                  L 330 48
                  L 355 48
                  L 375 35
                  L 393 64
                  L 415 14
                  L 439 74
                  L 463 48
                  L 565 48
                  L 590 48
                  L 610 35
                  L 628 64
                  L 650 14
                  L 674 74
                  L 700 48
                "
              />

              <path
                className="chart-activity-path"
                d="
                  M 0 48
                  L 95 48
                  L 120 48
                  L 140 35
                  L 158 64
                  L 180 14
                  L 204 74
                  L 228 48
                  L 330 48
                  L 355 48
                  L 375 35
                  L 393 64
                  L 415 14
                  L 439 74
                  L 463 48
                  L 565 48
                  L 590 48
                  L 610 35
                  L 628 64
                  L 650 14
                  L 674 74
                  L 700 48
                "
              />
            </svg>
          </div>

          <div className="chart-record-footer">
            <span>DATABASE NODE: MED-01</span>
            <span>LAST UPDATE: 08:42:16</span>
          </div>
        </div>

        <div className="chart-floating-card chart-floating-lab">
          <div className="chart-floating-icon chart-flask-icon">
            <span />
          </div>

          <div>
            <span>LAB ANALYSIS</span>
            <strong>COMPLETE</strong>
          </div>
        </div>

        <div className="chart-floating-card chart-floating-cloud">
          <div className="chart-cloud-icon">
            <span />
          </div>

          <div>
            <span>CLOUD SYNC</span>
            <strong>ONLINE</strong>
          </div>
        </div>

        <div className="chart-floating-lock">
          <svg viewBox="0 0 24 24">
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" />
            <circle cx="12" cy="15" r="1.2" />
          </svg>
        </div>
      </div>

      <div className="chart-global-pulse" />
      <div className="chart-vignette" />

      <style jsx>{`
        .chart-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background: #020617;
        }

        .chart-base {
          position: absolute;
          inset: -12%;
          background:
            radial-gradient(
              circle at 76% 34%,
              ${accent}24,
              transparent 34%
            ),
            radial-gradient(
              circle at 18% 30%,
              rgba(255, 255, 255, 0.045),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 78%,
              rgba(220, 38, 38, 0.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #020617 0%,
              #07111f 31%,
              #13070c 55%,
              #07111f 77%,
              #020617 100%
            );
          background-size: 140% 140%;
          animation: chartBaseMove 22s ease-in-out infinite alternate;
        }

        .chart-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.14;
          background-image:
            linear-gradient(
              rgba(248, 113, 113, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(248, 113, 113, 0.12) 1px,
              transparent 1px
            );
          background-size: 58px 58px;
          mask-image: radial-gradient(
            circle at 70% 40%,
            black 12%,
            transparent 75%
          );
          animation: chartGridMove 28s linear infinite;
        }

        .chart-scanlines {
          position: absolute;
          inset: 0;
          opacity: 0.065;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 5px,
            rgba(255, 255, 255, 0.07) 6px
          );
        }

        .chart-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
        }

        .chart-glow-left {
          width: 480px;
          height: 480px;
          left: -250px;
          top: 18%;
          background: ${accent}1c;
          animation: chartGlowLeft 15s ease-in-out infinite;
        }

        .chart-glow-right {
          width: 620px;
          height: 620px;
          right: -280px;
          bottom: -210px;
          background: rgba(239, 68, 68, 0.15);
          animation: chartGlowRight 18s ease-in-out infinite;
        }

        .chart-network-lines {
          position: absolute;
          inset: 0;
          opacity: 0.2;
        }

        .chart-network-lines svg {
          width: 100%;
          height: 100%;
        }

        .chart-network-lines path {
          fill: none;
          stroke: ${accent};
          stroke-width: 1;
          stroke-dasharray: 8 15;
          animation: chartNetworkTravel 18s linear infinite;
        }

        .chart-network-node {
          position: absolute;
          width: 13px;
          height: 13px;
          border: 1px solid ${accent}55;
          border-radius: 50%;
          background: rgba(2, 6, 23, 0.86);
          box-shadow: 0 0 16px ${accent}35;
          animation: chartNodeFloat 9s ease-in-out infinite;
        }

        .chart-network-node span {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 12px ${accent};
          animation: chartNodePulse 2.6s ease-in-out infinite;
        }

        .chart-background-label {
          position: absolute;
          display: flex;
          min-width: 110px;
          flex-direction: column;
          gap: 4px;
          opacity: 0.28;
          color: rgba(255, 255, 255, 0.6);
          font-family: "Courier New", monospace;
          animation: chartLabelFloat 13s ease-in-out infinite;
        }

        .chart-background-label span {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .chart-background-label small {
          color: ${accent};
          font-size: 7px;
          letter-spacing: 1.2px;
        }

        .chart-hero {
          display: none;
          position: absolute;
          top: clamp(88px, 10vh, 125px);
          right: clamp(28px, 5vw, 92px);
          width: min(650px, 49vw);
          height: min(610px, 72vh);
          min-height: 520px;
          perspective: 1400px;
        }

        .chart-hero-aura {
          position: absolute;
          inset: 5% 3% 4%;
          border-radius: 42%;
          background: radial-gradient(
            circle at center,
            ${accent}1d,
            transparent 65%
          );
          filter: blur(30px);
          animation: chartHeroAura 7s ease-in-out infinite;
        }

        .chart-document,
        .chart-record {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(248, 113, 113, 0.25);
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.88),
              rgba(2, 6, 23, 0.96)
            );
          box-shadow:
            0 28px 80px rgba(0, 0, 0, 0.48),
            inset 0 0 30px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(16px);
        }

        .chart-document {
          width: 70%;
          height: 70%;
          border-radius: 18px;
        }

        .chart-document-back {
          top: 2%;
          right: 0;
          opacity: 0.58;
          transform: rotate(7deg) translateZ(-90px);
          animation: chartDocumentBack 12s ease-in-out infinite;
        }

        .chart-document-middle {
          left: 0;
          bottom: 1%;
          opacity: 0.68;
          transform: rotate(-6deg) translateZ(-50px);
          animation: chartDocumentMiddle 14s ease-in-out infinite;
        }

        .chart-document-tab {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(248, 113, 113, 0.14);
          color: rgba(255, 255, 255, 0.65);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .chart-document-tab small {
          color: #fca5a5;
          font-size: 7px;
        }

        .chart-imaging-preview {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 32px auto 20px;
          overflow: hidden;
          border: 1px solid ${accent}33;
          border-radius: 16px;
          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.1),
              transparent 58%
            ),
            rgba(2, 6, 23, 0.65);
        }

        .chart-imaging-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(248, 113, 113, 0.35);
          border-radius: 48% 52% 46% 54%;
          transform: translate(-50%, -50%);
        }

        .chart-imaging-ring-one {
          width: 105px;
          height: 118px;
          animation: chartImagingRotate 15s linear infinite;
        }

        .chart-imaging-ring-two {
          width: 75px;
          height: 88px;
          animation: chartImagingRotateReverse 11s linear infinite;
        }

        .chart-imaging-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 42px;
          height: 55px;
          border-radius: 45%;
          background: ${accent}22;
          box-shadow:
            0 0 24px ${accent}33,
            inset 0 0 14px ${accent}44;
          transform: translate(-50%, -50%);
          animation: chartImagingCore 3.2s ease-in-out infinite;
        }

        .chart-imaging-crosshair {
          position: absolute;
          left: 50%;
          top: 50%;
          background: ${accent}35;
          transform: translate(-50%, -50%);
        }

        .chart-crosshair-x {
          width: 100%;
          height: 1px;
        }

        .chart-crosshair-y {
          width: 1px;
          height: 100%;
        }

        .chart-document-lines {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 0 30px;
        }

        .chart-document-lines span {
          display: block;
          height: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.075);
        }

        .chart-document-lines span:nth-child(2) {
          width: 72%;
        }

        .chart-document-lines span:nth-child(3) {
          width: 86%;
        }

        .chart-medication-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 28px;
        }

        .chart-medication-list > div {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
        }

        .chart-medication-icon {
          position: relative;
          width: 28px;
          height: 12px;
          flex-shrink: 0;
          border: 1px solid rgba(248, 113, 113, 0.45);
          border-radius: 999px;
          transform: rotate(-28deg);
        }

        .chart-medication-icon::after {
          position: absolute;
          left: 50%;
          top: -1px;
          width: 1px;
          height: 12px;
          content: "";
          background: rgba(248, 113, 113, 0.45);
        }

        .chart-medication-list p {
          display: flex;
          margin: 0;
          flex-direction: column;
          gap: 4px;
        }

        .chart-medication-list strong {
          color: rgba(255, 255, 255, 0.64);
          font-size: 8px;
          letter-spacing: 1px;
        }

        .chart-medication-list small {
          color: rgba(255, 255, 255, 0.25);
          font-size: 7px;
        }

        .chart-record {
          left: 50%;
          top: 50%;
          width: 86%;
          min-height: 495px;
          padding: 22px;
          border-color: ${accent}68;
          border-radius: 22px;
          box-shadow:
            0 35px 110px rgba(0, 0, 0, 0.58),
            0 0 42px ${accent}1f,
            inset 0 0 34px rgba(255, 255, 255, 0.035);
          transform: translate(-50%, -50%);
          animation: chartRecordFloat 8s ease-in-out infinite;
        }

        .chart-record-shine {
          position: absolute;
          left: -35%;
          top: -30%;
          width: 40%;
          height: 160%;
          opacity: 0.18;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.16),
            transparent
          );
          transform: rotate(18deg);
          animation: chartRecordShine 10s ease-in-out infinite;
        }

        .chart-record-scan {
          position: absolute;
          z-index: 8;
          left: 0;
          top: -18%;
          width: 100%;
          height: 16%;
          opacity: 0;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent}19,
            ${accent}55,
            transparent
          );
          border-bottom: 1px solid ${accent}55;
          filter: blur(0.2px);
          animation: chartRecordScan 9s ease-in-out infinite;
        }

        .chart-record-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 17px;
          border-bottom: 1px solid rgba(248, 113, 113, 0.15);
        }

        .chart-eyebrow {
          display: block;
          color: rgba(255, 255, 255, 0.38);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .chart-record-header h3 {
          margin: 7px 0 0;
          color: #ffffff;
          font-size: 17px;
          font-weight: 900;
          letter-spacing: 2.4px;
        }

        .chart-sync-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 5px;
          color: #fca5a5;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .chart-status-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 13px ${accent};
          animation: chartStatusPulse 2s ease-in-out infinite;
        }

        .chart-status-words {
          position: relative;
          width: 94px;
          height: 12px;
          overflow: hidden;
        }

        .chart-status-words span {
          position: absolute;
          inset: 0;
          opacity: 0;
          text-align: right;
          animation: chartStatusCycle 12s linear infinite;
        }

        .chart-status-words span:nth-child(2) {
          animation-delay: 3s;
        }

        .chart-status-words span:nth-child(3) {
          animation-delay: 6s;
        }

        .chart-status-words span:nth-child(4) {
          animation-delay: 9s;
        }

        .chart-patient-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 0 15px;
        }

        .chart-patient-avatar {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          overflow: hidden;
          border: 1px solid ${accent}55;
          border-radius: 14px;
          background:
            radial-gradient(
              circle at 50% 38%,
              ${accent}19,
              transparent 62%
            ),
            rgba(255, 255, 255, 0.02);
        }

        .chart-avatar-ring {
          position: absolute;
          inset: 7px;
          border: 1px dashed ${accent}44;
          border-radius: 50%;
          animation: chartAvatarRotate 12s linear infinite;
        }

        .chart-avatar-head {
          position: absolute;
          left: 50%;
          top: 12px;
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .chart-avatar-body {
          position: absolute;
          left: 50%;
          bottom: 7px;
          width: 31px;
          height: 19px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-bottom: 0;
          border-radius: 17px 17px 0 0;
          transform: translateX(-50%);
        }

        .chart-avatar-status {
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 7px;
          height: 7px;
          border: 2px solid #07111f;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 8px ${accent};
        }

        .chart-patient-identity {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 5px;
        }

        .chart-patient-identity > span {
          color: #fca5a5;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .chart-patient-identity > strong {
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          letter-spacing: 1.1px;
        }

        .chart-identity-bars {
          display: flex;
          margin-top: 3px;
          flex-direction: column;
          gap: 4px;
        }

        .chart-identity-bars span {
          display: block;
          width: 80%;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
        }

        .chart-identity-bars span:first-child {
          width: 52%;
          background: ${accent}35;
        }

        .chart-identity-bars span:last-child {
          width: 67%;
        }

        .chart-security-badge {
          display: flex;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: 1px solid ${accent}2d;
          border-radius: 12px;
          background: ${accent}0c;
        }

        .chart-security-badge svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: ${accent};
          stroke-width: 1.6;
        }

        .chart-security-badge span {
          color: rgba(255, 255, 255, 0.42);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .chart-patient-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .chart-patient-detail {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 11px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
        }

        .chart-patient-detail span {
          color: rgba(255, 255, 255, 0.3);
          font-size: 6px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .chart-patient-detail strong {
          color: rgba(255, 255, 255, 0.76);
          font-family: "Courier New", monospace;
          font-size: 7px;
          letter-spacing: 0.5px;
        }

        .chart-clinical-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 9px;
          margin-top: 10px;
        }

        .chart-clinical-panel {
          padding: 11px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.38);
        }

        .chart-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.38);
          font-size: 6px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .chart-panel-header small {
          color: #f87171;
          font-size: 5px;
          letter-spacing: 1px;
        }

        .chart-vitals {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          margin-top: 10px;
        }

        .chart-vitals > div {
          padding: 8px;
          border: 1px solid rgba(248, 113, 113, 0.11);
          border-radius: 8px;
          background: linear-gradient(
            145deg,
            rgba(239, 68, 68, 0.05),
            rgba(255, 255, 255, 0.012)
          );
        }

        .chart-vitals span,
        .chart-lab-results span {
          display: block;
          color: rgba(255, 255, 255, 0.28);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .chart-vitals strong {
          display: inline-block;
          margin-top: 5px;
          color: #ffffff;
          font-size: 16px;
          line-height: 1;
        }

        .chart-vitals small {
          margin-left: 3px;
          color: #fca5a5;
          font-size: 5px;
          font-weight: 800;
        }

        .chart-lab-results {
          display: flex;
          margin-top: 9px;
          flex-direction: column;
          gap: 5px;
        }

        .chart-lab-results > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 7px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.025);
        }

        .chart-lab-results strong {
          color: rgba(255, 255, 255, 0.78);
          font-family: "Courier New", monospace;
          font-size: 8px;
        }

        .chart-activity {
          position: relative;
          z-index: 2;
          margin-top: 9px;
          padding: 10px 11px 2px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.45);
        }

        .chart-activity-line {
          width: 100%;
          height: 55px;
          overflow: visible;
        }

        .chart-activity-baseline,
        .chart-activity-glow,
        .chart-activity-path {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .chart-activity-baseline {
          stroke: rgba(248, 113, 113, 0.08);
          stroke-width: 1;
        }

        .chart-activity-glow {
          stroke: ${accent}48;
          stroke-width: 8;
          filter: blur(5px);
        }

        .chart-activity-path {
          stroke: ${accent};
          stroke-width: 2;
          stroke-dasharray: 170 530;
          filter: drop-shadow(0 0 5px ${accent});
          animation: chartLineTravel 4.2s linear infinite;
        }

        .chart-record-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          color: rgba(255, 255, 255, 0.22);
          font-family: "Courier New", monospace;
          font-size: 5px;
          letter-spacing: 0.8px;
        }

        .chart-floating-card {
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 130px;
          padding: 10px 12px;
          border: 1px solid ${accent}33;
          border-radius: 12px;
          background: rgba(5, 11, 25, 0.82);
          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.35),
            0 0 17px ${accent}16;
          backdrop-filter: blur(12px);
        }

        .chart-floating-card > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .chart-floating-card span {
          color: rgba(255, 255, 255, 0.34);
          font-size: 6px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .chart-floating-card strong {
          color: #ffffff;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .chart-floating-lab {
          left: -3%;
          top: 10%;
          animation: chartFloatingLab 9s ease-in-out infinite;
        }

        .chart-floating-cloud {
          right: -2%;
          bottom: 8%;
          animation: chartFloatingCloud 11s ease-in-out infinite;
        }

        .chart-floating-icon {
          position: relative;
          width: 26px;
          height: 26px;
          border: 1px solid ${accent}33;
          border-radius: 8px;
          background: ${accent}0c;
        }

        .chart-flask-icon::before {
          position: absolute;
          left: 9px;
          top: 5px;
          width: 7px;
          height: 9px;
          content: "";
          border: 1.5px solid ${accent};
          border-top: 0;
          border-radius: 0 0 5px 5px;
          transform: skew(-7deg);
        }

        .chart-flask-icon::after {
          position: absolute;
          left: 10px;
          top: 3px;
          width: 5px;
          height: 5px;
          content: "";
          border-left: 1.5px solid ${accent};
          border-right: 1.5px solid ${accent};
        }

        .chart-cloud-icon {
          position: relative;
          width: 26px;
          height: 26px;
          border: 1px solid ${accent}33;
          border-radius: 8px;
          background: ${accent}0c;
        }

        .chart-cloud-icon::before {
          position: absolute;
          left: 5px;
          top: 11px;
          width: 16px;
          height: 8px;
          content: "";
          border: 1.5px solid ${accent};
          border-radius: 8px;
        }

        .chart-cloud-icon::after {
          position: absolute;
          left: 9px;
          top: 7px;
          width: 9px;
          height: 9px;
          content: "";
          border: 1.5px solid ${accent};
          border-bottom: 0;
          border-radius: 50% 50% 0 0;
          background: rgba(5, 11, 25, 0.9);
        }

        .chart-floating-lock {
          position: absolute;
          z-index: 7;
          right: 6%;
          top: 8%;
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid ${accent}35;
          border-radius: 50%;
          background: rgba(5, 11, 25, 0.82);
          box-shadow: 0 0 22px ${accent}1b;
          animation: chartFloatingLock 10s ease-in-out infinite;
        }

        .chart-floating-lock svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: ${accent};
          stroke-width: 1.5;
        }

        .chart-global-pulse {
          position: absolute;
          inset: 0;
          opacity: 0;
          background: radial-gradient(
            circle at 75% 42%,
            ${accent}15,
            transparent 48%
          );
          animation: chartGlobalPulse 8s ease-in-out infinite;
        }

        .chart-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 72% 43%,
              transparent 20%,
              rgba(2, 6, 23, 0.12) 55%,
              rgba(2, 6, 23, 0.82) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(2, 6, 23, 0.18),
              transparent 24%,
              transparent 74%,
              rgba(2, 6, 23, 0.62)
            );
        }

        @keyframes chartBaseMove {
          from {
            transform: translate3d(-2%, -2%, 0) scale(1);
            background-position: 0% 50%;
          }

          to {
            transform: translate3d(3%, 2%, 0) scale(1.05);
            background-position: 100% 50%;
          }
        }

        @keyframes chartGridMove {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(58px, 58px, 0);
          }
        }

        @keyframes chartNetworkTravel {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -160;
          }
        }

        @keyframes chartNodeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes chartNodePulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes chartLabelFloat {
          0%,
          100% {
            opacity: 0.18;
            transform: translateY(0);
          }

          50% {
            opacity: 0.4;
            transform: translateY(-16px);
          }
        }

        @keyframes chartHeroAura {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.95);
          }

          50% {
            opacity: 1;
            transform: scale(1.07);
          }
        }

        @keyframes chartRecordFloat {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateY(0)
              rotateX(0deg)
              rotateY(0deg);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateY(-9px)
              rotateX(1deg)
              rotateY(-1.2deg);
          }
        }

        @keyframes chartDocumentBack {
          0%,
          100% {
            transform:
              translate3d(0, 0, -90px)
              rotate(7deg);
          }

          50% {
            transform:
              translate3d(12px, -10px, -90px)
              rotate(9deg);
          }
        }

        @keyframes chartDocumentMiddle {
          0%,
          100% {
            transform:
              translate3d(0, 0, -50px)
              rotate(-6deg);
          }

          50% {
            transform:
              translate3d(-13px, 12px, -50px)
              rotate(-8deg);
          }
        }

        @keyframes chartImagingRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes chartImagingRotateReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes chartImagingCore {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes chartRecordShine {
          0%,
          72% {
            left: -45%;
            opacity: 0;
          }

          78% {
            opacity: 0.18;
          }

          92% {
            left: 125%;
            opacity: 0;
          }

          100% {
            left: 125%;
            opacity: 0;
          }
        }

        @keyframes chartRecordScan {
          0%,
          68% {
            top: -18%;
            opacity: 0;
          }

          73% {
            opacity: 0.55;
          }

          94% {
            top: 105%;
            opacity: 0.1;
          }

          100% {
            top: 105%;
            opacity: 0;
          }
        }

        @keyframes chartStatusPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.82);
          }

          50% {
            opacity: 1;
            transform: scale(1.16);
          }
        }

        @keyframes chartStatusCycle {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }

          5%,
          20% {
            opacity: 1;
            transform: translateY(0);
          }

          25%,
          100% {
            opacity: 0;
            transform: translateY(-6px);
          }
        }

        @keyframes chartAvatarRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes chartLineTravel {
          from {
            stroke-dashoffset: 700;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes chartFloatingLab {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-13px) rotate(1deg);
          }
        }

        @keyframes chartFloatingCloud {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(12px) rotate(-1deg);
          }
        }

        @keyframes chartFloatingLock {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-11px) rotate(5deg);
          }
        }

        @keyframes chartGlowLeft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(75px, 30px, 0) scale(1.12);
          }
        }

        @keyframes chartGlowRight {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-85px, -42px, 0) scale(1.13);
          }
        }

        @keyframes chartGlobalPulse {
          0%,
          72%,
          100% {
            opacity: 0;
            transform: scale(0.94);
          }

          82% {
            opacity: 0.8;
            transform: scale(1);
          }

          92% {
            opacity: 0.08;
            transform: scale(1.08);
          }
        }

        @media (max-width: 1100px) {
          .chart-hero {
            right: 2vw;
            width: 52vw;
          }

          .chart-record {
            width: 90%;
          }
        }

        @media (max-width: 900px) {
          .chart-hero {
            top: 17%;
            right: 50%;
            width: min(620px, 90vw);
            height: 590px;
            transform: translateX(50%);
          }

          .chart-background-label,
          .chart-network-node {
            opacity: 0.12;
          }
        }

        @media (max-width: 620px) {
          .chart-hero {
            top: 18%;
            width: 96vw;
            height: 530px;
            min-height: 500px;
          }

          .chart-record {
            width: 91%;
            min-height: 450px;
            padding: 16px;
          }

          .chart-record-header h3 {
            font-size: 14px;
          }

          .chart-sync-status {
            font-size: 6px;
          }

          .chart-status-words {
            width: 75px;
          }

          .chart-document {
            width: 73%;
          }

          .chart-patient-header {
            gap: 10px;
            padding: 13px 0;
          }

          .chart-patient-avatar {
            width: 48px;
            height: 48px;
          }

          .chart-security-badge {
            width: 42px;
            height: 42px;
          }

          .chart-patient-grid {
            gap: 5px;
          }

          .chart-patient-detail {
            padding: 7px;
          }

          .chart-clinical-grid {
            grid-template-columns: 1fr;
          }

          .chart-lab-panel {
            display: none;
          }

          .chart-floating-card {
            transform: scale(0.8);
          }

          .chart-floating-lab {
            left: -1%;
          }

          .chart-floating-cloud {
            right: -1%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chart-base,
          .chart-grid,
          .chart-network-lines path,
          .chart-network-node,
          .chart-network-node span,
          .chart-background-label,
          .chart-hero-aura,
          .chart-document,
          .chart-record,
          .chart-imaging-ring,
          .chart-imaging-core,
          .chart-record-shine,
          .chart-record-scan,
          .chart-status-dot,
          .chart-status-words span,
          .chart-avatar-ring,
          .chart-activity-path,
          .chart-floating-card,
          .chart-floating-lock,
          .chart-glow,
          .chart-global-pulse {
            animation: none;
          }

          .chart-status-words span {
            display: none;
          }

          .chart-status-words span:last-child {
            display: block;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}