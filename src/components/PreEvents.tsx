'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, Star, Target, X } from 'lucide-react';
import { AnimatedTextProps, Event, EventCardProps, CATEGORY_COLORS } from '@/app/types';
// Events data
const events: Event[] = [
  {
    id: 1,
    title: "L337c0d3 Quest",
    date: "2025-05-27",
    time: "08:30 PM - 10:00 PM",
    location: "Hackerrank",
    category: "Competition",
    speaker: "DSC MACE",
    description: `Ready to Crack Some Codes? DSC MACE in collaboration with GIRLATHON 25 brings to you an exciting puzzle-solving competition 🧩 L337c0d3 Quest 🧩

Follow the signal:

1. Use YouTube ▶️, Wikipedia 📚, and Google Maps 🗺️ to solve each challenge

2. Follow the digital trail — clues await on our Instagram, community hub, and website 💬

3. Each puzzle leads to the next, until you unlock the final leet speak phrase 🫆

Read the complete guidelines here:
https://docs.google.com/document/d/18p21eNfaqGMJHcN8lxnQ-TqpAMsOeKl8J-qbXUMaegw/edit?usp=sharing

Think you've got the skills?
Jump in, solve it all, and flex your puzzle power 🧠⚡!

_#Girlathon2025_ _#WomenInTech_
_#DSCMACE #ReforgeTheLegacy_`,
    poster: "/images/post1.jpg",
    registrationLink: "https://forms.gle/wCwwsBPPvHnQenqw7",
    attendees: 100,
    featured: false
  },
  
];

// Helper to parse time strings like "08:30 PM" into a Date object on a given date
const parseTimeOnDate = (dateStr: string, timeStr: string): Date => {
  // dateStr: "2025-05-27"
  // timeStr: "08:30 PM"
    const [time, meridian] = timeStr.trim().split(' ');

  const [rawHours, minutes] = time.split(':').map(Number);
let hours = rawHours;
if (meridian.toUpperCase() === 'PM' && hours !== 12) hours += 12;
if (meridian.toUpperCase() === 'AM' && hours === 12) hours = 0;


  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
};

// Get status of event: "upcoming", "ongoing", or "ended"
const getEventStatus = (event: Event): 'upcoming' | 'ongoing' | 'ended' => {
  const now = new Date();
  // event.time format: "08:30 PM - 10:00 PM"
  const [startTimeStr, endTimeStr] = event.time.split(' - ').map(t => t.trim());

  const startDateTime = parseTimeOnDate(event.date, startTimeStr);
  const endDateTime = parseTimeOnDate(event.date, endTimeStr);

  if (now < startDateTime) return 'upcoming';
  else if (now >= startDateTime && now <= endDateTime) return 'ongoing';
  else return 'ended';
};

const AnimatedText = ({ children, className = "", delay = 0 }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Event Detail Modal Component
const EventModal = ({ event, isOpen, onClose }: { event: Event; isOpen: boolean; onClose: () => void }) => {
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getCategoryColor = (category: Event['category']): string => {
    return CATEGORY_COLORS[category] || 'from-gray-400 to-gray-600';
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

  const eventStatus = getEventStatus(event);
  const statusColors = {
    upcoming: 'bg-blue-500 text-white',
    ongoing: 'bg-green-500 text-white',
    ended: 'bg-gray-500 text-white',
  };

const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  setImageWidth(img.naturalWidth);
};
const modalStyle = imageWidth
  ? { width: Math.min(imageWidth + 400, window.innerWidth - 40) } // 400px for text area, with padding
  : {};

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
<div
  className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl w-full max-w-5xl h-[90vh] overflow-hidden"
  style={modalStyle}
>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

<div className="flex flex-col md:flex-row h-full w-full">
          {/* Image Section */}
          <div className="relative md:w-1/2 h-64 md:h-auto">

            <img
  src={event.poster}
  alt={event.title}
  className="w-full h-full object-cover"
  onLoad={handleImageLoad}
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {event.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4" />
                Featured
              </div>
            )}

            <div className={`absolute bottom-4 left-4 px-3 py-2 rounded-full text-sm font-semibold ${statusColors[eventStatus]}`}>
              {eventStatus === 'upcoming' && 'Upcoming'}
              {eventStatus === 'ongoing' && 'Ongoing'}
              {eventStatus === 'ended' && 'Ended'}
            </div>

            <div className="absolute bottom-4 right-4">
              <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getCategoryColor(event.category)} backdrop-blur-sm`}>
                {event.category}
              </div>
            </div>
          </div>

          {/* Content Section */}
  <div className="md:w-1/2 w-full p-6 overflow-y-auto h-full break-words scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
                <div className="flex items-center gap-2 text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-rose-400" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{event.speaker}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">About This Event</h3>
<div className="text-slate-300 leading-relaxed whitespace-pre-line break-words max-w-full overflow-x-hidden">
                  {event.description}
                </div>
              </div>
{eventStatus !== 'ended' && (
  

              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                <button className="group/btn w-full px-6 py-4 bg-gradient-to-r from-rose-500/20 to-purple-500/20 hover:from-rose-500 hover:to-purple-500 border border-rose-500/30 hover:border-transparent rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Register Now</span>
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </a>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, index, onCardClick }: EventCardProps & { onCardClick: (event: Event) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: Event['category']): string => {
    return CATEGORY_COLORS[category] || 'from-gray-400 to-gray-600';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Determine event status
  const eventStatus = getEventStatus(event);

  // Colors for status badges
  const statusColors = {
    upcoming: 'bg-blue-500 text-white',
    ongoing: 'bg-green-500 text-white',
    ended: 'bg-gray-500 text-white',
  };

  return (
    <div
      className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer ${
        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(event)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={event.poster}
          alt={event.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-40'
        }`} />

        {event.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 animate-pulse">
            <Star className="w-4 h-4" />
            Featured
          </div>
        )}

        {/* Event Status Badge */}
        <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${statusColors[eventStatus]}`}>
          {eventStatus === 'upcoming' && 'Upcoming'}
          {eventStatus === 'ongoing' && 'Ongoing'}
          {eventStatus === 'ended' && 'Ended'}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(event.category)} backdrop-blur-sm`}>
            {event.category}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors duration-300 leading-tight">
            {event.title}
          </h3>
          <div className="flex items-center gap-1 text-slate-400 text-sm shrink-0 ml-4">
            <Users className="w-4 h-4" />
            {event.attendees}
          </div>
        </div>

        <div className="space-y-2 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-400" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-green-400" />
            <span>{event.speaker}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
{eventStatus !== 'ended' && (
  
        <a 
          href={event.registrationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="group/btn w-full mt-4 px-4 py-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 hover:from-rose-500 hover:to-purple-500 border border-rose-500/30 hover:border-transparent rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2">
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </a>
)}
      </div>
    </div>
  );
};

const PreEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const upcomingEvents = events.filter(event => getEventStatus(event) !== 'ended');

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-slate-300 font-medium">Event Timeline</span>
            </div>
          </AnimatedText>

          <AnimatedText delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {upcomingEvents.length > 0 ? (
                <>
                  Upcoming <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text">Events</span>
                </>
              ) : ( '' )}
            </h2>
          </AnimatedText>

          {upcomingEvents.length > 0 && (
            <AnimatedText delay={400}>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Discover workshops, panels, and networking opportunities designed to inspire and empower the next generation of women in technology.
              </p>
            </AnimatedText>
          )}
        </div>

        {/* Upcoming & Ongoing Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <AnimatedText key={`upcoming-${event.id}`} delay={200 * (index + 1)}>
                  <EventCard event={event} index={index} onCardClick={handleCardClick} />
                </AnimatedText>
              ))}
            </div>
          </div>
        )}

        {/* All Events */}
        <div className="text-center mt-24">
          <AnimatedText delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              All <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text">Events</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={400}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our complete event archive, from past sessions to future plans, all designed to advance tech inclusion and innovation.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {events.map((event, index) => (
            <AnimatedText key={`all-${event.id}`} delay={200 * (index + 1)}>
              <EventCard event={event} index={index} onCardClick={handleCardClick} />
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          isOpen={!!selectedEvent} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default PreEvents;

