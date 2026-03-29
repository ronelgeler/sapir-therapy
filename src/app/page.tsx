import React from "react";
import { CheckCircle2, Leaf, HeartPulse, Sparkles, Phone, UserX, UserCheck, XCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-50 selection:bg-sage-200 text-sage-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-sage-50">
        <div className="absolute inset-0 bg-sage-100/30" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-sage-200 text-sage-800 text-sm font-medium mb-6">
            הגיע הזמן לעצור, לנשום ולהתחבר מחדש
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-sage-900">
            רפלקסולוגית - מטפלת גוף נפש
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-sage-700 max-w-2xl mx-auto leading-relaxed">
            אני ספיר הדר. אני כאן כדי לעזור לך להשתחרר מכאבים פיזיים ורגשיים, להפיג מתחים ולמצוא את השקט הפנימי שלך דרך טיפול הוליסטי ומדויק.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-sage-600 hover:bg-sage-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              לשיחת ייעוץ והיכרות
            </a>
            <a
              href="#about"
              className="bg-white hover:bg-sand-100 text-sage-800 font-bold py-4 px-8 rounded-full text-lg border border-sage-200 transition-all"
            >
              איך זה עובד?
            </a>
          </div>
        </div>
      </section>

      {/* The "Pain" Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-800">מכירה את התחושה ש...</h2>
            <div className="h-1 w-20 bg-sage-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg text-sage-700">
            <div className="flex items-start gap-4 bg-sand-50 p-6 rounded-2xl border border-sand-100">
              <div className="mt-1 bg-sage-100 p-2 rounded-full text-sage-600 shrink-0">
                <XCircle size={24} />
              </div>
              <p>הגוף מאותת לך לעצור (כאבי ראש, עייפות כרונית, מתח בשרירים) אבל את לא מוצאת את הזמן להקשיב לו?</p>
            </div>
            <div className="flex items-start gap-4 bg-sand-50 p-6 rounded-2xl border border-sand-100">
              <div className="mt-1 bg-sage-100 p-2 rounded-full text-sage-600 shrink-0">
                <XCircle size={24} />
              </div>
              <p>לחצים ומחשבות טורדניות מנהלים את היום-יום שלך ומקשים עליך להירדם בלילה?</p>
            </div>
            <div className="flex items-start gap-4 bg-sand-50 p-6 rounded-2xl border border-sand-100">
              <div className="mt-1 bg-sage-100 p-2 rounded-full text-sage-600 shrink-0">
                <XCircle size={24} />
              </div>
              <p>את מרגישה ניתוק בין מה שהגוף צריך לבין קצב החיים שדורש ממך להיות תמיד בעשייה?</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-medium text-sage-800 italic">
              זה לא חייב להיות ככה. אפשר להחזיר את הגוף לאיזון טבעי.
            </p>
          </div>
        </div>
      </section>

      {/* The "Solution" Section - 3 Steps */}
      <section id="about" className="py-24 bg-sage-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-800">הדרך לשקט הפנימי: איך זה עובד?</h2>
            <p className="text-xl text-sage-600">טיפול רפלקסולוגיה אינו רק "עיסוי רגליים". זהו תהליך אבחון וטיפול עמוק.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage-100 hover:shadow-md transition-shadow">
              <div className="bg-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sage-600 mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-sage-800">1. אבחון והקשבה</h3>
              <p className="text-sage-600 leading-relaxed">
                כפות הרגליים הן המפה של הגוף והנפש. בפגישה הראשונה נקיים אבחון מעמיק המזהה חסימות, עומסים ונקודות חולשה שדורשות התייחסות.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage-100 hover:shadow-md transition-shadow">
              <div className="bg-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sage-600 mb-6">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-sage-800">2. טיפול ממוקד</h3>
              <p className="text-sage-600 leading-relaxed">
                באמצעות לחיצות ועיסוי מדויק בנקודות רפלקס בכפות הרגליים, אנו מעוררים את מנגנוני הריפוי הטבעיים של הגוף ומשחררים מתח אגור.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sage-100 hover:shadow-md transition-shadow">
              <div className="bg-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sage-600 mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-sage-800">3. איזון והרפיה</h3>
              <p className="text-sage-600 leading-relaxed">
                הגוף לומד לחזור למצב של רגיעה מוחלטת (מערכת פארא-סימפטטית). תחושת הקלה, אנרגיה מחודשת וחיבור עמוק יותר לעצמך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <UserX className="text-red-500" size={28} />
                <h3 className="text-2xl font-bold text-red-900">למי זה לא מתאים?</h3>
              </div>
              <ul className="space-y-4 text-red-800/80">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>למי שמחפש "פתרון קסם" ברגע בלי נכונות לתהליך.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>למי שלא מוכנה לפנות שעה בשבוע לעצמה.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>למי שמעדיף להתעלם מהקשר שבין מתח נפשי לכאב פיזי.</span>
                </li>
              </ul>
            </div>

            <div className="bg-sage-50 p-8 rounded-3xl border border-sage-200">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="text-sage-600" size={28} />
                <h3 className="text-2xl font-bold text-sage-900">למי זה כן מתאים?</h3>
              </div>
              <ul className="space-y-4 text-sage-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-sage-500 shrink-0 mt-0.5" size={20} />
                  <span>למי שרוצה להפסיק לסבול מכאבים ומתחים כרוניים.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-sage-500 shrink-0 mt-0.5" size={20} />
                  <span>לנשים בתקופות עומס, משבר או שינוי שצריכות עוגן ומקום מכיל.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-sage-500 shrink-0 mt-0.5" size={20} />
                  <span>למי שמאמינה בכוח הריפוי הטבעי של הגוף ומוכנה להשקיע בעצמה.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-sand-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-sage-200 rounded-full shrink-0 overflow-hidden shadow-xl border-4 border-white flex items-center justify-center text-sage-600 relative">
              {/* Fallback avatar if no image is provided */}
              <span className="text-2xl font-bold">ספיר הדר</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-sage-900">נעים להכיר, ספיר הדר</h2>
              <div className="space-y-4 text-lg text-sage-700 leading-relaxed">
                <p>
                  אני ספיר, רפלקסולוגית ומטפלת מוסמכת בגישת גוף-נפש. 
                  אני מאמינה שהגוף שלנו מדבר אלינו כל הזמן, והתפקיד שלי הוא לעזור לך לתרגם את השפה שלו.
                </p>
                <p>
                  במהלך שנות עבודתי, ליוויתי נשים רבות בתהליכי ריפוי, שחרור מכאבים כרוניים, חרדות ומתחים.
                  הקליניקה שלי היא מרחב בטוח, מכיל ועוטף, שבו את יכולה פשוט להיות, להניח את העומס בחוץ, ולחזור הביתה אל הגוף שלך.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-sage-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנה לעשות את הצעד הראשון?</h2>
          <p className="text-xl text-sage-200 mb-10">
            השאירי פרטים או צרי קשר עכשיו, ונתאם שיחת ייעוץ קצרה ללא התחייבות כדי לבדוק איך אוכל לעזור לך.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://wa.me/972500000000" // Replace with actual number
              target="_blank"
              rel="noreferrer"
              className="bg-white text-sage-900 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3"
            >
              <Phone size={24} />
              דברי איתי בוואטסאפ
            </a>
            <p className="text-sage-300">או עקבי אחריי ב-<a href="https://www.facebook.com/sapir.hadar/photos" target="_blank" className="underline hover:text-white">פייסבוק</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-950 text-sage-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} ספיר הדר - רפלקסולוגיה וטיפול גוף נפש. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  );
}
