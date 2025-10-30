import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Newspaper, Users } from 'lucide-react';

// The Network Exchange - Single-file React component (TailwindCSS + Framer Motion + shadcn-friendly structure)
// Usage: drop into a React app with Tailwind configured. Replace placeholder data and endpoints as needed.

export default function TheNetworkExchangeSite() {
  const [events] = useState([
    { id: 1, title: 'Monthly Mixer', date: 'November 14, 2025', time: '6:00 PM', location: 'Community Hall', spots: 40 },
    { id: 2, title: 'Speed Networking', date: 'December 5, 2025', time: '9:00 AM', location: 'Virtual', spots: 100 },
  ]);

  const [joinForm, setJoinForm] = useState({ name: '', email: '', business: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with a real endpoint (Netlify Functions, Zapier webhook, or your CRM)
    console.log('Join request', joinForm);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 w-12 h-12 flex items-center justify-center text-white font-bold">NX</div>
            <div>
              <h1 className="text-lg font-semibold">The Network Exchange</h1>
              <p className="text-xs text-slate-500">Local professionals connecting, collaborating, and growing together</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#join" className="hover:underline">Join</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button className="ml-2 rounded-full px-4 py-2 bg-indigo-600 text-white text-sm shadow">Become a Member</button>
          </nav>

          <div className="md:hidden">
            {/* Mobile: simple CTA */}
            <button className="rounded-full px-3 py-2 bg-indigo-600 text-white text-sm">Join</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Connect with professionals who make business happen.</h2>
            <p className="mt-4 text-slate-600">The Network Exchange is a welcoming community of entrepreneurs, small business owners, and service providers who meet to share referrals, grow skills, and build partnerships. Our events are friendly, efficient, and designed for real results.</p>

            <div className="mt-6 flex gap-3">
              <a href="#join" className="rounded-lg px-5 py-3 bg-indigo-600 text-white font-medium">Join the Group</a>
              <a href="#events" className="rounded-lg px-5 py-3 border border-slate-200">See Events</a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <Users size={18} /> <span>200+ members</span>
              <Newspaper size={18} className="ml-4"/> <span>Monthly events</span>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Next Event</h3>
            <div className="mt-3">
              <p className="text-slate-700 font-medium">{events[0].title}</p>
              <p className="text-sm text-slate-500">{events[0].date} • {events[0].time}</p>
              <p className="mt-2 text-sm text-slate-600">Location: {events[0].location}</p>

              <div className="mt-4 flex gap-2">
                <button className="rounded-md px-4 py-2 bg-emerald-500 text-white text-sm">RSVP</button>
                <button className="rounded-md px-4 py-2 border">Add to Calendar</button>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">About The Network Exchange</h3>
          <p className="mt-4 text-slate-600">We are a cross-industry networking group focused on referrals, education, and community support. Our meetings are structured to maximize connection time and minimize fluff — quick introductions, a featured speaker once a month, and focused breakout sessions for problem-solving and collaboration.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Who attends</h4>
              <p className="text-sm text-slate-600 mt-2">Entrepreneurs, consultants, creative professionals, and service providers looking for trusted referral partners.</p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Why join</h4>
              <p className="text-sm text-slate-600 mt-2">Build a predictable referral pipeline, sharpen your elevator pitch, and meet collaborators who match your values.</p>
            </div>
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">How we meet</h4>
              <p className="text-sm text-slate-600 mt-2">In-person mixers, virtual speed-networking, and special workshops. Events are friendly, low-pressure, and results-oriented.</p>
            </div>
          </div>
        </section>

        <section id="events" className="mt-12">
          <h3 className="text-2xl font-semibold">Upcoming Events</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {events.map((ev) => (
              <article key={ev.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg">{ev.title}</h4>
                    <p className="text-sm text-slate-500">{ev.date} • {ev.time}</p>
                    <p className="mt-2 text-sm text-slate-600">{ev.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Spots: {ev.spots}</p>
                    <button className="mt-3 rounded-lg px-3 py-2 bg-indigo-600 text-white text-sm">RSVP</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold">Join The Network Exchange</h3>
          <p className="mt-2 text-slate-600">Fill out this short form and our team will reach out with next steps. Membership keeps you in the loop on events, easy referrals, and collaboration opportunities.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
              <input name="name" value={joinForm.name} onChange={handleChange} placeholder="Full name" className="p-3 rounded-lg border" required />
              <input name="email" value={joinForm.email} onChange={handleChange} placeholder="Email address" className="p-3 rounded-lg border" required />
              <input name="business" value={joinForm.business} onChange={handleChange} placeholder="Business / Company" className="p-3 rounded-lg border" />
              <input name="role" value={joinForm.role} onChange={handleChange} placeholder="Role / Industry" className="p-3 rounded-lg border" />

              <div className="md:col-span-2 flex gap-3 mt-2">
                <button type="submit" className="rounded-lg px-6 py-3 bg-indigo-600 text-white">Request to Join</button>
                <button type="button" onClick={() => setJoinForm({ name: '', email: '', business: '', role: '' })} className="rounded-lg px-6 py-3 border">Reset</button>
              </div>
            </form>
          ) : (
            <div className="mt-6 p-4 bg-emerald-50 border rounded-lg">
              <p className="font-medium">Thanks — we've received your request. We'll email you next steps soon.</p>
            </div>
          )}
        </section>

        <section id="contact" className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold">Contact & Admin</h3>
          <p className="mt-2 text-slate-600">Questions about membership, events, or partnerships? Reach out.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold flex items-center gap-2"><Mail size={16}/> Email</h4>
              <p className="text-sm text-slate-600 mt-2">hello@thenetworkexchange.example</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold flex items-center gap-2"><Phone size={16}/> Phone</h4>
              <p className="text-sm text-slate-600 mt-2">(555) 123-4567</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500">Admin tip: connect a Facebook Group link, set up a simple CMS (Notion / Airtable / Google Sheets + Zapier), or use Memberstack for gated content and member management.</div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} The Network Exchange — Built for community and collaboration.</p>
        </footer>
      </main>
    </div>
  );
}

