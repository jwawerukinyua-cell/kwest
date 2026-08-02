export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-white">
              KWEST
            </h2>

            <p className="mt-4 leading-7">
              Trusted businesses, verified community updates and local stories
              that help Kahawa West residents make better decisions every day.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Built for Kahawa West.
              <br />
              Designed for Every Community.
            </p>

          </div>

          {/* Residents */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Residents
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#" className="hover:text-white transition">
                  Browse Directory
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Community Updates
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Community Spotlight
                </a>
              </li>

            </ul>

          </div>

          {/* Businesses */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Businesses
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#" className="hover:text-white transition">
                  Join the Directory
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Listing Guidelines
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Support
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                WhatsApp
              </li>

              <li>
                Email
              </li>

              <li>
                Kahawa West, Nairobi
              </li>

            </ul>

            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">

              <p className="text-sm text-emerald-200">
                Community updates delivered where they matter most.
                No unnecessary noise.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

            <p>
              © 2026 KWEST. All rights reserved.
            </p>

            <div className="flex gap-6">

              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms of Use
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}