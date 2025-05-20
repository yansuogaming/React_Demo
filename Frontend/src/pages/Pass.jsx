import {
  ChevronRight,
  Heart,
  Search,
  Star,
  User,
  ChevronLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";
import Reveal from "@components/animation/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useTranslation } from "react-i18next";
import Breadcrumb from "@components/Breadcrumb";
import { FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";

// Components
const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);
  const handlePlayVideo = () => {
    setIsPlaying(true);
  }

  return (
    <Reveal>
        <div className="h-[250px] md:h-[400px] lg:h-[80vh] relative lg:rounded-br-[100px] overflow-hidden mx-0  xl:-mx-10 my-5">
          {isPlaying ? (
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full border-0 z-10"
              src="https://www.youtube.com/embed/SrqPSxkCNFI?si=CJL69ZgrJupBwrX6&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ) : (
            <>
              <img
                src="https://a.tcnn.vn//Images/images/images5452377_DJI_0724.jpg"
                alt="Vietnam"
                className="w-full h-full object-cover"
              ></img>
              <button
                onClick={handlePlayVideo}
                className="absolute top-8 overflow-hidden group right-8 w-15 h-15 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition z-20 before:absolute before:inset-0 before:bg-[#035E88] before:origin-right before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:-z-10"
              >
                <FaPlay className="text-sm w-5 h-5 group-hover:text-white" />
              </button>
            </>
          )}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </Reveal>
  );
};

const JumpToSection = () => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Jump to section</h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-blue-600" />
          <Link
            href="#what"
            className="text-blue-600 hover:underline text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('what').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            What is a Viet Nam pass?
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-blue-600" />
          <Link
            href="#how"
            className="text-blue-600 hover:underline text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            How to use a Viet Nam city pass
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-blue-600" />
          <Link
            href="#option1"
            className="text-blue-600 hover:underline text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('option1').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Option 1: Viet Nam Pass
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-blue-600" />
          <Link
            href="#option2"
            className="text-blue-600 hover:underline text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('option2').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Option 2: Go Viet Nam Pass
          </Link>
        </li>
      </ul>
    </div>
  );
};

const VietNamPassInfo = () => {
  return (
    <section id="what" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">What is a Viet Nam pass?</h2>
      <p className="mb-6 text-gray-700 text-lg">
        A Viet Nam pass, also known as a Viet Nam city pass or an attractions
        pass, is a great way of seeing Viet Nam's sights for less.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
        <p className="text-gray-600 text-lg mb-4">
          Instead of buying tickets for each individual attraction, you can
          buy a pass which gives access to lots of different destinations,
          saving the cost of admission – sometimes by up to 50%.
        </p>
        <p className="text-gray-600 text-lg">
          You can use these attractions interchangeably:
        </p>

        <ul className="mt-4 space-y-4">
        <li className="flex flex-col items-center md:flex-row gap-2">
        <div className="bg-blue-600 w-auto text-white px-2 py-1 rounded text-xs font-semibold">
              Viet Nam Pass
            </div>
            <div className="text-gray-700">
              The Viet Nam Pass offers access to 48 attractions and experiences
              across Viet Nam.
            </div>
          </li>
          <li className="flex flex-col items-center md:flex-row gap-2">
            <div className="bg-blue-600 w-auto text-white px-2 py-1 rounded text-xs font-semibold">
              Go Viet Nam Pass
            </div>
            <div className="text-gray-700">
              The Go Viet Nam Pass gives you access to over 45 attractions
              across the city.
            </div>
          </li>
        </ul>

        <div className="mt-4 text-gray-600 text-lg">
          <p>
            There are two types of attractions pass available in the city: a
            fixed number of attractions, where you choose your top 3, 4 or 5
            ahead of time. These are usually the cheapest option and best if
            you have a short amount of time in the city.
          </p>
          <p className="mt-2">
            The Viet Nam Pass is available in all-inclusive pass – this lets
            you visit as many attractions as you want within a certain
            number of days. This can be better value if you're planning a
            longer stay and want to see lots of sights. Unlimited passes
            tend to cost more upfront but can save you more in the long run.
          </p>
        </div>
      </div>
    </section>
  );
};

const SightCarousel = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        See all the sights with a Viet Nam pass
      </h2>

      <Reveal>
        <Carousel className="w-full">
          <CarouselContent className="-ml-[20px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-[20px] basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <CardPass2 backgroundColor={"#055e88"} />
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
    </section>
  );
};

const HowToUse = () => {
  return (
    <section id="how" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">
        How to use a Viet Nam city pass
      </h2>
      <p className="mb-6 text-gray-700 text-lg">
        Using your Viet Nam attractions pass is as simple as planning a holiday
        app.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
        <ul className="space-y-4">
          <li className="flex gap-2">
            <div className="text-gray-700 text-lg font-semibold">1.</div>
            <div className="text-gray-700 text-lg">
              Purchase a pass for the duration and number you prefer via
              mobile app or your smartphone.
            </div>
          </li>
          <li className="flex gap-2">
            <div className="text-gray-700 text-lg font-semibold">2.</div>
            <div className="text-gray-700 text-lg">
              Download the mobile app – it's available on the App Store for
              iOS and Google Play for Android. You'll need to log in with
              the email address you used.
            </div>
          </li>
          <li className="flex gap-2">
            <div className="text-gray-700 text-lg font-semibold">3.</div>
            <div className="text-gray-700 text-lg">
              Plan your itinerary – browse through the attractions available
              on the app. You can filter by category, location, and more.
            </div>
          </li>
          <li className="flex gap-2">
            <div className="text-gray-700 text-lg font-semibold">4.</div>
            <div className="text-gray-700 text-lg">
              Visit attractions with your mobile pass – because it's valid
              at any time of the day – but always check opening hours of
              venues. Attractions before scanning your pass.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const VietNamPassOption = () => {
  return (
    <>
      <section id="option1" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Option 1: Viet Nam Pass</h2>
        <p className="mb-6 text-gray-700 text-xl">
          Experience 48 top attractions in Viet Nam for less with the Viet Nam Pass.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
          <p className="text-gray-600 text-lg mb-4">
            With Viet Nam Pass, 48 must-see attractions are available to choose
            from. You can create your own tailor-made Viet Nam experience,
            choosing from a wide variety of things to see and do. Just pick
            your ideal combination and visit attractions – there's no need for
            cash or paperwork of tickets. Simply present your pass and you're
            in.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            The Viet Nam Pass is available in two formats – a mobile version for
            smartphones and the Viet Nam Pass Explorer, which includes a handy
            guidebook. These city passes are valid for 30 days from first use.
          </p>
          <p className="text-gray-600 text-lg">Choose your Viet Nam Pass:</p>
          <div className="flex gap-2 mt-2">
            <Link href="#" className="text-blue-600 hover:underline text-lg">
              Choose the Pass
            </Link>
            <span>or</span>
            <Link onClick={(e)=>{
              e.preventDefault();
              document.getElementById('faq').scrollIntoView({ behavior:'smooth' });
            }} href="#faq" className="text-blue-600 hover:underline text-lg">
              Read the FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Choose your Viet Nam Pass</h2>
        <p className="mb-4 text-gray-700 text-lg">
          Select your pass from these incredible options:
        </p>

        <Reveal>
          <Carousel className="w-full">
            <CarouselContent className="-ml-[20px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-[20px] basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CardPass />
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
      </section>
    </>
  );
};

const GoVietNamPassOption = () => {
  return (
    <>
      <section id="option2" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Option 2: Go Viet Nam Pass</h2>
        <p className="mb-6 text-gray-700 text-lg">
          Enjoy even more flexible savings with the Go Viet Nam Pass.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
          <p className="text-gray-600 text-lg mb-4">
            With access to more than 45 of the emirate's most iconic
            destinations and activities, you have more attractions to enjoy at
            a perfectly flexible experience that's perfect on the wallet. The
            perfect way to see Viet Nam on your terms.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Choose your Go Viet Nam Pass:
          </p>
          <div className="flex gap-2">
            <Link href="#" className="text-blue-600 hover:underline text-lg">
              Choose The Pass
            </Link>
            <span>or</span>
            <Link href="#" className="text-blue-600 hover:underline text-lg">
              Read the FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Choose your Go Viet Nam Pass</h2>
        <p className="mb-4 text-gray-700 text-lg">
          Select which works for you:
        </p>

        <Reveal>
          <Carousel className="w-full">
            <CarouselContent className="-ml-[20px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-[20px] basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CardPass backgroundColor={"#055e88"} />
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
      </section>
    </>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="mb-12">
    <h2 className="text-3xl font-bold mb-6">
      Common Viet Nam pass questions
    </h2>
    <p className="mb-6 text-gray-700 text-lg">
      Find the answers to some of the most frequent questions about Viet Nam
      attraction passes here.
    </p>

    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left text-lg">
          Is it worth it to buy a Viet Nam pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Yes, Viet Nam passes can offer significant savings if you plan to
            visit multiple attractions. They typically save between 30-50%
            compared to buying individual tickets.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left text-lg">
          How much is a pass in Viet Nam?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Viet Nam passes range from AED 299 for a basic 3-attraction pass
            to AED 629+ for all-inclusive multi-day passes. The price
            depends on the number of attractions and days included.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left text-lg">
          Is a Viet Nam unlimited pass worth it?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            An unlimited pass is worth it if you plan to visit many
            attractions in a short time. To maximize value, you should
            visit at least 3-4 attractions per day during the validity
            period.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left text-lg">
          How can I save on Viet Nam attractions?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Using a Viet Nam pass is one of the best ways to save on
            attractions. Other options include booking in advance online,
            visiting during off-peak seasons, and looking for combo
            tickets.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left text-lg">
          What is included in the Viet Nam Explorer Pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            The Viet Nam Explorer Pass includes access to a choice of 3, 4,
            5, or 7 attractions from a list of over 45 options including
            Burj Khalifa, desert safaris, theme parks, and city tours.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left text-lg">
          How to use the Viet Nam Explorer Pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Download the Go City app after purchase, log in with your
            credentials, and show your digital pass at each attraction.
            The pass is activated at your first visit and remains valid
            for 60 days.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger className="text-left text-lg">
          What are the benefits of the Viet Nam pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Benefits include significant cost savings, skip-the-line
            access at some attractions, convenience of a digital pass, and
            flexibility to choose from multiple attractions.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger className="text-left text-lg">
          What is a Viet Nam city pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            A Viet Nam city pass is a bundled ticket that gives you access to
            multiple attractions and experiences in Viet Nam at a discounted
            rate compared to buying individual tickets.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <AccordionTrigger className="text-left text-lg">
          How many days do I need a Viet Nam pass for?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            This depends on your itinerary. For a short visit (3-4 days),
            a 3-attraction pass might be sufficient. For longer stays (5-7
            days), consider a 5-7 attraction pass or an all-inclusive
            pass.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-10">
        <AccordionTrigger className="text-left text-lg">
          What Viet Nam attractions are included in a Viet Nam pass?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700 text-lg">
            Popular attractions included in most Viet Nam passes are Burj
            Khalifa, Viet Nam Aquarium, Desert Safaris, Viet Nam Frame, Hop-On
            Hop-Off Bus Tours, IMG Worlds of Adventure, and various water
            parks.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
  );
};

export default function VietNamPass() {
  const { t } = useTranslation();
  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("plan_your_trip"), href: "/" },
    { label: t("vietnam_attractions_passes"), href: "/" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <Breadcrumb
          className="p-[16px_40px_28px_0] text-[14px]"
          items={breadcrumdItems}
        />
        {/* Title */}
        <h1 className="text-xl lg:text-5xl font-bold mb-6">
          Viet Nam sightseeing & attractions passes
        </h1>
        <HeroSection />
        <JumpToSection />
        <VietNamPassInfo />
        <SightCarousel />
        <HowToUse />
        <VietNamPassOption />
        <GoVietNamPassOption />
        <FAQSection />

      </main>
    </div>
  );
}

const CardPass = ({ backgroundColor = "#b5256d" }) => {
  return (
    <div className="border rounded-lg overflow-hidden ">
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
        <h3 className="font-bold mb-1 text-lg">Viet Nam Fun Attractions Pass</h3>
        <p className="text-base mb-2">3 attractions</p>
        <p className="text-base mb-4">
          Save up to 30% on the top fun things to do in Viet Nam. Choose 3
          attractions from your shortlist.
        </p>
        <div className="text-base mb-4">From AED 299</div>
        <Button
          className={`w-full bg-[${backgroundColor}] text-[#ffffff] border text-lg`}
        >
          Buy now from AED299
        </Button>
      </div>
    </div>
  );
};

const CardPass2 = () => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src="https://www.travelvietnam.com/images/Blog/vietnam-tourism_aaf97.jpg"
          alt="Adventure Parks"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold mb-1 text-xl">Adventure Parks</h3>
        <p className=" text-gray-600 text-lg mb-2">
          Thrilling fun for adventure lovers of all ages
        </p>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-base text-gray-500">(199 reviews)</span>
        </div>
      </div>
    </div>
  );
};
