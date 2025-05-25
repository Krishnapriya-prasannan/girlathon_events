"use client";

import { Calendar, Clock, MapPin, Users, ExternalLink, Star } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Opening Ceremony & Keynote",
    date: "2024-03-15",
    time: "09:00 AM - 10:30 AM",
    location: "Main Auditorium",
    category: "Keynote",
    speaker: "Dr. Sarah Johnson",
    description: "Join us for an inspiring opening ceremony featuring keynote speaker Dr. Sarah Johnson, discussing the future of women in technology and innovation.",
    poster: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop",
    registrationLink: "https://girlathon.in/register/opening-ceremony",
    attendees: 500,
    featured: true
  },
   {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "2024-03-15",
      time: "11:00 AM - 02:00 PM",
      location: "Tech Lab A",
      category: "Workshop",
      speaker: "Maria Rodriguez",
      description: "Hands-on workshop covering the fundamentals of AI and machine learning. Learn to build your first ML model with real-world datasets.",
      poster: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      registrationLink: "https://girlathon.in/register/ai-workshop",
      attendees: 50,
      featured: false
    },
    {
      id: 3,
      title: "Women in Leadership Panel",
      date: "2024-03-15",
      time: "02:30 PM - 04:00 PM",
      location: "Conference Hall B",
      category: "Panel",
      speaker: "Various Industry Leaders",
      description: "An inspiring panel discussion with successful women leaders from tech, finance, and entrepreneurship sharing their journeys and insights.",
      poster: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      registrationLink: "https://girlathon.in/register/leadership-panel",
      attendees: 200,
      featured: true
    },
    {
      id: 4,
      title: "Blockchain & Web3 Bootcamp",
      date: "2024-03-16",
      time: "10:00 AM - 01:00 PM",
      location: "Innovation Lab",
      category: "Bootcamp",
      speaker: "Alex Chen",
      description: "Dive deep into blockchain technology and Web3 development. Build your first decentralized application (dApp) from scratch.",
      poster: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      registrationLink: "https://girlathon.in/register/blockchain-bootcamp",
      attendees: 75,
      featured: false
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2024-03-16",
      time: "02:00 PM - 05:00 PM",
      location: "Main Stage",
      category: "Competition",
      speaker: "Judge Panel",
      description: "Present your innovative startup ideas to a panel of investors and industry experts. Win prizes and potential funding opportunities.",
      poster: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      registrationLink: "https://girlathon.in/register/pitch-competition",
      attendees: 100,
      featured: true
    },
    {
      id: 6,
      title: "Networking & Closing Ceremony",
      date: "2024-03-16",
      time: "05:30 PM - 07:00 PM",
      location: "Main Auditorium",
      category: "Networking",
      speaker: "All Attendees",
      description: "Connect with fellow participants, mentors, and industry professionals. Celebrate achievements and build lasting professional relationships.",
      poster: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      registrationLink: "https://girlathon.in/register/networking",
      attendees: 400,
      featured: false
    }
  // ... rest of events here
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Keynote': 'bg-purple-100 text-purple-800 border-purple-200',
    'Workshop': 'bg-pink-100 text-pink-800 border-pink-200',
    'Panel': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Bootcamp': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Competition': 'bg-orange-100 text-orange-800 border-orange-200',
    'Networking': 'bg-green-100 text-green-800 border-green-200'
  };
  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export default function PreEvent() {
  // No React state, use vanilla JS modal toggle

  return (
    <>
      <style>{`
        /* Modal styles */
        #modal {
          display: none;
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.5);
          justify-content: center;
          align-items: center;
          padding: 1rem;
          z-index: 9999;
          overflow-y: auto;
        }
        #modal.active {
          display: flex;
        }
        #modal-content {
          background: white;
          border-radius: 1rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        #modal-content img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          border-radius: 1rem 1rem 0 0;
        }
        #modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255 255 255 / 0.9);
          border-radius: 9999px;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for an incredible lineup of workshops, panels, and networking opportunities designed to inspire and empower women in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              onClick={() => {
                const modal = document.getElementById('modal');
                if (modal) {
                  // Fill modal with event details
                  const modalTitle = document.getElementById('modal-title');
                  const modalDate = document.getElementById('modal-date');
                  const modalTime = document.getElementById('modal-time');
                  const modalLocation = document.getElementById('modal-location');
                  const modalSpeaker = document.getElementById('modal-speaker');
                  const modalDesc = document.getElementById('modal-desc');
                  const modalImg = document.getElementById('modal-img') as HTMLImageElement;
                  const modalRegLink = document.getElementById('modal-reglink') as HTMLAnchorElement;
                  const modalCategory = document.getElementById('modal-category');
                  const modalAttendees = document.getElementById('modal-attendees');
                  const modalFeatured = document.getElementById('modal-featured');

                  if (modalTitle) modalTitle.textContent = event.title;
                  if (modalDate) modalDate.textContent = formatDate(event.date);
                  if (modalTime) modalTime.textContent = event.time;
                  if (modalLocation) modalLocation.textContent = event.location;
                  if (modalSpeaker) modalSpeaker.textContent = event.speaker;
                  if (modalDesc) modalDesc.textContent = event.description;
                  if (modalImg) modalImg.src = event.poster;
                  if (modalRegLink) {
                    modalRegLink.href = event.registrationLink;
                    modalRegLink.textContent = "Register Now";
                  }
                  if (modalCategory) {
                    modalCategory.textContent = event.category;
                    modalCategory.className = `px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(event.category)}`;
                  }
                  if (modalAttendees) modalAttendees.textContent = `${event.attendees} attendees`;
                  if (modalFeatured) {
                    modalFeatured.style.display = event.featured ? 'flex' : 'none';
                  }

                  modal.classList.add('active');
                }
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.poster} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {event.featured && (
                  <div id="featured-badge" className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{formatDate(event.date)}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <address>{event.location}</address>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.speaker}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
  <div className="px-4 pb-4 pt-1">
    <button
      onClick={() => {
        const modal = document.getElementById('modal');
        if (modal) modal.classList.add('active');
      }}
      className="text-purple-600 hover:text-pink-600 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
    >
      View Details
      <ExternalLink className="w-4 h-4" />
    </button>
  </div>
            </div>
            
          ))}
        </div>
      </div>

      {/* Modal */}
      <div id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1}
        onClick={(e) => {
          if ((e.target as HTMLElement).id === 'modal') {
            (document.getElementById('modal')!).classList.remove('active');
          }
        }}
      >
        <div id="modal-content">
          <button id="modal-close" aria-label="Close modal" onClick={() => {
            document.getElementById('modal')!.classList.remove('active');
          }}>×</button>
          <img id="modal-img" src="" alt="Event poster" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span id="modal-category" className="px-3 py-1 rounded-full text-sm font-medium border"></span>
              <span id="modal-featured" className="hidden items-center gap-1 text-yellow-500 font-semibold">
                <Star className="w-5 h-5" /> Featured
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold mb-3"></h2>
            <div className="text-gray-600 space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> 
                <time id="modal-date"></time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> 
                <span id="modal-time"></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <address id="modal-location"></address>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" /> 
                <span id="modal-speaker"></span>
              </div>
            </div>
            <p id="modal-desc" className="text-gray-800 mb-6"></p>
            <a id="modal-reglink" href="#" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >Register Now</a>
          </div>
        </div>
      </div>
    </>
  );
}
