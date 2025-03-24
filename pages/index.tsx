import React, { useEffect, useState } from "react";
import Head from "next/head";

import ScanList from "../components/scanList";
import ControlPanel from "../components/controlPanel";

type Scan = {
  id: string;
  date: string;
  status: string;
  results?: string;
};

export default function Home() {
  const [scans, setScans] = useState<Scan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/api/scans")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch scans");
        }
        return res.json();
      })
      .then((data: Scan[]) => {
        setScans(data);
      })
      .catch((err) => {
        console.error("Error fetching scans:", err);
      });
  }, []);

  const startNewScan = (account: string, scanType: string) => {
    setIsLoading(true);
    fetch("/api/scans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account, scanType }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to start a new scan");
        }
        return res.json();
      })
      .then((newScan: Scan) => {
        setScans((prev) => [newScan, ...prev]);
      })
      .catch((err) => {
        console.error("Error starting new scan:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Prowler Scans Dashboard</title>
      </Head>
      <div style={{ padding: "2rem" }}>
        <h1>Prowler Scans Dashboard</h1>
        <ControlPanel onStartScan={startNewScan} isLoading={isLoading} />
        <ScanList scans={scans} />
      </div>
    </>
  );
}
