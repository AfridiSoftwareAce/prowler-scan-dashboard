import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

// Defining the shape of a Scan object
type Scan = {
  id: string;
  date: string;
  status: string;
  results?: string;
};

interface ScanListProps {
  scans: Scan[];
}

const ScanList: React.FC<ScanListProps> = ({ scans }) => {
  if (!scans || scans.length === 0) {
    return <p>No scans found.</p>;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      {scans.map((scan) => (
        <Card key={scan.id} style={{ marginBottom: "1rem" }}>
          <CardHeader>
            <strong>Scan ID: {scan.id}</strong>
          </CardHeader>
          <CardBody>
            <p>Date: {scan.date}</p>
            <p>Status: {scan.status}</p>
            {scan.results && <p>Results: {scan.results}</p>}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ScanList;
