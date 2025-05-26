'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, Star, Target } from 'lucide-react';
import { AnimatedTextProps, Event, EventCardProps,CATEGORY_COLORS } from '@/app/types';

// Events data
const events:Event[] = [
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
];


// Animated Text Component
const AnimatedText = ({ children, className = "", delay = 0 }:AnimatedTextProps) => {
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

// Event Card Component
const EventCard = ({ event, index }:EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryColor = (category: Event['category']): string => {
    return CATEGORY_COLORS[category] || 'from-gray-400 to-gray-600';
  };
  
  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 ${
        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        
        <button className="group/btn w-full mt-4 px-4 py-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 hover:from-rose-500 hover:to-purple-500 border border-rose-500/30 hover:border-transparent rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2">
          <span>Register Now</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Events Section Component
const PreEvents = () => {
  return (
    <section className="py-24 px-6  relative overflow-hidden">

      
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
              Upcoming <span className="text-transparent bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text">Events</span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover workshops, panels, and networking opportunities designed to inspire and empower the next generation of women in technology.
            </p>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AnimatedText key={event.id} delay={200 * (index + 1)}>
              <EventCard event={event} index={index} />
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreEvents;