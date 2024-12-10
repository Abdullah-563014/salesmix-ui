export const API_STATE = {
  idle: "idle",
  pending: "pending",
  succeeded: "succeeded",
  failed: "failed"
} as const;

export const timeZoneToTzName = {
  ADT: "America/Halifax",
  AKDT: "America/Juneau",
  AKST: "America/Juneau",
  ART: "America/Argentina/Buenos_Aires",
  AST: "America/Halifax",
  BDT: "Asia/Dhaka",
  BRST: "America/Sao_Paulo",
  BRT: "America/Sao_Paulo",
  BST: "Europe/London",
  CAT: "Africa/Harare",
  CDT: "America/Chicago",
  CEST: "Europe/Paris",
  CET: "Europe/Paris",
  CLST: "America/Santiago",
  CLT: "America/Santiago",
  COT: "America/Bogota",
  CST: "America/Chicago",
  CT: "America/Chicago",
  EAT: "Africa/Addis_Ababa",
  EDT: "America/New_York",
  EEST: "Europe/Istanbul",
  EET: "Europe/Istanbul",
  EST: "America/New_York",
  ET: "America/New_York",
  GMT: "GMT",
  GST: "Asia/Dubai",
  HKT: "Asia/Hong_Kong",
  HST: "Pacific/Honolulu",
  ICT: "Asia/Bangkok",
  IRST: "Asia/Tehran",
  IST: "Asia/Calcutta",
  JST: "Asia/Tokyo",
  KST: "Asia/Seoul",
  MDT: "America/Denver",
  MSD: "Europe/Moscow",
  MSK: "Europe/Moscow",
  // 'MST': 'America/Denver',
  MST: "America/Phoenix",
  NZDT: "Pacific/Auckland",
  NZST: "Pacific/Auckland",
  PDT: "America/Los_Angeles",
  PET: "America/Lima",
  PHT: "Asia/Manila",
  PKT: "Asia/Karachi",
  PST: "America/Los_Angeles",
  PT: "America/Los_Angeles",
  SGT: "Asia/Singapore",
  UTC: "UTC",
  WAT: "Africa/Lagos",
  WEST: "Europe/Lisbon",
  WET: "Europe/Lisbon",
  WIT: "Asia/Jakarta",
  AEDT: "Australia/Sydney",
  AEST: "Australia/Sydney"
};

export const timeZones = [
  {
    label: "ADT (GMT-3)",
    value: "ADT"
  },
  {
    label: "AST (GMT-4)",
    value: "AST"
  },
  {
    label: "EDT (GMT-4)",
    value: "EDT"
  },
  {
    label: "CDT (GMT-5)",
    value: "CDT"
  },
  {
    label: "EST (GMT-5)",
    value: "EST"
  },
  {
    label: "CST (GMT-6)",
    value: "CST"
  },
  {
    label: "MDT (GMT-6)",
    value: "MDT"
  },
  {
    label: "MST (GMT-7)",
    value: "MST"
  },
  {
    label: "PDT (GMT-7)",
    value: "PDT"
  },
  {
    label: "PST (GMT-8)",
    value: "PST"
  },
  {
    label: "HST (GMT-10)",
    value: "HST"
  },
  {
    label: "BST (GMT+1)",
    value: "BST"
  },
  {
    label: "GST (GMT+4)",
    value: "GST"
  },
  {
    label: "AEST (GMT+10)",
    value: "AEST"
  },
  {
    label: "AEDT (GMT+11)",
    value: "AEDT"
  },
  {
    label: "NZST (GMT+12)",
    value: "NZST"
  },
  {
    label: "NZDT (GMT+13)",
    value: "NZDT"
  }
];
