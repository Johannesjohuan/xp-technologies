

import { useEffect, useRef, useState } from "react";
import LoginPreview from "../login-preview/LoginPreview";
import DashboardPreview from "../dashboard-preview/DashboardPreview";
import "./DashboardDemo.css";

const LOGIN_SEQUENCE = [
  {
    delay: 700,
    stage: "email-focus",
  },
  {
    delay: 1300,
    stage: "email-typing",
    email: "admin@xptechnologies.com",
  },
  {
    delay: 2800,
    stage: "password-focus",
  },
  {
    delay: 3400,
    stage: "password-typing",
    password: "XPAdmin2026",
  },
  {
    delay: 4700,
    stage: "button-focus",
  },
  {
    delay: 5300,
    stage: "signing-in",
  },
  {
    delay: 6200,
    stage: "welcome",
  },
];

const DASHBOARD_SEQUENCE = [
  { delay: 900, stage: "dashboard" },

  { delay: 1900, stage: "customer-menu" },

  { delay: 3000, stage: "customer-search" },

  { delay: 4700, stage: "customer-result" },

  { delay: 6500, stage: "orders-menu" },

  { delay: 7900, stage: "reports-menu" },


  { delay: 9000, stage: "dashboard-scroll" },

  { delay: 10400, stage: "dashboard-scroll-up" },

  { delay: 10400, stage: "logout-focus" },


  { delay: 11000, stage: "logout-click" },
];
function DashboardDemo() {
  const [screen, setScreen] = useState("login");
  const [stage, setStage] = useState("login-idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });

    timersRef.current = [];
  };

  const addTimer = (callback, delay) => {
    const timer = setTimeout(callback, delay);

    timersRef.current.push(timer);

    return timer;
  };

  const resetToLogin = () => {
    clearTimers();

    setScreen("login");
    setStage("login-idle");
    setEmail("");
    setPassword("");
  };

  const completeLogout = () => {
    clearTimers();
    setStage("logout-click");

    addTimer(() => {
      resetToLogin();
    }, 1100);
  };
 

  useEffect(() => {
    clearTimers();

    if (screen === "login") {
      setStage("login-idle");
      setEmail("");
      setPassword("");

      LOGIN_SEQUENCE.forEach((step) => {
        addTimer(() => {
          setStage(step.stage);

          if (step.email) {
            setEmail(step.email);
          }

          if (step.password) {
            setPassword(step.password);
          }
        }, step.delay);
      });

      addTimer(() => {
        setScreen("dashboard");
        setStage("dashboard");
      }, 7000);
    }

    if (screen === "dashboard") {
      DASHBOARD_SEQUENCE.forEach((step) => {
        addTimer(() => {
          setStage(step.stage);
        }, step.delay);
      });

      addTimer(() => {
        completeLogout();
      }, 12400);
    }

    return () => {
      clearTimers();
    };
  }, [screen]);

  return (
    <div className="dashboard-demo">

      {screen === "login" ? (

        <LoginPreview
          stage={stage}
          email={email}
          password={password}
        />

      ) : (

        <DashboardPreview
          stage={stage}
          onLogout={completeLogout}
        />

      )}

    </div>
  );
}

export default DashboardDemo;