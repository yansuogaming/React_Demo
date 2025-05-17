import { MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";
import EssentialInfo from "@components/EssentialInfo";
import Reveal from "@components/animation/Reveal";
import Breadcrumb from "@components/Breadcrumb";
import { useTranslation } from "react-i18next";
import Weather from "@components/Weather";

// Components
const HeroSection = ({ breadcrumdItems }) => {
  return (
    <section className="relative">
      <div className=" p-8 ">
        <Breadcrumb
          className="p-[16px_40px_28px_0] text-[14px]"
          items={breadcrumdItems}
        />
        <h1 className="text-5xl  text-black">Practical information</h1>
      </div>
      <Reveal>
      <div className="h-[250px] md:h-[400px] lg:h-[80vh] relative lg:rounded-br-[100px] overflow-hidden mx-0  xl:-mx-15 my-5">
          <iframe
            className="absolute inset-0 w-full h-full border-0 z-10"
            src="https://www.youtube.com/embed/SrqPSxkCNFI?si=CJL69ZgrJupBwrX6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </Reveal>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className=" mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium">
            Where can I apply for a visa to Viet Nam?
          </AccordionTrigger>
          <AccordionContent>
            Information about visa application process would appear here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium">
            What is a visa on arrival?
          </AccordionTrigger>
          <AccordionContent>
            Details about visa on arrival eligibility and process would appear
            here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium">
            What is the official language in Viet Nam?
          </AccordionTrigger>
          <AccordionContent>
            Information about languages spoken in Viet Nam would appear here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-medium">
            Can I drink alcohol in Viet Nam?
          </AccordionTrigger>
          <AccordionContent>
            Information about alcohol regulations in Viet Nam would appear here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left font-medium">
            Is there anything prohibited in Viet Nam?
          </AccordionTrigger>
          <AccordionContent>
            Information about prohibited items and activities in Viet Nam would
            appear here.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link
        href="#"
        className="text-blue-600 hover:underline text-sm mt-4 inline-block"
      >
        Read all FAQs
      </Link>
    </section>
  );
};

const FlyWithEmiratesSection = () => {
  return (
    <section className=" mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Fly with Emirates</h2>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Arrival airport
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dxb">Viet Nam (DXB)</SelectItem>
                <SelectItem value="dwc">
                  Viet Nam World Central (DWC)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-bassic font-medium text-gray-700 mb-1">
              Passengers
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="1 passenger" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 passenger</SelectItem>
                <SelectItem value="2">2 passengers</SelectItem>
                <SelectItem value="3">3 passengers</SelectItem>
                <SelectItem value="4">4 passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-bassic font-medium text-gray-700 mb-1">
              Class
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Economy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-bassic font-medium text-gray-700 mb-1">
              Depart on
            </label>
            <Input type="date" className="w-full" />
          </div>

          <div>
            <label className="block text-bassic font-medium text-gray-700 mb-1">
              Return on
            </label>
            <Input type="date" className="w-full" />
          </div>
        </div>

        <Button className="mt-6 w-full md:w-auto md:float-right bg-gray-300 hover:bg-gray-400 text-gray-800">
          Search flights
        </Button>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className=" mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Contact us</h2>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-blue-50 p-6 rounded-lg h-[300px] relative">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg"
                  alt="Vietnam Tourism Map"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Button
                variant="outline"
                className="absolute bottom-4 left-4 bg-white"
              >
                <MapPin className="h-4 w-4 mr-2" />
                View larger map
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Department of Tourism and Commerce Marketing (DTCM)
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              One Central, The Offices 2, Building 2, Level 5, Viet Nam, UAE
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm">Timings</h4>
                <p className="text-sm">Sunday - Thursday: 7:30 AM - 2:30 PM</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Phone</h4>
                <p className="text-sm">+971 600 55 5559</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Email</h4>
                <p className="text-sm">info@Viet Namtourism.ae</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">
                  WhatsApp Chat (24/7 - 8000)
                </h4>
                <p className="text-sm">+971 600 55 5559</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Talk to a real human</h4>
                <Button variant="outline" size="sm" className="mt-1">
                  Chat with us now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const StayUpdatedSection = () => {
  return (
    <section className=" mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Stay updated</h2>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="text-sm text-gray-600 md:w-1/3">
          Sign up to our newsletter to get the latest updates and offers
        </div>

        <div className="flex w-full md:w-2/3 gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1"
          />
          <Button variant="outline" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const WeatherSection = () => {
  return <Weather />;
};

const Infor = () => {
  return (
    <EssentialInfo
      title="The essentials"
      description="Your accessibility guide"
      essentialsList={[
        {
          title: "Currency",
          infoContent: [
            {
              highlight: "Tiền tệ chính thức của Việt Nam là Đồng (VND)",
              text: ", tỷ giá hiện tại khoảng 24,000 VND = 1 USD.",
              className: "text-base",
            },
          ],
          imageSrc:
            "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg",
          imageAlt: "Vietnamese Dong currency",
          button: {
            text: "Learn more",
            href: "#",
            className:
              "text-sm text-white hover:text-white bg-[#055e88] hover:bg-[#055e] focus:ring-4  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ",
          },
        },
        {
          title: "Timezone",
          infoContent: [
            {
              highlight: "Việt Nam thuộc múi giờ GMT+7",
              text: ", và không áp dụng giờ mùa hè.",
              className: "text-base",
            },
          ],
          imageSrc:
            "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
          imageAlt: "Vietnam timezone clock",
        },
        {
          title: "Wi-Fi Access",
          infoContent: [
            {
              highlight: "Wi-Fi miễn phí có sẵn rộng rãi",
              text: " tại các khách sạn, nhà hàng, quán café và trung tâm thương mại.",
              className: "text-base",
            },
          ],
          imageSrc:
            "https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg",
          imageAlt: "Free WiFi sign in Vietnam",
        },
        {
          title: "Embassies & consulates",
          infoContent: [
            {
              highlight: "Các đại sứ quán và lãnh sự quán",
              text: " được đặt tại Hà Nội và TP.HCM, sẵn sàng hỗ trợ du khách quốc tế.",
              className: "text-base",
            },
          ],
          imageSrc:
            "https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg",
          imageAlt: "Embassy building in Vietnam",
        },
        {
          title: "Emergency numbers",
          infoContent: [
            {
              highlight: "Số điện thoại khẩn cấp: 113 (Công an)",
              text: ", 114 (Cứu hỏa), 115 (Cấp cứu)",
              className: "text-base",
            },
          ],
          imageSrc:
            "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg",
          imageAlt: "Emergency services in Vietnam",
        },
      ]}
    />
  );
};

const StartPlanning = () => {
  return (
    <section className="w-full mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-1">Start planning</h2>
      <p className="text-gray-600 mb-6 text-base">
        Find all kinds of essential information – from basic visitor info to
        tips on how to make the most of your trip.
      </p>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src="https://images.pexels.com/photos/2873686/pexels-photo-2873686.jpeg"
                  alt="View from airplane window over Vietnam"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold mb-1">Visa information</h3>
              <p className="text-sm text-gray-600">
                Find out if you need a visa to visit Viet Nam and how to apply
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default function PracticalInformation() {
  const { t } = useTranslation();
  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("plan_your_trip"), href: "/" },
    { label: t("essentials"), href: "/" },
  ];
  return (
    <div className="w-full container">
      <HeroSection breadcrumdItems={breadcrumdItems} />
      <Infor />

      <FAQSection />
      <FlyWithEmiratesSection />
      <Infor />
      <ContactSection />
      <StartPlanning />
      <WeatherSection />
      <StayUpdatedSection />
    </div>
  );
}
