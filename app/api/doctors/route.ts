import { NextResponse } from "next/server";

import type { IDoctor } from "@/entities/doctor/model/doctor.types";

const doctors: IDoctor[] = [
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
    availableSlots: [
      { id: "s1", time: "2025-10-21T14:00:00.000Z" },
      { id: "s2", time: "2025-10-21T15:00:00.000Z" },
      { id: "s3", time: "2025-10-23T10:00:00.000Z" },
    ],
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
        name: "Children's Health Center",
        address: "789 Maple St, Kidstown",
        phone: "+1555123456",
        workingHours: [{ weekday: "Monday", open: "09:00", close: "17:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Tuesday", open: "10:00", close: "16:00" }],
    prices: [{ type: "primary", minPrice: 120 }],
    discountLabel: null,
    priceDisclaimer: "Standard consultation fee.",
    availableSlots: [{ id: "s4", time: "2025-10-22T11:00:00.000Z" }],
  },

  // Type 2: 2 medical centers, 1 specialization (3 doctors)
  {
    id: "3",
    photoUrl: "https://i.pravatar.cc/150?img=32",
    fullName: "Dr. Jane Smith",
    specialization: ["Dermatologist"],
    experienceYears: 12,
    rating: {
      score: 4.9,
      reviewCount: 450,
    },
    clinics: [
      {
        id: "c3",
        name: "Skin Care Clinic",
        address: "456 Oak Ave, Townsville",
        phone: "+1987654321",
        workingHours: [{ weekday: "Monday", open: "09:00", close: "18:00" }],
      },
      {
        id: "c4",
        name: "Downtown Medical Center",
        address: "789 Pine St, Cityville",
        phone: "+1122334455",
        workingHours: [{ weekday: "Tuesday", open: "08:00", close: "20:00" }],
      },
    ],
    dailySchedule: [
      { weekday: "Tuesday", open: "10:00", close: "17:00" },
      { weekday: "Thursday", open: "10:00", close: "17:00" },
    ],
    prices: [
      { type: "primary", minPrice: 200, maxPrice: 300 },
      { type: "online", minPrice: 150 },
    ],
    discountLabel: null,
    priceDisclaimer: "Consultation fee.",
    availableSlots: [
      { id: "s5", time: "2025-10-22T11:00:00.000Z" },
      { id: "s6", time: "2025-10-22T12:00:00.000Z" },
    ],
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
        name: "OrthoCare Institute",
        address: "101 Bone St, Jointsville",
        phone: "+1555789012",
        workingHours: [{ weekday: "Wednesday", open: "08:00", close: "16:00" }],
      },
      {
        id: "c6",
        name: "Sports Medicine Center",
        address: "202 Athlete Ave, Sportstown",
        phone: "+1555210987",
        workingHours: [{ weekday: "Friday", open: "10:00", close: "19:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Friday", open: "11:00", close: "18:00" }],
    prices: [
      { type: "primary", minPrice: 250 },
      { type: "secondary", minPrice: 180 },
    ],
    discountLabel: "Free X-Ray with first visit",
    priceDisclaimer: "Additional fees for procedures may apply.",
    availableSlots: [
      { id: "s7", time: "2025-10-24T14:30:00.000Z" },
      { id: "s8", time: "2025-10-24T15:30:00.000Z" },
    ],
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
        name: "NeuroWell Clinic",
        address: "303 Brainy Way, Mindville",
        phone: "+1555345678",
        workingHours: [{ weekday: "Monday", open: "09:00", close: "17:00" }],
      },
      {
        id: "c1",
        name: "City General Hospital",
        address: "123 Main St, Cityville",
        phone: "+1234567890",
        workingHours: [{ weekday: "Thursday", open: "08:00", close: "17:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Thursday", open: "09:00", close: "16:00" }],
    prices: [
      { type: "primary", minPrice: 300 },
      { type: "online", minPrice: 220 },
    ],
    discountLabel: null,
    priceDisclaimer: "Price for initial consultation.",
    availableSlots: [{ id: "s9", time: "2025-10-23T09:00:00.000Z" }],
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
        id: "c8",
        name: "Women's Health Partners",
        address: "404 Harmony St, Femville",
        phone: "+1555901234",
        workingHours: [{ weekday: "Tuesday", open: "09:00", close: "18:00" }],
      },
      {
        id: "c1",
        name: "City General Hospital",
        address: "123 Main St, Cityville",
        phone: "+1234567890",
        workingHours: [{ weekday: "Friday", open: "08:00", close: "17:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Tuesday", open: "10:00", close: "17:00" }],
    prices: [
      { type: "primary", minPrice: 220 },
      { type: "online", minPrice: 160 },
    ],
    discountLabel: "Package deals available",
    priceDisclaimer: "Prices are for standard check-ups.",
    availableSlots: [
      { id: "s10", time: "2025-10-21T10:00:00.000Z" },
      { id: "s11", time: "2025-10-21T11:00:00.000Z" },
    ],
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
        id: "c9",
        name: "Family First Clinic",
        address: "505 Kindred Ave, Hometown",
        phone: "+1555567890",
        workingHours: [{ weekday: "Monday", open: "08:00", close: "19:00" }],
      },
      {
        id: "c4",
        name: "Downtown Medical Center",
        address: "789 Pine St, Cityville",
        phone: "+1122334455",
        workingHours: [{ weekday: "Wednesday", open: "08:00", close: "20:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Monday", open: "09:00", close: "18:00" }],
    prices: [
      { type: "primary", minPrice: 100 },
      { type: "secondary", minPrice: 80 },
    ],
    discountLabel: null,
    priceDisclaimer: "Accepts most insurance plans.",
    availableSlots: [
      { id: "s12", time: "2025-10-20T16:00:00.000Z" },
      { id: "s13", time: "2025-10-20T17:00:00.000Z" },
    ],
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
        id: "c10",
        name: "Endocrine & Diabetes Center",
        address: "606 Sugar Rd, Wellville",
        phone: "+1555112233",
        workingHours: [{ weekday: "Thursday", open: "09:00", close: "17:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Thursday", open: "10:00", close: "16:00" }],
    prices: [
      { type: "primary", minPrice: 280 },
      { type: "online", minPrice: 200 },
    ],
    discountLabel: "15% off for new patients",
    priceDisclaimer: "Lab work billed separately.",
    availableSlots: [{ id: "s14", time: "2025-10-23T14:00:00.000Z" }],
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
        id: "c11",
        name: "Mindful Peace Center",
        address: "707 Serene Blvd, Calm City",
        phone: "+1555445566",
        workingHours: [{ weekday: "Friday", open: "10:00", close: "18:00" }],
      },
    ],
    dailySchedule: [{ weekday: "Friday", open: "11:00", close: "17:00" }],
    prices: [{ type: "online", minPrice: 180 }],
    discountLabel: null,
    priceDisclaimer: "Sliding scale available.",
    availableSlots: [
      { id: "s15", time: "2025-10-24T11:00:00.000Z" },
      { id: "s16", time: "2025-10-24T12:00:00.000Z" },
    ],
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
        id: "c12",
        name: "ClearView Eye Institute",
        address: "808 Vision Way, Spectacle City",
        phone: "+1555778899",
        workingHours: [{ weekday: "Wednesday", open: "08:30", close: "17:30" }],
      },
    ],
    dailySchedule: [{ weekday: "Wednesday", open: "09:00", close: "17:00" }],
    prices: [
      { type: "primary", minPrice: 190 },
      { type: "secondary", minPrice: 140 },
    ],
    discountLabel: "Discount on glasses",
    priceDisclaimer: "Surgical procedure costs vary.",
    availableSlots: [{ id: "s17", time: "2025-10-22T15:00:00.000Z" }],
  },
];

export async function GET() {
  return NextResponse.json(doctors);
}
