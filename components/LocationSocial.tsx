
import React from 'react';
import { ADDRESS, MAPS_URL, INSTAGRAM_URL } from '../constants';

const LocationSocial: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif text-ro-blue italic mb-6">Bizi Mersin'de Bulun</h2>
              <p className="text-ro-blue/70 text-lg max-w-md leading-relaxed italic">
                Barbaros'un kalbinde yer alan mekanımız, şehrin karmaşasından uzak, huzurlu bir sığınak sunuyor. 
                İster çalışın, ister arkadaşlarınızla buluşun ya da sessizce kitabınızı okuyun; Ro Coffee sizin alanınızdır.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-ro-beige flex items-center justify-center text-ro-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium text-ro-dark uppercase tracking-wider text-sm mb-1">Adres</h4>
                  <p className="text-ro-blue/70">{ADDRESS}</p>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-ro-accent text-sm font-medium hover:underline mt-2 inline-block">Google Haritalar'da Görüntüle</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-ro-beige flex items-center justify-center text-ro-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-medium text-ro-dark uppercase tracking-wider text-sm mb-1">Çalışma Saatleri</h4>
                  <p className="text-ro-blue/70">Pzt — Paz: 08:00 — 23:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-ro-beige flex items-center justify-center text-ro-blue shrink-0">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <h4 className="font-medium text-ro-dark uppercase tracking-wider text-sm mb-1">Bizi Takip Edin</h4>
                  <p className="text-ro-blue/70">Günlük demlemeler ve güncellemeler.</p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ro-accent text-sm font-medium hover:underline mt-2 inline-block">@rocofee</a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl border border-ro-blue/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.8687702845426!2d34.5828751!3d36.7919865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f551c9d8a555%3A0xe21d8923a1a3674b!2sRo%20Coffee!5e0!3m2!1sen!2str!4v1714850000000!5m2!1sen!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSocial;
