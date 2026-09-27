"use client";

type PulseBackgroundProps = {
  accent?: string;
};

export default function PulseBackground({
  accent = "#dc2626",
}: PulseBackgroundProps) {
  return (
    <div className="pulse-background" aria-hidden="true">
      <div className="pulse-base" />
      <div className="pulse-grid" />
      <div className="pulse-glow pulse-glow-left" />
      <div className="pulse-glow pulse-glow-right" />

      <svg
        className="pulse-page-ecg"
        viewBox="0 0 1600 240"
        preserveAspectRatio="none"
      >
        <path
          className="pulse-page-ecg-shadow"
          d="
            M0 125
            L180 125
            L225 125
            L250 104
            L274 148
            L305 52
            L338 182
            L370 125
            L555 125
            L600 125
            L625 104
            L649 148
            L680 52
            L713 182
            L745 125
            L930 125
            L975 125
            L1000 104
            L1024 148
            L1055 52
            L1088 182
            L1120 125
            L1305 125
            L1350 125
            L1375 104
            L1399 148
            L1430 52
            L1463 182
            L1495 125
            L1600 125
          "
        />

        <path
          className="pulse-page-ecg-line"
          d="
            M0 125
            L180 125
            L225 125
            L250 104
            L274 148
            L305 52
            L338 182
            L370 125
            L555 125
            L600 125
            L625 104
            L649 148
            L680 52
            L713 182
            L745 125
            L930 125
            L975 125
            L1000 104
            L1024 148
            L1055 52
            L1088 182
            L1120 125
            L1305 125
            L1350 125
            L1375 104
            L1399 148
            L1430 52
            L1463 182
            L1495 125
            L1600 125
          "
        />
      </svg>

      <div className="pulse-rings">
        <span className="pulse-ring pulse-ring-one" />
        <span className="pulse-ring pulse-ring-two" />
        <span className="pulse-ring pulse-ring-three" />

        <div className="pulse-heart">
          <span>♥</span>
        </div>
      </div>

      <div className="pulse-status-card pulse-status-connected">
        <div className="pulse-status-icon">●</div>

        <div>
          <small>PATIENT STATUS</small>
          <strong>CONNECTED</strong>
        </div>
      </div>

      <div className="pulse-status-card pulse-status-sensor">
        <div className="pulse-status-icon">⌁</div>

        <div>
          <small>WIRELESS SENSOR</small>
          <strong>ACTIVE</strong>
        </div>
      </div>

      <div className="pulse-status-card pulse-status-central">
        <div className="pulse-status-icon">⬢</div>

        <div>
          <small>CENTRAL STATION</small>
          <strong>SYNCHRONIZED</strong>
        </div>
      </div>

      <div className="pulse-monitor">
        <div className="pulse-monitor-scan" />
        <div className="pulse-monitor-shine" />

        <div className="pulse-monitor-header">
          <div>
            <span>AURIS MEDICAL</span>
            <strong>LIVE PATIENT TELEMETRY</strong>
          </div>

          <div className="pulse-live">
            <span />
            LIVE
          </div>
        </div>

        <div className="pulse-patient-meta">
          <div>
            <small>PATIENT</small>
            <strong>AUR-MED-2048</strong>
          </div>

          <div>
            <small>BED</small>
            <strong>ICU-12</strong>
          </div>

          <div>
            <small>STATUS</small>
            <strong className="pulse-stable">STABLE</strong>
          </div>

          <div>
            <small>NETWORK</small>
            <strong>SECURE</strong>
          </div>
        </div>

        <div className="pulse-monitor-main">
          <div className="pulse-wave-panel">
            <div className="pulse-panel-label">
              <span>ECG LEAD II</span>
              <small>25 MM/S</small>
            </div>

            <svg
              className="pulse-monitor-ecg"
              viewBox="0 0 800 160"
              preserveAspectRatio="none"
            >
              <path
                className="pulse-monitor-ecg-shadow"
                d="
                  M0 84
                  L92 84
                  L126 84
                  L146 66
                  L166 104
                  L192 21
                  L220 130
                  L250 84
                  L356 84
                  L390 84
                  L410 66
                  L430 104
                  L456 21
                  L484 130
                  L514 84
                  L620 84
                  L654 84
                  L674 66
                  L694 104
                  L720 21
                  L748 130
                  L780 84
                  L800 84
                "
              />

              <path
                className="pulse-monitor-ecg-line"
                d="
                  M0 84
                  L92 84
                  L126 84
                  L146 66
                  L166 104
                  L192 21
                  L220 130
                  L250 84
                  L356 84
                  L390 84
                  L410 66
                  L430 104
                  L456 21
                  L484 130
                  L514 84
                  L620 84
                  L654 84
                  L674 66
                  L694 104
                  L720 21
                  L748 130
                  L780 84
                  L800 84
                "
              />
            </svg>

            <div className="pulse-resp-row">
              <span>RESP</span>

              <svg viewBox="0 0 800 70" preserveAspectRatio="none">
                <path
                  d="
                    M0 38
                    C55 8 105 8 160 38
                    C215 68 265 68 320 38
                    C375 8 425 8 480 38
                    C535 68 585 68 640 38
                    C695 8 745 8 800 38
                  "
                />
              </svg>
            </div>
          </div>

          <div className="pulse-heart-rate">
            <small>HEART RATE</small>

            <div>
              <strong>72</strong>
              <span>BPM</span>
            </div>

            <p>NORMAL SINUS RHYTHM</p>
          </div>
        </div>

        <div className="pulse-vitals">
          <div className="pulse-vital">
            <div className="pulse-vital-label">
              <span>SpO₂</span>
              <small>OXYGEN</small>
            </div>

            <div className="pulse-vital-number">
              <strong>98</strong>
              <span>%</span>
            </div>

            <div className="pulse-meter">
              <span style={{ width: "98%" }} />
            </div>
          </div>

          <div className="pulse-vital">
            <div className="pulse-vital-label">
              <span>NIBP</span>
              <small>PRESSURE</small>
            </div>

            <div className="pulse-vital-number pulse-bp">
              <strong>118</strong>
              <span>/76</span>
            </div>

            <p>MAP 90 MMHG</p>
          </div>

          <div className="pulse-vital">
            <div className="pulse-vital-label">
              <span>RESP</span>
              <small>RATE</small>
            </div>

            <div className="pulse-vital-number">
              <strong>16</strong>
              <span>/MIN</span>
            </div>

            <p>REGULAR</p>
          </div>

          <div className="pulse-vital">
            <div className="pulse-vital-label">
              <span>TEMP</span>
              <small>CORE</small>
            </div>

            <div className="pulse-vital-number">
              <strong>98.6</strong>
              <span>°F</span>
            </div>

            <p>WITHIN RANGE</p>
          </div>
        </div>

        <div className="pulse-monitor-footer">
          <span>CENTRAL STATION CONNECTED</span>
          <span>ENCRYPTED TELEMETRY</span>
          <span>UPDATED 08:42:16</span>
        </div>
      </div>

      <div className="pulse-vignette" />

      <style jsx>{`
        .pulse-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          background: #020617;
          color: #ffffff;
        }

        .pulse-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 76% 38%,
              ${accent}24 0%,
              transparent 37%
            ),
            radial-gradient(
              circle at 18% 68%,
              ${accent}18 0%,
              transparent 32%
            ),
            linear-gradient(
              140deg,
              #020617 0%,
              #07101f 45%,
              #020617 100%
            );
        }

        .pulse-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.17;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              ${accent}16 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${accent}16 1px,
              transparent 1px
            );
          background-size:
            80px 80px,
            80px 80px,
            20px 20px,
            20px 20px;
          mask-image: radial-gradient(
            circle at 65% 45%,
            black 18%,
            transparent 78%
          );
          animation: pulseGridMove 30s linear infinite;
        }

        .pulse-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          animation: pulseBreath 5s ease-in-out infinite;
        }

        .pulse-glow-left {
          left: -180px;
          bottom: 2%;
          width: 480px;
          height: 480px;
          background: ${accent}18;
        }

        .pulse-glow-right {
          right: -120px;
          top: -100px;
          width: 560px;
          height: 560px;
          background: ${accent}22;
          animation-delay: -2.5s;
        }

        .pulse-page-ecg {
          position: absolute;
          left: -5%;
          top: 49%;
          width: 110%;
          height: 240px;
          opacity: 0.18;
          transform: translateY(-50%);
        }

        .pulse-page-ecg-shadow,
        .pulse-page-ecg-line {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pulse-page-ecg-shadow {
          stroke: ${accent}42;
          stroke-width: 14;
          filter: blur(10px);
        }

        .pulse-page-ecg-line {
          stroke: ${accent};
          stroke-width: 2;
          stroke-dasharray: 260 1340;
          filter: drop-shadow(0 0 8px ${accent});
          animation: pulsePageEcg 6s linear infinite;
        }

        .pulse-rings {
          position: absolute;
          left: 15%;
          top: 55%;
          width: 180px;
          height: 180px;
          transform: translate(-50%, -50%);
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border: 1px solid ${accent}72;
          border-radius: 50%;
          opacity: 0;
          animation: pulseRing 2.4s ease-out infinite;
        }

        .pulse-ring-two {
          animation-delay: 0.8s;
        }

        .pulse-ring-three {
          animation-delay: 1.6s;
        }

        .pulse-heart {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 68px;
          height: 68px;
          place-items: center;
          border: 1px solid ${accent}80;
          border-radius: 50%;
          background: rgba(2, 6, 23, 0.9);
          box-shadow:
            0 0 34px ${accent}32,
            inset 0 0 22px ${accent}18;
          transform: translate(-50%, -50%);
          animation: pulseHeart 1.2s ease-in-out infinite;
        }

        .pulse-heart span {
          color: ${accent};
          font-size: 29px;
          text-shadow: 0 0 12px ${accent};
        }

        .pulse-status-card {
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 14px;
          border: 1px solid ${accent}46;
          border-radius: 13px;
          background: rgba(5, 11, 25, 0.84);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.46),
            0 0 24px ${accent}14;
          backdrop-filter: blur(14px);
        }

        .pulse-status-card > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .pulse-status-card small {
          color: rgba(255, 255, 255, 0.32);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .pulse-status-card strong {
          color: #ffffff;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .pulse-status-icon {
          display: grid;
          width: 31px;
          height: 31px;
          place-items: center;
          border: 1px solid ${accent}55;
          border-radius: 8px;
          background: ${accent}0f;
          color: ${accent};
          font-size: 14px;
          animation: pulseStatusIcon 1.2s ease-in-out infinite;
        }

        .pulse-status-connected {
          left: 5%;
          top: 17%;
          animation: pulseFloatOne 8s ease-in-out infinite;
        }

        .pulse-status-sensor {
          left: 8%;
          bottom: 13%;
          animation: pulseFloatTwo 10s ease-in-out infinite;
        }

        .pulse-status-central {
          right: 5%;
          bottom: 7%;
          animation: pulseFloatThree 9s ease-in-out infinite;
        }

        .pulse-monitor {
          position: absolute;
          z-index: 5;
          right: 4.5%;
          top: 50%;
          width: min(620px, 50vw);
          min-height: 475px;
          padding: 22px;
          overflow: hidden;
          border: 1px solid ${accent}68;
          border-radius: 26px;
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.91),
              rgba(2, 6, 23, 0.98)
            );
          box-shadow:
            0 38px 115px rgba(0, 0, 0, 0.66),
            0 0 58px ${accent}20,
            inset 0 0 42px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(18px);
          transform: translateY(-50%);
          animation:
            pulseMonitorFloat 7s ease-in-out infinite,
            pulseMonitorBeat 1.2s ease-in-out infinite;
        }

        .pulse-monitor-scan {
          position: absolute;
          z-index: 8;
          left: 0;
          top: -16%;
          width: 100%;
          height: 12%;
          opacity: 0;
          border-bottom: 1px solid ${accent}80;
          background: linear-gradient(
            to bottom,
            transparent,
            ${accent}14,
            ${accent}42,
            transparent
          );
          animation: pulseScan 8s ease-in-out infinite;
        }

        .pulse-monitor-shine {
          position: absolute;
          left: -45%;
          top: -45%;
          width: 28%;
          height: 190%;
          opacity: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.14),
            transparent
          );
          transform: rotate(18deg);
          animation: pulseShine 10s ease-in-out infinite;
        }

        .pulse-monitor-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid ${accent}32;
        }

        .pulse-monitor-header > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pulse-monitor-header span {
          color: ${accent};
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1.8px;
        }

        .pulse-monitor-header strong {
          color: #ffffff;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 1.8px;
        }

        .pulse-live {
          display: flex;
          align-items: center;
          gap: 7px;
          color: ${accent};
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1.2px;
        }

        .pulse-live span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${accent};
          box-shadow: 0 0 13px ${accent};
          animation: pulseLive 1.2s ease-in-out infinite;
        }

        .pulse-patient-meta {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 7px;
          margin-top: 12px;
        }

        .pulse-patient-meta > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.045);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.018);
        }

        .pulse-patient-meta small {
          color: rgba(255, 255, 255, 0.3);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .pulse-patient-meta strong {
          color: rgba(255, 255, 255, 0.83);
          font-family: "Courier New", monospace;
          font-size: 7px;
        }

        .pulse-patient-meta .pulse-stable {
          color: ${accent};
        }

        .pulse-monitor-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 130px;
          gap: 10px;
          margin-top: 10px;
        }

        .pulse-wave-panel,
        .pulse-heart-rate,
        .pulse-vital {
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          background: rgba(2, 6, 23, 0.52);
        }

        .pulse-wave-panel {
          padding: 11px;
          overflow: hidden;
        }

        .pulse-panel-label,
        .pulse-vital-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pulse-panel-label span,
        .pulse-vital-label span {
          color: rgba(255, 255, 255, 0.48);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pulse-panel-label small,
        .pulse-vital-label small {
          color: ${accent};
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .pulse-monitor-ecg {
          width: 100%;
          height: 112px;
        }

        .pulse-monitor-ecg-shadow,
        .pulse-monitor-ecg-line {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pulse-monitor-ecg-shadow {
          stroke: ${accent}48;
          stroke-width: 11;
          filter: blur(7px);
        }

        .pulse-monitor-ecg-line {
          stroke: ${accent};
          stroke-width: 2.4;
          stroke-dasharray: 205 595;
          filter: drop-shadow(0 0 6px ${accent});
          animation: pulseMonitorEcg 3.5s linear infinite;
        }

        .pulse-resp-row {
          display: grid;
          grid-template-columns: 34px 1fr;
          align-items: center;
          gap: 8px;
          padding-top: 5px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .pulse-resp-row span {
          color: rgba(255, 255, 255, 0.32);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .pulse-resp-row svg {
          width: 100%;
          height: 30px;
        }

        .pulse-resp-row path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.32);
          stroke-width: 1.5;
          stroke-dasharray: 100 700;
          animation: pulseResp 7s linear infinite;
        }

        .pulse-heart-rate {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 13px;
          text-align: center;
        }

        .pulse-heart-rate > small {
          color: rgba(255, 255, 255, 0.34);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pulse-heart-rate > div {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-top: 8px;
        }

        .pulse-heart-rate strong {
          color: ${accent};
          font-size: 54px;
          line-height: 0.9;
          text-shadow: 0 0 18px ${accent}55;
          animation: pulseNumber 1.2s ease-in-out infinite;
        }

        .pulse-heart-rate span {
          margin: 0 0 5px 4px;
          color: rgba(255, 255, 255, 0.42);
          font-size: 6px;
          font-weight: 900;
        }

        .pulse-heart-rate p,
        .pulse-vital p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.25);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .pulse-vitals {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          margin-top: 9px;
        }

        .pulse-vital {
          padding: 10px;
          animation: pulseVitalBeat 1.2s ease-in-out infinite;
        }

        .pulse-vital:nth-child(2) {
          animation-delay: 0.05s;
        }

        .pulse-vital:nth-child(3) {
          animation-delay: 0.1s;
        }

        .pulse-vital:nth-child(4) {
          animation-delay: 0.15s;
        }

        .pulse-vital-number {
          display: flex;
          align-items: flex-end;
          margin-top: 8px;
        }

        .pulse-vital-number strong {
          color: #ffffff;
          font-size: 24px;
          line-height: 1;
        }

        .pulse-vital-number span {
          margin: 0 0 2px 3px;
          color: ${accent};
          font-size: 6px;
          font-weight: 900;
        }

        .pulse-bp span {
          margin-bottom: 1px;
          font-size: 15px;
        }

        .pulse-meter {
          height: 3px;
          margin-top: 9px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
        }

        .pulse-meter span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: ${accent};
          box-shadow: 0 0 8px ${accent};
          animation: pulseMeter 2s ease-in-out infinite;
        }

        .pulse-monitor-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          margin-top: 11px;
          padding-top: 9px;
          border-top: 1px solid rgba(255, 255, 255, 0.045);
          color: rgba(255, 255, 255, 0.21);
          font-family: "Courier New", monospace;
          font-size: 5px;
          letter-spacing: 0.65px;
        }

        .pulse-vignette {
          position: absolute;
          inset: 0;
          z-index: 10;
          background:
            radial-gradient(
              circle at center,
              transparent 30%,
              rgba(2, 6, 23, 0.2) 67%,
              rgba(2, 6, 23, 0.78) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.012),
              transparent 32%,
              rgba(2, 6, 23, 0.42)
            );
        }

        @keyframes pulseGridMove {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(80px, 80px, 0);
          }
        }

        @keyframes pulseBreath {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.92);
          }

          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes pulsePageEcg {
          from {
            stroke-dashoffset: 1600;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulseRing {
          0% {
            opacity: 0.55;
            transform: scale(0.32);
          }

          100% {
            opacity: 0;
            transform: scale(1.55);
          }
        }

        @keyframes pulseHeart {
          0%,
          60%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }

          68% {
            transform: translate(-50%, -50%) scale(1.14);
          }

          76% {
            transform: translate(-50%, -50%) scale(1.02);
          }

          84% {
            transform: translate(-50%, -50%) scale(1.09);
          }
        }

        @keyframes pulseStatusIcon {
          0%,
          60%,
          100% {
            transform: scale(1);
          }

          68% {
            transform: scale(1.12);
          }

          84% {
            transform: scale(1.05);
          }
        }

        @keyframes pulseLive {
          0%,
          60%,
          100% {
            opacity: 0.65;
            transform: scale(1);
          }

          68% {
            opacity: 1;
            transform: scale(1.22);
          }

          84% {
            transform: scale(1.08);
          }
        }

        @keyframes pulseMonitorFloat {
          0%,
          100% {
            margin-top: 0;
          }

          50% {
            margin-top: -10px;
          }
        }

        @keyframes pulseMonitorBeat {
          0%,
          60%,
          100% {
            border-color: ${accent}55;
            box-shadow:
              0 38px 115px rgba(0, 0, 0, 0.66),
              0 0 46px ${accent}18,
              inset 0 0 42px rgba(255, 255, 255, 0.025);
          }

          68% {
            border-color: ${accent}a0;
            box-shadow:
              0 38px 115px rgba(0, 0, 0, 0.66),
              0 0 72px ${accent}35,
              inset 0 0 46px ${accent}0e;
          }

          84% {
            border-color: ${accent}78;
          }
        }

        @keyframes pulseMonitorEcg {
          from {
            stroke-dashoffset: 800;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulseResp {
          from {
            stroke-dashoffset: 800;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulseNumber {
          0%,
          60%,
          100% {
            transform: scale(1);
          }

          68% {
            transform: scale(1.09);
          }

          76% {
            transform: scale(1.01);
          }

          84% {
            transform: scale(1.055);
          }
        }

        @keyframes pulseVitalBeat {
          0%,
          60%,
          100% {
            border-color: rgba(255, 255, 255, 0.05);
            transform: scale(1);
          }

          68% {
            border-color: ${accent}45;
            transform: scale(1.015);
          }

          84% {
            transform: scale(1.006);
          }
        }

        @keyframes pulseMeter {
          0%,
          100% {
            opacity: 0.72;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes pulseScan {
          0%,
          62% {
            top: -16%;
            opacity: 0;
          }

          68% {
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

        @keyframes pulseShine {
          0%,
          65% {
            left: -45%;
            opacity: 0;
          }

          72% {
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

        @keyframes pulseFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        @keyframes pulseFloatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(11px) rotate(-1deg);
          }
        }

        @keyframes pulseFloatThree {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @media (max-width: 1050px) {
          .pulse-monitor {
            right: 3%;
            width: 58vw;
          }

          .pulse-status-connected,
          .pulse-status-sensor {
            left: 3%;
          }
        }

        @media (max-width: 760px) {
          .pulse-monitor {
            left: 50%;
            right: auto;
            width: calc(100% - 30px);
            min-height: 430px;
            padding: 15px;
            transform: translate(-50%, -50%);
          }

          .pulse-monitor-main {
            grid-template-columns: 1fr 105px;
          }

          .pulse-patient-meta,
          .pulse-vitals {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pulse-rings,
          .pulse-status-card {
            display: none;
          }

          .pulse-monitor-footer span:nth-child(2) {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-grid,
          .pulse-glow,
          .pulse-page-ecg-line,
          .pulse-ring,
          .pulse-heart,
          .pulse-status-card,
          .pulse-status-icon,
          .pulse-monitor,
          .pulse-monitor-scan,
          .pulse-monitor-shine,
          .pulse-live span,
          .pulse-monitor-ecg-line,
          .pulse-resp-row path,
          .pulse-heart-rate strong,
          .pulse-vital,
          .pulse-meter span {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}