export default function Home() {
  return (
    <main>

      <section className="h-screen relative">
        <img
          src="/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-white text-7xl font-light">
            Ellyse Lai
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-32">
        <h2 className="text-4xl mb-12">
          Projects
        </h2>

      </section>

    </main>
  )
}