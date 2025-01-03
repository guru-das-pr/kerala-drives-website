import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import 'rc-slider/assets/index.css';
import CookieConsent from "@/components/popup/CookieConsent";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/googleAnalytics";

export const metadata = {
  title: "Kerala Drives - Travel & Tour Booking",
  description: "Explore South India with Kerala Drives, your trusted travel partner.",

  icons: {
    icon: "/assets/images/logos/favicon.png",
    apple: "/assets/images/logos/apple-touch-icon.png",
  },

  openGraph: {
    title: "Kerala Drives - Travel & Tour Booking",
    description: "Explore South India with Kerala Drives, your trusted travel partner.",
    url: "https://www.keraladrives.com",
    siteName: "Kerala Drives",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/3ac603a7-4c0f-40be-9096-ceb0e0503306.jpg?token=OEsCLJ4kJUG0OJ_D5JL7Y8exNVSphVspNrMITq_1xQ4&height=230&width=280&expires=33271363388",
        width: 1200,
        height: 630,
        alt: "Kerala Drives Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Drives - Travel & Tour Booking",
    description: "Explore South India with Kerala Drives, your trusted travel partner.",
    images: ["https://opengraph.b-cdn.net/production/images/3ac603a7-4c0f-40be-9096-ceb0e0503306.jpg?token=OEsCLJ4kJUG0OJ_D5JL7Y8exNVSphVspNrMITq_1xQ4&height=230&width=280&expires=33271363388"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.keraladrives.com"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <CookieConsent />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
          },
        }}
      />
       <GoogleAnalytics />
      </body>

    </html>
  );
}



  // <======================================== NOTES START ==============================================>

  // Libraries used: "Bootstrap" for CSS, "Fontawesome" for icons, "Magnific Popup" for lightbox, "Nice Select" for dropdowns, "AOS" for animations.
  // Refer to the official documentation of the mentioned libraries before making changes in the code.
  
  // To run the code:
  // 1. Install all dependencies: npm install
  // 2. Start the development server: npm run dev

  // Created Date: 3-Dec-2024 || Created By: Gurudas P R || Module: 1 ||
  // Modified Date: - || Modified By: - || Module: 1 ||
  // Modified Date: - || Modified By: - || Module: 1 ||

  // Technical Summary (Pre-setups):
  // - Created Date/By: Gurudas P R
  // - Domain: https://keraladrives.com/
  // - Hosting: Vercel
  // - SSL: Cloudflare

  // Phase Summary:
  // - Created Date/By: Gurudas P R || Murthasa Ali || Arjun
  // - Phase 1: Setups || Initial configurations, environment, and library setup.
  // - Phase 2: Development/Main Page Creation || Feature implementation and main page design.
  // - Phase 3: Production || Deployment, testing, and final production readiness.

  // Library Versions:
  // - Bootstrap: 5.x.x
  // - Fontawesome: 6.x.x
  // - Magnific Popup: 1.x.x
  // - Nice Select: 1.x.x
  // - AOS: 2.x.x

  // Known Issues:
  // - Lightbox transitions may face compatibility issues in older browsers.

  // <======================================== NOTES END ==============================================>