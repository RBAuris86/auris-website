import Image from "next/image";
import Link from "next/link";

type ProductHeroProps = {
  division: string;
  divisionId: string;
  product: string;
  productId: string;
  tagline: string;
  accent: string;
  heroImage?: string;
};

type ChartHeroProps = {
  accent: string;
};


function ChartHero({ accent }: ChartHeroProps) {
  return (
    <div className="chart-hero">
      <div className="chart-ambient-glow" />
      <div className="chart-grid" />

      <div className="chart-folder chart-folder-back">
        <div className="chart-folder-tab">IMAGING</div>

        <div className="chart-imaging">
          <div className="chart-imaging-ring chart-ring-one" />
          <div className="chart-imaging-ring chart-ring-two" />
          <div className="chart-imaging-core" />
          <div className="chart-crosshair chart-crosshair-horizontal" />
          <div className="chart-crosshair chart-crosshair-vertical" />
        </div>

        <div className="chart-placeholder-lines">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="chart-folder chart-folder-middle">
        <div className="chart-folder-tab">MEDICATIONS</div>

        <div className="chart-medications">
          <div className="chart-medication">
            <span className="chart-pill" />

            <div>
              <strong>Medication 01</strong>
              <small>08:00 • Administered</small>
            </div>
          </div>

          <div className="chart-medication">
            <span className="chart-pill" />

            <div>
              <strong>Medication 02</strong>
              <small>12:00 • Scheduled</small>
            </div>
          </div>

          <div className="chart-medication">
            <span className="chart-pill" />

            <div>
              <strong>Medication 03</strong>
              <small>18:00 • Scheduled</small>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-record">
        <div className="chart-shine" />
        <div className="chart-scanner" />

        <div className="chart-record-header">
          <div>
            <span className="chart-eyebrow">
              AURIS MEDICAL RECORD SYSTEM
            </span>

            <h2>PATIENT CHART</h2>
          </div>

          <div className="chart-sync">
            <span className="chart-sync-dot" />

            <div className="chart-sync-words">
              <span>SYNCING</span>
              <span>VERIFYING</span>
              <span>ENCRYPTED</span>
              <span>SYNCHRONIZED</span>
            </div>
          </div>
        </div>

        <div className="chart-patient">
          <div className="chart-avatar">
            <div className="chart-avatar-ring" />
            <div className="chart-avatar-head" />
            <div className="chart-avatar-body" />
            <span className="chart-avatar-status" />
          </div>

          <div className="chart-patient-title">
            <span>PATIENT PROFILE</span>
            <strong>AUTHORIZED CLINICAL RECORD</strong>

            <div className="chart-name-lines">
              <span />
              <span />
            </div>
          </div>

          <div className="chart-secure">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3L19 6V11C19 15.4 16.1 19.4 12 21C7.9 19.4 5 15.4 5 11V6L12 3Z" />
              <path d="M9.5 12L11.2 13.7L14.8 10" />
            </svg>

            <span>SECURE</span>
          </div>
        </div>

        <div className="chart-details">
          <div>
            <span>PATIENT ID</span>
            <strong>AUR-MED-2048</strong>
          </div>

          <div>
            <span>ROOM</span>
            <strong>ICU-12</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>ACTIVE</strong>
          </div>

          <div>
            <span>UPDATED</span>
            <strong>08:42:16</strong>
          </div>
        </div>

        <div className="chart-panels">
          <div className="chart-panel chart-vitals-panel">
            <div className="chart-panel-heading">
              <span>LIVE VITALS</span>
              <small>MONITORING</small>
            </div>

            <div className="chart-vitals">
              <div>
                <span>HEART RATE</span>

                <p>
                  <strong>72</strong>
                  <small>BPM</small>
                </p>
              </div>

              <div>
                <span>OXYGEN</span>

                <p>
                  <strong>97</strong>
                  <small>%</small>
                </p>
              </div>

              <div>
                <span>TEMP</span>

                <p>
                  <strong>98.6</strong>
                  <small>°F</small>
                </p>
              </div>
            </div>
          </div>

          <div className="chart-panel chart-labs-panel">
            <div className="chart-panel-heading">
              <span>LABS</span>
              <small>VERIFIED</small>
            </div>

            <div className="chart-labs">
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

        <div className="chart-ecg-panel">
          <div className="chart-panel-heading">
            <span>CLINICAL TELEMETRY</span>
            <small>LIVE</small>
          </div>

          <svg
            className="chart-ecg"
            viewBox="0 0 700 90"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="chart-ecg-shadow"
              d="
                M0 47
                L88 47
                L110 47
                L130 34
                L148 62
                L170 13
                L194 73
                L220 47
                L320 47
                L345 47
                L365 34
                L383 62
                L405 13
                L429 73
                L455 47
                L555 47
                L580 47
                L600 34
                L618 62
                L640 13
                L664 73
                L700 47
              "
            />

            <path
              className="chart-ecg-line"
              d="
                M0 47
                L88 47
                L110 47
                L130 34
                L148 62
                L170 13
                L194 73
                L220 47
                L320 47
                L345 47
                L365 34
                L383 62
                L405 13
                L429 73
                L455 47
                L555 47
                L580 47
                L600 34
                L618 62
                L640 13
                L664 73
                L700 47
              "
            />
          </svg>
        </div>

        <div className="chart-footer">
          <span>DATABASE NODE: MED-01</span>
          <span>HIPAA ENCRYPTED</span>
        </div>
      </div>

      <div className="chart-floating-card chart-floating-lab">
        <span className="chart-floating-icon">＋</span>

        <div>
          <small>LAB ANALYSIS</small>
          <strong>COMPLETE</strong>
        </div>
      </div>

      <div className="chart-floating-card chart-floating-cloud">
        <span className="chart-floating-icon">☁</span>

        <div>
          <small>CLOUD SYNC</small>
          <strong>ONLINE</strong>
        </div>
      </div>

      <style>{`
        .chart-hero {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 65% 28%,
              ${accent}24,
              transparent 35%
            ),
            radial-gradient(
              circle at 25% 80%,
              ${accent}16,
              transparent 38%
            ),
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.82),
              rgba(2, 6, 23, 0.98)
            );
        }

        .chart-ambient-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: ${accent}1f;
          filter: blur(85px);
          transform: translate(-50%, -50%);
          animation: chartAmbientPulse 7s ease-in-out infinite;
        }

        .chart-grid {
          position: absolute;
          inset: -60px;
          opacity: 0.16;
          background-image:
            linear-gradient(
              ${accent}20 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${accent}20 1px,
              transparent 1px
            );
          background-size: 42px 42px;
          mask-image: radial-gradient(
            circle at center,
            black,
            transparent 78%
          );
          animation: chartGridTravel 24s linear infinite;
        }

        .chart-folder,
        .chart-record {
          position: absolute;
          border: 1px solid ${accent}45;
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.91),
              rgba(2, 6, 23, 0.97)
            );
          box-shadow:
            0 24px 75px rgba(0, 0, 0, 0.52),
            inset 0 0 24px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(15px);
        }

        .chart-folder {
          width: 54%;
          height: 55%;
          border-radius: 18px;
          overflow: hidden;
        }

        .chart-folder-back {
          right: 5%;
          top: 7%;
          opacity: 0.53;
          transform: rotate(7deg);
          animation: chartFolderBack 11s ease-in-out infinite;
        }

        .chart-folder-middle {
          left: 5%;
          bottom: 5%;
          opacity: 0.63;
          transform: rotate(-7deg);
          animation: chartFolderMiddle 13s ease-in-out infinite;
        }

        .chart-folder-tab {
          padding: 14px 17px;
          border-bottom: 1px solid ${accent}28;
          color: rgba(255, 255, 255, 0.56);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .chart-imaging {
          position: relative;
          width: 122px;
          height: 122px;
          margin: 27px auto 18px;
          overflow: hidden;
          border: 1px solid ${accent}35;
          border-radius: 14px;
          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.08),
              transparent 60%
            ),
            rgba(2, 6, 23, 0.6);
        }

        .chart-imaging-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${accent}70;
          border-radius: 47% 53% 44% 56%;
        }

        .chart-ring-one {
          width: 84px;
          height: 96px;
          transform: translate(-50%, -50%);
          animation: chartSpin 13s linear infinite;
        }

        .chart-ring-two {
          width: 58px;
          height: 68px;
          transform: translate(-50%, -50%);
          animation: chartSpinReverse 9s linear infinite;
        }

        .chart-imaging-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 31px;
          height: 42px;
          border-radius: 48%;
          background: ${accent}32;
          box-shadow:
            0 0 22px ${accent}45,
            inset 0 0 12px ${accent}50;
          transform: translate(-50%, -50%);
          animation: chartCorePulse 3s ease-in-out infinite;
        }

        .chart-crosshair {
          position: absolute;
          left: 50%;
          top: 50%;
          background: ${accent}36;
          transform: translate(-50%, -50%);
        }

        .chart-crosshair-horizontal {
          width: 100%;
          height: 1px;
        }

        .chart-crosshair-vertical {
          width: 1px;
          height: 100%;
        }

        .chart-placeholder-lines {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 0 24px;
        }

        .chart-placeholder-lines span {
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
        }

        .chart-placeholder-lines span:nth-child(2) {
          width: 70%;
        }

        .chart-placeholder-lines span:nth-child(3) {
          width: 84%;
        }

        .chart-medications {
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 24px;
        }

        .chart-medication {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
        }

        .chart-medication div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .chart-medication strong {
          color: rgba(255, 255, 255, 0.62);
          font-size: 7px;
        }

        .chart-medication small {
          color: rgba(255, 255, 255, 0.27);
          font-size: 6px;
        }

        .chart-pill {
          position: relative;
          width: 25px;
          height: 10px;
          flex-shrink: 0;
          border: 1px solid ${accent}75;
          border-radius: 999px;
          transform: rotate(-28deg);
        }

        .chart-pill::after {
          position: absolute;
          left: 50%;
          top: -1px;
          width: 1px;
          height: 10px;
          content: "";
          background: ${accent}75;
        }

        .chart-record {
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 79%;
          min-height: 414px;
          padding: 19px;
          overflow: hidden;
          border-color: ${accent}75;
          border-radius: 21px;
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.62),
            0 0 35px ${accent}24,
            inset 0 0 28px rgba(255, 255, 255, 0.03);
          transform: translate(-50%, -50%);
          animation: chartRecordFloat 8s ease-in-out infinite;
        }

        .chart-shine {
          position: absolute;
          left: -45%;
          top: -35%;
          width: 34%;
          height: 170%;
          opacity: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.16),
            transparent
          );
          transform: rotate(18deg);
          animation: chartShine 9s ease-in-out infinite;
        }

        .chart-scanner {
          position: absolute;
          z-index: 10;
          left: 0;
          top: -16%;
          width: 100%;
          height: 14%;
          opacity: 0;
          border-bottom: 1px solid ${accent}80;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent}20,
            ${accent}55,
            transparent
          );
          animation: chartScanner 9s ease-in-out infinite;
        }

        .chart-record-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid ${accent}2c;
        }

        .chart-eyebrow {
          display: block;
          color: rgba(255, 255, 255, 0.36);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.45px;
        }

        .chart-record-header h2 {
          margin: 6px 0 0;
          color: #ffffff;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 2px;
        }

        .chart-sync {
          display: flex;
          align-items: center;
          gap: 7px;
          padding-top: 4px;
        }

        .chart-sync-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 11px ${accent};
          animation: chartSyncDot 2s ease-in-out infinite;
        }

        .chart-sync-words {
          position: relative;
          width: 82px;
          height: 10px;
          overflow: hidden;
        }

        .chart-sync-words span {
          position: absolute;
          inset: 0;
          opacity: 0;
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
          text-align: right;
          animation: chartSyncCycle 12s linear infinite;
        }

        .chart-sync-words span:nth-child(2) {
          animation-delay: 3s;
        }

        .chart-sync-words span:nth-child(3) {
          animation-delay: 6s;
        }

        .chart-sync-words span:nth-child(4) {
          animation-delay: 9s;
        }

        .chart-patient {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 0 13px;
        }

        .chart-avatar {
          position: relative;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          overflow: hidden;
          border: 1px solid ${accent}62;
          border-radius: 12px;
          background: ${accent}0c;
        }

        .chart-avatar-ring {
          position: absolute;
          inset: 6px;
          border: 1px dashed ${accent}55;
          border-radius: 50%;
          animation: chartSpin 12s linear infinite;
        }

        .chart-avatar-head {
          position: absolute;
          left: 50%;
          top: 10px;
          width: 13px;
          height: 13px;
          border: 1.5px solid rgba(255, 255, 255, 0.72);
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .chart-avatar-body {
          position: absolute;
          left: 50%;
          bottom: 6px;
          width: 27px;
          height: 17px;
          border: 1.5px solid rgba(255, 255, 255, 0.72);
          border-bottom: 0;
          border-radius: 16px 16px 0 0;
          transform: translateX(-50%);
        }

        .chart-avatar-status {
          position: absolute;
          right: 5px;
          bottom: 5px;
          width: 6px;
          height: 6px;
          border: 2px solid #07111f;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 7px ${accent};
        }

        .chart-patient-title {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
          gap: 4px;
        }

        .chart-patient-title > span {
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .chart-patient-title > strong {
          color: rgba(255, 255, 255, 0.72);
          font-size: 7px;
          letter-spacing: 1px;
        }

        .chart-name-lines {
          display: flex;
          margin-top: 3px;
          flex-direction: column;
          gap: 4px;
        }

        .chart-name-lines span {
          width: 72%;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
        }

        .chart-name-lines span:first-child {
          width: 48%;
          background: ${accent}35;
        }

        .chart-secure {
          display: flex;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          border: 1px solid ${accent}40;
          border-radius: 10px;
          background: ${accent}0d;
        }

        .chart-secure svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: ${accent};
          stroke-width: 1.6;
        }

        .chart-secure span {
          color: rgba(255, 255, 255, 0.38);
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .chart-details {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 6px;
        }

        .chart-details > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 9px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.018);
        }

        .chart-details span {
          color: rgba(255, 255, 255, 0.27);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .chart-details strong {
          color: rgba(255, 255, 255, 0.74);
          font-family: "Courier New", monospace;
          font-size: 6px;
        }

        .chart-panels {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 7px;
          margin-top: 8px;
        }

        .chart-panel {
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 9px;
          background: rgba(2, 6, 23, 0.42);
        }

        .chart-panel-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.34);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .chart-panel-heading small {
          color: ${accent};
          font-size: 4px;
          letter-spacing: 0.8px;
        }

        .chart-vitals {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 5px;
          margin-top: 8px;
        }

        .chart-vitals > div {
          padding: 7px;
          border: 1px solid ${accent}1e;
          border-radius: 7px;
          background: ${accent}0a;
        }

        .chart-vitals > div > span {
          display: block;
          color: rgba(255, 255, 255, 0.26);
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.6px;
        }

        .chart-vitals p {
          margin: 4px 0 0;
        }

        .chart-vitals strong {
          color: #ffffff;
          font-size: 14px;
          line-height: 1;
        }

        .chart-vitals small {
          margin-left: 2px;
          color: ${accent};
          font-size: 4px;
          font-weight: 900;
        }

        .chart-labs {
          display: flex;
          margin-top: 7px;
          flex-direction: column;
          gap: 4px;
        }

        .chart-labs > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 6px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.022);
        }

        .chart-labs span {
          color: rgba(255, 255, 255, 0.27);
          font-size: 4px;
          font-weight: 900;
        }

        .chart-labs strong {
          color: rgba(255, 255, 255, 0.74);
          font-family: "Courier New", monospace;
          font-size: 6px;
        }

        .chart-ecg-panel {
          position: relative;
          z-index: 2;
          margin-top: 7px;
          padding: 8px 9px 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 9px;
          background: rgba(2, 6, 23, 0.45);
        }

        .chart-ecg {
          width: 100%;
          height: 45px;
          overflow: visible;
        }

        .chart-ecg-shadow,
        .chart-ecg-line {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .chart-ecg-shadow {
          stroke: ${accent}45;
          stroke-width: 7;
          filter: blur(4px);
        }

        .chart-ecg-line {
          stroke: ${accent};
          stroke-width: 2;
          stroke-dasharray: 165 535;
          filter: drop-shadow(0 0 4px ${accent});
          animation: chartEcgTravel 4s linear infinite;
        }

        .chart-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          padding-top: 6px;
          color: rgba(255, 255, 255, 0.2);
          font-family: "Courier New", monospace;
          font-size: 4px;
          letter-spacing: 0.7px;
        }

        .chart-floating-card {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 116px;
          padding: 8px 10px;
          border: 1px solid ${accent}42;
          border-radius: 10px;
          background: rgba(5, 11, 25, 0.88);
          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.45),
            0 0 16px ${accent}18;
          backdrop-filter: blur(12px);
        }

        .chart-floating-card div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .chart-floating-card small {
          color: rgba(255, 255, 255, 0.3);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .chart-floating-card strong {
          color: #ffffff;
          font-size: 6px;
          letter-spacing: 0.8px;
        }

        .chart-floating-icon {
          display: grid;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid ${accent}45;
          border-radius: 7px;
          background: ${accent}0d;
          color: ${accent};
          font-size: 12px;
        }

        .chart-floating-lab {
          left: 2%;
          top: 9%;
          animation: chartFloatingLab 8s ease-in-out infinite;
        }

        .chart-floating-cloud {
          right: 2%;
          bottom: 8%;
          animation: chartFloatingCloud 10s ease-in-out infinite;
        }

        @keyframes chartAmbientPulse {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes chartGridTravel {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(42px, 42px);
          }
        }

        @keyframes chartFolderBack {
          0%,
          100% {
            transform: translate(0, 0) rotate(7deg);
          }

          50% {
            transform: translate(9px, -8px) rotate(9deg);
          }
        }

        @keyframes chartFolderMiddle {
          0%,
          100% {
            transform: translate(0, 0) rotate(-7deg);
          }

          50% {
            transform: translate(-10px, 9px) rotate(-9deg);
          }
        }

        @keyframes chartRecordFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes chartSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes chartSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes chartCorePulse {
          0%,
          100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.9);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes chartShine {
          0%,
          68% {
            left: -45%;
            opacity: 0;
          }

          74% {
            opacity: 0.17;
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

        @keyframes chartScanner {
          0%,
          66% {
            top: -16%;
            opacity: 0;
          }

          72% {
            opacity: 0.6;
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

        @keyframes chartSyncDot {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes chartSyncCycle {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }

          5%,
          20% {
            opacity: 1;
            transform: translateY(0);
          }

          25%,
          100% {
            opacity: 0;
            transform: translateY(-5px);
          }
        }

        @keyframes chartEcgTravel {
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
            transform: translateY(-11px) rotate(1deg);
          }
        }

        @keyframes chartFloatingCloud {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @media (max-width: 650px) {
          .chart-record {
            width: 88%;
            min-height: 390px;
            padding: 15px;
          }

          .chart-folder {
            width: 59%;
          }

          .chart-labs-panel {
            display: none;
          }

          .chart-panels {
            grid-template-columns: 1fr;
          }

          .chart-floating-card {
            transform: scale(0.82);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chart-ambient-glow,
          .chart-grid,
          .chart-folder,
          .chart-record,
          .chart-imaging-ring,
          .chart-imaging-core,
          .chart-shine,
          .chart-scanner,
          .chart-sync-dot,
          .chart-sync-words span,
          .chart-avatar-ring,
          .chart-ecg-line,
          .chart-floating-card {
            animation: none;
          }

          .chart-sync-words span {
            display: none;
          }

          .chart-sync-words span:last-child {
            display: block;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

type PulseHeroProps = {
  accent: string;
};

function PulseHero({ accent }: PulseHeroProps) {
  return (
    <div className="pulse-hero">
      <div className="pulse-ambient-glow" />
      <div className="pulse-grid" />

      <div className="pulse-monitor">
        <div className="pulse-monitor-header">
          <div>
            <span>AURIS PULSE</span>
            <strong>LIVE PATIENT TELEMETRY</strong>
          </div>

          <div className="pulse-live">
            <span />
            LIVE
          </div>
        </div>

        <div className="pulse-patient-row">
          <div>
            <span>PATIENT</span>
            <strong>AUR-MED-2048</strong>
          </div>

          <div>
            <span>BED</span>
            <strong>ICU-12</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="pulse-stable">STABLE</strong>
          </div>
        </div>

        <div className="pulse-ecg-panel">
          <div className="pulse-panel-heading">
            <span>ECG LEAD II</span>
            <small>25 MM/S</small>
          </div>

          <svg
            className="pulse-ecg"
            viewBox="0 0 700 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="pulse-ecg-shadow"
              d="
                M0 82
                L75 82
                L110 82
                L132 63
                L151 102
                L180 20
                L210 132
                L242 82
                L330 82
                L365 82
                L387 63
                L406 102
                L435 20
                L465 132
                L497 82
                L585 82
                L620 82
                L642 63
                L661 102
                L690 20
                L700 55
              "
            />

            <path
              className="pulse-ecg-line"
              d="
                M0 82
                L75 82
                L110 82
                L132 63
                L151 102
                L180 20
                L210 132
                L242 82
                L330 82
                L365 82
                L387 63
                L406 102
                L435 20
                L465 132
                L497 82
                L585 82
                L620 82
                L642 63
                L661 102
                L690 20
                L700 55
              "
            />
          </svg>
        </div>

        <div className="pulse-main-vital">
          <div>
            <span>HEART RATE</span>

            <div className="pulse-heart-rate">
              <strong>72</strong>
              <small>BPM</small>
            </div>
          </div>

          <div className="pulse-heart-icon">♥</div>
        </div>

        <div className="pulse-vitals">
          <div>
            <span>SpO₂</span>

            <p>
              <strong>98</strong>
              <small>%</small>
            </p>
          </div>

          <div>
            <span>PRESSURE</span>

            <p>
              <strong>118</strong>
              <small>/76</small>
            </p>
          </div>

          <div>
            <span>RESP</span>

            <p>
              <strong>16</strong>
              <small>/MIN</small>
            </p>
          </div>

          <div>
            <span>TEMP</span>

            <p>
              <strong>98.6</strong>
              <small>°F</small>
            </p>
          </div>
        </div>

        <div className="pulse-footer">
          <span>CENTRAL STATION CONNECTED</span>
          <span>ENCRYPTED TELEMETRY</span>
        </div>
      </div>

      <div className="pulse-floating-card pulse-floating-sensor">
        <span className="pulse-floating-icon">⌁</span>

        <div>
          <small>WIRELESS SENSOR</small>
          <strong>ACTIVE</strong>
        </div>
      </div>

      <div className="pulse-floating-card pulse-floating-station">
        <span className="pulse-floating-icon">⬢</span>

        <div>
          <small>CENTRAL STATION</small>
          <strong>SYNCHRONIZED</strong>
        </div>
      </div>

      <style>{`
        .pulse-hero {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 65% 30%,
              ${accent}24,
              transparent 36%
            ),
            radial-gradient(
              circle at 20% 85%,
              ${accent}16,
              transparent 38%
            ),
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.82),
              rgba(2, 6, 23, 0.98)
            );
        }

        .pulse-ambient-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          background: ${accent}20;
          filter: blur(85px);
          transform: translate(-50%, -50%);
          animation: pulseAmbient 6s ease-in-out infinite;
        }

        .pulse-grid {
          position: absolute;
          inset: -60px;
          opacity: 0.15;
          background-image:
            linear-gradient(${accent}20 1px, transparent 1px),
            linear-gradient(90deg, ${accent}20 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(
            circle at center,
            black,
            transparent 80%
          );
          animation: pulseGridMove 22s linear infinite;
        }

        .pulse-monitor {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 79%;
          min-height: 405px;
          padding: 19px;
          overflow: hidden;
          border: 1px solid ${accent}75;
          border-radius: 21px;
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.92),
              rgba(2, 6, 23, 0.98)
            );
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.62),
            0 0 35px ${accent}24,
            inset 0 0 28px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          transform: translate(-50%, -50%);
          animation: pulseMonitorFloat 8s ease-in-out infinite;
        }

        .pulse-monitor-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid ${accent}2c;
        }

        .pulse-monitor-header > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pulse-monitor-header span {
          color: rgba(255, 255, 255, 0.38);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .pulse-monitor-header strong {
          color: #ffffff;
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 1.6px;
        }

        .pulse-live {
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pulse-live span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 11px ${accent};
          animation: pulseLiveDot 1.2s ease-in-out infinite;
        }

        .pulse-patient-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
          margin-top: 12px;
        }

        .pulse-patient-row > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.018);
        }

        .pulse-patient-row span {
          color: rgba(255, 255, 255, 0.28);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .pulse-patient-row strong {
          color: rgba(255, 255, 255, 0.75);
          font-family: "Courier New", monospace;
          font-size: 6px;
        }

        .pulse-patient-row .pulse-stable {
          color: ${accent};
        }

        .pulse-ecg-panel {
          margin-top: 10px;
          padding: 9px 10px 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.5);
        }

        .pulse-panel-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pulse-panel-heading small {
          color: ${accent};
          font-size: 4px;
          letter-spacing: 0.8px;
        }

        .pulse-ecg {
          width: 100%;
          height: 100px;
          overflow: visible;
        }

        .pulse-ecg-shadow,
        .pulse-ecg-line {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pulse-ecg-shadow {
          stroke: ${accent}48;
          stroke-width: 8;
          filter: blur(5px);
        }

        .pulse-ecg-line {
          stroke: ${accent};
          stroke-width: 2.2;
          stroke-dasharray: 165 535;
          filter: drop-shadow(0 0 5px ${accent});
          animation: pulseEcgTravel 4s linear infinite;
        }

        .pulse-main-vital {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 9px;
          padding: 11px 13px;
          border: 1px solid ${accent}24;
          border-radius: 10px;
          background: ${accent}0a;
        }

        .pulse-main-vital > div:first-child > span {
          color: rgba(255, 255, 255, 0.32);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pulse-heart-rate {
          display: flex;
          align-items: flex-end;
          margin-top: 4px;
        }

        .pulse-heart-rate strong {
          color: ${accent};
          font-size: 38px;
          line-height: 0.9;
          text-shadow: 0 0 16px ${accent}55;
          animation: pulseHeartRate 1.2s ease-in-out infinite;
        }

        .pulse-heart-rate small {
          margin: 0 0 4px 4px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 5px;
          font-weight: 900;
        }

        .pulse-heart-icon {
          display: grid;
          width: 45px;
          height: 45px;
          place-items: center;
          border: 1px solid ${accent}55;
          border-radius: 50%;
          background: ${accent}0f;
          color: ${accent};
          font-size: 22px;
          box-shadow: 0 0 20px ${accent}20;
          animation: pulseHeartBeat 1.2s ease-in-out infinite;
        }

        .pulse-vitals {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 6px;
          margin-top: 8px;
        }

        .pulse-vitals > div {
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 8px;
          background: rgba(2, 6, 23, 0.45);
        }

        .pulse-vitals > div > span {
          display: block;
          color: rgba(255, 255, 255, 0.27);
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .pulse-vitals p {
          margin: 5px 0 0;
        }

        .pulse-vitals strong {
          color: #ffffff;
          font-size: 16px;
          line-height: 1;
        }

        .pulse-vitals small {
          margin-left: 2px;
          color: ${accent};
          font-size: 4px;
          font-weight: 900;
        }

        .pulse-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 9px;
          padding-top: 7px;
          border-top: 1px solid rgba(255, 255, 255, 0.045);
          color: rgba(255, 255, 255, 0.2);
          font-family: "Courier New", monospace;
          font-size: 4px;
          letter-spacing: 0.7px;
        }

        .pulse-floating-card {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 116px;
          padding: 8px 10px;
          border: 1px solid ${accent}42;
          border-radius: 10px;
          background: rgba(5, 11, 25, 0.88);
          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.45),
            0 0 16px ${accent}18;
          backdrop-filter: blur(12px);
        }

        .pulse-floating-card div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .pulse-floating-card small {
          color: rgba(255, 255, 255, 0.3);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .pulse-floating-card strong {
          color: #ffffff;
          font-size: 6px;
          letter-spacing: 0.8px;
        }

        .pulse-floating-icon {
          display: grid;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid ${accent}45;
          border-radius: 7px;
          background: ${accent}0d;
          color: ${accent};
          font-size: 12px;
        }

        .pulse-floating-sensor {
          left: 2%;
          top: 9%;
          animation: pulseFloatingSensor 8s ease-in-out infinite;
        }

        .pulse-floating-station {
          right: 2%;
          bottom: 8%;
          animation: pulseFloatingStation 10s ease-in-out infinite;
        }

        @keyframes pulseAmbient {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes pulseGridMove {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(40px, 40px);
          }
        }

        @keyframes pulseMonitorFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes pulseLiveDot {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes pulseEcgTravel {
          from {
            stroke-dashoffset: 700;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulseHeartRate {
          0%,
          60%,
          100% {
            transform: scale(1);
          }

          68% {
            transform: scale(1.08);
          }

          82% {
            transform: scale(1.035);
          }
        }

        @keyframes pulseHeartBeat {
          0%,
          60%,
          100% {
            transform: scale(1);
          }

          68% {
            transform: scale(1.14);
          }

          82% {
            transform: scale(1.06);
          }
        }

        @keyframes pulseFloatingSensor {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-11px) rotate(1deg);
          }
        }

        @keyframes pulseFloatingStation {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @media (max-width: 650px) {
          .pulse-monitor {
            width: 88%;
            min-height: 390px;
            padding: 15px;
          }

          .pulse-vitals {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pulse-floating-card {
            transform: scale(0.82);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-ambient-glow,
          .pulse-grid,
          .pulse-monitor,
          .pulse-live span,
          .pulse-ecg-line,
          .pulse-heart-rate strong,
          .pulse-heart-icon,
          .pulse-floating-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

type ScribeHeroProps = {
  accent: string;
};

function ScribeHero({ accent }: ScribeHeroProps) {
  return (
    <div className="scribe-hero">
      <div className="scribe-ambient" />
      <div className="scribe-grid" />

      <div className="scribe-workspace">
        <div className="scribe-scan" />
        <div className="scribe-shine" />

        <div className="scribe-header">
          <div>
            <span>AURIS SCRIBE</span>
            <strong>AI CLINICAL DOCUMENTATION</strong>
          </div>

          <div className="scribe-recording">
            <span />
            LISTENING
          </div>
        </div>

        <div className="scribe-session">
          <div>
            <small>PATIENT</small>
            <strong>AUR-MED-2048</strong>
          </div>

          <div>
            <small>ENCOUNTER</small>
            <strong>FOLLOW-UP</strong>
          </div>

          <div>
            <small>PROVIDER</small>
            <strong>DR. AURIS</strong>
          </div>
        </div>

        <div className="scribe-main">
          <div className="scribe-transcript-panel">
            <div className="scribe-panel-title">
              <span>LIVE TRANSCRIPT</span>
              <small>REAL-TIME</small>
            </div>

            <div className="scribe-waveform">
              {[
                10, 18, 27, 14, 34, 22, 43, 17, 31, 48, 25, 37, 15, 29, 41,
                20, 34, 12, 26, 39, 18, 32, 46, 23, 35, 16, 28, 42, 21, 36,
              ].map((height, index) => (
                <span
                  key={index}
                  style={{
                    height,
                    animationDelay: `${index * -0.06}s`,
                  }}
                />
              ))}
            </div>

            <div className="scribe-transcript">
              <p>
                <span>PHYSICIAN</span>
                Patient reports improvement in respiratory symptoms since the
                previous visit.
              </p>

              <p>
                <span>PATIENT</span>
                Breathing has improved, but fatigue continues during physical
                activity.
              </p>

              <p className="scribe-active-line">
                <span>PHYSICIAN</span>
                Continue current treatment and schedule follow-up laboratory
                testing...
                <i />
              </p>
            </div>
          </div>

          <div className="scribe-ai-panel">
            <div className="scribe-panel-title">
              <span>AI PROCESSING</span>
              <small>ACTIVE</small>
            </div>

            <div className="scribe-ai-core">
              <div className="scribe-ai-ring scribe-ring-one" />
              <div className="scribe-ai-ring scribe-ring-two" />
              <div className="scribe-ai-ring scribe-ring-three" />

              <div className="scribe-ai-center">AI</div>
            </div>

            <div className="scribe-processing-list">
              <div>
                <span />
                Speech recognition
              </div>

              <div>
                <span />
                Clinical terminology
              </div>

              <div>
                <span />
                Context verification
              </div>
            </div>
          </div>
        </div>

        <div className="scribe-note">
          <div className="scribe-panel-title">
            <span>STRUCTURED CLINICAL NOTE</span>
            <small>AUTO-GENERATED</small>
          </div>

          <div className="scribe-note-grid">
            <div>
              <span>SUBJECTIVE</span>
              <p>Respiratory symptoms improving. Mild exertional fatigue.</p>
            </div>

            <div>
              <span>OBJECTIVE</span>
              <p>Stable vitals. Oxygen saturation within normal range.</p>
            </div>

            <div>
              <span>ASSESSMENT</span>
              <p>Positive response to current treatment plan.</p>
            </div>

            <div>
              <span>PLAN</span>
              <p>Continue medication. Order follow-up laboratory testing.</p>
            </div>
          </div>
        </div>

        <div className="scribe-footer">
          <span>ENCRYPTED SESSION</span>
          <span>CLINICAL REVIEW REQUIRED</span>
          <span>CONFIDENCE 97.8%</span>
        </div>
      </div>

      <div className="scribe-floating-card scribe-code-card">
        <div className="scribe-floating-icon">#</div>

        <div>
          <small>ICD-10 SUGGESTION</small>
          <strong>R06.02</strong>
        </div>
      </div>

      <div className="scribe-floating-card scribe-note-card">
        <div className="scribe-floating-icon">✓</div>

        <div>
          <small>NOTE STATUS</small>
          <strong>READY FOR REVIEW</strong>
        </div>
      </div>

      <style>{`
        .scribe-hero {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 68% 28%,
              ${accent}25,
              transparent 37%
            ),
            radial-gradient(
              circle at 20% 82%,
              ${accent}15,
              transparent 38%
            ),
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.84),
              rgba(2, 6, 23, 0.98)
            );
        }

        .scribe-ambient {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: ${accent}20;
          filter: blur(90px);
          transform: translate(-50%, -50%);
          animation: scribeAmbient 7s ease-in-out infinite;
        }

        .scribe-grid {
          position: absolute;
          inset: -60px;
          opacity: 0.14;
          background-image:
            linear-gradient(${accent}20 1px, transparent 1px),
            linear-gradient(90deg, ${accent}20 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(
            circle at center,
            black,
            transparent 80%
          );
          animation: scribeGridMove 24s linear infinite;
        }

        .scribe-workspace {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 82%;
          min-height: 416px;
          padding: 18px;
          overflow: hidden;
          border: 1px solid ${accent}72;
          border-radius: 21px;
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.92),
            rgba(2, 6, 23, 0.98)
          );
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.62),
            0 0 38px ${accent}22,
            inset 0 0 28px rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          transform: translate(-50%, -50%);
          animation: scribeWorkspaceFloat 8s ease-in-out infinite;
        }

        .scribe-scan {
          position: absolute;
          z-index: 9;
          left: 0;
          top: -15%;
          width: 100%;
          height: 13%;
          opacity: 0;
          border-bottom: 1px solid ${accent}75;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent}18,
            ${accent}46,
            transparent
          );
          animation: scribeScan 9s ease-in-out infinite;
        }

        .scribe-shine {
          position: absolute;
          left: -40%;
          top: -35%;
          width: 32%;
          height: 175%;
          opacity: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.14),
            transparent
          );
          transform: rotate(18deg);
          animation: scribeShine 10s ease-in-out infinite;
        }

        .scribe-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 13px;
          border-bottom: 1px solid ${accent}2c;
        }

        .scribe-header > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .scribe-header span {
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .scribe-header strong {
          color: #ffffff;
          font-size: 14px;
          font-weight: 950;
          letter-spacing: 1.7px;
        }

        .scribe-recording {
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .scribe-recording span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 12px ${accent};
          animation: scribeRecording 1.4s ease-in-out infinite;
        }

        .scribe-session {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
          margin-top: 11px;
        }

        .scribe-session > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 7px 9px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.018);
        }

        .scribe-session small {
          color: rgba(255, 255, 255, 0.28);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .scribe-session strong {
          color: rgba(255, 255, 255, 0.76);
          font-family: "Courier New", monospace;
          font-size: 6px;
        }

        .scribe-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.55fr 0.65fr;
          gap: 8px;
          margin-top: 8px;
        }

        .scribe-transcript-panel,
        .scribe-ai-panel,
        .scribe-note {
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.48);
        }

        .scribe-transcript-panel,
        .scribe-ai-panel {
          padding: 10px;
        }

        .scribe-panel-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.37);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .scribe-panel-title small {
          color: ${accent};
          font-size: 4px;
          letter-spacing: 0.8px;
        }

        .scribe-waveform {
          display: flex;
          height: 48px;
          align-items: center;
          justify-content: center;
          gap: 3px;
          margin: 6px 0;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.035);
          border-bottom: 1px solid rgba(255, 255, 255, 0.035);
        }

        .scribe-waveform span {
          width: 2px;
          min-height: 5px;
          border-radius: 999px;
          background: ${accent};
          box-shadow: 0 0 5px ${accent};
          animation: scribeWave 1.1s ease-in-out infinite alternate;
        }

        .scribe-transcript {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .scribe-transcript p {
          position: relative;
          margin: 0;
          padding: 6px 7px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.022);
          color: rgba(255, 255, 255, 0.52);
          font-size: 6px;
          line-height: 1.45;
        }

        .scribe-transcript p span {
          display: block;
          margin-bottom: 2px;
          color: ${accent};
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .scribe-active-line {
          border: 1px solid ${accent}24;
          background: ${accent}08 !important;
        }

        .scribe-active-line i {
          display: inline-block;
          width: 1px;
          height: 7px;
          margin-left: 2px;
          background: ${accent};
          animation: scribeCursor 0.8s steps(2) infinite;
        }

        .scribe-ai-panel {
          display: flex;
          flex-direction: column;
        }

        .scribe-ai-core {
          position: relative;
          width: 82px;
          height: 82px;
          margin: 10px auto 8px;
        }

        .scribe-ai-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${accent}55;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .scribe-ring-one {
          width: 76px;
          height: 76px;
          animation: scribeSpin 12s linear infinite;
        }

        .scribe-ring-two {
          width: 58px;
          height: 58px;
          border-style: dashed;
          animation: scribeSpinReverse 8s linear infinite;
        }

        .scribe-ring-three {
          width: 42px;
          height: 42px;
          animation: scribeCorePulse 2.4s ease-in-out infinite;
        }

        .scribe-ai-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          border-radius: 50%;
          background: ${accent}18;
          color: ${accent};
          font-size: 9px;
          font-weight: 950;
          box-shadow: 0 0 18px ${accent}35;
          transform: translate(-50%, -50%);
        }

        .scribe-processing-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .scribe-processing-list div {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
        }

        .scribe-processing-list span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 6px ${accent};
          animation: scribeStatus 1.8s ease-in-out infinite;
        }

        .scribe-processing-list div:nth-child(2) span {
          animation-delay: -0.6s;
        }

        .scribe-processing-list div:nth-child(3) span {
          animation-delay: -1.2s;
        }

        .scribe-note {
          position: relative;
          z-index: 2;
          margin-top: 8px;
          padding: 9px;
        }

        .scribe-note-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 5px;
          margin-top: 7px;
        }

        .scribe-note-grid > div {
          padding: 6px 7px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.018);
        }

        .scribe-note-grid span {
          display: block;
          color: ${accent};
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .scribe-note-grid p {
          margin: 3px 0 0;
          color: rgba(255, 255, 255, 0.38);
          font-size: 5px;
          line-height: 1.4;
        }

        .scribe-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 7px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.2);
          font-family: "Courier New", monospace;
          font-size: 4px;
          letter-spacing: 0.65px;
        }

        .scribe-floating-card {
          position: absolute;
          z-index: 7;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 118px;
          padding: 8px 10px;
          border: 1px solid ${accent}42;
          border-radius: 10px;
          background: rgba(5, 11, 25, 0.88);
          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.45),
            0 0 16px ${accent}18;
          backdrop-filter: blur(12px);
        }

        .scribe-floating-card > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .scribe-floating-card small {
          color: rgba(255, 255, 255, 0.3);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .scribe-floating-card strong {
          color: #ffffff;
          font-size: 6px;
          letter-spacing: 0.7px;
        }

        .scribe-floating-icon {
          display: grid;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid ${accent}45;
          border-radius: 7px;
          background: ${accent}0d;
          color: ${accent};
          font-size: 12px;
          font-weight: 950;
        }

        .scribe-code-card {
          left: 2%;
          top: 9%;
          animation: scribeFloatOne 8s ease-in-out infinite;
        }

        .scribe-note-card {
          right: 2%;
          bottom: 8%;
          animation: scribeFloatTwo 10s ease-in-out infinite;
        }

        @keyframes scribeAmbient {
          0%,
          100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.92);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes scribeGridMove {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(42px, 42px);
          }
        }

        @keyframes scribeWorkspaceFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes scribeRecording {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes scribeWave {
          from {
            opacity: 0.45;
            transform: scaleY(0.45);
          }

          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes scribeCursor {
          0%,
          45% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }

        @keyframes scribeSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scribeSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes scribeCorePulse {
          0%,
          100% {
            opacity: 0.42;
            transform: translate(-50%, -50%) scale(0.9);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes scribeStatus {
          0%,
          100% {
            opacity: 0.35;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes scribeScan {
          0%,
          67% {
            top: -15%;
            opacity: 0;
          }

          73% {
            opacity: 0.5;
          }

          94% {
            top: 108%;
            opacity: 0.08;
          }

          100% {
            top: 108%;
            opacity: 0;
          }
        }

        @keyframes scribeShine {
          0%,
          68% {
            left: -40%;
            opacity: 0;
          }

          74% {
            opacity: 0.16;
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

        @keyframes scribeFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-11px) rotate(1deg);
          }
        }

        @keyframes scribeFloatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @media (max-width: 650px) {
          .scribe-workspace {
            width: 89%;
            padding: 14px;
          }

          .scribe-main {
            grid-template-columns: 1fr;
          }

          .scribe-ai-panel {
            display: none;
          }

          .scribe-floating-card {
            transform: scale(0.82);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scribe-ambient,
          .scribe-grid,
          .scribe-workspace,
          .scribe-scan,
          .scribe-shine,
          .scribe-recording span,
          .scribe-waveform span,
          .scribe-active-line i,
          .scribe-ai-ring,
          .scribe-processing-list span,
          .scribe-floating-card {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

type TriageHeroProps = {
  accent: string;
};

const triagePatients = [
  {
    bed: "TRAUMA 02",
    condition: "STROKE ALERT",
    detail: "Ambulance inbound",
    severity: "CRITICAL",
    eta: "03 MIN",
    color: "#ef4444",
  },
  {
    bed: "BED 08",
    condition: "CHEST PAIN",
    detail: "ECG abnormality detected",
    severity: "HIGH",
    eta: "ACTIVE",
    color: "#f97316",
  },
  {
    bed: "WAITING 14",
    condition: "FRACTURE",
    detail: "Imaging requested",
    severity: "MODERATE",
    eta: "12 MIN",
    color: "#eab308",
  },
  {
    bed: "BED 17",
    condition: "RESPIRATORY",
    detail: "Oxygen therapy initiated",
    severity: "STABLE",
    eta: "ACTIVE",
    color: "#22c55e",
  },
];

function TriageHero({ accent }: TriageHeroProps) {
  return (
    <div className="triage-hero">
      <div className="triage-ambient triage-ambient-one" />
      <div className="triage-ambient triage-ambient-two" />
      <div className="triage-grid" />

      <div className="triage-command">
        <div className="triage-scan" />

        <header className="triage-header">
          <div className="triage-brand">
            <span>AURIS TRIAGE</span>
            <strong>EMERGENCY DEPARTMENT COMMAND</strong>
          </div>

          <div className="triage-live">
            <span />
            LIVE OPERATIONS
          </div>
        </header>

        <div className="triage-metrics">
          <div>
            <small>ED OCCUPANCY</small>
            <strong>82%</strong>
            <span>18 / 22 BEDS</span>
          </div>

          <div>
            <small>AVG WAIT TIME</small>
            <strong>11</strong>
            <span>MINUTES</span>
          </div>

          <div>
            <small>AMBULANCES</small>
            <strong>04</strong>
            <span>INBOUND</span>
          </div>

          <div className="triage-critical-metric">
            <small>CRITICAL</small>
            <strong>02</strong>
            <span>ACTIVE ALERTS</span>
          </div>
        </div>

        <div className="triage-main">
          <section className="triage-priority-panel">
            <div className="triage-panel-heading">
              <div>
                <span>PRIORITY BOARD</span>
                <small>AI SORTED BY ACUITY</small>
              </div>

              <div className="triage-sort">
                <i />
                AUTO PRIORITY
              </div>
            </div>

            <div className="triage-patient-list">
              {triagePatients.map((patient, index) => (
                <article
                  className={`triage-patient ${
                    index === 0 ? "triage-patient-critical" : ""
                  }`}
                  key={patient.bed}
                  style={
                    {
                      "--patient-color": patient.color,
                      animationDelay: `${index * -0.5}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="triage-severity-bar" />

                  <div className="triage-patient-status">
                    <span />
                    <small>{patient.severity}</small>
                  </div>

                  <div className="triage-patient-info">
                    <span>{patient.bed}</span>
                    <strong>{patient.condition}</strong>
                    <small>{patient.detail}</small>
                  </div>

                  <div className="triage-patient-eta">
                    <small>STATUS</small>
                    <strong>{patient.eta}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="triage-map-panel">
            <div className="triage-panel-heading">
              <div>
                <span>LIVE DEPARTMENT MAP</span>
                <small>RESOURCE ROUTING</small>
              </div>

              <div className="triage-map-status">
                <i />
                SYNCED
              </div>
            </div>

            <div className="triage-hospital-map">
              <div className="triage-map-grid" />

              <svg
                className="triage-route-lines"
                viewBox="0 0 300 210"
                preserveAspectRatio="none"
              >
                <path className="triage-route route-one" d="M18 170 C72 170 60 70 132 70 C190 70 186 38 272 38" />

                <path className="triage-route route-two" d="M20 190 C94 190 96 138 153 138 C218 138 224 178 280 178" />
              </svg>

              <div className="triage-room triage-room-er">
                <span>ER</span>
                <small>ENTRY</small>
              </div>

              <div className="triage-room triage-room-trauma">
                <span>TR</span>
                <small>TRAUMA</small>
                <i className="triage-room-alert" />
              </div>

              <div className="triage-room triage-room-ct">
                <span>CT</span>
                <small>IMAGING</small>
              </div>

              <div className="triage-room triage-room-icu">
                <span>ICU</span>
                <small>6 / 8</small>
              </div>

              <div className="triage-room triage-room-or">
                <span>OR</span>
                <small>READY</small>
              </div>

              <div className="triage-room triage-room-lab">
                <span>LAB</span>
                <small>ACTIVE</small>
              </div>

              <div className="triage-ambulance">
                <div className="triage-ambulance-light" />
                <div className="triage-ambulance-body">
                  <span>+</span>
                </div>
                <div className="triage-wheel triage-wheel-one" />
                <div className="triage-wheel triage-wheel-two" />
              </div>

              <div className="triage-patient-marker marker-one">
                <span />
                P01
              </div>

              <div className="triage-patient-marker marker-two">
                <span />
                P08
              </div>

              <div className="triage-patient-marker marker-three">
                <span />
                P14
              </div>

              <div className="triage-map-pulse pulse-one" />
              <div className="triage-map-pulse pulse-two" />
            </div>

            <div className="triage-map-footer">
              <span>
                <i className="available" />
                AVAILABLE
              </span>

              <span>
                <i className="occupied" />
                OCCUPIED
              </span>

              <span>
                <i className="critical" />
                CRITICAL
              </span>
            </div>
          </section>
        </div>

        <div className="triage-ai-row">
          <div className="triage-ai-core">
            <div className="triage-ai-ring triage-ring-one" />
            <div className="triage-ai-ring triage-ring-two" />

            <div className="triage-ai-center">AI</div>
          </div>

          <div className="triage-ai-copy">
            <small>AI TRIAGE RECOMMENDATION</small>
            <strong>Route inbound stroke patient to Trauma 02</strong>
            <span>
              CT team notified • Neurology activated • Bed reserved
            </span>
          </div>

          <div className="triage-ai-confidence">
            <small>CONFIDENCE</small>
            <strong>98.4%</strong>
          </div>
        </div>

        <footer className="triage-footer">
          <span>ED NETWORK SECURE</span>
          <span>LAST SYNC 00:04 AGO</span>
          <span>RESOURCE ENGINE ACTIVE</span>
        </footer>
      </div>

      <div className="triage-floating-card triage-eta-card">
        <div className="triage-floating-icon">🚑</div>

        <div>
          <small>AMBULANCE ETA</small>
          <strong>03 MIN</strong>
        </div>
      </div>

      <div className="triage-floating-card triage-bed-card">
        <div className="triage-floating-icon">+</div>

        <div>
          <small>BEDS AVAILABLE</small>
          <strong>04 / 22</strong>
        </div>
      </div>

      <div className="triage-floating-card triage-alert-card">
        <div className="triage-alert-dot" />

        <div>
          <small>CRITICAL ALERT</small>
          <strong>STROKE TEAM ACTIVE</strong>
        </div>
      </div>

      <style>{`
        .triage-hero {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(circle at 76% 21%, #ef444429, transparent 34%),
            radial-gradient(circle at 18% 78%, ${accent}18, transparent 36%),
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.9),
              rgba(2, 6, 23, 0.99)
            );
        }

        .triage-ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(85px);
          animation: triageAmbient 7s ease-in-out infinite;
        }

        .triage-ambient-one {
          right: 3%;
          top: 5%;
          width: 290px;
          height: 290px;
          background: #ef44442c;
        }

        .triage-ambient-two {
          left: 4%;
          bottom: 4%;
          width: 320px;
          height: 320px;
          background: ${accent}20;
          animation-delay: -3.5s;
        }

        .triage-grid {
          position: absolute;
          inset: -60px;
          opacity: 0.1;
          background-image:
            linear-gradient(${accent}24 1px, transparent 1px),
            linear-gradient(90deg, ${accent}24 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: radial-gradient(circle, black, transparent 82%);
          animation: triageGridMove 25s linear infinite;
        }

        .triage-command {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 84%;
          min-height: 430px;
          padding: 17px;
          overflow: hidden;
          border: 1px solid #ef444467;
          border-radius: 21px;
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.94),
            rgba(2, 6, 23, 0.985)
          );
          box-shadow:
            0 30px 95px rgba(0, 0, 0, 0.68),
            0 0 34px #ef44441c,
            inset 0 0 30px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(16px);
          transform: translate(-50%, -50%);
          animation: triageCommandFloat 8s ease-in-out infinite;
        }

        .triage-scan {
          position: absolute;
          z-index: 10;
          left: 0;
          top: -15%;
          width: 100%;
          height: 11%;
          opacity: 0;
          border-bottom: 1px solid #ef44447c;
          background: linear-gradient(
            to bottom,
            transparent,
            #ef44440b,
            #ef44443c,
            transparent
          );
          animation: triageScan 8s ease-in-out infinite;
        }

        .triage-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(239, 68, 68, 0.22);
        }

        .triage-brand {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .triage-brand span {
          color: #ef4444;
          font-size: 6px;
          font-weight: 950;
          letter-spacing: 1.6px;
        }

        .triage-brand strong {
          color: #ffffff;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 1.55px;
        }

        .triage-live {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ef4444;
          font-size: 5px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .triage-live > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 10px #ef4444,
            0 0 19px #ef444488;
          animation: triageLivePulse 1.2s ease-in-out infinite;
        }

        .triage-metrics {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 6px;
          margin-top: 9px;
        }

        .triage-metrics > div {
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-rows: auto auto;
          gap: 2px 6px;
          padding: 7px 9px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.018);
        }

        .triage-metrics small {
          color: rgba(255, 255, 255, 0.28);
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .triage-metrics strong {
          grid-row: 1 / 3;
          grid-column: 2;
          align-self: center;
          color: #ffffff;
          font-size: 15px;
          font-weight: 950;
        }

        .triage-metrics span {
          color: ${accent};
          font-size: 4px;
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .triage-metrics .triage-critical-metric {
          border-color: #ef444436;
          background: #ef44440b;
        }

        .triage-critical-metric strong,
        .triage-critical-metric span {
          color: #ef4444;
        }

        .triage-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 8px;
          margin-top: 8px;
        }

        .triage-priority-panel,
        .triage-map-panel {
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 11px;
          background: rgba(2, 6, 23, 0.48);
        }

        .triage-panel-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .triage-panel-heading > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .triage-panel-heading span {
          color: rgba(255, 255, 255, 0.63);
          font-size: 5px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .triage-panel-heading small {
          color: rgba(255, 255, 255, 0.22);
          font-size: 4px;
          letter-spacing: 0.7px;
        }

        .triage-sort,
        .triage-map-status {
          display: flex;
          align-items: center;
          gap: 4px;
          color: ${accent};
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.6px;
        }

        .triage-sort i,
        .triage-map-status i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 7px ${accent};
          animation: triageStatusPulse 1.8s ease-in-out infinite;
        }

        .triage-patient-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 8px;
        }

        .triage-patient {
          position: relative;
          display: grid;
          grid-template-columns: 6px 45px 1fr auto;
          align-items: center;
          gap: 7px;
          min-height: 43px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.018);
          animation: triagePatientFloat 4s ease-in-out infinite;
        }

        .triage-patient-critical {
          border-color: #ef444440;
          background: #ef444409;
          box-shadow: inset 0 0 16px #ef44440e;
        }

        .triage-severity-bar {
          align-self: stretch;
          background: var(--patient-color);
          box-shadow: 0 0 9px var(--patient-color);
        }

        .triage-patient-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .triage-patient-status > span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--patient-color);
          box-shadow: 0 0 8px var(--patient-color);
        }

        .triage-patient-status small {
          color: var(--patient-color);
          font-size: 3px;
          font-weight: 950;
          letter-spacing: 0.5px;
        }

        .triage-patient-info {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 2px;
        }

        .triage-patient-info > span {
          color: var(--patient-color);
          font-size: 4px;
          font-weight: 950;
          letter-spacing: 0.8px;
        }

        .triage-patient-info strong {
          overflow: hidden;
          color: rgba(255, 255, 255, 0.82);
          font-size: 6px;
          letter-spacing: 0.6px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .triage-patient-info small {
          overflow: hidden;
          color: rgba(255, 255, 255, 0.31);
          font-size: 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .triage-patient-eta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-right: 8px;
          text-align: right;
        }

        .triage-patient-eta small {
          color: rgba(255, 255, 255, 0.2);
          font-size: 3px;
          letter-spacing: 0.6px;
        }

        .triage-patient-eta strong {
          color: var(--patient-color);
          font-family: "Courier New", monospace;
          font-size: 6px;
        }

        .triage-hospital-map {
          position: relative;
          height: 194px;
          margin-top: 7px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          background:
            radial-gradient(circle at center, ${accent}0c, transparent 70%),
            rgba(2, 6, 23, 0.72);
        }

        .triage-map-grid {
          position: absolute;
          inset: 0;
          opacity: 0.16;
          background-image:
            linear-gradient(${accent}2a 1px, transparent 1px),
            linear-gradient(90deg, ${accent}2a 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .triage-route-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .triage-route {
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-dasharray: 5 8;
          animation: triageRouteFlow 6s linear infinite;
        }

        .route-one {
          stroke: #ef4444;
          filter: drop-shadow(0 0 4px #ef4444);
        }

        .route-two {
          stroke: ${accent};
          filter: drop-shadow(0 0 4px ${accent});
          animation-delay: -3s;
        }

        .triage-room {
          position: absolute;
          display: flex;
          width: 42px;
          height: 35px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          border: 1px solid ${accent}3b;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.9);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.27);
        }

        .triage-room > span {
          color: ${accent};
          font-size: 7px;
          font-weight: 950;
        }

        .triage-room small {
          color: rgba(255, 255, 255, 0.29);
          font-size: 3px;
          letter-spacing: 0.4px;
        }

        .triage-room-er {
          left: 7%;
          bottom: 7%;
        }

        .triage-room-trauma {
          left: 38%;
          top: 22%;
          border-color: #ef44445a;
        }

        .triage-room-trauma > span {
          color: #ef4444;
        }

        .triage-room-ct {
          right: 6%;
          top: 7%;
        }

        .triage-room-icu {
          right: 10%;
          bottom: 9%;
        }

        .triage-room-or {
          left: 41%;
          bottom: 9%;
        }

        .triage-room-lab {
          right: 27%;
          top: 43%;
        }

        .triage-room-alert {
          position: absolute;
          right: -3px;
          top: -3px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 9px #ef4444;
          animation: triageAlertPulse 1.1s ease-in-out infinite;
        }

        .triage-ambulance {
          position: absolute;
          z-index: 5;
          left: -45px;
          bottom: 18px;
          width: 37px;
          height: 20px;
          animation: triageAmbulanceDrive 9s linear infinite;
        }

        .triage-ambulance-body {
          position: absolute;
          inset: 3px 0 2px;
          display: grid;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 3px 5px 3px 3px;
          background: rgba(239, 68, 68, 0.16);
          color: #ef4444;
          font-size: 10px;
          font-weight: 950;
          box-shadow: 0 0 9px #ef44443b;
        }

        .triage-ambulance-light {
          position: absolute;
          z-index: 2;
          left: 11px;
          top: 0;
          width: 7px;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: triageAmbulanceLight 0.55s steps(2) infinite;
        }

        .triage-wheel {
          position: absolute;
          bottom: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.45);
          animation: triageWheelSpin 0.7s linear infinite;
        }

        .triage-wheel-one {
          left: 5px;
        }

        .triage-wheel-two {
          right: 5px;
        }

        .triage-patient-marker {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 3px;
          color: rgba(255, 255, 255, 0.48);
          font-family: "Courier New", monospace;
          font-size: 4px;
          animation: triageMarkerFloat 3s ease-in-out infinite;
        }

        .triage-patient-marker > span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 7px ${accent};
        }

        .marker-one {
          left: 25%;
          top: 38%;
        }

        .marker-two {
          right: 31%;
          bottom: 27%;
          animation-delay: -1s;
        }

        .marker-three {
          left: 23%;
          bottom: 19%;
          animation-delay: -2s;
        }

        .triage-map-pulse {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 1px solid #ef4444;
          border-radius: 50%;
          opacity: 0;
          animation: triageMapPulse 3s ease-out infinite;
        }

        .pulse-one {
          left: 42%;
          top: 25%;
        }

        .pulse-two {
          right: 8%;
          bottom: 12%;
          border-color: ${accent};
          animation-delay: -1.5s;
        }

        .triage-map-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.25);
          font-size: 3px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .triage-map-footer span {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .triage-map-footer i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .triage-map-footer .available {
          background: #22c55e;
        }

        .triage-map-footer .occupied {
          background: ${accent};
        }

        .triage-map-footer .critical {
          background: #ef4444;
        }

        .triage-ai-row {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 7px 10px;
          border: 1px solid ${accent}26;
          border-radius: 9px;
          background: linear-gradient(
            90deg,
            ${accent}0b,
            rgba(2, 6, 23, 0.4)
          );
        }

        .triage-ai-core {
          position: relative;
          width: 35px;
          height: 35px;
        }

        .triage-ai-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${accent}70;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .triage-ring-one {
          width: 34px;
          height: 34px;
          border-style: dashed;
          animation: triageSpin 7s linear infinite;
        }

        .triage-ring-two {
          width: 25px;
          height: 25px;
          animation: triageSpinReverse 5s linear infinite;
        }

        .triage-ai-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 18px;
          height: 18px;
          place-items: center;
          border-radius: 50%;
          background: ${accent}18;
          color: ${accent};
          font-size: 5px;
          font-weight: 950;
          box-shadow: 0 0 12px ${accent}48;
          transform: translate(-50%, -50%);
        }

        .triage-ai-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 2px;
        }

        .triage-ai-copy small {
          color: ${accent};
          font-size: 4px;
          font-weight: 950;
          letter-spacing: 0.8px;
        }

        .triage-ai-copy strong {
          overflow: hidden;
          color: rgba(255, 255, 255, 0.72);
          font-size: 6px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .triage-ai-copy span {
          overflow: hidden;
          color: rgba(255, 255, 255, 0.26);
          font-size: 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .triage-ai-confidence {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: right;
        }

        .triage-ai-confidence small {
          color: rgba(255, 255, 255, 0.24);
          font-size: 3px;
          letter-spacing: 0.6px;
        }

        .triage-ai-confidence strong {
          color: ${accent};
          font-family: "Courier New", monospace;
          font-size: 8px;
        }

        .triage-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          margin-top: 7px;
          padding-top: 6px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.18);
          font-family: "Courier New", monospace;
          font-size: 3px;
          letter-spacing: 0.55px;
        }

        .triage-floating-card {
          position: absolute;
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 112px;
          padding: 8px 10px;
          border: 1px solid rgba(239, 68, 68, 0.34);
          border-radius: 10px;
          background: rgba(5, 11, 25, 0.9);
          box-shadow:
            0 16px 34px rgba(0, 0, 0, 0.46),
            0 0 16px #ef444416;
          backdrop-filter: blur(12px);
        }

        .triage-floating-card > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .triage-floating-card small {
          color: rgba(255, 255, 255, 0.27);
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .triage-floating-card strong {
          color: #ffffff;
          font-size: 6px;
          letter-spacing: 0.6px;
        }

        .triage-floating-icon {
          display: grid;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #ef44444a;
          border-radius: 7px;
          background: #ef44440e;
          color: #ef4444;
          font-size: 11px;
          font-weight: 950;
        }

        .triage-eta-card {
          left: 2%;
          top: 8%;
          animation: triageFloatOne 8s ease-in-out infinite;
        }

        .triage-bed-card {
          right: 2%;
          bottom: 8%;
          border-color: ${accent}38;
          animation: triageFloatTwo 9s ease-in-out infinite;
        }

        .triage-alert-card {
          right: 3%;
          top: 13%;
          animation: triageFloatThree 7s ease-in-out infinite;
        }

        .triage-alert-dot {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 9px #ef4444,
            0 0 18px #ef444477;
          animation: triageAlertPulse 1s ease-in-out infinite;
        }

        @keyframes triageAmbient {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        @keyframes triageGridMove {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(38px, 38px);
          }
        }

        @keyframes triageCommandFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-7px);
          }
        }

        @keyframes triageLivePulse {
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

        @keyframes triageStatusPulse {
          0%,
          100% {
            opacity: 0.4;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes triagePatientFloat {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(2px);
          }
        }

        @keyframes triageRouteFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -90;
          }
        }

        @keyframes triageAlertPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes triageAmbulanceDrive {
          0% {
            left: -45px;
          }

          42% {
            left: 54px;
          }

          58% {
            left: 54px;
          }

          100% {
            left: 110%;
          }
        }

        @keyframes triageAmbulanceLight {
          0% {
            opacity: 1;
          }

          50% {
            opacity: 0.15;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes triageWheelSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageMarkerFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes triageMapPulse {
          0% {
            opacity: 0.5;
            transform: scale(0.4);
          }

          100% {
            opacity: 0;
            transform: scale(2.1);
          }
        }

        @keyframes triageSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes triageSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes triageScan {
          0%,
          63% {
            top: -15%;
            opacity: 0;
          }

          70% {
            opacity: 0.48;
          }

          94% {
            top: 108%;
            opacity: 0.05;
          }

          100% {
            top: 108%;
            opacity: 0;
          }
        }

        @keyframes triageFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes triageFloatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes triageFloatThree {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(-8px);
          }
        }

        @media (max-width: 650px) {
          .triage-command {
            width: 90%;
            padding: 13px;
          }

          .triage-main {
            grid-template-columns: 1fr;
          }

          .triage-map-panel {
            display: none;
          }

          .triage-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .triage-floating-card {
            transform: scale(0.82);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .triage-hero *,
          .triage-hero *::before,
          .triage-hero *::after {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

type RoundsHeroProps = {
  accent: string;
};

function RoundsHero({ accent }: RoundsHeroProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-[32px] border border-cyan-500/20 bg-slate-950/70 shadow-[0_0_80px_rgba(34,211,238,0.08)]">

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${accent}22, transparent 70%)`,
        }}
      />

      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[300px_1fr_340px] p-10">

        {/* LEFT PANEL */}

        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">

            <span className="text-xs uppercase tracking-[.35em] text-cyan-400">
              Provider
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Dr. Sarah Mitchell
            </h3>

            <p className="text-sm text-slate-400">
              Hospitalist • 4 West
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">

            <div className="flex justify-between">

              <div>

                <div className="text-4xl font-black text-white">
                  18
                </div>

                <div className="text-xs uppercase text-slate-400">
                  Assigned
                </div>

              </div>

              <div>

                <div className="text-4xl font-black text-cyan-400">
                  39%
                </div>

                <div className="text-xs uppercase text-slate-400">
                  Complete
                </div>

              </div>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full"
                style={{
                  width: "39%",
                  background: accent,
                }}
              />

            </div>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

            <div className="text-xs uppercase tracking-[.3em] text-cyan-300">
              AI Recommendation
            </div>

            <h4 className="mt-3 text-xl font-bold text-white">
              Visit Room 403
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">

              <li>• Critical potassium result</li>

              <li>• CT imaging complete</li>

              <li>• Family waiting</li>

            </ul>

          </div>

        </div>

        {/* CENTER */}

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <span className="text-xs uppercase tracking-[.3em] text-cyan-400">
                AURIS Medical
              </span>

              <h2 className="mt-2 text-4xl font-black text-white">
                Rounds Command Center
              </h2>

            </div>

            <button
              className="rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Optimize Route
            </button>

          </div>

          {/* Hospital Floor Map goes here */}

          <div className="flex h-[520px] items-center justify-center rounded-2xl border border-dashed border-cyan-500/30 bg-slate-950/40">

            <span className="text-slate-500">
              Hospital Floor Map
            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="font-bold text-white">
                Todays Patients
              </h3>

              <span className="text-xs uppercase text-cyan-400">
                Live
              </span>

            </div>

            {/* Patient Cards */}

            <div className="space-y-3">

              {/* Room 401 */}

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="font-semibold text-white">
                  Room 401
                </div>
                <div className="text-sm text-slate-400">
                  Labs Reviewed
                </div>
              </div>

              {/* Room 402 */}

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <div className="font-semibold text-white">
                  Room 402
                </div>
                <div className="text-sm text-slate-400">
                  CT Review
                </div>
              </div>

              {/* Room 403 */}

              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <div className="font-semibold text-white">
                  Room 403
                </div>
                <div className="text-sm text-red-300">
                  Critical Potassium
                </div>
              </div>

              {/* Room 404 */}

              <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
                <div className="font-semibold text-white">
                  Room 404
                </div>
                <div className="text-sm text-slate-400">
                  Ready for Discharge
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">

            <h3 className="font-bold text-white">
              Care Team
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-300">

              <div>Registered Nurse</div>

              <div>Respiratory Therapy</div>

              <div>Case Management</div>

              <div>Physical Therapy</div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

type MedSyncHeroProps = {
  accent: string;
};

function MedSyncHero({ accent }: MedSyncHeroProps) {
  return (
    <div className="relative mt-8 h-[520px] overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/60">

  {/* Ambient Glow */}
  <div
    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
    style={{
      background: `radial-gradient(circle, ${accent}55 0%, transparent 70%)`,
    }}
  />

  {/* SVG Network */}
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 1000 520"
  >
    <g stroke={accent} strokeWidth="2" opacity=".35">

      <line x1="500" y1="260" x2="220" y2="120" />
      <line x1="500" y1="260" x2="780" y2="120" />
      <line x1="500" y1="260" x2="220" y2="400" />
      <line x1="500" y1="260" x2="780" y2="400" />
      <line x1="500" y1="260" x2="500" y2="70" />
      <line x1="500" y1="260" x2="500" y2="455" />

    </g>
  </svg>

  {/* Core */}
  <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl">

    <div
      className="absolute inset-3 animate-pulse rounded-full border border-cyan-400/30"
      style={{
        boxShadow: `0 0 45px ${accent}66`,
      }}
    />

    <div className="text-center">

      <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">
        AI
      </div>

      <div className="mt-1 text-3xl font-black text-white">
        MedSync
      </div>

      <div className="mt-2 text-xs text-emerald-300">
        LIVE NETWORK
      </div>

    </div>

  </div>

  {[
    {
      title: "Epic",
      status: "FHIR Connected",
      left: "8%",
      top: "14%",
    },
    {
      title: "Cerner",
      status: "HL7 Online",
      right: "8%",
      top: "14%",
    },
    {
      title: "Laboratory",
      status: "Synced",
      left: "8%",
      bottom: "14%",
    },
    {
      title: "Imaging",
      status: "Connected",
      right: "8%",
      bottom: "14%",
    },
    {
      title: "Cloud",
      status: "Encrypted",
      left: "50%",
      bottom: "5%",
      transform: "translateX(-50%)",
    },
    {
      title: "EMS",
      status: "Live Feed",
      left: "50%",
      top: "5%",
      transform: "translateX(-50%)",
    },
  ].map((node, i) => (
    <div
      key={i}
      className="absolute rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-5 py-3 backdrop-blur-xl"
      style={node}
    >
      <div className="text-sm font-bold text-white">
        {node.title}
      </div>

      <div className="mt-1 text-xs text-cyan-300">
        {node.status}
      </div>
    </div>
  ))}

</div>
  );
}

export default function ProductHero({
  division,
  divisionId,
  product,
  productId,
  tagline,
  accent,
  heroImage,
}: ProductHeroProps) {
  const isChart =
    divisionId.toLowerCase() === "medical" &&
    productId.toLowerCase() === "chart";

    const isPulse =
  divisionId.toLowerCase() === "medical" &&
  productId.toLowerCase() === "pulse";

  const isScribe =
  divisionId.toLowerCase() === "medical" &&
  productId.toLowerCase() === "scribe";

  const isTriage =
  divisionId.toLowerCase() === "medical" &&
  productId.toLowerCase() === "triage";

  const isRounds =
  divisionId.toLowerCase() === "medical" &&
  productId.toLowerCase() === "rounds";

  const isMedSync =
  divisionId.toLocaleLowerCase() === "medical" &&
  productId.toLocaleLowerCase() === "medsync";

  return (
    <section
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        alignItems: "center",
        gap: 48,
        width: "min(1240px, calc(100% - 40px))",
        margin: "0 auto",
        padding: "72px 0",
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: 24,
            color: accent,
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          ← Return to the AURIS Ecosystem
        </Link>

        <div
          style={{
            color: accent,
            fontSize: 13,
            fontWeight: 950,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          AURIS {division}
        </div>

        <h1
          style={{
            margin: "12px 0 0",
            fontSize: "clamp(64px, 11vw, 128px)",
            lineHeight: 0.88,
            letterSpacing: "-0.055em",
          }}
        >
          {product}
        </h1>

        <p
          style={{
            marginTop: 26,
            maxWidth: 680,
            color: "#cbd5e1",
            fontSize: "clamp(20px, 2.4vw, 30px)",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </p>

        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#overview"
            style={{
              padding: "13px 19px",
              borderRadius: 999,
              border: `1px solid ${accent}`,
              background: `${accent}24`,
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 900,
              boxShadow: `0 0 28px ${accent}18`,
            }}
          >
            Explore Technology
          </a>

          <Link
            href={`/contact?division=${divisionId}&product=${productId}`}
            style={{
              padding: "13px 19px",
              borderRadius: 999,
              border: "1px solid rgba(148,163,184,.35)",
              background: "rgba(15,23,42,.72)",
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            Contact AURIS
          </Link>
        </div>
      </div>

      <div
        style={{
          height: 500,
          minHeight: 500,
          position: "relative",
          overflow: "hidden",
          borderRadius: 30,
          border: `1px solid ${accent}55`,
          background: `radial-gradient(
            circle at center,
            ${accent}22,
            rgba(15, 23, 42, 0.82) 68%
          )`,
          boxShadow: `0 0 80px ${accent}20`,
        }}
      >
        {isChart ? (
          <ChartHero accent={accent} />
        ) : isPulse ? (
          <PulseHero accent={accent} />
        ) : isScribe ? (
          <ScribeHero accent={accent} />
        ) : isTriage ? (
          <TriageHero accent={accent} />
        ) : isRounds ? (
          <RoundsHero accent={accent} />
        ) : isMedSync ? (
          <MedSyncHero accent={accent} />
        ) : heroImage ? (
          <Image
            src={heroImage}
            alt={`${product} concept artwork`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              minHeight: 500,
              display: "grid",
              placeItems: "center",
              padding: 40,
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: accent,
                  fontSize: 72,
                  fontWeight: 950,
                  filter: `drop-shadow(0 0 20px ${accent})`,
                }}
              >
                ⬢
              </div>

              <div
                style={{
                  marginTop: 16,
                  color: "#94a3b8",
                  fontWeight: 850,
                }}
              >
                Concept artwork coming soon
              </div>
            </div>
          </div>
        )}

        {!isChart && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(to top, rgba(2,6,23,.72), transparent 48%)",
            }}
          />
        )}
      </div>
    </section>
  );
}