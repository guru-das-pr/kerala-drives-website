import Banner from "@/components/Banner";
import PackageCard from "@/components/PackageCard";
import Subscribe from "@/components/Subscribe";
import { traditionalExperiences } from "@/constants/package";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title:
    "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
  description:
    "Immerse yourself in Kerala’s cultural heritage with authentic Kathakali performances, Kalaripayattu martial arts, and rejuvenating Ayurveda wellness retreats.",
  keywords: [
    "traditional Kerala experiences",
    "Kathakali performances Kerala",
    "Kalaripayattu martial arts Kerala",
    "Ayurveda retreats Kerala",
    "Kerala heritage tours",
    "cultural tourism Kerala",
    "Kerala wellness packages",
    "authentic Kerala tours",
    "traditional art Kerala",
    "Ayurveda therapies Kerala",
    "cultural experiences Kerala",
    "heritage tourism Kerala",
    "Kerala cultural retreats",
  ],
  openGraph: {
    title:
      "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
    description:
      "Explore Kerala’s vibrant culture with Kathakali dance, Kalaripayattu martial arts, and Ayurveda wellness therapies for an authentic cultural retreat.",
    images: ["https://opengraph.b-cdn.net/production/images/09d782d5-bf91-46b1-9e1b-8ae32b30db5c.png?token=boAP-E9uoS05YyOpK8zv2h5cdvOkqXq2MW4e3sx24Yo&height=566&width=1200&expires=33271364427"],
    type: "website",
    url: "https://www.keraladrives.com/traditional-experiences",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
    description:
      "Discover Kerala’s rich traditions through Kathakali, Kalaripayattu, and Ayurveda retreats with Kerala Drives.",
    images: ["https://opengraph.b-cdn.net/production/images/09d782d5-bf91-46b1-9e1b-8ae32b30db5c.png?token=boAP-E9uoS05YyOpK8zv2h5cdvOkqXq2MW4e3sx24Yo&height=566&width=1200&expires=33271364427"],
  },
  alternates: {
    canonical: "https://www.keraladrives.com/traditional-experiences",
  },
};


const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Traditional Experiences"}
        pageName={"Traditional Experiences"}
        imageUrl="/assets/images/banner/traditional-experiance.jpg"
        search={true}
      />
      {/* Experiences Grid Area start */}
      <section className="tour-grid-page pt-100 rel z-2">
        <div className="container">
        <div className="row justify-content-center">
            {traditionalExperiences.map((packageItem, index) => (
              <div key={index} className="col-xl-4 col-md-6 d-flex justify-content-center">
                <PackageCard
                  image={packageItem.image}
                  title={packageItem.title}
                  description={packageItem.description}
                  duration={packageItem.duration}
                  people={packageItem.people}
                  link={packageItem.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center px-3 py-4 mb-50">
        <h3 className="fw-semibold mb-3 h5 h3-lg">Looking for a customized package?</h3>
          <a
            target="_blank"
            href="https://enquiry.keraladrives.com/"
            className="subtitle"
            role="button"
          >
            Contact Us
          </a>
        </div>
      </section>
    </ReveloLayout>
  );
};

export default page;
