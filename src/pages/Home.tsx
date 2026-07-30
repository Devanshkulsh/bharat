import AnimatedPageWrapper from '@/components/animations/AnimatedPageWrapper';
import HeroSection from '@/components/ui/HeroSection';
// import ProgramCard from '@/components/ui/ProgramCard';
import { site } from '@/data/siteContent';
import Facilities from '@/components/home/Facilities';
import CourseBAMS from '@/components/home/CourseBAMS';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import CampusGallery from '@/components/home/CampusGallery';
import HospitalHome from '@/components/home/HospitalHome';
import ContactUs from '@/components/home/ContactUs';
import AboutHome from '@/components/home/AboutHome';

export default function Home() {
  return (
      <AnimatedPageWrapper>
      <HeroSection />
      <AboutHome site={site} />
      <Facilities />
      <CourseBAMS />
      <VideoTestimonials />
      <CampusGallery />
      <HospitalHome />
      <ContactUs />
    </AnimatedPageWrapper>
  );
}
