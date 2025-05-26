// Event interface
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Keynote' | 'Workshop' | 'Panel' | 'Bootcamp' | 'Competition' | 'Networking';
  speaker: string;
  description: string;
  poster: string;
  registrationLink: string;
  attendees: number;
  featured: boolean;
}

// AnimatedText props
export interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// EventCard props
export interface EventCardProps {
  event: Event;
  index: number;
}

// Category colors type
export type CategoryColors = {
  [key in Event['category']]: string;
};

export const CATEGORY_COLORS: CategoryColors = {
  'Keynote': 'from-purple-400 to-purple-600',
  'Workshop': 'from-rose-400 to-rose-600',
  'Panel': 'from-indigo-400 to-indigo-600',
  'Bootcamp': 'from-cyan-400 to-cyan-600',
  'Competition': 'from-orange-400 to-orange-600',
  'Networking': 'from-green-400 to-green-600'
};