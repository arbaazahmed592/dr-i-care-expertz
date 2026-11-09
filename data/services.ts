import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  BatteryCharging,
  Plug,
  PanelsTopLeft,
  Camera,
  Volume2,
  Mic,
  Droplets,
  CircuitBoard,
  Cog,
  ScanFace,
  Fingerprint,
  MonitorSmartphone,
  DatabaseBackup,
  Zap,
  Wifi,
  SignalHigh,
  Watch,
  Tablet,
  Laptop
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { id: "display", title: "Display Replacement", description: "Crisp, color-accurate screens for every iPhone, iPad and MacBook.", icon: PanelsTopLeft },
  { id: "battery", title: "Battery Replacement", description: "Restore all-day battery health with genuine-grade cells.", icon: BatteryCharging },
  { id: "charging-port", title: "Charging Port Repair", description: "Fix loose, slow or dead charging ports and Lightning/USB-C pins.", icon: Plug },
  { id: "back-glass", title: "Back Glass Replacement", description: "Precision back glass replacement with factory-matched finish.", icon: Smartphone },
  { id: "camera", title: "Camera Repair", description: "Blurry, cracked or non-functioning camera module repair.", icon: Camera },
  { id: "speaker", title: "Speaker Repair", description: "Restore clear call and media audio output.", icon: Volume2 },
  { id: "mic", title: "Mic Repair", description: "Fix muffled or silent microphone issues for calls and recording.", icon: Mic },
  { id: "water-damage", title: "Water Damage Repair", description: "Ultrasonic cleaning and component-level liquid damage recovery.", icon: Droplets },
  { id: "motherboard", title: "Motherboard Repair", description: "Advanced chip-level and motherboard diagnostics & repair.", icon: CircuitBoard },
  { id: "software", title: "Software Issues", description: "iOS/macOS updates, restores, boot loops and performance fixes.", icon: Cog },
  { id: "face-id", title: "Face ID Repair", description: "TrueDepth camera and Face ID module restoration.", icon: ScanFace },
  { id: "touch", title: "Touch Repair", description: "Unresponsive or ghost-touch digitizer repair.", icon: Fingerprint },
  { id: "lcd", title: "LCD Repair", description: "Lines, discoloration and backlight bleed fixes.", icon: MonitorSmartphone },
  { id: "data-recovery", title: "Data Recovery", description: "Recover photos, contacts and files from damaged devices.", icon: DatabaseBackup },
  { id: "power-ic", title: "Power IC Repair", description: "Dead device and no-power chip-level diagnosis & repair.", icon: Zap },
  { id: "wifi", title: "WiFi Issue Repair", description: "Restore dropped or weak WiFi connectivity.", icon: Wifi },
  { id: "network", title: "Network Issue Repair", description: "Fix no-signal, baseband and cellular network issues.", icon: SignalHigh },
  { id: "apple-watch", title: "Apple Watch Repairs", description: "Screen, battery and water damage repair for all Watch series.", icon: Watch },
  { id: "ipad", title: "iPad Repairs", description: "Full service for iPad, iPad Air, Mini and Pro models.", icon: Tablet },
  { id: "macbook", title: "MacBook Repairs", description: "Keyboard, battery, display and logic board service.", icon: Laptop },
  { id: "mac-logic-board", title: "Mac Logic Board Repairs", description: "Component-level logic board repair for MacBook & iMac.", icon: CircuitBoard }
];
