import type { IDoctor } from "@/entities/doctor/model/doctor.types";

export const doctors: IDoctor[] = [
  // Type 1: 1 clinic, 1 specialization (2 doctors)
  {
    id: "1",
    photoUrl: "https://i.pravatar.cc/150?img=68",
    fullName: "Dr. John Doe",
    specialization: ["Cardiologist"],
    experienceYears: 15,
    rating: {
      score: 4.8,
      reviewCount: 230,
    },
    clinics: [
      {
        id: "c1",
        name: "City General Hospital",
        address: "123 Main St, Cityville",
        phone: "+1234567890",
        workingHours: [
          { weekday: "Monday", open: "08:00", close: "17:00" },
          { weekday: "Tuesday", open: "08:00", close: "17:00" },
          { weekday: "Wednesday", open: "08:00", close: "17:00" },
          { weekday: "Thursday", open: "08:00", close: "17:00" },
          { weekday: "Friday", open: "08:00", close: "17:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "09:00", close: "16:00" },
      { weekday: "Wednesday", open: "09:00", close: "16:00" },
      { weekday: "Friday", open: "09:00", close: "16:00" },
    ],
    prices: [
      { type: "primary", minPrice: 150 },
      { type: "secondary", minPrice: 100 },
      { type: "online", minPrice: 75, isDiscounted: true },
    ],
    discountLabel: "10% off online",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "21 окт.",
          dayOfWeek: "вт",
          label: "вт",
          timeRange: "14:00-15:00",
          isAvailable: true,
          slots: [
            { time: "14:00", available: true },
            { time: "15:00", available: true },
          ],
        },
        {
          date: "23 окт.",
          dayOfWeek: "чт",
          label: "чт",
          timeRange: "10:00-10:00",
          isAvailable: true,
          slots: [{ time: "10:00", available: true }],
        },
      ],
    },
  },
  {
    id: "2",
    photoUrl: "https://i.pravatar.cc/150?img=49",
    fullName: "Dr. Emily White",
    specialization: ["Pediatrician"],
    experienceYears: 10,
    rating: { score: 4.9, reviewCount: 310 },
    clinics: [
      {
        id: "c2",
        name: "Sunshine Kids Clinic",
        address: "456 Oak Ave, Townsville",
        phone: "+0987654321",
        workingHours: [
          { weekday: "Monday", open: "09:00", close: "18:00" },
          { weekday: "Tuesday", open: "09:00", close: "18:00" },
          { weekday: "Thursday", open: "09:00", close: "18:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "10:00", close: "17:00" },
      { weekday: "Thursday", open: "10:00", close: "17:00" },
    ],
    prices: [{ type: "primary", minPrice: 120 }],
    discountLabel: null,
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "22 окт.",
          dayOfWeek: "ср",
          label: "ср",
          timeRange: "11:00-11:00",
          isAvailable: true,
          slots: [{ time: "11:00", available: true }],
        },
        {
          date: "24 окт.",
          dayOfWeek: "пт",
          label: "пт",
          timeRange: "13:00-13:00",
          isAvailable: true,
          slots: [{ time: "13:00", available: true }],
        },
      ],
    },
  },

  // Type 2: 2 medical centers, 1 specialization (3 doctors)
  {
    id: "3",
    photoUrl: "https://i.pravatar.cc/150?img=32",
    fullName: "Dr. Jane Smith",
    specialization: ["Dermatologist"],
    experienceYears: 12,
    rating: {
      score: 4.7,
      reviewCount: 180,
    },
    clinics: [
      {
        id: "c3",
        name: "Skin Care Center",
        address: "789 Elm St, Villagetown",
        phone: "+1122334455",
        workingHours: [
          { weekday: "Monday", open: "08:00", close: "16:00" },
          { weekday: "Wednesday", open: "08:00", close: "16:00" },
          { weekday: "Friday", open: "08:00", close: "16:00" },
        ],
      },
      {
        id: "c4",
        name: "Health Plus Clinic",
        address: "321 Pine Rd, Hamletville",
        phone: "+5544332211",
        workingHours: [
          { weekday: "Tuesday", open: "10:00", close: "18:00" },
          { weekday: "Thursday", open: "10:00", close: "18:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "09:00", close: "15:00" },
      { weekday: "Wednesday", open: "09:00", close: "15:00" },
      { weekday: "Friday", open: "09:00", close: "15:00" },
    ],
    prices: [
      { type: "primary", minPrice: 200 },
      { type: "online", minPrice: 150, isDiscounted: true },
    ],
    discountLabel: "25% off online consultations",
    priceDisclaimer: "Consultation only. Treatment costs extra.",
    availableSlots: {
      days: [
        {
          date: "21 окт.",
          dayOfWeek: "вт",
          label: "вт",
          timeRange: "09:00-09:00",
          isAvailable: true,
          slots: [{ time: "09:00", available: true }],
        },
        {
          date: "23 окт.",
          dayOfWeek: "чт",
          label: "чт",
          timeRange: "14:00-14:00",
          isAvailable: true,
          slots: [{ time: "14:00", available: true }],
        },
        {
          date: "25 окт.",
          dayOfWeek: "сб",
          label: "сб",
          timeRange: "10:00-10:00",
          isAvailable: true,
          slots: [{ time: "10:00", available: true }],
        },
      ],
    },
  },
  {
    id: "4",
    photoUrl: "https://i.pravatar.cc/150?img=51",
    fullName: "Dr. Michael Brown",
    specialization: ["Orthopedist"],
    experienceYears: 20,
    rating: { score: 4.7, reviewCount: 180 },
    clinics: [
      {
        id: "c5",
        name: "Joint & Bone Clinic",
        address: "987 Cedar Blvd, Capital City",
        phone: "+1231231234",
        workingHours: [
          { weekday: "Monday", open: "07:00", close: "19:00" },
          { weekday: "Tuesday", open: "07:00", close: "19:00" },
          { weekday: "Wednesday", open: "07:00", close: "19:00" },
          { weekday: "Thursday", open: "07:00", close: "19:00" },
          { weekday: "Friday", open: "07:00", close: "19:00" },
        ],
      },
      {
        id: "c6",
        name: "Metro Medical Hub",
        address: "654 Spruce Way, Metropolis",
        phone: "+9998887776",
        workingHours: [
          { weekday: "Wednesday", open: "08:00", close: "20:00" },
          { weekday: "Saturday", open: "09:00", close: "14:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "08:00", close: "18:00" },
      { weekday: "Wednesday", open: "08:00", close: "18:00" },
      { weekday: "Friday", open: "08:00", close: "18:00" },
    ],
    prices: [
      { type: "primary", minPrice: 300 },
      { type: "secondary", minPrice: 200 },
    ],
    discountLabel: "",
    priceDisclaimer: "Surgery costs not included.",
    availableSlots: {
      days: [
        {
          date: "22 окт.",
          dayOfWeek: "ср",
          label: "ср",
          timeRange: "08:00-08:00",
          isAvailable: true,
          slots: [{ time: "08:00", available: true }],
        },
        {
          date: "24 окт.",
          dayOfWeek: "пт",
          label: "пт",
          timeRange: "16:00-16:00",
          isAvailable: true,
          slots: [{ time: "16:00", available: true }],
        },
      ],
    },
  },
  {
    id: "5",
    photoUrl: "https://i.pravatar.cc/150?img=12",
    fullName: "Dr. Richard Davis",
    specialization: ["Neurologist"],
    experienceYears: 18,
    rating: { score: 4.8, reviewCount: 260 },
    clinics: [
      {
        id: "c7",
        name: "Brain & Nerve Institute",
        address: "111 Maple Dr, Big City",
        phone: "+3334445556",
        workingHours: [
          { weekday: "Monday", open: "09:00", close: "17:00" },
          { weekday: "Tuesday", open: "09:00", close: "17:00" },
          { weekday: "Thursday", open: "09:00", close: "17:00" },
        ],
      },
      {
        id: "c8",
        name: "Advanced Neuro Care",
        address: "222 Birch Ln, Smallville",
        phone: "+6667778889",
        workingHours: [
          { weekday: "Wednesday", open: "10:00", close: "16:00" },
          { weekday: "Friday", open: "10:00", close: "16:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "10:00", close: "16:00" },
      { weekday: "Wednesday", open: "11:00", close: "15:00" },
    ],
    prices: [{ type: "primary", minPrice: 250 }],
    discountLabel: "",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "21 окт.",
          dayOfWeek: "вт",
          label: "вт",
          timeRange: "10:00-10:00",
          isAvailable: true,
          slots: [{ time: "10:00", available: true }],
        },
        {
          date: "23 окт.",
          dayOfWeek: "чт",
          label: "чт",
          timeRange: "11:00-11:00",
          isAvailable: true,
          slots: [{ time: "11:00", available: true }],
        },
      ],
    },
  },

  // Type 3: 2 medical centers, multiple specializations (2 doctors)
  {
    id: "6",
    photoUrl: "https://i.pravatar.cc/150?img=25",
    fullName: "Dr. Sarah Wilson",
    specialization: ["Gynecologist", "Obstetrician"],
    experienceYears: 14,
    rating: { score: 4.9, reviewCount: 520 },
    clinics: [
      {
        id: "c9",
        name: "Women's Health Center",
        address: "888 Walnut Ave, Downtown",
        phone: "+2223334445",
        workingHours: [
          { weekday: "Monday", open: "08:00", close: "18:00" },
          { weekday: "Wednesday", open: "08:00", close: "18:00" },
          { weekday: "Friday", open: "08:00", close: "18:00" },
        ],
      },
      {
        id: "c10",
        name: "Family Care Clinic",
        address: "999 Chestnut Rd, Uptown",
        phone: "+7778889990",
        workingHours: [
          { weekday: "Tuesday", open: "09:00", close: "17:00" },
          { weekday: "Thursday", open: "09:00", close: "17:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "09:00", close: "17:00" },
      { weekday: "Thursday", open: "10:00", close: "16:00" },
    ],
    prices: [
      { type: "primary", minPrice: 180 },
      { type: "online", minPrice: 120, isDiscounted: true },
    ],
    discountLabel: "First visit 30% off",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "22 окт.",
          dayOfWeek: "ср",
          label: "ср",
          timeRange: "09:00-09:00",
          isAvailable: true,
          slots: [{ time: "09:00", available: true }],
        },
        {
          date: "24 окт.",
          dayOfWeek: "пт",
          label: "пт",
          timeRange: "14:00-14:00",
          isAvailable: true,
          slots: [{ time: "14:00", available: true }],
        },
      ],
    },
  },
  {
    id: "7",
    photoUrl: "https://i.pravatar.cc/150?img=36",
    fullName: "Dr. David Martinez",
    specialization: ["General Practitioner", "Family Medicine"],
    experienceYears: 25,
    rating: { score: 4.6, reviewCount: 400 },
    clinics: [
      {
        id: "c11",
        name: "Community Health Center",
        address: "1010 Poplar St, Suburb",
        phone: "+4445556667",
        workingHours: [
          { weekday: "Monday", open: "07:00", close: "20:00" },
          { weekday: "Tuesday", open: "07:00", close: "20:00" },
          { weekday: "Wednesday", open: "07:00", close: "20:00" },
          { weekday: "Thursday", open: "07:00", close: "20:00" },
          { weekday: "Friday", open: "07:00", close: "20:00" },
        ],
      },
      {
        id: "c12",
        name: "Quick Care Clinic",
        address: "2020 Willow Way, Midtown",
        phone: "+8889990001",
        workingHours: [
          { weekday: "Saturday", open: "08:00", close: "16:00" },
          { weekday: "Sunday", open: "10:00", close: "14:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "08:00", close: "19:00" },
      { weekday: "Wednesday", open: "08:00", close: "19:00" },
      { weekday: "Friday", open: "08:00", close: "19:00" },
    ],
    prices: [{ type: "primary", minPrice: 100 }],
    discountLabel: "",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "21 окт.",
          dayOfWeek: "вт",
          label: "вт",
          timeRange: "08:00-08:00",
          isAvailable: true,
          slots: [{ time: "08:00", available: true }],
        },
        {
          date: "23 окт.",
          dayOfWeek: "чт",
          label: "чт",
          timeRange: "15:00-15:00",
          isAvailable: true,
          slots: [{ time: "15:00", available: true }],
        },
        {
          date: "25 окт.",
          dayOfWeek: "сб",
          label: "сб",
          timeRange: "12:00-12:00",
          isAvailable: true,
          slots: [{ time: "12:00", available: true }],
        },
      ],
    },
  },

  // Type 4: 1 clinic, multiple specializations (3 doctors)
  {
    id: "8",
    photoUrl: "https://i.pravatar.cc/150?img=40",
    fullName: "Dr. Laura Lee",
    specialization: ["Endocrinologist", "Diabetologist"],
    experienceYears: 16,
    rating: { score: 4.8, reviewCount: 350 },
    clinics: [
      {
        id: "c13",
        name: "Metabolic Health Center",
        address: "3030 Ash Blvd, Central City",
        phone: "+1112223334",
        workingHours: [
          { weekday: "Monday", open: "09:00", close: "18:00" },
          { weekday: "Tuesday", open: "09:00", close: "18:00" },
          { weekday: "Wednesday", open: "09:00", close: "18:00" },
          { weekday: "Thursday", open: "09:00", close: "18:00" },
          { weekday: "Friday", open: "09:00", close: "18:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "10:00", close: "17:00" },
      { weekday: "Wednesday", open: "10:00", close: "17:00" },
      { weekday: "Friday", open: "10:00", close: "17:00" },
    ],
    prices: [{ type: "primary", minPrice: 220 }],
    discountLabel: "",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "22 окт.",
          dayOfWeek: "ср",
          label: "ср",
          timeRange: "10:00-10:00",
          isAvailable: true,
          slots: [{ time: "10:00", available: true }],
        },
        {
          date: "24 окт.",
          dayOfWeek: "пт",
          label: "пт",
          timeRange: "11:00-11:00",
          isAvailable: true,
          slots: [{ time: "11:00", available: true }],
        },
      ],
    },
  },
  {
    id: "9",
    photoUrl: "https://i.pravatar.cc/150?img=47",
    fullName: "Dr. Kevin Chang",
    specialization: ["Psychiatrist", "Therapist"],
    experienceYears: 22,
    rating: { score: 4.9, reviewCount: 600 },
    clinics: [
      {
        id: "c14",
        name: "Mental Wellness Clinic",
        address: "4040 Fir Rd, Eastside",
        phone: "+5556667778",
        workingHours: [
          { weekday: "Monday", open: "10:00", close: "19:00" },
          { weekday: "Tuesday", open: "10:00", close: "19:00" },
          { weekday: "Wednesday", open: "10:00", close: "19:00" },
          { weekday: "Thursday", open: "10:00", close: "19:00" },
          { weekday: "Friday", open: "10:00", close: "19:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Monday", open: "11:00", close: "18:00" },
      { weekday: "Thursday", open: "11:00", close: "18:00" },
    ],
    prices: [
      { type: "primary", minPrice: 180 },
      { type: "online", minPrice: 120 },
    ],
    discountLabel: "",
    priceDisclaimer: "Session length: 50 minutes.",
    availableSlots: {
      days: [
        {
          date: "21 окт.",
          dayOfWeek: "вт",
          label: "вт",
          timeRange: "11:00-11:00",
          isAvailable: true,
          slots: [{ time: "11:00", available: true }],
        },
        {
          date: "23 окт.",
          dayOfWeek: "чт",
          label: "чт",
          timeRange: "16:00-16:00",
          isAvailable: true,
          slots: [{ time: "16:00", available: true }],
        },
      ],
    },
  },
  {
    id: "10",
    photoUrl: "https://i.pravatar.cc/150?img=53",
    fullName: "Dr. Olivia Garcia",
    specialization: ["Ophthalmologist", "Eye Surgeon"],
    experienceYears: 19,
    rating: { score: 4.7, reviewCount: 290 },
    clinics: [
      {
        id: "c15",
        name: "Vision Care Institute",
        address: "5050 Redwood St, Westside",
        phone: "+9990001112",
        workingHours: [
          { weekday: "Tuesday", open: "08:00", close: "17:00" },
          { weekday: "Thursday", open: "08:00", close: "17:00" },
          { weekday: "Saturday", open: "09:00", close: "13:00" },
        ],
      },
    ],
    dailySchedule: [
      { weekday: "Tuesday", open: "09:00", close: "16:00" },
      { weekday: "Thursday", open: "09:00", close: "16:00" },
    ],
    prices: [
      { type: "primary", minPrice: 250 },
      { type: "secondary", minPrice: 180 },
    ],
    discountLabel: "",
    priceDisclaimer: "Prices may vary depending on the case.",
    availableSlots: {
      days: [
        {
          date: "22 окт.",
          dayOfWeek: "ср",
          label: "ср",
          timeRange: "12:00-12:00",
          isAvailable: true,
          slots: [{ time: "12:00", available: true }],
        },
        {
          date: "24 окт.",
          dayOfWeek: "пт",
          label: "пт",
          timeRange: "09:00-09:00",
          isAvailable: true,
          slots: [{ time: "09:00", available: true }],
        },
      ],
    },
  },
];

export async function getDoctorById(id: string): Promise<IDoctor | null> {
  return doctors.find((d) => d.id === id) || null;
}

export async function getAllDoctors(): Promise<IDoctor[]> {
  return doctors;
}
