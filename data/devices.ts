export type DeviceCategory = "iPhone" | "iPad" | "MacBook" | "iMac" | "Apple Watch";

export interface Device {
  id: string;
  name: string;
  category: DeviceCategory;
  group?: string;
}

function build(category: DeviceCategory, names: string[], group?: string): Device[] {
  return names.map((name) => ({
    id: `${category}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    category,
    group
  }));
}

export const iphones: Device[] = [
  ...build("iPhone", ["iPhone 5", "iPhone 5C", "iPhone 5S", "iPhone SE 1st Gen"], "iPhone 5 Series"),
  ...build("iPhone", ["iPhone 6", "iPhone 6 Plus", "iPhone 6S", "iPhone 6S Plus"], "iPhone 6 Series"),
  ...build("iPhone", ["iPhone 7", "iPhone 7 Plus"], "iPhone 7 Series"),
  ...build("iPhone", ["iPhone 8", "iPhone 8 Plus"], "iPhone 8 Series"),
  ...build("iPhone", ["iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max"], "iPhone X Series"),
  ...build("iPhone", ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"], "iPhone 11 Series"),
  ...build("iPhone", ["iPhone 12 Mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max"], "iPhone 12 Series"),
  ...build("iPhone", ["iPhone 13 Mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"], "iPhone 13 Series"),
  ...build("iPhone", ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"], "iPhone 14 Series"),
  ...build("iPhone", ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"], "iPhone 15 Series"),
  ...build("iPhone", ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"], "iPhone 16 Series")
];

export const ipads: Device[] = build(
  "iPad",
  [
    "iPad (1st-10th Gen)",
    "iPad Mini (1st-6th Gen)",
    "iPad Air (1st-6th Gen)",
    "iPad Pro 11-inch",
    "iPad Pro 12.9-inch"
  ],
  "All iPad Generations"
);

export const macbooks: Device[] = [
  ...build("MacBook", ["MacBook Air M1", "MacBook Air M2", "MacBook Air M3"], "MacBook Air"),
  ...build(
    "MacBook",
    [
      "MacBook Pro 13-inch (Intel)",
      "MacBook Pro 13-inch (M1)",
      "MacBook Pro 14-inch (M1 Pro/Max)",
      "MacBook Pro 14-inch (M2 Pro/Max)",
      "MacBook Pro 14-inch (M3 Pro/Max)",
      "MacBook Pro 16-inch (Intel)",
      "MacBook Pro 16-inch (M1 Pro/Max)",
      "MacBook Pro 16-inch (M2 Pro/Max)",
      "MacBook Pro 16-inch (M3 Pro/Max)"
    ],
    "MacBook Pro"
  )
];

export const imacs: Device[] = build("iMac", ['iMac 21.5"', 'iMac 24"', 'iMac 27"'], "iMac");

export const appleWatches: Device[] = build(
  "Apple Watch",
  [
    "Series 1",
    "Series 2",
    "Series 3",
    "Series 4",
    "Series 5",
    "Series 6",
    "Series 7",
    "Series 8",
    "Series 9",
    "Series 10",
    "Ultra",
    "Ultra 2"
  ],
  "Apple Watch"
);

export const allDevices: Device[] = [...iphones, ...ipads, ...macbooks, ...imacs, ...appleWatches];

export const deviceCategories: DeviceCategory[] = ["iPhone", "iPad", "MacBook", "iMac", "Apple Watch"];

export const devicesByCategory: Record<DeviceCategory, Device[]> = {
  iPhone: iphones,
  iPad: ipads,
  MacBook: macbooks,
  iMac: imacs,
  "Apple Watch": appleWatches
};
