import React, { useState } from "react";
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";

interface ControlPanelProps {
  onStartScan: (account: string, scanType: string) => void;
  isLoading: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onStartScan, isLoading }) => {
  const [account, setAccount] = useState("");
  const [scanType, setScanType] = useState("");

  const handleStartClick = () => {
    onStartScan(account, scanType);
    // Optional:
    // setAccount("");
    // setScanType("");
  };

  return (
    <Card>
      <CardHeader>
        <h3>Start New Scan</h3>
      </CardHeader>
      <CardBody>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input
            label="AWS Account"
            placeholder="123456789012"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <Input
            label="Scan Type"
            placeholder="CIS Benchmark"
            value={scanType}
            onChange={(e) => setScanType(e.target.value)}
          />
          <Button
            onPress={handleStartClick}
            isDisabled={isLoading}
          >
            {isLoading ? "Starting..." : "Start Scan"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ControlPanel;
