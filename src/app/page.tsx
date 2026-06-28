'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  translations, 
  Language 
} from './translations';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Menu, 
  X, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Home as HomeIcon, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Coffee, 
  Sparkles,
  Plane,
  Anchor,
  Bike
} from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<Language>('de');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Expose Modal State
  const [exposeOpen, setExposeOpen] = useState(false);

  // Footer Modals (Imprint & Privacy)
  const [imprintOpen, setImprintOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // Offer Form State
  const [offerForm, setOfferForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    amount: '',
    message: '',
    gdpr: false
  });
  const [offerStatus, setOfferStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdpr: false
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const t = translations[lang];

  // Gallery Filter State
  const [activeFilter, setActiveFilter] = useState<'all' | 'architecture' | 'interior' | 'location'>('all');

  // Property Showcase Slideshow State
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const propertyShowcaseImages = [
    { src: '/Image/HAUPT1.png', tagDe: 'Hauptansicht Villa', tagPl: 'Widok główny willi' },
    { src: '/Image/Inn1.png', tagDe: 'Galerie Schlafbereich', tagPl: 'Antresola - sypialnia' },
    { src: '/Image/Inn3.png', tagDe: 'Apartment Wohnbereich', tagPl: 'Salon w apartamencie' },
    { src: '/Image/Inn4.png', tagDe: 'Modernes Schlafzimmer', tagPl: 'Nowoczesna sypialnia' },
    { src: '/Image/Inn8.png', tagDe: 'Badezimmer mit Badewanne', tagPl: 'Łazienka z wanną' },
    { src: '/Image/Out8.png', tagDe: 'Ganzjahres-Sommerhaus', tagPl: 'Całoroczny domek letniskowy' },
  ];

  // Gallery images list
  const galleryImages = [
    { src: '/Image/HAUPT1.png', titleDe: 'Hauptansicht Villa', titlePl: 'Widok główny willi', type: 'architecture' },
    { src: '/Image/Out1.png', titleDe: 'Vorderansicht Haupthaus', titlePl: 'Front domu głównego', type: 'architecture' },
    { src: '/Image/Out2.png', titleDe: 'Eingangstor & Zuwegung', titlePl: 'Brama wjazdowa i wejście', type: 'architecture' },
    { src: '/Image/Out4.png', titleDe: 'Ansicht vom Zaun (Straßenseite)', titlePl: 'Widok od strony ogrodzenia', type: 'architecture' },
    { src: '/Image/Out7.png', titleDe: 'Pflasterweg seitlich des Hauses', titlePl: 'Ścieżka z polbruku obok domu', type: 'architecture' },
    { src: '/Image/Out8.png', titleDe: 'Ganzjahres-Sommerhaus im Garten', titlePl: 'Całoroczny domek w ogrodzie', type: 'architecture' },
    { src: '/Image/Out9.png', titleDe: 'Sommerhaus mit Sitzbereich', titlePl: 'Domek letniskowy z tarasem', type: 'architecture' },
    { src: '/Image/Out10.png', titleDe: 'Garten mit Steingrill & Gerätehaus', titlePl: 'Ogród z grillem i domkiem narzędziowym', type: 'architecture' },
    { src: '/Image/Out12.png', titleDe: 'Gemauerter Grill & rustikale Holzbank', titlePl: 'Murowany grill i rustykalna ławka', type: 'architecture' },
    { src: '/Image/Inn1.png', titleDe: 'Galerie & Schlafraum mit Holzgeländer', titlePl: 'Antresola sypialna z balustradą', type: 'interior' },
    { src: '/Image/Inn21.png', titleDe: 'Modernes Badezimmer mit Dusche', titlePl: 'Nowoczesna łazienka z prysznicem', type: 'interior' },
    { src: '/Image/Inn3.png', titleDe: 'Apartment mit Schlafboden & Küchenzeile', titlePl: 'Apartament z antresolą i aneksem', type: 'interior' },
    { src: '/Image/Inn4.png', titleDe: 'Schlafzimmer mit Dachschräge & TV', titlePl: 'Sypialnia na poddaszu z telewizorem', type: 'interior' },
    { src: '/Image/Inn5.png', titleDe: 'Badezimmer mit dunklem Waschtisch', titlePl: 'Łazienka z ciemną szafką', type: 'interior' },
    { src: '/Image/Inn6.png', titleDe: 'Schlafzimmer mit en-suite Badezimmer', titlePl: 'Sypialnia z łazienką en-suite', type: 'interior' },
    { src: '/Image/Inn7.png', titleDe: 'Gemütlicher Schlafbereich (Dachgeschoss)', titlePl: 'Przytulny pokój sypialny na poddaszu', type: 'interior' },
    { src: '/Image/Inn8.png', titleDe: 'Badezimmer mit Wanne unter Dachfenster', titlePl: 'Łazienka z wanną pod oknem dachowym', type: 'interior' },
    { src: '/images/beach-view.png', titleDe: 'Feinsandiger Ostseestrand', titlePl: 'Piaszczysta plaża', type: 'location' },
    { src: '/images/aerial-view.png', titleDe: 'Malerische Steilküste', titlePl: 'Malowniczy klif', type: 'location' },
  ];

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === 'all' || img.type === activeFilter
  );

  // Handle language change
  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLang);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage') as Language;
      if (savedLang === 'de' || savedLang === 'pl') {
        setLang(savedLang);
      }
    }
  }, []);

  // Form handlers
  const handleOfferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerForm.gdpr) return;
    setOfferStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'offer', data: offerForm })
      });
      if (res.ok) {
        setOfferStatus('success');
        setOfferForm({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          amount: '',
          message: '',
          gdpr: false
        });
      } else {
        setOfferStatus('error');
      }
    } catch {
      setOfferStatus('error');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.gdpr) return;
    setContactStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: contactForm })
      });
      if (res.ok) {
        setContactStatus('success');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          message: '',
          gdpr: false
        });
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    }
  };

  // Lightbox navigation
  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  // Property Showcase Slideshow navigation
  const prevShowcase = () => {
    setShowcaseIndex((prev) => (prev === 0 ? propertyShowcaseImages.length - 1 : prev - 1));
  };

  const nextShowcase = () => {
    setShowcaseIndex((prev) => (prev === propertyShowcaseImages.length - 1 ? 0 : prev + 1));
  };

  // Close modals on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        setExposeOpen(false);
        setImprintOpen(false);
        setPrivacyOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      
      {/* 1. HEADER */}
      <header className="site-header">
        <div className="header-container">
          {/* Logo */}
          <a href="#" className="logo-link">
            <span className="logo-text">BALTIC PRESTIGE</span>
            <span className="logo-badge">Trzęsacz</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <a href="#immobilie" className="nav-link">{t.nav.property}</a>
            <a href="#lage" className="nav-link">{t.nav.location}</a>
            <a href="#galerie" className="nav-link">{t.nav.gallery}</a>
            <a href="#vorteile" className="nav-link">{t.nav.benefits}</a>
            <a href="#angebot" className="nav-link">{t.nav.offer}</a>
            <a href="#kontakt" className="nav-link">{t.nav.contact}</a>
          </nav>

          {/* Right Section: Lang Switcher */}
          <div className="header-right">
            <div className="lang-switcher">
              <button 
                onClick={() => toggleLanguage('de')} 
                className={`lang-btn ${lang === 'de' ? 'active' : ''}`}
              >
                DE
              </button>
              <button 
                onClick={() => toggleLanguage('pl')} 
                className={`lang-btn ${lang === 'pl' ? 'active' : ''}`}
              >
                PL
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-header-actions">
            <div className="lang-switcher-mobile">
              <button 
                onClick={() => toggleLanguage('de')} 
                className={`lang-btn-mobile ${lang === 'de' ? 'active' : ''}`}
              >
                DE
              </button>
              <button 
                onClick={() => toggleLanguage('pl')} 
                className={`lang-btn-mobile ${lang === 'pl' ? 'active' : ''}`}
              >
                PL
              </button>
            </div>
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="mobile-nav">
            <a href="#immobilie" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.property}</a>
            <a href="#lage" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.location}</a>
            <a href="#galerie" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.gallery}</a>
            <a href="#vorteile" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.benefits}</a>
            <a href="#angebot" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.offer}</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{t.nav.contact}</a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg">
          <Image
            src="/Image/HAUPT1.png"
            alt="Baltic Prestige Villa Hero"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="hero-image"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-color-overlay" />
        </div>

        <div className="hero-content">
          <span className="hero-tag">
            {lang === 'de' ? 'EXKLUSIVES VERKAUFSANGEBOT' : 'EKSKLUZYWNA OFERTA SPRZEDAŻY'}
          </span>
          <h1 className="hero-title">
            {t.hero.title}
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>

          <div className="hero-ctas">
            <button onClick={() => setExposeOpen(true)} className="cta-btn cta-btn-primary">
              {t.hero.viewExpose}
            </button>
            <a href="#angebot" className="cta-btn cta-btn-secondary">
              {t.hero.makeOffer}
            </a>
            <a href="#kontakt" className="cta-btn cta-btn-outline">
              {t.hero.contactUs}
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* 3. PROPERTY DETAILS (DIE IMMOBILIE) */}
      <section id="immobilie" className="section property-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'de' ? 'PREMIUM INVESTITION' : 'PRESTIŻOWA INWESTYCJA'}</span>
          <h2 className="section-title">{t.property.title}</h2>
          <div className="section-line" />
          <p className="section-subtitle">{t.property.subtitle}</p>
        </div>

        {/* Narrative layout */}
        <div className="narrative-container">
          <div className="narrative-content">
            <p className="narrative-highlight">
              {t.property.desc1}
            </p>
            <p className="narrative-text">
              {t.property.desc2}
            </p>
            
            {/* Quick stats */}
            <div className="quick-stats-grid">
              <div className="stat-card">
                <span className="stat-label">{lang === 'de' ? 'Strandentfernung' : 'Odległość do plaży'}</span>
                <span className="stat-value">100 m</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">{lang === 'de' ? 'Gesamtfläche' : 'Powierzchnia'}</span>
                <span className="stat-value">200 m²</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">{lang === 'de' ? 'Grundstücksfläche' : 'Pow. działki'}</span>
                <span className="stat-value">755 m²</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">{lang === 'de' ? 'Pkw-Stellplätze' : 'Miejsca postojowe'}</span>
                <span className="stat-value">{lang === 'de' ? '6 Stellplätze' : '6 miejsc'}</span>
              </div>
            </div>
          </div>
          
          <div className="narrative-visual">
            <div className="visual-image-wrapper">
              <button 
                onClick={prevShowcase}
                className="visual-arrow-btn left"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <Image
                src={propertyShowcaseImages[showcaseIndex].src}
                alt="Luxury Property View"
                fill
                sizes="(max-width: 991px) 100vw, 450px"
                style={{ objectFit: 'cover' }}
                className="visual-image"
                priority
              />

              <button 
                onClick={nextShowcase}
                className="visual-arrow-btn right"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              <div className="visual-tag">
                {lang === 'de' ? propertyShowcaseImages[showcaseIndex].tagDe : propertyShowcaseImages[showcaseIndex].tagPl}
              </div>

              <div className="visual-dots">
                {propertyShowcaseImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setShowcaseIndex(idx)}
                    className={`visual-dot ${showcaseIndex === idx ? 'active' : ''}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="feature-grid">
          
          <div className="feature-card">
            <div className="feature-icon-wrapper"><Compass size={22} /></div>
            <h3 className="feature-title">{t.property.features.beach}</h3>
            <p className="feature-desc">{t.property.features.beachDesc}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><MapPin size={22} /></div>
            <h3 className="feature-title">{t.property.features.location}</h3>
            <p className="feature-desc">{t.property.features.locationDesc}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Anchor size={22} /></div>
            <h3 className="feature-title">{t.property.features.rewal}</h3>
            <p className="feature-desc">{t.property.features.rewalDesc}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><HomeIcon size={22} /></div>
            <h3 className="feature-title">{t.property.features.neighborhood}</h3>
            <p className="feature-desc">{t.property.features.neighborhoodDesc}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><TrendingUp size={22} /></div>
            <h3 className="feature-title">{t.property.features.investment}</h3>
            <p className="feature-desc">{t.property.features.investmentDesc}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"><Coffee size={22} /></div>
            <h3 className="feature-title">{t.property.features.wellness}</h3>
            <p className="feature-desc">{t.property.features.wellnessDesc}</p>
          </div>

        </div>
      </section>

      {/* 4. LAGE & UMGEBUNG */}
      <section id="lage" className="section-dark location-section">
        <div className="section-dark-container">
          
          <div className="section-header white">
            <span className="section-tag gold">{lang === 'de' ? 'RUND UM DIE IMMOBILIE' : 'OKOLICA NIERUCHOMOŚCI'}</span>
            <h2 className="section-title white">{t.location.title}</h2>
            <div className="section-line gold" />
            <p className="section-subtitle white-sub">{t.location.subtitle}</p>
          </div>

          <div className="location-grid">
            
            {/* Map component */}
            <div className="map-column">
              <div className="map-frame">
                <iframe 
                  title="Property Location Map"
                  src="https://maps.google.com/maps?q=ul.%20Letniskowa%204a,%20Trz%C4%99sacz,%20Polen&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                />
              </div>
              <div className="map-details">
                <div className="address-info">
                  <MapPin className="pin-icon" size={18} />
                  <span className="address-text">{t.location.mapMarker}</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=ul.+Letniskowa+4a,+Trzęsacz,+Poland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="maps-redirect-btn"
                >
                  {lang === 'de' ? 'In Google Maps öffnen' : 'Otwórz w Google Maps'}
                </a>
              </div>
            </div>

            {/* Attractions column */}
            <div className="attractions-column">
              <h3 className="attractions-header">{t.location.attractionsTitle}</h3>
              
              <div className="attractions-list">
                
                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Sparkles className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.ruin}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.ruinDesc}</p>
                </div>

                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Compass className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.beach}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.beachDesc}</p>
                </div>

                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Coffee className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.spa}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.spaDesc}</p>
                </div>

                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Anchor className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.railway}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.railwayDesc}</p>
                </div>

                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Bike className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.velo}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.veloDesc}</p>
                </div>

                <div className="attraction-item">
                  <div className="attraction-title-row">
                    <Plane className="gold-sparkle" size={14} />
                    <h4 className="attraction-name">{t.location.attractions.airport}</h4>
                  </div>
                  <p className="attraction-desc">{t.location.attractions.airportDesc}</p>
                </div>

              </div>

              <div className="travel-tip-box">
                {lang === 'de' ? (
                  <span>🚗 <strong>Erreichbarkeit:</strong> Nur ca. 240 km von Berlin entfernt – fast durchgehend über Autobahn und Schnellstraße erreichbar (ca. 2.5 bis 3 Stunden Fahrtzeit).</span>
                ) : (
                  <span>🚗 <strong>Dojazd:</strong> Tylko ok. 240 km od Berlina i 100 km od Szczecina. Znakomity dojazd drogą ekspresową S3 i drogą wojewódzką 102.</span>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BILDERGALERIE */}
      <section id="galerie" className="section gallery-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'de' ? 'EINBLICKE' : 'GALERIA'}</span>
          <h2 className="section-title">{t.gallery.title}</h2>
          <div className="section-line" />
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="gallery-filters">
          <button 
            onClick={() => { setActiveFilter('all'); setLightboxIndex(0); }} 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            {lang === 'de' ? 'Alle' : 'Wszystkie'}
          </button>
          <button 
            onClick={() => { setActiveFilter('architecture'); setLightboxIndex(0); }} 
            className={`filter-btn ${activeFilter === 'architecture' ? 'active' : ''}`}
          >
            {lang === 'de' ? 'Außenbereich' : 'Z zewnątrz'}
          </button>
          <button 
            onClick={() => { setActiveFilter('interior'); setLightboxIndex(0); }} 
            className={`filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
          >
            {lang === 'de' ? 'Innenbereich' : 'Wnętrza'}
          </button>
          <button 
            onClick={() => { setActiveFilter('location'); setLightboxIndex(0); }} 
            className={`filter-btn ${activeFilter === 'location' ? 'active' : ''}`}
          >
            {lang === 'de' ? 'Umgebung & Strand' : 'Okolica i plaża'}
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={image.src} 
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
              className="gallery-card"
            >
              <Image
                src={image.src}
                alt={lang === 'de' ? image.titleDe : image.titlePl}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 991px) 50vw, 300px"
                style={{ objectFit: 'cover' }}
                loading="lazy"
                className="gallery-image"
              />
              <div className="gallery-card-overlay" />
              <div className="gallery-card-content">
                <span className="gallery-image-tag">
                  {image.type === 'architecture' 
                    ? (lang === 'de' ? 'AUSSENBEREICH' : 'NA ZEWNĄTRZ') 
                    : image.type === 'interior' 
                    ? (lang === 'de' ? 'INNENBEREICH' : 'WNĘTRZA') 
                    : (lang === 'de' ? 'UMGEBUNG' : 'OTOCZENIE')}
                </span>
                <h3 className="gallery-image-title">
                  {lang === 'de' ? image.titleDe : image.titlePl}
                </h3>
              </div>
              <div className="gallery-zoom-icon">
                <Maximize2 size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INVESTITIONSVORTEILE */}
      <section id="vorteile" className="section-dark benefits-section">
        <div className="section-dark-container">
          <div className="section-header white">
            <span className="section-tag gold">{lang === 'de' ? 'GUTE ARGUMENTE' : 'KORZYŚCI Z INWESTYCJI'}</span>
            <h2 className="section-title white">{t.benefits.title}</h2>
            <div className="section-line gold" />
            <p className="section-subtitle white-sub">{t.benefits.subtitle}</p>
          </div>

          <div className="benefits-grid">
            
            <div className="benefit-card">
              <span className="benefit-num">01</span>
              <h3 className="benefit-card-title">{t.benefits.items.title1}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc1}</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-num">02</span>
              <h3 className="benefit-card-title">{t.benefits.items.title2}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc2}</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-num">03</span>
              <h3 className="benefit-card-title">{t.benefits.items.title3}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc3}</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-num">04</span>
              <h3 className="benefit-card-title">{t.benefits.items.title4}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc4}</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-num">05</span>
              <h3 className="benefit-card-title">{t.benefits.items.title5}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc5}</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-num">06</span>
              <h3 className="benefit-card-title">{t.benefits.items.title6}</h3>
              <p className="benefit-card-desc">{t.benefits.items.desc6}</p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PREISSEKTION */}
      <section className="price-section">
        <div className="price-container">
          <h2 className="price-title">{t.price.title}</h2>
          <p className="price-note">{t.price.offerNote}</p>
          
          <div className="price-badge-box">
            <span className="price-badge-label">{t.price.negotiationBasis}</span>
            <span className="price-badge-value">{t.price.amount}</span>
          </div>
        </div>
      </section>

      {/* 8. ANGEBOT ABGEBEN */}
      <section id="angebot" className="section offer-section">
        <div className="form-section-container">
          <div className="section-header">
            <span className="section-tag">{lang === 'de' ? 'KAUFABWICKELUNG' : 'PROCES ZAKUPU'}</span>
            <h2 className="section-title">{t.offerForm.title}</h2>
            <div className="section-line" />
            <p className="section-subtitle">{t.offerForm.subtitle}</p>
          </div>

          <form onSubmit={handleOfferSubmit} className="luxury-form">
            
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">{t.offerForm.firstName} *</label>
                <input
                  type="text"
                  required
                  value={offerForm.firstName}
                  onChange={(e) => setOfferForm({ ...offerForm, firstName: e.target.value })}
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label className="form-label">{t.offerForm.lastName} *</label>
                <input
                  type="text"
                  required
                  value={offerForm.lastName}
                  onChange={(e) => setOfferForm({ ...offerForm, lastName: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label">{t.offerForm.companyOpt}</label>
                <input
                  type="text"
                  value={offerForm.company}
                  onChange={(e) => setOfferForm({ ...offerForm, company: e.target.value })}
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label className="form-label">{t.offerForm.amount} *</label>
                <div className="currency-input-wrapper">
                  <span className="currency-addon">PLN</span>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="1800000"
                    value={offerForm.amount}
                    onChange={(e) => setOfferForm({ ...offerForm, amount: e.target.value })}
                    className="form-input currency-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">{t.offerForm.email} *</label>
              <input
                type="email"
                required
                value={offerForm.email}
                onChange={(e) => setOfferForm({ ...offerForm, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label">{t.offerForm.message}</label>
              <textarea
                rows={4}
                value={offerForm.message}
                onChange={(e) => setOfferForm({ ...offerForm, message: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div className="form-checkbox-field">
              <input
                type="checkbox"
                id="offerGdpr"
                required
                checked={offerForm.gdpr}
                onChange={(e) => setOfferForm({ ...offerForm, gdpr: e.target.checked })}
                className="form-checkbox"
              />
              <label htmlFor="offerGdpr" className="form-checkbox-label">
                {t.offerForm.gdpr}
              </label>
            </div>

            {offerStatus === 'success' && (
              <div className="alert-box alert-success">
                <Check size={18} className="alert-icon" />
                <span>{t.offerForm.success}</span>
              </div>
            )}
            
            {offerStatus === 'error' && (
              <div className="alert-box alert-error">
                <span>{t.offerForm.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={offerStatus === 'sending'}
              className="submit-btn"
            >
              {offerStatus === 'sending' ? t.offerForm.sending : t.offerForm.submit}
            </button>
            
          </form>
        </div>
      </section>

      {/* 9. KONTAKT */}
      <section id="kontakt" className="section contact-section">
        <div className="contact-section-container">
          
          <div className="contact-details-column">
            <span className="section-tag">{lang === 'de' ? 'SPRECHEN SIE UNS AN' : 'BĄDŹMY W KONTAKCIE'}</span>
            <h2 className="contact-column-title">{t.contactForm.detailsTitle}</h2>
            <div className="section-line left" />
            <p className="contact-column-desc">
              {lang === 'de' 
                ? 'Sie haben Fragen zu der angebotenen Ferienvilla, wünschen detaillierte Unterlagen oder möchten einen Besichtigungstermin vereinbaren? Schreiben Sie uns direkt oder rufen Sie uns an.'
                : 'Masz pytania dotyczące prezentowanej willi wakacyjnej, potrzebujesz szczegółowych dokumentów lub chcesz umówić się na prezentację? Napisz do nas lub zadzwoń bezpośrednio.'}
            </p>

            <div className="contact-info-list">
              
              <div className="contact-info-item">
                <div className="info-icon-box"><MapPin size={18} /></div>
                <div className="info-text-box">
                  <span className="info-label">{t.contactForm.addressLabel}</span>
                  <span className="info-value">ul. Letniskowa 4a, 72-344 Trzęsacz, Polen</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon-box"><Mail size={18} /></div>
                <div className="info-text-box">
                  <span className="info-label">{t.contactForm.emailLabel}</span>
                  <a href="mailto:d.marcinczak@web.de" className="info-value link">d.marcinczak@web.de</a>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-form-column">
            <h3 className="form-column-title">{t.contactForm.title}</h3>
            <p className="form-column-subtitle">{t.contactForm.subtitle}</p>

            <form onSubmit={handleContactSubmit} className="luxury-form">
              
              <div className="form-field">
                <label className="form-label">{t.contactForm.name} *</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label">{t.contactForm.email} *</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label">{t.contactForm.message} *</label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div className="form-checkbox-field">
                <input
                  type="checkbox"
                  id="contactGdpr"
                  required
                  checked={contactForm.gdpr}
                  onChange={(e) => setContactForm({ ...contactForm, gdpr: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="contactGdpr" className="form-checkbox-label">
                  {t.contactForm.gdpr}
                </label>
              </div>

              {contactStatus === 'success' && (
                <div className="alert-box alert-success">
                  <Check size={18} className="alert-icon" />
                  <span>{t.contactForm.success}</span>
                </div>
              )}
              
              {contactStatus === 'error' && (
                <div className="alert-box alert-error">
                  <span>{t.contactForm.error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={contactStatus === 'sending'}
                className="submit-btn"
              >
                {contactStatus === 'sending' ? t.contactForm.sending : t.contactForm.submit}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          
          <div className="footer-top-row">
            
            <div className="footer-branding">
              <span className="footer-logo">BALTIC PRESTIGE</span>
              <span className="footer-tagline">Exklusive Ostseeimmobilien</span>
            </div>

            <div className="footer-links-row">
              <button onClick={() => setImprintOpen(true)} className="footer-link-btn">{t.footer.imprint}</button>
              <button onClick={() => setPrivacyOpen(true)} className="footer-link-btn">{t.footer.privacy}</button>
              <a href="#kontakt" className="footer-link-btn">{t.nav.contact}</a>
            </div>

            <div className="lang-switcher-footer">
              <button 
                onClick={() => toggleLanguage('de')} 
                className={`lang-btn-footer ${lang === 'de' ? 'active' : ''}`}
              >
                DE
              </button>
              <button 
                onClick={() => toggleLanguage('pl')} 
                className={`lang-btn-footer ${lang === 'pl' ? 'active' : ''}`}
              >
                PL
              </button>
            </div>

          </div>

          <div className="footer-bottom-row">
            <p>&copy; {new Date().getFullYear()} Baltic Prestige Trzęsacz. {t.footer.rights}</p>
            <p>Designed with elegance for ul. Letniskowa 4a</p>
          </div>

        </div>
      </footer>

      {/* =======================================================
          INTERACTIVE POPUPS AND LIGHTBOXES (MODALS)
          ======================================================= */}

      {/* A. FULLSCREEN GALLERY LIGHTBOX */}
      {lightboxOpen && filteredImages[lightboxIndex] && (
        <div className="lightbox-overlay">
          
          {/* Lightbox Header */}
          <div className="lightbox-header">
            <span className="lightbox-counter">
              {lightboxIndex + 1} / {filteredImages.length} &mdash; {lang === 'de' ? filteredImages[lightboxIndex].titleDe : filteredImages[lightboxIndex].titlePl}
            </span>
            <button 
              onClick={() => setLightboxOpen(false)}
              className="lightbox-close-btn"
              aria-label={t.gallery.lightboxClose}
            >
              <X size={24} />
            </button>
          </div>

          {/* Lightbox Body (Image & Nav) */}
          <div className="lightbox-body">
            
            <button 
              onClick={prevImage}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox-image-container">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={lang === 'de' ? filteredImages[lightboxIndex].titleDe : filteredImages[lightboxIndex].titlePl}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <button 
              onClick={nextImage}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

          </div>

          {/* Lightbox Footer (Thumbnails) */}
          <div className="lightbox-footer">
            {filteredImages.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`lightbox-thumb ${lightboxIndex === idx ? 'active' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={lang === 'de' ? img.titleDe : img.titlePl}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>

        </div>
      )}

      {/* B. EXPOSÉ / SPECIFICATION MODAL */}
      {exposeOpen && (
        <div className="modal-overlay">
          <div className="modal-content text-dark animate-slide-up">
            
            <div className="modal-header">
              <div>
                <span className="modal-tag">{lang === 'de' ? 'DETAILS & SPEZIFIKATIONEN' : 'SZCZEGÓŁY I DANE TECHNICZNE'}</span>
                <h3 className="modal-title">
                  {lang === 'de' ? 'Exposé: Villa Letniskowa 4a' : 'Broszura: Willa Letniskowa 4a'}
                </h3>
              </div>
              <button onClick={() => setExposeOpen(false)} className="modal-close-icon">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              
              <div className="modal-visual-banner">
                <Image 
                  src="/Image/Out7.png" 
                  alt="Expose Intro" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
                <div className="banner-overlay" />
                <div className="banner-tag">
                  Trzęsacz, ul. Letniskowa 4a, Polen
                </div>
              </div>

              <div className="specs-table">
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Objekttyp:' : 'Typ obiektu:'}</span>
                  <span className="spec-val">{lang === 'de' ? 'Exklusives Renditeobjekt (Ferienhaus)' : 'Ekskluzywny dom wakacyjny (biznes)'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Lage:' : 'Lokalizacja:'}</span>
                  <span className="spec-val">Trzęsacz, ul. Letniskowa (100 m {lang === 'de' ? 'vom Strand' : 'od plaży'})</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Rechtlicher Status:' : 'Status prawny:'}</span>
                  <span className="spec-val">{lang === 'de' ? 'Eigentum (Własność)' : 'Własność (Sondereigentum)'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Zimmer:' : 'Liczba pokoi:'}</span>
                  <span className="spec-val">10</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Bäder & WCs:' : 'Łazienki i toalety:'}</span>
                  <span className="spec-val">{lang === 'de' ? '4 Badezimmer / 4 separate WCs' : '4 łazienki / 4 osobne toalety'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Gesamtfläche:' : 'Powierzchnia:'}</span>
                  <span className="spec-val">200 m² (9.250 PLN / m²)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Grundstücksfläche:' : 'Pow. działki:'}</span>
                  <span className="spec-val">755 m²</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Stellplätze:' : 'Miejsca parkingowe:'}</span>
                  <span className="spec-val">{lang === 'de' ? '6 Pkw-Stellplätze' : '6 miejsc postojowych'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Heizung:' : 'Ogrzewanie:'}</span>
                  <span className="spec-val">{lang === 'de' ? 'Gastherme (Piec gazowy) & Kamin' : 'Kocioł gazowy & kominki'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Zustand:' : 'Stan obiektu:'}</span>
                  <span className="spec-val">{lang === 'de' ? 'Sehr gut (bez remontu)' : 'Bardzo dobry (bez remontu)'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">{lang === 'de' ? 'Gelistet seit:' : 'Dodano:'}</span>
                  <span className="spec-val">04.12.2025</span>
                </div>
              </div>

              <div className="modal-description-paragraph">
                <p>
                  {lang === 'de'
                    ? 'Die Immobilie besticht durch ein durchdachtes, hybrides Nutzungskonzept, das eine parallele Eigennutzung und gewerbliche Vermietung ohne gegenseitige Beeinträchtigung ermöglicht. Die Anlage besteht aus dem Haupthaus (Erdgeschoss mit Kamin-Wohnbereich, offener Küche und privatem Schlafraum; Obergeschoss mit einem separaten 2-Zimmer-Apartment; sowie einem eigenständigen Maisonette-Duplex-Apartment mit separatem Eingang, 2 Schlafzimmern und Relax-Zone) und einem autonomen, ganzjährigen Sommerhaus (70 m²) mit 3 Schlafzimmern, 2 Bädern und Kaminzimmer. Zudem stehen 6 Pkw-Stellplätze auf dem komplett umzäunten Grundstück zur Verfügung.'
                    : 'Nieruchomość wyróżnia się przemyślanym, hybrydowym konceptem użytkowym, umożliwiającym jednoczesne korzystanie na potrzeby własne oraz wynajem komercyjny. Kompleks składa się z domu głównego (parter z salonem z kominkiem, otwartą kuchnią i prywatną sypialnią; piętro z osobnym 2-pokojowym apartamentem; oraz niezależny dwupoziomowy apartament typu dupleks/maisonette z osobnym wejściem, 2 sypialniami i strefą relaksu) oraz całorocznego, autonomicznego domu letniskowego (70 m²) z 3 sypialniami, 2 łazienkami i salonem z kominkiem. Na terenie w pełni ogrodzonej działki znajduje się również 6 dedykowanych miejsc parkingowych.'}
                </p>
              </div>

            </div>

            <div className="modal-footer">
              <a href="#angebot" onClick={() => setExposeOpen(false)} className="modal-footer-action-link">
                {t.hero.makeOffer}
              </a>
              <button onClick={() => setExposeOpen(false)} className="modal-footer-close-btn">
                {t.footer.modalClose}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* C. IMPRESSUM MODAL */}
      {imprintOpen && (
        <div className="modal-overlay">
          <div className="modal-content imprint-modal text-dark">
            <div className="modal-header">
              <h3 className="modal-title font-serif">{t.footer.imprint}</h3>
              <button onClick={() => setImprintOpen(false)} className="modal-close-icon">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <p className="legal-text-content">
                {t.footer.imprintText}
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={() => setImprintOpen(false)} className="modal-footer-close-btn">
                {t.footer.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* D. DATENSCHUTZ MODAL */}
      {privacyOpen && (
        <div className="modal-overlay">
          <div className="modal-content privacy-modal text-dark">
            <div className="modal-header">
              <h3 className="modal-title font-serif">{t.footer.privacy}</h3>
              <button onClick={() => setPrivacyOpen(false)} className="modal-close-icon">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <p className="legal-text-content">
                {t.footer.privacyText}
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={() => setPrivacyOpen(false)} className="modal-footer-close-btn">
                {t.footer.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
