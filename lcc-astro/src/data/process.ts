// Work-process timeline steps (Diagnose → Free Quote → Repair → QC → Delivery).
export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: 'Diagnose',
    desc: 'We inspect your device and pinpoint the real fault — no guesswork, no upselling.',
  },
  {
    n: '02',
    title: 'Free Quote',
    desc: 'Transparent pricing up front. You approve before any work begins.',
  },
  {
    n: '03',
    title: 'Repair',
    desc: 'Certified technicians fix it with genuine, quality-matched parts.',
  },
  {
    n: '04',
    title: 'Quality Check',
    desc: 'Every repair is stress-tested and verified before it leaves the bench.',
  },
  {
    n: '05',
    title: 'Delivery',
    desc: 'Pick up in-store or get it back fast — covered by our service warranty.',
  },
];

export const trustPoints = [
  { stat: 'Genuine', label: 'quality-matched parts only' },
  { stat: '24–48h', label: 'typical turnaround time' },
  { stat: '90-day', label: 'warranty on repairs' },
  { stat: '4.8★', label: 'rated by local customers' },
];
