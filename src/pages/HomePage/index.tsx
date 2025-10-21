import { DoctorsList } from "@/widgets/doctors-list";

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Наши врачи</h1>
        <DoctorsList />
      </div>
    </main>
  );
}
