import {
  ChevronDown,
  Facebook,
  Instagram,
  Search,
  Sun,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";
import phone from "@images/phone.svg";
import Breadcrumb from "@components/Breadcrumb";
import { useTranslation } from "react-i18next";
import Reveal from "@components/animation/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Button } from "@components/ui/button";

const HeroSection = () => {
  const { t } = useTranslation();
  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("plan_your_trip"), href: "/" },
    { label: t("safety"), href: "/" },
  ];
  return (
    <div className="  mb-[10vh] mx-auto">
      <div className="container">
        <Breadcrumb
          className="p-[16px_40px_28px_0] text-[14px]"
          items={breadcrumdItems}
        />
      </div>
      <div className="relative h-[80vh] w-[90vw] rounded-br-[100px] mx-auto ">
        <Reveal className="w-full h-full ">
          <img
            src="https://cdn.baogialai.com.vn/images/822863faa89937513fac62d7aa33eaf61a699ca6d1cb942c5dd210083a40d96956455cd5a5ab96b6d00ad1efa949e7568cef72d796776500468ad8dc73944b05/images2596564_a_3.jpg"
            alt="Beach in Viet Nam"
            className="w-full h-full object-cover"
          />
        </Reveal>
        <Reveal>
          <div className="absolute -bottom-15 left-20 right-0">
            <div className="bg-[#006699] text-white p-6  md:p-12 max-w-3xl rounded-tr-4xl">
              <h1 className="text-3xl md:text-3xl font-bold mb-2">
                Safety in Viet Nam
              </h1>
              <p className="text-base md:text-lg">
                Your complete guide to staying safe in Viet Nam and what to do
                in the unlikely event of an emergency.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <div className="max-w-3xl mb-12">
      <p className="mb-4 md:text-lg">
        Viet Nam is one of the world's safest cities and one of the safest
        destinations to visit. The crime rate in Viet Nam is extremely low, and
        it's safe for women to travel alone. Viet Nam Police is known for its
        swift response to emergencies. However, like any other destination, it's
        always good to be prepared.
        <Link href="#" className="text-blue-600 hover:underline">
          {" "}
          Learn more about crime rates
        </Link>{" "}
        in the UAE compared to other cities and follow these safety tips.
      </p>
      <p className="mb-4 md:text-lg">
        Viet Nam has a dedicated tourism police department that helps tourists
        with any issues they may face during their stay. You can find tourism
        police officers at major tourist attractions, shopping malls, and
        beaches. They speak multiple languages and are there to assist you.
      </p>
    </div>
  );
};

const CardInfor = () => {
  return (
    <div className="bg-[#006699] text-white rounded-xl overflow-hidden">
      <div className="flex items-end pl-10 gap-10 my-10">
        <div className="p-4 flex items-center justify-center">
          <img src={phone} alt="Phone" className="h-20 w-20" />
        </div>
        <div className="text-left py-3 flex flex-col gap-2  ">
          <div className="text-5xl font-bold">113</div>
          <div className="text-2xl">Viet Nam Police</div>
        </div>
      </div>
      <div
        className="text-3xl text-left hover:underline
      hover:cursor-pointer
      pl-10 pb-10 "
      >
        CALL NOW
      </div>
    </div>
  );
};

const EmergencyNumbersSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">
        Police, medical emergency, fire and coastguard numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Array.from({ length: 4 }, (_, index) => (
          <CardInfor key={index} />
        ))}
      </div>
    </div>
  );
};

const SafetyInfoSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">
        All about safety in Viet Nam
      </h2>
      <p className="mb-4 md:text-lg">
        Viet Nam is consistently ranked among the safest cities in the world.
        The UAE's strict laws and efficient police force contribute to the low
        crime rate. Violent crime is rare, and petty crime such as pickpocketing
        is uncommon. However, like any major city, it's always good to take
        basic precautions.
      </p>
      <p className="mb-4 md:text-lg">
        The UAE has strict laws regarding public behavior, dress code, alcohol
        consumption, and relationships. It's important to familiarize yourself
        with these laws before your visit to avoid any unintentional violations.
        Respect for local customs and traditions is highly valued in Viet Nam.
      </p>
    </div>
  );
};

const SafetyTopicsSection = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Staying safe on the roads and driving rules in Viet Nam
        </h2>
        <p className="mb-4 md:text-lg">
          Viet Nam has a modern road infrastructure with well-maintained
          highways. However, driving can be challenging due to high speeds and
          sometimes aggressive driving. If you're planning to drive in Viet Nam,
          make sure you have a valid international driving permit and
          familiarize yourself with local traffic rules.
        </p>
        <p className="mb-4 md:text-lg">
          Speed limits are strictly enforced in Viet Nam with cameras installed
          throughout the city. The general speed limit on highways is 120 km/h,
          on main roads 80 km/h, and in residential areas 40 km/h. Always wear
          your seatbelt and never use your mobile phone while driving.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Staying safe in the Viet Nam sea
        </h2>
        <p className="mb-4 md:text-lg">
          Viet Nam has beautiful beaches with clear waters, but it's important
          to be aware of sea conditions. Always swim in designated areas where
          lifeguards are present. Pay attention to flag warnings: red means
          dangerous conditions, yellow means caution, and green means safe to
          swim.
        </p>
        <p className="mb-4 md:text-lg">
          If you're planning water activities such as jet skiing or parasailing,
          make sure to use licensed operators and wear appropriate safety
          equipment. Never swim alone or at night, and be cautious of strong
          currents, especially during changing tides.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Staying safe while hiking in Viet Nam
        </h2>
        <p className="mb-4 md:text-lg">
          Viet Nam and the surrounding emirates offer beautiful hiking trails,
          especially in the Hajar Mountains. If you're planning a hike, make
          sure to go with a group or inform someone about your plans. Carry
          plenty of water, wear appropriate footwear, and protect yourself from
          the sun.
        </p>
      </div>

      <Reveal>
        <section className="mb-12 h-auto mt-20">
          <Carousel
            className="w-full "
            opts={{
              align: "start",
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }, (_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full h-[500px] lg:basis-2/3 "
                >
                  <div className="col-span-2 relative">
                    <img
                      src="https://images.unsplash.com/photo-1583417319070-4a69db38a482"
                      alt="Cảnh hoàng hôn tại Vịnh Hạ Long"
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-10 right-0 flex gap-5">
              <CarouselPrevious
                className={
                  "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:-z-10 shadow-xl"
                }
                classNameArrow={"group-hover:text-white transition-colors"}
              />
              <CarouselNext
                className={
                  "group w-14 h-14 rounded-xl static  overflow-hidden before:absolute before:inset-0 before:bg-blue-500 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10 shadow-xl"
                }
                classNameArrow={"group-hover:text-white transition-colors"}
              />
            </div>
          </Carousel>
        </section>
      </Reveal>

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          Staying safe in the Viet Nam desert
        </h2>
        <p className="mb-4 md:text-lg">
          Desert safaris are a popular activity in Viet Nam, but the desert
          environment can be harsh. Always go with licensed tour operators who
          have experienced guides. Wear light, loose-fitting clothes and a hat
          to protect yourself from the sun. Carry plenty of water to stay
          hydrated.
        </p>
        <p className="mb-4 md:text-lg">
          If you're driving in the desert on your own, make sure you have a 4x4
          vehicle and are experienced in desert driving. Never go alone, carry
          extra water and food, and let someone know your plans. Mobile phone
          coverage can be limited in remote desert areas.
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
      <div className="space-y-2">
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Is Viet Nam a safe holiday destination?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Is driving prohibited in Viet Nam?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Can I drink alcohol in Viet Nam?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Is it safe to eat street food in Viet Nam?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Are there sharks in Viet Nam water?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
        <div className="border p-4 flex justify-between items-center cursor-pointer">
          <div className="font-medium text-xl">
            Can I take photos in Viet Nam?
          </div>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

const PlanAhead = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-6">More about</h2>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 3 }, (_, index) => (
            <CardPass backgroundColor="#006699" key={index} />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

const CardPass = ({ backgroundColor = "#b5256d" }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src="https://hoiana.com/wp-content/uploads/2024/09/what-to-do-on-vietnam-national-day.jpg"
          alt="Viet Nam Fun Attractions Pass"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`bg-[${backgroundColor}] text-white p-4`}>
        <h3 className="font-bold mb-1 text-lg">
          Viet Nam Fun Attractions Pass
        </h3>
        <p className="text-base mb-2">3 attractions</p>
        <p className="text-base mb-4">
          Save up to 30% on the top fun things to do in Viet Nam. Choose 3
          attractions from your shortlist.
        </p>
        <div className="text-base mb-4">From AED 299</div>
      </div>
    </div>
  );
};

export default function Safety() {
  return (
    <div className="flex  flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <IntroSection />
          <EmergencyNumbersSection />
          <SafetyInfoSection />
          <SafetyTopicsSection />
          <FAQSection />
          <PlanAhead />
        </div>
      </main>
    </div>
  );
}
