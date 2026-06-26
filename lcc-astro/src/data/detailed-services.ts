export interface SubServicePrice {
  name: string;
  price: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceSection {
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

export interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string;
  timeframe: string;
  price: string;
  warranty: string;
  symptoms: string[];
  coverage: SubServicePrice[];
  process: ProcessStep[];
  faqs: FAQItem[];
  sections?: ServiceSection[];
}

export const detailedServices: DetailedService[] = [
  {
    id: "motherboard",
    title: "Motherboard Repair",
    subtitle: "Advanced microscopic soldering & BGA chip rework",
    icon: "board",
    image: "/services/motherboard.png",
    description: "Our core specialty is component-level electronics. Instead of recommending an expensive motherboard replacement, our micro-soldering experts trace down shorted capacitors, blown diodes, and faulty power controller ICs under high-magnification digital microscopes. We also perform precise BGA chip reballing for GPU/CPU problems.",
    timeframe: "24 to 48 Hours",
    price: "Starts from ₹999",
    warranty: "90-Day Written Warranty",
    symptoms: [
      "Laptop does not turn on (No Power)",
      "Liquid spill / water damage",
      "Battery not charging or charging port loose",
      "System freezes, BSOD (Blue Screen), or randomly restarts",
      "USB or HDMI ports not working"
    ],
    coverage: [
      { name: "Micro-soldering & Charging Port Fix", price: "₹999" },
      { name: "Power Management IC (PMIC) Repair", price: "₹1,499" },
      { name: "Short Circuit & Liquid Damage Repair", price: "₹1,800" },
      { name: "BIOS Chip Reprogramming & Unlock", price: "₹1,200" },
      { name: "BGA Graphic / CPU Reballing & Rework", price: "₹2,500" }
    ],
    process: [
      { step: "1", title: "Diagnostic & Short Tracing", desc: "We use digital multimeters and thermal cameras to identify shorted capacitors and overheated ICs." },
      { step: "2", title: "Microscope Soldering", desc: "Under a 40x digital microscope, our micro-soldering experts replace burnt micro-components and rebuild broken copper traces." },
      { step: "3", title: "BGA Rework & Reballing", desc: "Using a professional BGA rework station, we reflow or reball CPU/GPU chips with high-grade leaded solder spheres for maximum lifespan." },
      { step: "4", title: "Stress & Heat Test", desc: "Every board undergoes 4+ hours of continuous CPU/GPU stress testing and thermal monitoring before assembly." }
    ],
    faqs: [
      { q: "Do you replace the whole motherboard?", a: "No! Motherboard replacement is very expensive. We specialize in chip-level repair, replacing only the specific faulty micro-component, which saves you up to 70% of the cost." },
      { q: "Is there a warranty on motherboard repairs?", a: "Yes, we provide a 90-day written warranty on all motherboard and chip-level repairs." },
      { q: "What happens if the motherboard is not repairable?", a: "If the board is physically cracked or has extensive damage that makes it unrepairable, we do not charge any repair fee. Diagnostic is 100% free if you approve the repair attempt." }
    ]
  },
  {
    id: "screen-keyboard",
    title: "Screen & Keyboard Fix",
    subtitle: "Genuine display swaps, keyboard replacements & hinge fabrication",
    icon: "laptop",
    image: "/services/screen_keyboard_hero.png",
    description: "Physical damage doesn't mean your laptop is dead. We swap out broken, dim, or flickering displays with genuine high-gamut panels (FHD, IPS, 144Hz options). We also replace sticky or dead keyboards with OEM replacements and rebuild laptop hinge mounts using premium industrial-strength epoxy structures.",
    timeframe: "1 to 4 Hours",
    price: "Starts from ₹499",
    warranty: "Up to 12-Month Warranty",
    symptoms: [
      "Flickering screen, vertical/horizontal lines, or cracked LCD glass",
      "Sticky, double-typing, or completely dead keys on keyboard",
      "Laptop screen lid wobbly, loose, or difficult to open/close",
      "Broken plastic panels or damaged bottom chassis hinges"
    ],
    coverage: [
      { name: "OEM Screen Replacement (FHD / IPS / 144Hz)", price: "₹2,500" },
      { name: "Full Keyboard Swap (Backlit / Non-backlit)", price: "₹850" },
      { name: "Hinge Rebuilding & Body Fabrication", price: "₹1,200" },
      { name: "Trackpad Repair & Clicker Calibration", price: "₹499" },
      { name: "Full Laptop Panel / Chassis Replacement", price: "₹1,500" }
    ],
    process: [
      { step: "1", title: "Damage Assessment", desc: "We inspect the display, screen cable, hinge mounts, or keyboard connector to determine if the replacement is required or just a cable adjustment." },
      { step: "2", title: "Safe Disassembly", desc: "Using anti-static tools, we carefully isolate the battery and remove the damaged panel or keyboard without harming internal components." },
      { step: "3", title: "OEM Replacement / Epoxy Fabric", desc: "We install an original OEM part or rebuild the broken hinge mounts using industrial-grade dual-bond steel epoxy." },
      { step: "4", title: "Functionality Check", desc: "We test screen colors/brightness levels, verify every single key on the keyboard, and check hinge tension before handover." }
    ],
    faqs: [
      { q: "How long does screen or keyboard replacement take?", a: "Most screen and keyboard replacements are done on the same day, typically within 1 to 2 hours if parts are in stock." },
      { q: "Do you use original replacement parts?", a: "Yes, we use Grade-A OEM screens, keyboards, and hinges that meet or exceed original factory specifications." },
      { q: "What is your warranty on screens?", a: "We offer a 6 to 12-month manufacturer-equivalent warranty on all screen replacements, protecting against lines or dead pixels." }
    ],
    sections: [
      {
        title: "OEM Screen Replacement",
        description: "Flickering displays, lines, dead pixels, or cracked screen glass are solved with Grade-A OEM replacement panels. We install high-brightness, high-color gamut IPS and high-refresh-rate (144Hz+) screens with full warranty support.",
        image: "/services/screen_repair.png",
        features: [
          "Premium Grade-A original panels",
          "IPS, FHD, and high-refresh options",
          "Done in 1-2 hours",
          "Up to 12 months warranty"
        ]
      },
      {
        title: "Keyboard & Trackpad Repair",
        description: "Sticky keys, double-typing, or complete keyboard failure after liquid damage are resolved by replacing the entire keyboard unit. We ensure the key switches and backlight work flawlessly.",
        image: "/services/keyboard_repair.png",
        features: [
          "Precision fit OEM replacements",
          "Backlit & non-backlit options",
          "Tested key-by-key for accuracy",
          "Liquid spill cleanup included"
        ]
      },
      {
        title: "Hinge Rebuilding & Body Fabrication",
        description: "Loose screen lids, cracked body panels, or broken hinge joints are carefully reconstructed. Using industrial-grade dual-bond steel epoxy, we rebuild the plastic screw wells and joints to make the chassis stronger than before.",
        image: "/services/body_repair.png",
        features: [
          "Industrial steel-epoxy bond structural rebuild",
          "Hinge tension calibration",
          "Chassis alignment check",
          "Same-day repair turnaround"
        ]
      }
    ]
  },
  {
    id: "upgrades",
    title: "RAM & SSD Upgrades",
    subtitle: "Make your old system up to 10x faster with modern storage",
    icon: "storage",
    image: "/services/upgrades.png",
    description: "Breathe new life into your existing computer. Upgrading from a mechanical hard drive (HDD) to a Solid State Drive (SSD) makes computers up to 10x faster. Pairing it with a RAM upgrade guarantees seamless multitasking. We also perform thermal servicing—clearing dust blocks and applying premium Arctic MX-4 thermal paste to keep temperatures low.",
    timeframe: "1 to 2 Hours",
    price: "Starts from ₹1,200",
    warranty: "3 to 5-Year Part Warranty",
    symptoms: [
      "Laptop takes minutes to boot up and loads apps slowly",
      "System hangs, freezes, or shows spinning wheel during multitasking",
      "Hard disk showing 100% disk usage in Task Manager",
      "Laptop runs extremely hot or fan makes loud whirring noises"
    ],
    coverage: [
      { name: "256GB / 512GB / 1TB NVMe M.2 SSD Upgrade", price: "₹1,800" },
      { name: "DDR4 / DDR5 RAM Upgrade (8GB / 16GB / 32GB)", price: "₹1,200" },
      { name: "Complete HDD to SSD OS & Data Cloning", price: "₹500" },
      { name: "Thermal Cleaning & Arctic MX-4 Repasting", price: "₹499" }
    ],
    process: [
      { step: "1", title: "Performance Assessment", desc: "We inspect your system's bottleneck (RAM capacity, HDD health, or CPU thermal throttling)." },
      { step: "2", title: "Dust & Heatsink Cleaning", desc: "We clear dust blocks out of the fans, clean heatsinks, and replace dried-up factory paste with premium Arctic MX-4." },
      { step: "3", title: "SSD/RAM Hardware Slotting", desc: "We install premium high-speed Crucial, Kingston, or Samsung SSDs and RAM chips in their respective slots." },
      { step: "4", title: "OS Migration & Benchmark", desc: "We clone your old drive data exactly to the new SSD so you don't lose files, then run speed benchmarks." }
    ],
    faqs: [
      { q: "Will I lose my files if I upgrade to an SSD?", a: "No! We perform professional sector-by-sector cloning, which transfers your exact OS, files, apps, and settings onto the new fast SSD." },
      { q: "Is RAM upgrade necessary for speed?", a: "RAM allows you to run multiple apps (Chrome, Excel, Word, etc.) simultaneously without lag, while SSD increases overall file loading and boot speed. Together they make old systems feel like new." },
      { q: "How much faster will my laptop become?", a: "Upgrading from an HDD to a Solid State Drive typically results in boot times under 15 seconds and a 5x to 10x increase in overall performance." }
    ]
  },
  {
    id: "printer",
    title: "Printer Repair",
    subtitle: "Complete service for HP, Canon, Epson, and Brother printers",
    icon: "printer",
    image: "/services/printer.png",
    description: "We repair and service all major printer brands including HP, Canon, Epson, and Brother. From fixing complex paper feed mechanisms and pick-up rollers to resetting firmware and resolving connectivity/networking errors, we get your office workflow back up quickly.",
    timeframe: "Same Day or 24 Hours",
    price: "Starts from ₹450",
    warranty: "30-Day Service Warranty",
    symptoms: [
      "Printer pulling multiple pages or paper getting jammed inside",
      "Faded printouts, white lines across pages, or smudged ink",
      "Red light blinking, error codes (like E05, 5B00), or cartridge errors",
      "Printer not connecting to computer, mobile, or Wi-Fi network"
    ],
    coverage: [
      { name: "Laser / Inkjet Paper Jam Roller Repair", price: "₹450" },
      { name: "Fuser Assembly Repair & Heating element swap", price: "₹1,200" },
      { name: "Laser Toner (12A / 88A etc.) Refilling & Chip Reset", price: "₹300" },
      { name: "Epson/Canon Ink Tank Printhead Cleaning & Flushing", price: "₹650" },
      { name: "Logic Board Repair & Power Board Swap", price: "₹950" }
    ],
    process: [
      { step: "1", title: "Failure Analysis", desc: "We run test prints to diagnose mechanical feed issues, fuser heating errors, or printhead clogs." },
      { step: "2", title: "Chemical Printhead Flush", desc: "For inkjet printers, we perform ultrasonic cleaning and chemical flushes on blocked nozzles to restore crisp colors." },
      { step: "3", title: "Mechanical Calibration", desc: "We replace worn pickup rollers, gears, and heating sleeves, then lubricate all mechanical moving assemblies." },
      { step: "4", title: "Quality Page Align", desc: "We print alignment patterns, calibrate color output, and verify paper feed stability under bulk jobs." }
    ],
    faqs: [
      { q: "Why is my printer printing blank or faded pages?", a: "This is usually caused by dry printheads (in inkjet/tank printers) or low toner/damaged drum (in laser printers). We flush clogs and refill/rebuild cartridges to fix this." },
      { q: "Do you refill laser toner cartridges?", a: "Yes! We refill toners with premium micro-fine black powder, change the drum if necessary, and reset the chip so it reads as full." },
      { q: "Do you offer printer repairs at home?", a: "For minor issues like refilling or driver setup, we can assist. For major mechanical or board repairs, we recommend bringing the printer to our lab where we have specialized clean-room tools." }
    ]
  },
  {
    id: "recovery",
    title: "Data Recovery",
    subtitle: "Secure recovery from crashed, corrupted, or formatted media",
    icon: "shield",
    image: "/services/recovery.png",
    description: "Your files are valuable. If your drive has crashed, failed, or been accidentally formatted, we use professional software utilities and hardware tools to recover photos, documents, and client records. We work with internal HDDs, SSDs, external backup drives, and SD cards.",
    timeframe: "2 to 4 Days",
    price: "Starts from ₹1,500 (Diagnostic Free)",
    warranty: "100% Data Confidentiality Guarantee",
    symptoms: [
      "Hard drive making clicking, beep, or grinding noises",
      "Drive showing as 'RAW format' or prompting to format",
      "Accidentally deleted folders, formatted partitions, or empty recycle bin",
      "USB flash drive or memory card not detected by system"
    ],
    coverage: [
      { name: "Deleted Files & Formatted Partition Recovery", price: "₹1,500" },
      { name: "RAW Drive / Corrupted File System Recovery", price: "₹2,500" },
      { name: "SSD / NVMe Logic Board Firmware Recovery", price: "₹3,500" },
      { name: "Bad Sector / Failing Drive Extraction & Clone", price: "₹2,000" }
    ],
    process: [
      { step: "1", title: "Diagnostic Assessment", desc: "We inspect if the failure is logical (software, filesystem, corruption) or physical (damaged heads, clicking platters)." },
      { step: "2", title: "Bit-by-Bit Cloning", desc: "To protect your failing drive, we create a secure, sector-by-sector raw clone of the media onto our storage server." },
      { step: "3", title: "Deep Recovery Scan", desc: "Using advanced logical and raw signature scanner engines, we reconstruct lost folders, files, and partitions." },
      { step: "4", title: "Secure Export & Verification", desc: "We verify the recovered documents/photos, copy them to a secure new drive, and permanently erase temporary clones." }
    ],
    faqs: [
      { q: "What should I do if my hard drive is clicking?", a: "Shut down the computer immediately! Clicking indicates physical head damage. Running the drive can scratch the platters and cause permanent data loss." },
      { q: "Is my personal data safe with you?", a: "Absolutely. We sign strict data confidentiality protocols. Your recovered files are directly copied to your backup media and are never shared or uploaded." },
      { q: "What is your recovery success rate?", a: "For logical issues and accidental deletion, our success rate is over 95%. For physical head/motor damage, it depends on platter condition." }
    ]
  },
  {
    id: "software",
    title: "Software & Virus Fix",
    subtitle: "System optimization, malware cleanup & clean operating systems",
    icon: "shield",
    image: "/services/software.png",
    description: "We clean up bloatware, remove viruses, Trojans, and adware, and optimize your operating system settings. If needed, we perform clean installations of Windows 10/11 or macOS, including license validation and installing all necessary system drivers for stable operation.",
    timeframe: "2 to 4 Hours",
    price: "Starts from ₹350",
    warranty: "30-Day Software Support",
    symptoms: [
      "Frequent ads, pop-ups, or browser hijacking redirections",
      "System stuck on boot loop, blue screen, or black screen of death",
      "Computer running extremely slow, laggy, or showing high CPU usage",
      "Applications throwing DLL errors or failing to launch"
    ],
    coverage: [
      { name: "Windows 10 / 11 Clean Installation & Drivers", price: "₹499" },
      { name: "macOS Clean Installation (MacBook / iMac)", price: "₹799" },
      { name: "Deep Virus, Adware, & Malware Cleanup", price: "₹350" },
      { name: "Genuine Antivirus Installation & License", price: "₹450" },
      { name: "OS Optimization & Startup Cleanup", price: "₹300" }
    ],
    process: [
      { step: "1", title: "Malware & OS Health Check", desc: "We analyze system startup files, running processes, and registry logs to detect malware or corrupted OS modules." },
      { step: "2", title: "Secure Data Backup", desc: "Before any reinstall or cleanup, we safely back up your User profile folder (Documents, Desktop, Downloads) to prevent data loss." },
      { step: "3", title: "OS Install & Driver Setup", desc: "We perform a clean install, download all official motherboard/graphics drivers, and run security patches." },
      { step: "4", title: "Bloatware & Startup Tune", desc: "We disable useless background startup programs, remove telemetry, and optimize settings for maximum speed." }
    ],
    faqs: [
      { q: "Will I lose my license of Microsoft Office/Windows?", a: "No! We scan and backup your product keys before reinstalling, and re-link your official digital licenses afterwards." },
      { q: "Is clean installation better than resetting?", a: "Yes! Re-installing removes all hidden adware, malware, corrupt registry values, and junk cache files that standard Windows reset often misses." },
      { q: "How do I protect my system from future viruses?", a: "We install premium genuine security software and configure firewalls/browser extensions to block dangerous websites and USB auto-run scripts." }
    ]
  },
  {
    id: "rentals",
    title: "Laptop Rentals",
    subtitle: "High-performance laptop rentals for offices, students, and events",
    icon: "laptop",
    image: "/services/rentals.png",
    description: "Need a high-performance laptop without the upfront cost? Lakhdata Computer Care offers premium laptop rental services in Zirakpur and across Punjab. Choose from our wide inventory of fully-serviced, ready-to-go laptops including Core i5/i7 business notebooks, MacBook Air/Pro, and high-end gaming laptops. We cater to businesses, remote employees, developers, events, and college students with flexible daily, monthly, and yearly plans.",
    timeframe: "Ready to Dispatch in 1 Hour",
    price: "Starts from ₹1,000/month",
    warranty: "100% Free Maintenance & Swap Support",
    symptoms: [
      "Setting up temporary office, call center, or remote team",
      "Personal laptop broke down and need a backup during repair",
      "Students needing a laptop for exams, projects, or online classes",
      "Events, seminars, or corporate training workshops",
      "Need a high-end laptop (MacBook/Gaming) for a short-term project"
    ],
    coverage: [
      { name: "Core i3 / 8GB RAM Business Laptop (Monthly)", price: "₹1,000" },
      { name: "Core i5 / 16GB RAM / SSD Corporate Laptop (Monthly)", price: "₹1,500" },
      { name: "Core i7 / 16GB RAM / SSD Professional Laptop (Monthly)", price: "₹2,000" },
      { name: "MacBook Air / Pro M1 or M2 (Monthly)", price: "₹3,500" },
      { name: "High-End Gaming & CAD Rendering Laptop (Monthly)", price: "₹3,000" }
    ],
    process: [
      { step: "1", title: "Select Your Spec", desc: "Choose the configuration, operating system, and rental duration that fits your specific needs." },
      { step: "2", title: "Submit KYC & Documents", desc: "Provide basic business registration (GST) or personal ID verification for quick approval." },
      { step: "3", title: "Instant Quality Check", desc: "We run hardware diagnostic checks, clean install a fresh OS, and verify battery health before delivery." },
      { step: "4", title: "Pickup or Free Delivery", desc: "Collect the device from our Zirakpur lab or enjoy free doorstep delivery and onsite installation support." }
    ],
    faqs: [
      { q: "What is the minimum rental duration?", a: "Our rental plans are highly flexible, starting from a minimum of 1 month up to a year or more. We also offer daily rentals for bulk corporate events." },
      { q: "What happens if the rental laptop has a hardware problem?", a: "We provide 100% free maintenance. If any hardware component fails, simply contact us and we will swap it with a replacement device within 24 hours at no extra cost." },
      { q: "Can we get laptops in bulk for offices?", a: "Yes, we support bulk renting for IT companies, call centers, and startups, complete with customizable OS images and onsite technical support." }
    ],
    sections: [
      {
        title: "Business & Office Rentals",
        description: "Equip your workforce with high-quality, pre-configured laptops. We offer reliable Core i5/i7 business notebooks with Windows 10/11 Pro, customizable configurations, and comprehensive technical support.",
        image: "/services/rental_office.png",
        features: [
          "Core i5/i7 corporate configurations",
          "Windows 10/11 Pro pre-installed",
          "Includes antivirus & productivity tools",
          "Bulk discounts available"
        ]
      },
      {
        title: "MacBook & Gaming Laptop Rentals",
        description: "Need heavy computing power for graphic design, software development, video editing, or rendering? Rent Apple Silicon M1/M2 MacBooks or high-end Windows laptops with Nvidia RTX graphics.",
        image: "/services/rental_premium.png",
        features: [
          "Apple Silicon M1 / M2 MacBook Air & Pro",
          "Nvidia RTX gaming / rendering laptops",
          "Flexible short-term rental agreements",
          "Guaranteed optimal thermal performance"
        ]
      }
    ]
  },
  {
    id: "refurbished",
    title: "Refurbished Laptops",
    subtitle: "Certified pre-owned laptops with warranty at unbeatable prices",
    icon: "laptop",
    image: "/services/refurbished.png",
    description: "Looking for a high-quality laptop without the brand-new price tag? Lakhdata Computer Care offers premium certified refurbished laptops in Zirakpur. Each laptop undergoes a rigorous 45-point hardware diagnostic test, complete internal cleaning, thermal paste replacement, and fresh OS installation. Backed by our written warranty and lifetime post-sales support, you get the performance of a new machine at a fraction of the cost.",
    timeframe: "Ready for Demo & Purchase",
    price: "Starts from ₹12,000",
    warranty: "Up to 6-Month Written Warranty",
    symptoms: [
      "Want a premium business laptop (i5/i7) on a budget",
      "Need a reliable secondary laptop for school or remote work",
      "Looking for a student-friendly laptop under ₹15,000",
      "Buying bulk laptops for office staff or call center setup",
      "Want a high-end coding/editing laptop without paying full price"
    ],
    coverage: [
      { name: "Budget Series (Core i3, 8GB RAM, SSD)", price: "₹12,000" },
      { name: "Business Pro Series (Core i5, 16GB RAM, SSD)", price: "₹16,500" },
      { name: "Elite / Creator Series (Core i7, 16GB RAM, SSD)", price: "₹22,000" },
      { name: "Premium MacBooks (Air / Pro M1 or M2)", price: "₹38,000" },
      { name: "Gaming & Graphics Series (Dedicated GPU)", price: "₹25,000" }
    ],
    process: [
      { step: "1", title: "45-Point Diagnostics", desc: "We test screen pixels, keyboard keys, battery health, storage health, Wi-Fi connectivity, and motherboard power rails." },
      { step: "2", title: "Internal Refurbishing", desc: "We deep clean the cooling fans, heatsinks, and replace dried-up factory paste with premium Arctic MX-4 thermal paste." },
      { step: "3", title: "Software & OS Setup", desc: "We install a licensed copy of Windows 10/11 or macOS, update all system drivers, and configure essential utility tools." },
      { step: "4", title: "Final Stress Test", desc: "Every laptop undergoes a 2-hour continuous benchmark and battery drain test before being certified for sale." }
    ],
    faqs: [
      { q: "What warranty do you provide on refurbished laptops?", a: "We offer a 3 to 6-month written hardware warranty on all our certified refurbished laptops, covering motherboard, screen, keyboard, and other hardware issues." },
      { q: "Can I customize the RAM and SSD before buying?", a: "Absolutely! We can upgrade the RAM (up to 32GB) or SSD storage (up to 1TB NVMe) on the spot to meet your specific requirements." },
      { q: "Do these laptops come with original chargers?", a: "Yes, every refurbished laptop includes a fully-tested original charger or high-quality compatible power adapter, plus a free laptop bag." }
    ],
    sections: [
      {
        title: "Premium Business ThinkPads & Latitudes",
        description: "Equip yourself with premium enterprise notebooks from Lenovo, Dell, and HP. Known for their extreme durability, military-grade carbon-fiber frames, spill-resistant keyboards, and outstanding battery life.",
        image: "/services/refurbished_business.png",
        features: [
          "Durable carbon-fiber enterprise frames",
          "Spill-resistant keyboard layouts",
          "Windows 11 Pro certified OS",
          "Exceptional battery performance"
        ]
      },
      {
        title: "Certified Pre-Owned MacBooks",
        description: "Get the sleekest user experience at an affordable price. We stock certified pre-owned Apple MacBook Air and MacBook Pro laptops with original Retina displays and checked battery health above 85%.",
        image: "/services/refurbished_macbook.png",
        features: [
          "Apple Silicon M1 / M2 Retina models",
          "Guaranteed battery health above 85%",
          "Clean-room internal dust cleanup",
          "Includes original Apple power brick"
        ]
      }
    ]
  }
];
