"use client";

type TriageBackgroundProps = {
  accent?: string;
};

const departments = [
  { label: "ER", sublabel: "ENTRY", left: "8%", top: "66%", status: "active" },
  { label: "TR", sublabel: "TRAUMA", left: "29%", top: "27%", status: "critical" },
  { label: "CT", sublabel: "IMAGING", left: "51%", top: "18%", status: "active" },
  { label: "ICU", sublabel: "6 / 8", left: "73%", top: "29%", status: "occupied" },
  { label: "OR", sublabel: "READY", left: "62%", top: "67%", status: "active" },
  { label: "LAB", sublabel: "ONLINE", left: "39%", top: "70%", status: "active" },
  { label: "MRI", sublabel: "AVAILABLE", left: "84%", top: "59%", status: "available" },
];

const patientMarkers = [
  { id: "P01", left: "18%", top: "54%", delay: "-0.5s", color: "#ef4444" },
  { id: "P08", left: "42%", top: "43%", delay: "-1.5s", color: "#f97316" },
  { id: "P14", left: "58%", top: "55%", delay: "-2.5s", color: "#eab308" },
  { id: "P17", left: "76%", top: "45%", delay: "-3.5s", color: "#22c55e" },
];

const aiNodes = [
  { left: "7%", top: "18%", delay: "-0.4s" },
  { left: "18%", top: "37%", delay: "-1.2s" },
  { left: "27%", top: "12%", delay: "-2.4s" },
  { left: "38%", top: "31%", delay: "-3.1s" },
  { left: "49%", top: "11%", delay: "-0.9s" },
  { left: "58%", top: "38%", delay: "-2.1s" },
  { left: "68%", top: "15%", delay: "-3.7s" },
  { left: "79%", top: "39%", delay: "-1.8s" },
  { left: "91%", top: "20%", delay: "-2.9s" },
  { left: "22%", top: "78%", delay: "-3.4s" },
  { left: "48%", top: "82%", delay: "-1.5s" },
  { left: "72%", top: "76%", delay: "-2.6s" },
  { left: "89%", top: "84%", delay: "-0.7s" },
];

export default function TriageBackground({
  accent = "#38bdf8",
}: TriageBackgroundProps) {
  return (
    <div className="triage-background" aria-hidden="true">
      <div className="triage-bg-glow triage-bg-glow-red" />
      <div className="triage-bg-glow triage-bg-glow-orange" />
      <div className="triage-bg-glow triage-bg-glow-blue" />

      <div className="triage-bg-grid" />
      <div className="triage-bg-vignette" />

      <div className="triage-bg-blueprint">
        <svg
          className="triage-bg-floor-lines"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          <path d="M80 430 H235 V245 H420 V115 H610 V210 H840 V380 H930" />
          <path d="M235 245 V500 H420 V445 H610 V530 H840 V380" />
          <path d="M420 115 V445" />
          <path d="M610 210 V530" />
          <path d="M235 365 H840" />

          <path className="triage-bg-route-red" d="M70 500 C180 500 180 300 300 300 C410 300 430 180 520 180" />
          <path className="triage-bg-route-orange" d="M95 535 C270 535 305 390 470 390 C620 390 690 270 830 270" />
          <path className="triage-bg-route-blue" d="M90 455 C225 455 320 540 475 540 C640 540 715 460 905 460" />
        </svg>

        {departments.map((department) => (
          <div
            key={department.label}
            className={`triage-bg-department triage-bg-${department.status}`}
            style={{
              left: department.left,
              top: department.top,
            }}
          >
            <span>{department.label}</span>
            <small>{department.sublabel}</small>

            {department.status === "critical" && (
              <i className="triage-bg-room-alert" />
            )}
          </div>
        ))}

        {patientMarkers.map((patient) => (
          <div
            key={patient.id}
            className="triage-bg-patient"
            style={{
              left: patient.left,
              top: patient.top,
              animationDelay: patient.delay,
              "--patient-color": patient.color,
            } as React.CSSProperties}
          >
            <span />
            <small>{patient.id}</small>
          </div>
        ))}

        <div className="triage-bg-route-pulse route-pulse-one" />
        <div className="triage-bg-route-pulse route-pulse-two" />
        <div className="triage-bg-route-pulse route-pulse-three" />
      </div>

      <div className="triage-bg-ekg">
        <div className="triage-bg-ekg-base" />

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="triage-bg-ekg-line"
        >
          <path d="M0 62 H105 L126 62 L145 24 L170 97 L193 48 L211 62 H335 L355 62 L374 21 L398 102 L421 45 L440 62 H575 L595 62 L615 26 L639 96 L660 49 L680 62 H820 L840 62 L860 20 L884 103 L905 47 L924 62 H1060 L1080 62 L1100 25 L1124 98 L1145 48 L1164 62 H1200" />
        </svg>

        <div className="triage-bg-ekg-glow" />
      </div>

      <div className="triage-bg-ambulance ambulance-one">
        <div className="triage-bg-ambulance-light" />

        <div className="triage-bg-ambulance-body">
          <span>+</span>
        </div>

        <div className="triage-bg-wheel wheel-one" />
        <div className="triage-bg-wheel wheel-two" />
      </div>

      <div className="triage-bg-ambulance ambulance-two">
        <div className="triage-bg-ambulance-light" />

        <div className="triage-bg-ambulance-body">
          <span>+</span>
        </div>

        <div className="triage-bg-wheel wheel-one" />
        <div className="triage-bg-wheel wheel-two" />
      </div>

      <div className="triage-bg-helicopter">
        <div className="triage-bg-helicopter-blade" />
        <div className="triage-bg-helicopter-tail" />

        <div className="triage-bg-helicopter-body">
          <span>+</span>
        </div>

        <div className="triage-bg-helicopter-skid skid-one" />
        <div className="triage-bg-helicopter-skid skid-two" />
      </div>

      <div className="triage-bg-helicopter-route">
        <span />
      </div>

      <div className="triage-bg-stat stat-capacity">
        <small>ED CAPACITY</small>
        <strong>18 / 22</strong>

        <div className="triage-bg-progress">
          <span style={{ width: "82%" }} />
        </div>
      </div>

      <div className="triage-bg-stat stat-incoming">
        <small>INCOMING</small>
        <strong>04</strong>
        <span>AMBULANCES</span>
      </div>

      <div className="triage-bg-stat stat-wait">
        <small>AVERAGE WAIT</small>
        <strong>11 MIN</strong>
        <span>↓ 3 MIN</span>
      </div>

      <div className="triage-bg-stat stat-critical">
        <div className="triage-bg-critical-dot" />

        <div>
          <small>CRITICAL</small>
          <strong>02 ACTIVE</strong>
        </div>
      </div>

      <div className="triage-bg-alert">
        <div className="triage-bg-alert-icon">!</div>

        <div>
          <small>TRAUMA ALERT</small>
          <strong>Stroke team activated</strong>
          <span>Inbound ETA 03 minutes</span>
        </div>
      </div>

      <div className="triage-bg-ai-network">
        <svg
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
          className="triage-bg-ai-lines"
        >
          <path d="M70 117 L180 240 L270 78 L380 202 L490 72" />
          <path d="M490 72 L580 247 L680 97 L790 254 L910 130" />
          <path d="M180 240 L220 507 L480 533 L720 494 L890 546" />
          <path d="M380 202 L480 533" />
          <path d="M580 247 L720 494" />
          <path d="M790 254 L890 546" />
        </svg>

        {aiNodes.map((node, index) => (
          <span
            key={index}
            className="triage-bg-ai-node"
            style={{
              left: node.left,
              top: node.top,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      <div className="triage-bg-ai-core">
        <div className="triage-bg-ai-ring ai-ring-one" />
        <div className="triage-bg-ai-ring ai-ring-two" />
        <div className="triage-bg-ai-ring ai-ring-three" />

        <div className="triage-bg-ai-center">
          <span>AI</span>
        </div>

        <small>ROUTING</small>
      </div>

      <div className="triage-bg-radar">
        <div className="triage-bg-radar-circle radar-circle-one" />
        <div className="triage-bg-radar-circle radar-circle-two" />
        <div className="triage-bg-radar-circle radar-circle-three" />

        <div className="triage-bg-radar-cross radar-cross-horizontal" />
        <div className="triage-bg-radar-cross radar-cross-vertical" />

        <div className="triage-bg-radar-sweep" />

        <span className="radar-point radar-point-one" />
        <span className="radar-point radar-point-two" />
        <span className="radar-point radar-point-three" />
      </div>

      <div className="triage-bg-medical-cross cross-one">
        <span />
        <i />
      </div>

      <div className="triage-bg-medical-cross cross-two">
        <span />
        <i />
      </div>

      <div className="triage-bg-medical-cross cross-three">
        <span />
        <i />
      </div>

      <div className="triage-bg-beacon beacon-one">
        <span />
      </div>

      <div className="triage-bg-beacon beacon-two">
        <span />
      </div>

      <div className="triage-bg-scan-line" />

      <style>{`
        .triage-background {
          position: absolute;
          z-index: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
          background:
            radial-gradient(
              circle at 18% 28%,
              rgba(239, 68, 68, 0.1),
              transparent 34%
            ),
            radial-gradient(
              circle at 82% 66%,
              rgba(249, 115, 22, 0.07),
              transparent 40%
            ),
            radial-gradient(
              circle at 54% 18%,
              ${accent}0b,
              transparent 35%
            );
        }

        .triage-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.3;
          animation: triageBgGlow 8s ease-in-out infinite;
        }

        .triage-bg-glow-red {
          left: -10%;
          top: 10%;
          width: 430px;
          height: 430px;
          background: rgba(239, 68, 68, 0.32);
        }

        .triage-bg-glow-orange {
          right: -8%;
          bottom: -12%;
          width: 500px;
          height: 500px;
          background: rgba(249, 115, 22, 0.2);
          animation-delay: -4s;
        }

        .triage-bg-glow-blue {
          left: 42%;
          top: -18%;
          width: 380px;
          height: 380px;
          background: ${accent}1e;
          animation-delay: -2s;
        }

        .triage-bg-grid {
          position: absolute;
          inset: -80px;
          opacity: 0.09;
          background-image:
            linear-gradient(${accent}24 1px, transparent 1px),
            linear-gradient(90deg, ${accent}24 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0, 0, 0, 0.62) 48%,
            transparent 86%
          );
          animation: triageBgGridMove 28s linear infinite;
        }

        .triage-bg-vignette {
          position: absolute;
          z-index: 20;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.25),
              transparent 24%,
              transparent 76%,
              rgba(2, 6, 23, 0.25)
            ),
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(2, 6, 23, 0.36) 100%
            );
        }

        .triage-bg-blueprint {
          position: absolute;
          left: 6%;
          top: 13%;
          width: 88%;
          height: 72%;
          opacity: 0.19;
          transform: perspective(900px) rotateX(7deg);
          animation: triageBgBlueprintFloat 11s ease-in-out infinite;
        }

        .triage-bg-floor-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .triage-bg-floor-lines path {
          fill: none;
          stroke: ${accent}66;
          stroke-width: 1.1;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .triage-bg-floor-lines .triage-bg-route-red {
          stroke: #ef4444;
          stroke-width: 1.6;
          stroke-dasharray: 8 12;
          filter: drop-shadow(0 0 5px #ef4444);
          animation: triageBgRouteFlow 7s linear infinite;
        }

        .triage-bg-floor-lines .triage-bg-route-orange {
          stroke: #f97316;
          stroke-width: 1.4;
          stroke-dasharray: 6 10;
          filter: drop-shadow(0 0 5px #f97316);
          animation: triageBgRouteFlow 9s linear infinite reverse;
        }

        .triage-bg-floor-lines .triage-bg-route-blue {
          stroke: ${accent};
          stroke-width: 1.2;
          stroke-dasharray: 5 9;
          filter: drop-shadow(0 0 4px ${accent});
          animation: triageBgRouteFlow 8s linear infinite;
        }

        .triage-bg-department {
          position: absolute;
          display: flex;
          width: 68px;
          height: 54px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: 1px solid ${accent}55;
          border-radius: 9px;
          background: rgba(5, 12, 27, 0.54);
          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.28),
            inset 0 0 14px ${accent}0a;
          backdrop-filter: blur(4px);
          transform: translate(-50%, -50%);
          animation: triageBgRoomFloat 6s ease-in-out infinite;
        }

        .triage-bg-department span {
          color: ${accent};
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.8px;
        }

        .triage-bg-department small {
          color: rgba(255, 255, 255, 0.35);
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .triage-bg-department.triage-bg-critical {
          border-color: rgba(239, 68, 68, 0.68);
          background: rgba(239, 68, 68, 0.08);
          box-shadow:
            0 0 24px rgba(239, 68, 68, 0.15),
            inset 0 0 18px rgba(239, 68, 68, 0.08);
        }

        .triage-bg-critical span {
          color: #ef4444;
        }

        .triage-bg-department.triage-bg-occupied {
          border-color: rgba(249, 115, 22, 0.54);
        }

        .triage-bg-occupied span {
          color: #f97316;
        }

        .triage-bg-department.triage-bg-available {
          border-color: rgba(34, 197, 94, 0.5);
        }

        .triage-bg-available span {
          color: #22c55e;
        }

        .triage-bg-room-alert {
          position: absolute;
          right: -4px;
          top: -4px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 9px #ef4444,
            0 0 18px rgba(239, 68, 68, 0.7);
          animation: triageBgAlertPulse 1.15s ease-in-out infinite;
        }

        .triage-bg-patient {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.5);
          font-family: "Courier New", monospace;
          transform: translate(-50%, -50%);
          animation: triageBgPatientFloat 3.5s ease-in-out infinite;
        }

        .triage-bg-patient span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--patient-color);
          box-shadow:
            0 0 8px var(--patient-color),
            0 0 16px var(--patient-color);
        }

        .triage-bg-patient small {
          color: var(--patient-color);
          font-size: 6px;
          font-weight: 800;
        }

        .triage-bg-route-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          border: 1px solid #ef4444;
          border-radius: 50%;
          opacity: 0;
          animation: triageBgRoutePulse 3.2s ease-out infinite;
        }

        .route-pulse-one {
          left: 27%;
          top: 28%;
        }

        .route-pulse-two {
          left: 49%;
          top: 19%;
          border-color: ${accent};
          animation-delay: -1.1s;
        }

        .route-pulse-three {
          right: 14%;
          top: 57%;
          border-color: #22c55e;
          animation-delay: -2.2s;
        }

        .triage-bg-ekg {
          position: absolute;
          left: -6%;
          top: 51%;
          width: 112%;
          height: 130px;
          opacity: 0.2;
          transform: translateY(-50%);
        }

        .triage-bg-ekg-base {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(239, 68, 68, 0.55),
            rgba(239, 68, 68, 0.9),
            rgba(239, 68, 68, 0.55),
            transparent
          );
        }

        .triage-bg-ekg-line {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .triage-bg-ekg-line path {
          fill: none;
          stroke: #ef4444;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1400;
          filter: drop-shadow(0 0 6px #ef4444);
          animation: triageBgEkgDraw 6s linear infinite;
        }

        .triage-bg-ekg-glow {
          position: absolute;
          right: 15%;
          top: 50%;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.7);
          filter: blur(10px);
          transform: translateY(-50%);
          animation: triageBgEkgGlow 1.2s ease-in-out infinite;
        }

        .triage-bg-ambulance {
          position: absolute;
          z-index: 5;
          width: 70px;
          height: 36px;
          opacity: 0.24;
        }

        .ambulance-one {
          left: -90px;
          bottom: 8%;
          animation: triageBgAmbulanceDrive 15s linear infinite;
        }

        .ambulance-two {
          left: -120px;
          bottom: 19%;
          transform: scale(0.72);
          animation: triageBgAmbulanceDriveTwo 19s linear infinite;
          animation-delay: -8s;
        }

        .triage-bg-ambulance-body {
          position: absolute;
          inset: 6px 0 4px;
          display: grid;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 5px 9px 5px 5px;
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
          font-size: 17px;
          font-weight: 950;
          box-shadow:
            0 0 14px rgba(239, 68, 68, 0.35),
            inset 0 0 12px rgba(239, 68, 68, 0.08);
        }

        .triage-bg-ambulance-light {
          position: absolute;
          z-index: 2;
          left: 23px;
          top: 1px;
          width: 14px;
          height: 5px;
          border-radius: 4px 4px 0 0;
          background: #ef4444;
          box-shadow: 0 0 11px #ef4444;
          animation: triageBgEmergencyLight 0.55s steps(2) infinite;
        }

        .triage-bg-wheel {
          position: absolute;
          bottom: 0;
          width: 12px;
          height: 12px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          background: #020617;
          animation: triageBgWheelSpin 0.65s linear infinite;
        }

        .triage-bg-wheel.wheel-one {
          left: 10px;
        }

        .triage-bg-wheel.wheel-two {
          right: 10px;
        }

        .triage-bg-helicopter {
          position: absolute;
          z-index: 4;
          left: -150px;
          top: 9%;
          width: 105px;
          height: 56px;
          opacity: 0.17;
          animation: triageBgHelicopterFly 24s linear infinite;
        }

        .triage-bg-helicopter-body {
          position: absolute;
          left: 26px;
          top: 20px;
          display: grid;
          width: 55px;
          height: 27px;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 20px 24px 12px 14px;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          font-size: 12px;
          font-weight: 950;
        }

        .triage-bg-helicopter-tail {
          position: absolute;
          right: 1px;
          top: 29px;
          width: 31px;
          height: 2px;
          background: #ef4444;
          transform: rotate(-7deg);
        }

        .triage-bg-helicopter-tail::after {
          content: "";
          position: absolute;
          right: -2px;
          top: -8px;
          width: 2px;
          height: 17px;
          background: #ef4444;
        }

        .triage-bg-helicopter-blade {
          position: absolute;
          left: 5px;
          top: 11px;
          width: 95px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #ef4444,
            transparent
          );
          transform-origin: center;
          animation: triageBgBladeSpin 0.18s linear infinite;
        }

        .triage-bg-helicopter-blade::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -9px;
          width: 2px;
          height: 20px;
          background: #ef4444;
          transform: translateX(-50%);
        }

        .triage-bg-helicopter-skid {
          position: absolute;
          top: 49px;
          width: 38px;
          height: 7px;
          border-bottom: 1px solid #ef4444;
          border-radius: 50%;
        }

        .skid-one {
          left: 25px;
        }

        .skid-two {
          left: 46px;
        }

        .triage-bg-helicopter-route {
          position: absolute;
          left: 8%;
          top: 17%;
          width: 84%;
          height: 1px;
          opacity: 0.13;
          border-top: 1px dashed #ef4444;
          transform: rotate(-4deg);
        }

        .triage-bg-helicopter-route span {
          position: absolute;
          left: 0;
          top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 9px #ef4444;
          animation: triageBgRouteDot 12s linear infinite;
        }

        .triage-bg-stat {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 126px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 11px;
          background: rgba(2, 6, 23, 0.42);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
          opacity: 0.17;
          backdrop-filter: blur(6px);
        }

        .triage-bg-stat small {
          color: rgba(255, 255, 255, 0.32);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .triage-bg-stat strong {
          color: #ffffff;
          font-family: "Courier New", monospace;
          font-size: 15px;
        }

        .triage-bg-stat > span {
          color: ${accent};
          font-size: 5px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .stat-capacity {
          left: 4%;
          top: 9%;
          animation: triageBgStatFloatOne 9s ease-in-out infinite;
        }

        .stat-incoming {
          right: 6%;
          top: 10%;
          border-color: rgba(239, 68, 68, 0.26);
          animation: triageBgStatFloatTwo 8s ease-in-out infinite;
        }

        .stat-incoming strong,
        .stat-incoming > span {
          color: #ef4444;
        }

        .stat-wait {
          left: 10%;
          bottom: 12%;
          animation: triageBgStatFloatThree 10s ease-in-out infinite;
        }

        .stat-critical {
          right: 7%;
          bottom: 10%;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          border-color: rgba(239, 68, 68, 0.28);
          animation: triageBgStatFloatFour 7s ease-in-out infinite;
        }

        .stat-critical > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .stat-critical strong {
          color: #ef4444;
          font-size: 11px;
        }

        .triage-bg-progress {
          width: 100%;
          height: 3px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }

        .triage-bg-progress span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, ${accent}, #f97316);
          box-shadow: 0 0 8px ${accent};
          animation: triageBgCapacityPulse 2.5s ease-in-out infinite;
        }

        .triage-bg-critical-dot {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ef4444;
          box-shadow:
            0 0 10px #ef4444,
            0 0 20px rgba(239, 68, 68, 0.7);
          animation: triageBgAlertPulse 1s ease-in-out infinite;
        }

        .triage-bg-alert {
          position: absolute;
          left: 50%;
          top: 8%;
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 220px;
          padding: 11px 14px;
          border: 1px solid rgba(239, 68, 68, 0.32);
          border-radius: 11px;
          background: linear-gradient(
            90deg,
            rgba(239, 68, 68, 0.08),
            rgba(2, 6, 23, 0.44)
          );
          box-shadow: 0 0 26px rgba(239, 68, 68, 0.1);
          opacity: 0.18;
          transform: translateX(-50%);
          animation: triageBgAlertFloat 8s ease-in-out infinite;
        }

        .triage-bg-alert-icon {
          display: grid;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid #ef4444;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          font-size: 15px;
          font-weight: 950;
          box-shadow: 0 0 13px rgba(239, 68, 68, 0.35);
          animation: triageBgAlertPulse 1.1s ease-in-out infinite;
        }

        .triage-bg-alert > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .triage-bg-alert small {
          color: #ef4444;
          font-size: 5px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .triage-bg-alert strong {
          color: rgba(255, 255, 255, 0.75);
          font-size: 8px;
        }

        .triage-bg-alert span {
          color: rgba(255, 255, 255, 0.34);
          font-size: 6px;
        }

        .triage-bg-ai-network {
          position: absolute;
          inset: 0;
          opacity: 0.12;
        }

        .triage-bg-ai-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .triage-bg-ai-lines path {
          fill: none;
          stroke: ${accent};
          stroke-width: 0.65;
          stroke-dasharray: 6 11;
          filter: drop-shadow(0 0 4px ${accent});
          animation: triageBgAiLineFlow 16s linear infinite;
        }

        .triage-bg-ai-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border: 1px solid ${accent};
          border-radius: 50%;
          background: ${accent};
          box-shadow:
            0 0 7px ${accent},
            0 0 15px ${accent}88;
          animation: triageBgAiNode 4s ease-in-out infinite;
        }

        .triage-bg-ai-core {
          position: absolute;
          right: 22%;
          bottom: 5%;
          width: 130px;
          height: 130px;
          opacity: 0.16;
          animation: triageBgAiCoreFloat 10s ease-in-out infinite;
        }

        .triage-bg-ai-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid ${accent}99;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .ai-ring-one {
          width: 122px;
          height: 122px;
          border-style: dashed;
          animation: triageBgSpin 18s linear infinite;
        }

        .ai-ring-two {
          width: 92px;
          height: 92px;
          animation: triageBgSpinReverse 13s linear infinite;
        }

        .ai-ring-three {
          width: 60px;
          height: 60px;
          border-style: dotted;
          animation: triageBgSpin 8s linear infinite;
        }

        .triage-bg-ai-center {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 50%;
          background: ${accent}16;
          box-shadow:
            0 0 22px ${accent}66,
            inset 0 0 12px ${accent}22;
          transform: translate(-50%, -50%);
        }

        .triage-bg-ai-center span {
          color: ${accent};
          font-size: 11px;
          font-weight: 950;
        }

        .triage-bg-ai-core > small {
          position: absolute;
          left: 50%;
          bottom: -4px;
          color: ${accent};
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transform: translateX(-50%);
        }

        .triage-bg-radar {
          position: absolute;
          left: 2%;
          top: 31%;
          width: 150px;
          height: 150px;
          opacity: 0.12;
          border: 1px solid #ef4444;
          border-radius: 50%;
        }

        .triage-bg-radar-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid rgba(239, 68, 68, 0.65);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .radar-circle-one {
          width: 105px;
          height: 105px;
        }

        .radar-circle-two {
          width: 70px;
          height: 70px;
        }

        .radar-circle-three {
          width: 35px;
          height: 35px;
        }

        .triage-bg-radar-cross {
          position: absolute;
          left: 50%;
          top: 50%;
          background: rgba(239, 68, 68, 0.55);
          transform: translate(-50%, -50%);
        }

        .radar-cross-horizontal {
          width: 100%;
          height: 1px;
        }

        .radar-cross-vertical {
          width: 1px;
          height: 100%;
        }

        .triage-bg-radar-sweep {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 50%;
          height: 1px;
          background: linear-gradient(
            90deg,
            #ef4444,
            rgba(239, 68, 68, 0)
          );
          transform-origin: left center;
          animation: triageBgRadarSweep 5s linear infinite;
        }

        .radar-point {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: triageBgRadarPoint 2s ease-in-out infinite;
        }

        .radar-point-one {
          left: 29%;
          top: 36%;
        }

        .radar-point-two {
          right: 24%;
          top: 44%;
          animation-delay: -0.7s;
        }

        .radar-point-three {
          left: 48%;
          bottom: 18%;
          animation-delay: -1.4s;
        }

        .triage-bg-medical-cross {
          position: absolute;
          width: 44px;
          height: 44px;
          opacity: 0.11;
          animation: triageBgCrossFloat 9s ease-in-out infinite;
        }

        .triage-bg-medical-cross span,
        .triage-bg-medical-cross i {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 3px;
          background: #ef4444;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.7);
          transform: translate(-50%, -50%);
        }

        .triage-bg-medical-cross span {
          width: 12px;
          height: 42px;
        }

        .triage-bg-medical-cross i {
          width: 42px;
          height: 12px;
        }

        .cross-one {
          right: 13%;
          top: 31%;
        }

        .cross-two {
          left: 31%;
          bottom: 4%;
          transform: scale(0.7);
          animation-delay: -3s;
        }

        .cross-three {
          right: 37%;
          top: 17%;
          transform: scale(0.55);
          animation-delay: -6s;
        }

        .triage-bg-beacon {
          position: absolute;
          width: 60px;
          height: 60px;
          opacity: 0.1;
        }

        .triage-bg-beacon span {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 12px #ef4444;
          transform: translate(-50%, -50%);
        }

        .triage-bg-beacon::before,
        .triage-bg-beacon::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border: 1px solid #ef4444;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%);
          animation: triageBgBeacon 3s ease-out infinite;
        }

        .triage-bg-beacon::after {
          animation-delay: -1.5s;
        }

        .beacon-one {
          left: 45%;
          top: 24%;
        }

        .beacon-two {
          right: 10%;
          bottom: 26%;
          transform: scale(0.75);
        }

        .triage-bg-scan-line {
          position: absolute;
          z-index: 15;
          left: 0;
          top: -12%;
          width: 100%;
          height: 10%;
          opacity: 0;
          border-bottom: 1px solid rgba(239, 68, 68, 0.4);
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(239, 68, 68, 0.02),
            rgba(239, 68, 68, 0.1),
            transparent
          );
          animation: triageBgScan 10s ease-in-out infinite;
        }

        @keyframes triageBgGlow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.42;
            transform: scale(1.1);
          }
        }

        @keyframes triageBgGridMove {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(48px, 48px);
          }
        }

        @keyframes triageBgBlueprintFloat {
          0%,
          100% {
            transform: perspective(900px) rotateX(7deg) translateY(0);
          }

          50% {
            transform: perspective(900px) rotateX(7deg) translateY(-10px);
          }
        }

        @keyframes triageBgRouteFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -140;
          }
        }

        @keyframes triageBgRoomFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }

        @keyframes triageBgAlertPulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.78);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes triageBgPatientFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-7px);
          }
        }

        @keyframes triageBgRoutePulse {
          0% {
            opacity: 0.5;
            transform: scale(0.35);
          }

          100% {
            opacity: 0;
            transform: scale(2.5);
          }
        }

        @keyframes triageBgEkgDraw {
          0% {
            stroke-dashoffset: 1400;
          }

          45%,
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes triageBgEkgGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: translateY(-50%) scale(0.7);
          }

          50% {
            opacity: 0.8;
            transform: translateY(-50%) scale(1.25);
          }
        }

        @keyframes triageBgAmbulanceDrive {
          0% {
            left: -90px;
          }

          38% {
            left: 22%;
          }

          49% {
            left: 22%;
          }

          100% {
            left: 110%;
          }
        }

        @keyframes triageBgAmbulanceDriveTwo {
          0% {
            left: -120px;
          }

          100% {
            left: 112%;
          }
        }

        @keyframes triageBgEmergencyLight {
          0% {
            opacity: 1;
          }

          50% {
            opacity: 0.12;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes triageBgWheelSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgHelicopterFly {
          0% {
            left: -150px;
            transform: translateY(0);
          }

          45% {
            transform: translateY(18px);
          }

          100% {
            left: 112%;
            transform: translateY(-12px);
          }
        }

        @keyframes triageBgBladeSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgRouteDot {
          from {
            left: 0;
          }

          to {
            left: 100%;
          }
        }

        @keyframes triageBgStatFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes triageBgStatFloatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }

          50% {
            transform: translateY(10px) rotate(-1deg);
          }
        }

        @keyframes triageBgStatFloatThree {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(9px);
          }
        }

        @keyframes triageBgStatFloatFour {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes triageBgCapacityPulse {
          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes triageBgAlertFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }

          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        @keyframes triageBgAiLineFlow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes triageBgAiNode {
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

        @keyframes triageBgAiCoreFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }

        @keyframes triageBgSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes triageBgSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes triageBgRadarSweep {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes triageBgRadarPoint {
          0%,
          100% {
            opacity: 0.25;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes triageBgCrossFloat {
          0%,
          100% {
            opacity: 0.07;
            transform: translateY(0) rotate(0deg);
          }

          50% {
            opacity: 0.15;
            transform: translateY(-11px) rotate(8deg);
          }
        }

        @keyframes triageBgBeacon {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.4);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(3);
          }
        }

        @keyframes triageBgScan {
          0%,
          62% {
            top: -12%;
            opacity: 0;
          }

          69% {
            opacity: 0.3;
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
          .triage-bg-stat,
          .triage-bg-alert {
            opacity: 0.1;
          }

          .triage-bg-blueprint {
            left: 1%;
            width: 98%;
          }

          .triage-bg-radar {
            left: -55px;
          }

          .triage-bg-ai-core {
            right: 5%;
          }
        }

        @media (max-width: 650px) {
          .triage-bg-stat,
          .triage-bg-alert,
          .triage-bg-radar,
          .triage-bg-medical-cross,
          .triage-bg-helicopter,
          .triage-bg-helicopter-route {
            display: none;
          }

          .triage-bg-blueprint {
            top: 17%;
            height: 62%;
            opacity: 0.12;
          }

          .triage-bg-department {
            width: 50px;
            height: 42px;
          }

          .triage-bg-department span {
            font-size: 7px;
          }

          .triage-bg-ekg {
            opacity: 0.12;
          }

          .triage-bg-ambulance {
            opacity: 0.14;
          }

          .triage-bg-ai-core {
            right: -20px;
            bottom: 3%;
            transform: scale(0.75);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .triage-background *,
          .triage-background *::before,
          .triage-background *::after {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}