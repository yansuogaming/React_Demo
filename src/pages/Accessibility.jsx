import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Menu,
  Search,
  Share2,
  Twitter,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Link } from "react-router";
import CardService from "@components/card/CardService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import EssentialInfo from "@components/EssentialInfo";
import Reveal from "@components/animation/Reveal";
import TextNormal from "@components/text/TextNormal";
import { useTranslation } from "react-i18next";
import Breadcrumb from "@components/Breadcrumb";

const HeroSection = () => {
  const { t } = useTranslation();
  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("plan_your_trip"), href: "/" },
    { label: t("accessibility"), href: "/accessibility" },
  ];
  return (
    <section className="relative pt-10 ">
      <div className="container relative z-10 flex flex-col justify-end h-full pb-8 px-4">
        <Breadcrumb
          className="p-[16px_40px_28px_0] text-[14px]"
          items={breadcrumdItems}
        />

        <h1 className="text-5xl font-medium text-black">
          Travel accessibility
          <br />
        </h1>
      </div>
      <Reveal>
        <section className="mb-12 h-auto ">
          <Carousel
            className="w-full xl:w-[80vw] mt-10 xl:mt-0  mx-auto "
            opts={{
              align: "start",
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full w-[80vw] h-[50vh] lg:h-[80vh] "
                >
                  <div className="h-full relative lg:rounded-br-[100px] overflow-hidden mx-0 ">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex xl:flex-col absolute gap-5  -top-10 right-0 xl:top-30 xl:right-20">
              <CarouselPrevious
                className={
                  "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:-z-10"
                }
                classNameArrow={"group-hover:text-white transition-colors"}
              />
              <CarouselNext
                className={
                  "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10"
                }
                classNameArrow={"group-hover:text-white transition-colors"}
              />
            </div>
          </Carousel>
        </section>
      </Reveal>
      <div className="container ">
        <p className="text-gray-700 text-lg mb-4">
          As a leading global destination, Viet Nam aims to improve travel
          accessibility for visitors with special needs, known as ‘People of
          Determination’ in the UAE. Whether it is at the airport, public
          transport, top attractions or accommodation, we continue to enhance
          the traveller experience to help you navigate our city with ease.
        </p>
      </div>
    </section>
  );
};
const FitnessAndActivities = () => {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6">
        Fitness and activities for people of determination
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        Viet Nam offers award-winning fitness facilities for people of
        determination, whether they have physical or sensory accessibility
        requirements. From flying high on a zipline to experiencing a skydive,
        there's no limit to what you can do in Viet Nam.{" "}
        <Link href="#" className="text-blue-600">
          Adaptive Viet Nam Sports
        </Link>{" "}
        is dedicated to{" "}
        <Link href="#" className="text-blue-600">
          accessible sports
        </Link>
        .
      </p>

      <div className="h-[80vh] bg-gray-200 relative">
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
    </section>
  );
};

const HelpfulReadsSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6">Helpful reads</h2>
      <Reveal>
        <Carousel className="w-full">
          <CarouselContent className="-ml-[20px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-[20px] basis-full md:basis-1/2 lg:basis-1/3"
              >
                <CardService
                  title="Diverse Natural Landscapes"
                  widthImage="100%"
                  heightImage="auto"
                  image={
                    "https://wp.penguin.co.uk/wp-content/uploads/2023/07/Article-Card-Help-Child-Learn-To-Read-Update-2023.jpg"
                  }
                  href="/"
                  padding="15px 0 0 0"
                >
                  <p className="flex gap-[5px] items-center mb-[15px] -mt-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                        stroke="#494951"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M10 5V10.625H13.75"
                        stroke="#494951"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    3 days 2 nights
                  </p>
                  <TextNormal className="text-[16px]">
                    From the majestic mountains of Ha Giang to the pristine
                    beaches of Phu Quoc, Vietnam boasts a rich and breathtaking
                    natural beauty that promises unforgettable experiences for
                    every traveler.
                  </TextNormal>
                </CardService>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            style={{ top }}
            className="left-[20px] cursor-pointer"
          />
          <CarouselNext
            style={{ top }}
            className="right-[20px] cursor-pointer"
          />
        </Carousel>
      </Reveal>
    </>
  );
};

const HearFromTheExpertsSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6">Hear from the experts</h2>
      <section className="mb-12 h-auto">
        <Carousel
          className="mx-auto "
          opts={{
            align: "start",
            skipSnaps: false,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full w-full h-[50vh] ">
                <div className="flex flex-col md:flex-row gap-8 p-6 rounded-md">
                  <div className="w-full md:w-2/5">
                    <img
                      src="https://ling-app.com/wp-content/uploads/2023/02/facts-about-vietnamese-people-ling-app-vietnam-girls.jpg"
                      alt="Dr. Daniela Pavlova"
                      className="w-full h-[350px] rounded-md object-cover"
                    />
                  </div>

                  <div className="w-full md:w-3/5 pr-15">
                    <h3 className="text-xl font-bold mb-2">
                      Dr. Daniela Pavlova
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      Accessibility expert with 20 years experience in inclusive
                      tourism
                    </p>

                    <div className="text-base leading-relaxed">
                      <p className="mb-4">
                        "Viet Nam has made remarkable progress in creating an
                        inclusive city for people with a wide range of
                        disabilities. I have to commend the strategic planning
                        and commitment to making Viet Nam accessible for all.
                        From the airport to attractions, there is a genuine
                        effort to ensure that everyone can enjoy what the city
                        has to offer."
                      </p>
                      <p>
                        "The designation of 'People of Determination' reflects
                        the respectful approach to inclusion that characterizes
                        Viet Nam's accessibility initiatives."
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-col absolute gap-5 top-15 right-0">
            <CarouselPrevious
              className={
                "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:-z-10"
              }
              classNameArrow={"group-hover:text-white transition-colors"}
            />
            <CarouselNext
              className={
                "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10"
              }
              classNameArrow={"group-hover:text-white transition-colors"}
            />
          </div>
        </Carousel>
      </section>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-6">FAQs</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-t border-b py-2">
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2">
            <span className="text-xl font-semibold">
              Is Viet Nam accessible?
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <p className="text-base leading-relaxed">
              Yes, Viet Nam has made significant investments in accessibility
              infrastructure. Major attractions, hotels, shopping malls, and
              transportation systems are designed to accommodate people with
              various accessibility needs. The city continues to improve its
              facilities to ensure an inclusive experience for all visitors.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b py-2">
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2">
            <span className="text-xl font-semibold">
              Are there accessible beaches in Viet Nam?
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <p className="text-base leading-relaxed">
              Yes, Viet Nam has several accessible beaches including Kite Beach
              and La Mer, which offer beach wheelchairs, accessible pathways,
              and facilities for people of determination.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b py-2">
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2">
            <span className="text-xl font-semibold">
              I need help getting to and onto the aircraft - can this be
              arranged?
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <p className="text-base leading-relaxed">
              Yes, Viet Nam International Airport provides assistance services
              for passengers with special needs. It's recommended to inform your
              airline at least 48 hours before your flight so they can arrange
              the necessary support.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b py-2">
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2">
            <span className="text-xl font-semibold">
              Are there wheelchair taxis in Viet Nam?
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <p className="text-base leading-relaxed">
              Yes, the Roads and Transport Authority (RTA) in Viet Nam offers
              wheelchair-accessible taxis that can be booked through their call
              center or mobile app.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b py-2">
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2">
            <span className="text-xl font-semibold">
              Is there wheelchair accessibility on the Viet Nam Metro?
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4">
            <p className="text-base leading-relaxed">
              Yes, the Viet Nam Metro is fully accessible with elevators at all
              stations, designated spaces for wheelchairs in each train, and
              tactile guidance paths for visually impaired travelers.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="my-12 text-white rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 ">
        <div className="hidden md:block">
          <img
            src="https://www.autourasia.com/uploads/Useful-infos/kinh-people/700-ao-dai.jpg"
            alt="Two women, one in a wheelchair, enjoying Viet Nam"
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 py-12 ml-0 md:-ml-10 bg-[#055e88] h-auto my-auto rounded-tl-4xl rounded-br-4xl">
          <h2 className="text-2xl font-bold mb-4">
            Things to do in Viet Nam: Our tips for people of determination
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Whether you're here for a single day or a full week, there are
            plenty of accessible experiences to enjoy in Viet Nam. From
            world-class attractions to beautiful beaches, we've curated our
            favorites for you, that will make the stay fun and exciting in Viet
            Nam.
          </p>
          <Button className="bg-white text-blue-800 hover:bg-gray-100">
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
};

const KeepExploringSection = () => {
  return (
    <section className="my-15">
      <h2 className="text-4xl font-bold mb-2">Keep exploring</h2>
      <p className="text-xl text-gray-600 mb-8">
        There's so much to see in Viet Nam.
      </p>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardService
              title="Diverse Natural Landscapes"
              widthImage="100%"
              heightImage="auto"
              key={index}
              image={
                "https://wp.penguin.co.uk/wp-content/uploads/2023/07/Article-Card-Help-Child-Learn-To-Read-Update-2023.jpg"
              }
              href="/"
              padding="15px 0 0 0"
            >
              <p className="flex gap-[5px] items-center mb-[15px] -mt-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                    stroke="#494951"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M10 5V10.625H13.75"
                    stroke="#494951"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                3 days 2 nights
              </p>
              <TextNormal className="text-[16px]">
                From the majestic mountains of Ha Giang to the pristine beaches
                of Phu Quoc, Vietnam boasts a rich and breathtaking natural
                beauty that promises unforgettable experiences for every
                traveler.
              </TextNormal>
            </CardService>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
export default function TravelAccessibility() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className=" mx-auto px-4 pb-16">
        {/* Hero Section */}
        <HeroSection />
        <div className="container">
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
          <EssentialInfo
            title="Getting around Viet Nam"
            description="Navigate with ease"
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
          {/* Fitness and Activities Section */}
          <FitnessAndActivities />
          {/* Helpful Reads Section */}
          <HelpfulReadsSection />
          {/* Hear from the Experts Section */}
          <HearFromTheExpertsSection />
          {/* FAQs Section */}
          <FAQSection />
          {/* CTA Section */}
          <CTASection />
          {/* Keep Exploring Section */}
          <KeepExploringSection />
          {/* Footer Navigation */}
          <div className="mt-16 text-center">
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              Discover more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
