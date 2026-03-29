import React from "react";
import Image from "next/image";
import { CheckCircle2, Leaf, HeartPulse, Sparkles, Phone, UserX, UserCheck, XCircle, Star, Instagram, Facebook } from "lucide-react";

export default function Home() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=9720522331844&text&type=phone_number&app_absent=0";
  const instagramLink = "https://www.instagram.com/n.s_hamaga_reflexology?igsh=OHc3am8wYm5jNzly";
  const facebookLink = "https://www.facebook.com/sapir.hadar/photos";

  const testimonials = [
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43.jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (1).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (2).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (3).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (4).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (5).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.43 (6).jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.44.jpeg",
    "/images/testimonials/WhatsApp Image 2026-03-29 at 16.39.44 (1).jpeg",
  ];

  const galleryImages = [
    "/images/WhatsApp Image 2026-03-29 at 15.30.44 (1).jpeg",
    "/images/WhatsApp Image 2026-03-29 at 15.30.44.jpeg",
    "/images/WhatsApp Image 2026-03-29 at 15.30.45 (1).jpeg",
    "/images/WhatsApp Image 2026-03-29 at 15.30.45 (2).jpeg",
    "/images/WhatsApp Image 2026-03-29 at 15.30.45 (3).jpeg",
    "/images/WhatsApp Image 2026-03-29 at 15.30.45.jpeg",
  ];

  return (
    <main className="min-h-screen bg-sand-50 selection:bg-brand-100 text-brand-950">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 pb-24 overflow-hidden bg-brand-50/50">
        <div className="absolute inset-0 bg-[url('/images/WhatsApp%20Image%202026-03-29%20at%2015.31.51.jpeg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-3/5 text-center lg:text-right order-2 lg:order-1">
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-200 text-brand-800 text-sm font-semibold mb-6 shadow-sm">
                ברוכה הבאה לקליניקת "נס המגע"
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-brand-900 drop-shadow-sm">
                נועם ספיר <br />
                <span className="text-brand-600 font-medium text-3xl md:text-5xl italic">רפלקסולוגית בגישת גוף-נפש</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-brand-800/80 leading-relaxed font-medium max-w-2xl lg:ml-0 mx-auto lg:mr-0">
                אני מזמינה אותך למרחב בטוח ושקט שבו הגוף שלך מקבל את תשומת הלב המגיעה לו. 
                כשאת מטפלת בכפות הרגליים, את מטפלת בנשמה.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <Phone size={24} />
                  תיאום טיפול בוואטסאפ
                </a>
                <a
                  href="#about"
                  className="bg-white hover:bg-brand-50 text-brand-800 font-bold py-5 px-10 rounded-full text-xl border-2 border-brand-200 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  הכירי את "נס המגע"
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-2/5 order-1 lg:order-2 w-full max-w-md">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-100 rounded-[3.5rem] rotate-6 opacity-60" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] w-full transform hover:rotate-0 transition-transform duration-500 hover:scale-[1.02]">
                  <Image 
                    src="/images/WhatsApp Image 2026-03-29 at 15.31.12.jpeg" 
                    alt="נועם ספיר - רפלקסולוגית" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-accent-100 rounded-[3rem] -rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <Image 
                  src="/images/WhatsApp Image 2026-03-29 at 15.30.45.jpeg" 
                  alt="טיפול רפלקסולוגיה בקליניקה" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 leading-tight">
                רפלקסולוגיה היא לא רק עיסוי נעים
              </h2>
              <p className="text-lg text-brand-800 leading-relaxed">
                זוהי כלי עוצמתי לשחרור חסימות רגשיות, הפחתת מתחים ואיזון המערכות ההורמונליות והפיזיות. 
                במרחב שלי, "נס המגע", אני משלבת הקשבה עמוקה לידע שהגוף צובר יחד עם מגע מרפא ומדויק.
              </p>
              <div className="space-y-4 pt-4 text-right">
                {[
                  "שלווה עמוקה ושחרור מתחים מצטברים",
                  "חיבור פנימי וזמן איכות שבו את במרכז",
                  "איזון גופני: סיוע בשינה, עיכול ואיזון נשי"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-end">
                    <span className="font-semibold text-brand-900">{item}</span>
                    <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-brand-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 italic">נס המגע בתמונות</h2>
            <div className="h-1.5 w-24 bg-brand-300 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 border-2 border-white">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900">מה הטיפול מעניק לך?</h2>
            <p className="text-xl text-brand-600 font-medium">החזירה את האיזון לחייך דרך כפות הרגליים</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-50/50 p-10 rounded-[2.5rem] border-2 border-brand-100 text-center hover:bg-brand-50 transition-colors">
              <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center text-accent-500 mb-8 mx-auto shadow-sm">
                <Leaf size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-900">שלווה עמוקה</h3>
              <p className="text-brand-800/80 leading-relaxed font-medium">
                שחרור מתחים מצטברים מהיום-יום העמוס, והרפיה מוחלטת של מערכת העצבים.
              </p>
            </div>
            <div className="bg-brand-50/50 p-10 rounded-[2.5rem] border-2 border-brand-100 text-center hover:bg-brand-50 transition-colors">
              <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center text-accent-500 mb-8 mx-auto shadow-sm">
                <Sparkles size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-900">חיבור פנימי</h3>
              <p className="text-brand-800/80 leading-relaxed font-medium">
                זמן איכות אמיתי שבו את במרכז, מאפשרת לעצמך לעצור ולהקשיב לצרכים של הגוף והנפש.
              </p>
            </div>
            <div className="bg-brand-50/50 p-10 rounded-[2.5rem] border-2 border-brand-100 text-center hover:bg-brand-50 transition-colors">
              <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center text-accent-500 mb-8 mx-auto shadow-sm">
                <HeartPulse size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-900">איזון גופני</h3>
              <p className="text-brand-800/80 leading-relaxed font-medium">
                סיוע אפקטיבי בבעיות שינה, מערכת העיכול, ואיזון הורמונלי ונשי טבעי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-sand-100/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-accent-400 text-accent-400" size={20} />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">הנשים שביקרו ב"נס המגע" מספרות</h2>
            <div className="h-1.5 w-24 bg-brand-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((img, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white hover:rotate-1 transition-transform">
                <Image 
                  src={img} 
                  alt={`Testimonial ${i}`} 
                  width={400} 
                  height={600} 
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-50/30 p-10 rounded-[2.5rem] border-2 border-brand-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-brand-200 p-3 rounded-2xl text-brand-600">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-2xl font-black text-brand-900">למי זה מתאים?</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "למי שמרגישה שהיא צריכה רגע לעצמה בתוך המרוץ",
                  "למי שסובלת ממתח, עומס נפשי או קשיי שינה",
                  "למי שמחפשת פתרון טבעי ועמוק לאיזון הגוף"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group justify-end">
                    <span className="text-lg font-semibold text-brand-800 text-right">{item}</span>
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 p-10 rounded-[2.5rem] border-2 border-stone-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-200 p-3 rounded-2xl text-stone-600">
                  <UserX size={32} />
                </div>
                <h3 className="text-2xl font-black text-stone-800">למי זה לא מתאים?</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "למי שמחפשת רק עיסוי טכני ללא חיבור פנימי",
                  "למי שלא מוכנה להתמסר לתהליך של שקט והרפיה",
                  "למי שרוצה תוצאות 'קסם' מבלי להקשיב לגוף"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 opacity-70 justify-end">
                    <span className="text-lg font-medium text-stone-700 text-right">{item}</span>
                    <XCircle className="text-stone-400 shrink-0 mt-1" size={22} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final About Section with Atmosphere Image */}
      <section className="py-24 bg-brand-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 bg-brand-200 rounded-[4rem] -rotate-6" />
              <div className="absolute inset-0 bg-white rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/WhatsApp Image 2026-03-29 at 15.31.51.jpeg" 
                  alt="נועם ספיר - קליניקה" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 text-center md:text-right">
              <h2 className="text-4xl font-black text-brand-900">מרחב "נס המגע"</h2>
              <div className="space-y-4 text-xl text-brand-800/90 leading-relaxed font-medium">
                <p>
                  נעים מאוד, אני נועם ספיר. 
                  האמונה שלי היא שהגוף שלנו הוא המראה המדויקת ביותר לכל מה שעובר עלינו בפנים.
                </p>
                <p>
                  בטיפולים שלי אני יוצרת מעטפת של שקט וביטחון, המאפשרת לך להניח את כל המשקולות בכניסה ולצלול פנימה. 
                  דרך כפות הרגליים, אנחנו פותחות חסימות, מאזנות ומחזירות לגוף את האנרגיה הטבעית שלו.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 bg-brand-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/WhatsApp%20Image%202026-03-29%20at%2015.30.45%20(1).jpeg')] bg-cover bg-center opacity-10 scale-110" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">הגיע הזמן שלך <br /> להעניק לעצמך "נס מגע"</h2>
          <p className="text-2xl text-brand-100 mb-12 font-medium opacity-90">
            אני מזמינה אותך לטיפול בקליניקה שלי, מקום שבו את והגוף שלך הם הדבר הכי חשוב.
          </p>
          <div className="flex flex-col items-center gap-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand-900 font-black py-6 px-14 rounded-full text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
            >
              <Phone size={32} />
              דברי איתי בוואטסאפ
            </a>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a href={instagramLink} target="_blank" className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors font-semibold">
                <Instagram size={24} />
                אינסטגרם
              </a>
              <a href={facebookLink} target="_blank" className="flex items-center gap-2 text-brand-200 hover:text-white transition-colors font-semibold">
                <Facebook size={24} />
                פייסבוק
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-950 text-brand-300 py-12 text-center text-sm border-t border-brand-900/50">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-center gap-6 opacity-60">
             <span className="font-bold tracking-widest uppercase">נס המגע</span>
             <span>|</span>
             <span className="font-bold tracking-widest uppercase">נועם ספיר</span>
          </div>
          <p className="font-medium">© {new Date().getFullYear()} נועם ספיר - רפלקסולוגיה וטיפול גוף נפש. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  );
}
