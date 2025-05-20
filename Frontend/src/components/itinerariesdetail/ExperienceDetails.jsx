import { ArrowRight, Check, X } from 'lucide-react';
import experience from '@images/experiences.png';
import imgDemo from "@images/about-vietnam.png";

export default function ExperienceDetails() {
  return (
    <div className="max-w-6xl mx-auto font-sans mt-20">
      {/* Banner section */}
      <div className="flex flex-row gap-6 mb-16">
        {/* Left banner */}
        <div className="w-1/2 bg-amber-50 rounded-3xl p-8 flex items-center">
          <div className="mr-6">
            <img 
              src={experience} 
              alt="Vietnam map outline" 
              className="w-24 h-24"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2 font-[Visit_Qatar]">Vietnam</h2>
            <a href="#" className="flex items-center text-lg text-slate-800 font-medium font-[Visit_Qatar]">
              Discover more experiences <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
        
        {/* Right banner */}
        <div className="w-1/2 rounded-3xl overflow-hidden relative font-[Visit_Qatar]">
          <img 
            src={imgDemo}
            alt="Vietnam landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">First time in Vietnam?</h2>
            <a href="#" className="text-white underline text-xl">Let's find out quickly</a>
          </div>
        </div>
      </div>
      
      {/* Details section */}
      <div className="flex flex-row gap-16 font-[Visit_Qatar]">
        {/* What's included */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">What's included</h2>
          
          <div className="mb-8">
            <div className="flex mb-2">
              <div className="mt-1 mr-4">
                <Check className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Professional naturalist guide</h3>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex mb-2">
              <div className="mt-1 mr-4">
                <Check className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Lunch</h3>
            </div>
            <p className="pl-10 text-slate-700">
              A picnic lunch, sourced locally with seasonal ingredients and packaged with recyclable and compostable materials.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex mb-2">
              <div className="mt-1 mr-4">
                <Check className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Snacks</h3>
            </div>
            <p className="pl-10 text-slate-700">
              A variety of snacks, sourced locally and organic when possible.
            </p>
          </div>
          
          <a href="#" className="text-blue-600 font-medium">See more</a>
        </div>
        
        {/* What's not included */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">What's not included</h2>
          
          <div className="mb-8">
            <div className="flex mb-2">
              <div className="mt-1 mr-4">
                <X className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-slate-700">
                  National Park entrance fees. Cost is $20 per person, charged at the gate, subject to change.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex mb-2">
              <div className="mt-1 mr-4">
                <X className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-slate-700">Gratuities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}