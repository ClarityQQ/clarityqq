import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to ClarityQQ</h1>
      <Card>
        <p>This is your starter homepage.</p>
        <Button>Get Started</Button>
      </Card>
    </main>
  );
}
