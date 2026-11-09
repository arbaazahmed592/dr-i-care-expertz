import type { DeviceCategory } from "./devices";

export interface IssueType {
  id: string;
  label: string;
}

export const issueTypes: IssueType[] = [
  { id: "display", label: "Display Damage" },
  { id: "battery", label: "Battery Issue" },
  { id: "charging", label: "Charging Issue" },
  { id: "camera", label: "Camera Issue" },
  { id: "water-damage", label: "Water Damage" },
  { id: "speaker", label: "Speaker Issue" },
  { id: "mic", label: "Mic Issue" },
  { id: "software", label: "Software Issue" },
  { id: "other", label: "Other" }
];

// Placeholder base estimate ranges in INR, by category + issue.
const baseRanges: Record<DeviceCategory, Record<string, [number, number]>> = {
  iPhone: {
    display: [2500, 15000],
    battery: [1500, 5500],
    charging: [1200, 4000],
    camera: [2000, 9000],
    "water-damage": [1500, 12000],
    speaker: [1000, 3500],
    mic: [1000, 3500],
    software: [500, 2500],
    other: [1000, 8000]
  },
  iPad: {
    display: [4500, 22000],
    battery: [3000, 8500],
    charging: [1800, 5000],
    camera: [2500, 9000],
    "water-damage": [2500, 15000],
    speaker: [1500, 4500],
    mic: [1500, 4000],
    software: [800, 3000],
    other: [1500, 9000]
  },
  MacBook: {
    display: [8000, 35000],
    battery: [5000, 15000],
    charging: [2500, 9000],
    camera: [3000, 10000],
    "water-damage": [4000, 25000],
    speaker: [2000, 6000],
    mic: [2000, 5500],
    software: [1000, 4000],
    other: [2500, 15000]
  },
  iMac: {
    display: [9000, 38000],
    battery: [0, 0],
    charging: [2000, 6000],
    camera: [2500, 7000],
    "water-damage": [4500, 22000],
    speaker: [2500, 6500],
    mic: [2000, 5000],
    software: [1200, 4500],
    other: [2500, 14000]
  },
  "Apple Watch": {
    display: [2500, 12000],
    battery: [1500, 4500],
    charging: [1200, 3500],
    camera: [0, 0],
    "water-damage": [2000, 9000],
    speaker: [1200, 3000],
    mic: [1200, 3000],
    software: [500, 2000],
    other: [1000, 6000]
  }
};

export function estimateRepairCost(category: DeviceCategory, issueId: string): [number, number] | null {
  const range = baseRanges[category]?.[issueId];
  if (!range || (range[0] === 0 && range[1] === 0)) return null;
  return range;
}
