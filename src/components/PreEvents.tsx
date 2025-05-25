export default function PreEvents() {
  const events = [
    { date: "June 5", title: "Intro to Open Source", description: "Learn how to contribute to open-source projects." },
    { date: "June 12", title: "Web Dev Bootcamp", description: "Hands-on session on building modern websites." },
    { date: "June 19", title: "Girlathon Info Session", description: "Get to know everything about Girlathon 2025." },
  ];

  return (
    <section id="timeline" className="px-6 py-16 bg-[#F1FAEE] text-[#1D3557]">
      <h2 className="text-3xl font-bold text-center mb-12">Pre-Event Timeline</h2>
      <div className="max-w-4xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="mb-8 flex items-start">
            <div className="w-6 h-6 bg-[#E63946] rounded-full mt-1"></div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-[#457B9D]">{event.date}</p>
              <p className="mt-1 text-[#1D1D1D]">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
