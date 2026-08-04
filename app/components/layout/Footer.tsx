import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/logos/kwest-logo.png"
              alt="KWEST"
              width={180}
              height={50}
              priority
            />

            <p className="mt-5 leading-7">
              Trusted businesses, verified community updates and real local
              stories that help Kahawa West residents make better decisions
              every day.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Built for Kahawa West.
              <br />
              Designed for Every Community.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#" className="transition hover:text-white">
                  Browse Directory
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Community Updates
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Community Spotlight
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Categories
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
                <a href="#" className="transition hover:text-white">
                  Join the Directory
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Listing Guidelines
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Help Centre
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
                WhatsApp Us
              </li>

              <li>
                support@kwest.co.ke
              </li>

              <li>
                Kahawa West
                <br />
                Nairobi, Kenya
              </li>

            </ul>

            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">

              <p className="font-semibold text-emerald-200">
                Less scrolling. Better decisions.
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-100">
                KWEST helps neighbours discover trusted businesses,
                verified updates and authentic community stories—
                without the noise of social media.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

            <p>
              © 2026 KWEST.
              <br className="md:hidden" />
              <span className="md:ml-2">
                Built in Kahawa West for communities everywhere.
              </span>
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms of Use
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}