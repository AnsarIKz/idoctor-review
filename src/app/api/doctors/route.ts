import { NextResponse } from "next/server";

import type { IDoctor } from "@/entities/doctor/model/doctor.types";
import { doctors } from "./placeholder-data";

export async function GET(): Promise<NextResponse<IDoctor[]>> {
  return NextResponse.json(doctors);
}
