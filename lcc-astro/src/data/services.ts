// Services are tied to the 3D assembly: each laptop `part` snapping into place
// reveals the matching service. `step` orders them along the scroll timeline and
// is the key shared with partPoses.ts / useAssemblyTimeline.ts.

export type PartKey =
  | 'chassis'
  | 'motherboard'
  | 'cpu'
  | 'ram'
  | 'storage'
  | 'keyboard'
  | 'screen'
  | 'printer'
  | 'software';

export interface Service {
  step: number; // assembly order, 1-based
  part: PartKey; // mesh that snaps in to reveal this service
  title: string;
  blurb: string;
  icon: string; // ui/icon name
  // Scroll window (0..1) where this part assembles. Mirrors the plan's narrative table.
  range: [number, number];
}

export const services: Service[] = [
  {
    step: 1,
    part: 'chassis',
    title: 'Repair & Refurbished Laptops',
    blurb:
      'Full diagnostics and board-level repair, plus quality-checked refurbished laptops with warranty.',
    icon: 'laptop',
    range: [0.1, 0.25],
  },
  {
    step: 2,
    part: 'motherboard',
    title: 'Motherboard Fix',
    blurb:
      'Component-level motherboard repair — no power, short circuits, chip-level rework and BGA reballing.',
    icon: 'board',
    range: [0.25, 0.38],
  },
  {
    step: 3,
    part: 'cpu',
    title: 'Processor Repair',
    blurb:
      'CPU diagnosis, re-seating, thermal-paste service and overheating fixes to restore full performance.',
    icon: 'cpu',
    range: [0.38, 0.5],
  },
  {
    step: 4,
    part: 'ram',
    title: 'RAM Installation',
    blurb:
      'Memory upgrades and fault fixes — fix random freezes and blue screens, boost multitasking speed.',
    icon: 'ram',
    range: [0.5, 0.62],
  },
  {
    step: 5,
    part: 'storage',
    title: 'HDD / SSD Upgrade',
    blurb:
      'Swap slow drives for fast SSDs with data migration — dramatically quicker boot and load times.',
    icon: 'storage',
    range: [0.62, 0.72],
  },
  {
    step: 6,
    part: 'keyboard',
    title: 'Keyboard Repair',
    blurb:
      'Dead keys, spills and worn keyboards replaced with genuine parts for a like-new typing feel.',
    icon: 'keyboard',
    range: [0.72, 0.82],
  },
  {
    step: 7,
    part: 'screen',
    title: 'Laptop Rental',
    blurb:
      'Short and long-term laptop rentals for events, offices and students — ready-to-go, fully serviced units.',
    icon: 'screen',
    range: [0.82, 0.92],
  },
  {
    step: 8,
    part: 'printer',
    title: 'Printer Repair',
    blurb:
      'Service and repair for all major printer brands — fixing paper jams, ink issues, and networking problems.',
    icon: 'printer',
    range: [0.92, 0.96],
  },
  {
    step: 9,
    part: 'software',
    title: 'Virus & Malware Removal',
    blurb:
      'Complete system cleanup, OS installation, and security optimization to keep your data safe and PC fast.',
    icon: 'shield',
    range: [0.96, 1.0],
  },
];

// Convenience: ordered captions for the 3D overlay.
export const assemblyCaptions = services.map((s) => ({
  step: s.step,
  part: s.part,
  title: s.title,
  range: s.range,
}));
