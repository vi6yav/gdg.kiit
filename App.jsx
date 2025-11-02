// GDG Landing Page - Single-file React component
// Instructions:
// - This is a single React component you can paste into a React app (e.g. create-react-app / Vite).
// - This uses Tailwind CSS classes. Make sure Tailwind is configured in your project.
// - It provides: Hero, Events list with quick RSVP, Past Speakers carousel, CTA and Footer.
// - Replace placeholder images/text with real content as needed.

import React, { useState } from 'react';

export default function GdgLanding() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: 'Intro to Flutter', date: '2025-11-15', tags: ['Flutter','Mobile'], location: 'Online' },
    { id: 2, title: 'ML for Developers', date: '2025-11-22', tags: ['ML','AI','Cloud'], location: 'Community Hall' },
    { id: 3, title: 'WebPerf Clinic', date: '2025-12-03', tags: ['Web','Performance'], location: 'Co-working Space' }
  ];

  const speakers = [
    { id: 1, name: 'Priya Sharma', title: 'Senior Android Dev', talk: 'Kotlin Coroutines', image: '' },
    { id: 2, name: 'Rahul Gupta', title: 'ML Engineer', talk: 'TinyML in Production', image: '' },
    { id: 3, name: 'Maya Iyer', title: 'Frontend Engineer', talk: 'React Patterns', image: '' }
  ];

  function openRsvp(event) {
    setSelectedEvent(event);
    setRsvpOpen(true);
  }

  function submitRsvp(e) {
    e.preventDefault();
    // NOTE: wire this up to backend / google forms / firebase in real app
    alert(RSVP sent for ${selectedEvent.title}!);
    setRsvpOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center text-white font-bold">GDG</div>
          <div className="font-semibold">GDG Community</div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#events" className="text-sm hover:underline">Events</a>
          <a href="#speakers" className="text-sm hover:underline">Speakers</a>
          <a href="#join" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">Join</a>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Connect. Learn. Build.<span className="text-blue-600"> GDG</span>
          </h1>
          <p className="mt-4 text-gray-600">A modern and minimalistic hub for developer meetups — events, past talks, and ways to grow your skillset with local peers.</p>

          <div className="mt-6 flex gap-3">
            <a href="#events" className="px-5 py-3 rounded-md border border-blue-600 text-blue-600 font-medium">Upcoming Events</a>
            <a href="#join" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium">Become a Member</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-500">
            <div className="space-y-1">
              <div className="font-semibold text-gray-700">DevFests</div>
              <div>Annual community conference</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-gray-700">Workshops</div>
              <div>Hands-on sessions</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-gray-700">Mentorship</div>
              <div>Peer learning & guidance</div>
            </div>
          </div>
        </section>

        <section className="hidden md:block">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Next Event</div>
                <div className="font-semibold">Intro to Flutter</div>
                <div className="text-xs text-gray-400">Nov 15 • Online</div>
              </div>
              <div>
                <button onClick={() => openRsvp(events[0])} className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">RSVP</button>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="text-sm text-gray-600">Trending</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div>
                    <div className="font-medium">Web Performance Clinic</div>
                    <div className="text-xs text-gray-400">Dec 03 • Co-working Space</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* EVENTS */}
      <section id="events" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <p className="text-gray-500 mt-1">Quick RSVP and calendar reminders</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(ev => (
            <article key={ev.id} className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-400">{ev.date} • {ev.location}</div>
                <h3 className="mt-2 font-semibold text-lg">{ev.title}</h3>
                <div className="mt-3 flex gap-2">
                  {ev.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border text-gray-600">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => openRsvp(ev)} className="px-4 py-2 bg-blue-600 text-white rounded-md">RSVP</button>
                <a href="#" className="text-sm text-gray-500 hover:underline">Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold">Past Speakers</h2>
        <p className="text-gray-500 mt-1">Browse short bios and past talk topics</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map(s => (
            <div key={s.id} className="bg-white rounded-xl shadow p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-500">{s.name.split(' ').map(n=>n[0]).join('')}</div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.title}</div>
                </div>
              </div>

              <div className="mt-4 text-gray-600">Topic: <span className="font-medium">{s.talk}</span></div>

              <div className="mt-4 flex gap-3">
                <a href="#" className="text-sm text-blue-600">Watch</a>
                <a href="#" className="text-sm text-gray-500">Slides</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Join */}
      <section id="join" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Want to host a talk or join the chapter?</h3>
            <p className="text-gray-600 mt-2">We welcome contributors, speakers, and volunteers. Help us grow the community.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="px-5 py-3 bg-white rounded-md border">Host a Talk</a>
            <a href="#" className="px-5 py-3 bg-blue-600 text-white rounded-md">Become a Member</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-8 text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} GDG • Community driven</div>
          <div className="mt-3 md:mt-0 flex gap-4">
            <a href="#">Twitter</a>
            <a href="#">YouTube</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      {/* RSVP Modal */}
      {rsvpOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">RSVP</div>
                <div className="font-semibold">{selectedEvent.title}</div>
                <div className="text-xs text-gray-400">{selectedEvent.date} • {selectedEvent.location}</div>
              </div>
              <button onClick={() => setRsvpOpen(false)} className="text-gray-500">✕</button>
            </div>

            <form onSubmit={submitRsvp} className="mt-4 space-y-3">
              <input required className="w-full border rounded-md px-3 py-2" placeholder="Your name" />
              <input required type="email" className="w-full border rounded-md px-3 py-2" placeholder="Email" />
              <div className="flex items-center gap-2">
                <input id="cal" type="checkbox" />
                <label htmlFor="cal" className="text-sm text-gray-600">Add to calendar</label>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send RSVP</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}