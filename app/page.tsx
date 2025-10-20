import { DoctorsList } from "@/widgets/doctors-list/ui/DoctorsList";
import { Header } from "@/widgets/header/Header";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <div className="container mx-auto p-4 text-black">
        <h1 className="text-2xl font-bold mb-4">Наши врачи</h1>
        <DoctorsList />
      </div>
    </main>
  );
}
