import type { NextApiRequest, NextApiResponse } from "next";

// Our mock data for GET requests
// (Initially contains two scans)
const mockScans = [
  {
    id: "scan-001",
    date: "2024-05-01T12:00:00Z",
    status: "Completed",
    results: "No issues found",
  },
  {
    id: "scan-002",
    date: "2024-05-02T15:30:00Z",
    status: "Failed",
    results: "Some issues found",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Return the mock scans
    return res.status(200).json(mockScans);
  }

  if (req.method === "POST") {
    const { account, scanType } = req.body;

    // Generate a random ID for the new scan
    const randomId = `scan-${Math.floor(Math.random() * 10000)}`;

    // Create a new scan object
    const newScan = {
      id: randomId,
      date: new Date().toISOString(), // Current date/time
      status: "In Progress",
      results: "N/A", 
      account: account || "",
      scanType: scanType || "",
    };

    // Push the new scan to the front of our array
    mockScans.unshift(newScan);

    // Return the newly created scan as the response
    return res.status(201).json(newScan);
  }

  // If not GET or POST, return "Method Not Allowed"
  return res.status(405).json({ message: "Method Not Allowed" });
}
